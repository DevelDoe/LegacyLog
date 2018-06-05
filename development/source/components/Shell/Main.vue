<!--
@Author: Morgan Andree Ray
@Date:   09-05-2018
@Email:  info@andreeray.se
@Filename: Main.vue
@Last modified by:   Morgan Andree Ray
@Last modified time: 02-06-2018
@License: MIT
-->
<template lang="html">
    <div id="main">



        <DevelToast :response="response"/>
        <DevelModal modal="login">
            <div slot="header"><h2>SIGN IN</h2></div>
            <div slot="bread">
                <form id="login-form">
                    <input v-model="user.username" placeholder="Username">
                    <input v-model="user.password" type="password" placeholder="Password">
                </form>
            </div>
            <div slot="footer">
                <div class="form-control">
                    <button form="login-form"  @click="login( 'login' )">SIGN IN</button>
                </div>
            </div>
        </DevelModal :open="open">

        <div id="wrapper">
            <div class="box">
                <div class="catselector">
                    <nav>
                        <button @click="$router.push({ name: 'trade' })">TRADE</button>
                        <button @click="$router.push({ name: 'verse' })">VERSE</button>
                        <button @click="$router.push({ name: 'ships' })">SHIPS</button>
                        <button v-if="!token" class="loginBtn" @click="openModal('login')">LOGIN</button>
                        <button v-else class="loginBtn" @click="$store.dispatch('logout')">LOGOUT</button>
                    </nav>
                </div>
                <div class="background">
                    <router-view />

                </div>
            </div>

            <i class="material-icons" @click="showNotepad = !showNotepad; "> edit </i>
            <i class="material-icons menu" @click="showTools = !showTools; "> menu </i>
             <transition name="slide-fade">
            <textarea class="notepad" v-if="showNotepad" v-model="note_data" placeholder="notepad"> </textarea>
            </transition>
            <transition name="tray">
                <div id="tool-menu" v-if="showTools">
                    <LoadoutTool />
                    <ShipTool />
                    <AvionicTool />
                    <SystemTool />
                    <PropulsionTool />
                    <ThrusterTool />
                    <WeaponTool />
                    <AmmoTool />
                    <MissileRackTool />
                </div>
            </transition>
        </div>



    </div>
</template>

<script>
import ShipTool           from './ShipTool.vue'
import AvionicTool        from './AvionicTool.vue'
import LoadoutTool        from './LoadoutTool.vue'
import SystemTool         from './SystemTool.vue'
import PropulsionTool     from './PropulsionTool.vue'
import ThrusterTool       from './ThrusterTool.vue'
import WeaponTool         from './WeaponTool.vue'
import MissileRackTool    from './MissileRackTool.vue'
import AmmoTool           from './AmmoTool.vue'
import { mapGetters } from 'vuex'
export default {
    name: 'Main',
    data() {
        return {
            user: {
                username: '',
                password: ''
            },
            sidebar: false,
            showNotepad: false,
            showTools: false
        }
    },
    computed: {
        ...mapGetters([ 'meta_data' , 'token' ]),
    },
    methods: {
        openModal( modal ) {
            this.$bus.$emit('toggleModal', modal )
        },
        login( modal ) {
            const valid = this.validate( this.meta_data.validation_rules.login, this.user, 'users')
            if ( valid === 'true' ) {

                this.$http.post('login/', this.user).then( res => {
                    if(res.body.token) {
                        this.$bus.$emit( 'setResponse', res.body.user + ' loged in')
                        this.$store.dispatch('login', [res.body.user._id, res.body.token ])
                        this.$develLS.set('store', [{
                            username: res.body.user.username,
                            token: res.body.token,
                            image: res.body.user.image_src
                        }])
                        let token = res.body.token || this.token
                        this.$http.get('users/', { headers: { 'Authorization': token, 'Accept': 'application/json' }}).then(res => {
                            this.$store.dispatch( 'setUsers' , res.data)

                        })
                        this.$bus.$emit('toggleModal', modal )
                        document.location.reload(true)
                        this.$router.push({ name : 'console' })
                    }
                    else  this.$store.dispatch('setResponse', res.body.err)
                    setTimeout( () => { this.$store.dispatch('setResponse', '' ) }, 4000 )
                })
            }
        },
        logout( ) {
            this.$store.dispatch('login', ['', '' ])
            this.$socket.emit('removeUser')
            this.$develLS.set('store', [{}])
            this.$router.push({ name: 'home' })
            this.$store.dispatch('setResponse', 'loged out')
            setTimeout( () => { this.$store.dispatch('setResponse', '' ) }, 4000 )
        }
    },
    mounted() {
        this.note_data = this.$develLS.get('notepad')[0].notes
    },
    updated() {
        this.$develLS.set('notepad', [{
            notes: this.note_data
        }])
    },
    components: {
        ShipTool,
        AvionicTool,
        LoadoutTool,
        PropulsionTool,
        SystemTool,
        ThrusterTool,
        WeaponTool,
        AmmoTool,
        MissileRackTool,
    }
}
</script>

<style lang="css">
</style>
