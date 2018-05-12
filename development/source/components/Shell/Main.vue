<!--
@Author: Morgan Andree Ray
@Date:   09-05-2018
@Email:  info@andreeray.se
@Filename: Main.vue
@Last modified by:   Morgan Andree Ray
@Last modified time: 12-05-2018
@License: MIT
-->
<template lang="html">
    <div id="main">

        <DevelToast :response="response"/>
        <DevelModal modal="login">
            <div slot="header"><h2>SIGN IN</h2></div>
            <div slot="bread">
                <input v-model="user.username" placeholder="Username">
                <input v-model="user.password" type="password" placeholder="Password">
            </div>
            <div slot="footer">
                <div class="form-control">
                    <button  @click="login( 'login' )">SIGN IN</button>
                </div>
            </div>
        </DevelModal :open="open">

        <div id="wrapper">
            <div class="box">
                <div class="catselector">
                    <nav>
                        <button @click="$router.push({ name: 'trade' })">TRADE</button>
                        <button @click="$router.push({ name: 'verse' })">VERSE</button>
                        <button v-if="!token" class="loginBtn" @click="openModal('login')">LOGIN</button>
                        <button v-else class="loginBtn" @click="$store.dispatch('logout')">LOGOUT</button>
                    </nav>
                </div>
                <div class="background">
                    <router-view />
                </div>
            </div class="box">

        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'Main',
    data() {
        return {
            user: {
                username: '',
                password: ''
            },
            sidebar: false
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
                        this.$store.dispatch('login', [res.body.user, res.body.token ])
                        this.$develLS.set('store', [{
                            username: res.body.user,
                            token: res.body.token
                        }])
                        this.$http.get('users/', { headers: { 'Authorization': this.token, 'Accept': 'application/json' }}).then(res => {
                            const users = res.data.map(user => {
                                return {
                                    name: user.name,
                                    username: user.username,
                                    email: user.email,
                                    image_src: user.image_src
                                }
                            })
                            this.$store.dispatch( 'setUsers' , users)
                        })
                        this.$bus.$emit( 'setResponse', res.body.user + ' loged in')
                        this.$bus.$emit('toggleModal', modal )
                        this.$router.push({ name : 'console' })
                    }
                    else  this.$bus.$emit( 'setResponse', res.body.message)
                    setTimeout( () => { this.$bus.$emit('setResponse', '') }, 4000)
                })
            }
        },
        logout( ) {
            this.$store.dispatch('login', ['', '' ])
            this.$develLS.set('store', [{}])
            this.$router.push({ name: 'home' })
            this.$bus.$emit( 'setResponse', 'loged out')
            setTimeout( () => { this.$bus.$emit('setResponse', '') }, 4000)
        }
    }
}
</script>

<style lang="css">
</style>
