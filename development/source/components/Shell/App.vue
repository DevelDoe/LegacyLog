<!--
@Author: Andree Ray <andreeray>
@Date:   2018-01-18T21:23:04+01:00
@Email:  andreeray@live.com
@Filename: App.vue
@Last modified by:   Morgan Andree Ray
@Last modified time: 09-05-2018
-->
<template>
    <div id="app" class="box">
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
        </DevelModal>

        <Sidebar />

        <div id="main">
            <div id="topbar" class="box">
                <form >
                    <input type="text" name="search" placeholder="Search"/>
                </form>

                <button v-if="!token" @click="openModal( 'login' )">SIGN IN</button>
                <button v-else @click="logout">SIGN OUT</button>
            </div>
            <div id="content">
                <nav id="mainnav">
                    <ul>
                        <li class="link"><router-link :to="{ name: 'home' }">HOME</router-link></li>
                        <li><router-link :to="{ name: 'resources' }">RESOURCES</router-link></li>
                        <li><router-link :to="{ name: 'locations' }">LOCATIONS</router-link></li>
                        <li><router-link :to="{ name: 'missions' }">MISSIONS</router-link></li>
                        <li><router-link :to="{ name: 'characters' }">CHARACTERS</router-link></li>
                        <li><router-link :to="{ name: 'organisations' }">ORGANISATIONS</router-link></li>
                    </ul>
                </nav>
                <router-view
                    :resources="resources"
                    :locations="locations"
                    :location_types="location_types"
                    :missions="missions"
                    :characters="characters"
                    :organisations="organisations"
                    :meta_data="meta_data"
                    :bus="bus" />
            </div>
        </div>
    </div>
</template>

<script>
import Sidebar from './Sidebar.vue'

export default {
    name: 'app',
    props: [
        'resources',
        'locations',
        'location_types',
        'missions',
        'response',
        'organisations',
        'characters',
        'meta_data',
        'bus'
    ],
    data() {
        return {
            user: {
                username: '',
                password: ''
            },
        }
    },
    methods: {
        openModal( modal ) {
            this.$bus.$emit('toggleModal', modal )
        },
        login( modal ) {
            const valid = this.mixinsValidate( this.meta_data.validation_rules.login, this.user, 'users')
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
                        this.$router.push({ name : 'dashboard' })
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
    },
    components: {
        Sidebar
    }
}
</script>
