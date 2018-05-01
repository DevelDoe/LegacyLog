<!--
@Author: Andree Ray <andreeray>
@Date:   2018-01-18T21:23:04+01:00
@Email:  andreeray@live.com
@Filename: App.vue
@Last modified by:   DevelDoe
@Last modified time: 01-05-2018
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
                    <button @click="login( 'login' )">SIGN IN</button>
                </div>
            </div>
        </DevelModal>

        <div v-if="signed" id="sidebar">
            <div id="org">
                LEGACY FLEET
            </div>
            <div id="user">
                <img src="https://static.wixstatic.com/media/203124_87d45fc1c2064ad69c9008c87a26f2b0~mv2.png/v1/fill/w_421,h_421,al_c,usm_0.66_1.00_0.01/203124_87d45fc1c2064ad69c9008c87a26f2b0~mv2.png" alt="">
            </div>
            <nav id="orgnav">
                <ul>
                    <li><router-link :to="{ name: 'users' }">Users</router-link></li>
                </ul>
            </nav>
        </div>

        <div id="main">
            <div id="topbar" class="box">
                <input type="text" placeholder="Search">
                <button v-if="!signed" @click="openModal( 'login' )">SIGN IN</button>
                <button v-else @click="logout">SIGN OUT</button>
            </div>
            <div id="content">
                <nav id="mainnav">
                    <ul>
                        <li><router-link :to="{ name: 'home' }">HOME</router-link></li>
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
                    :bus="bus"
                    :users="users" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        'resources',
        'locations',
        'location_types',
        'missions',
        'response',
        'organisations',
        'characters',
        'meta_data',
        'bus',
        'users',
        'signed'
    ],
    data() {
        return {
            modal_header: 'Modal Header',
            modal_bread: 'Modal Bread',
            modal_footer: 'Modal footer',
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
                    if(res.body.user) {
                        this.$bus.$emit('sign', true)
                        this.$bus.$emit( 'setResponse', res.body.user + ' loged in')
                        this.$bus.$emit('toggleModal', modal )
                    }
                    else this.$bus.$emit( 'setResponse', res.body.message)
                    setTimeout( () => { this.$bus.$emit('setResponse', '') }, 4000)
                })
            }

        },
        logout( ) {
            this.$bus.$emit('sign', false)
            this.$bus.$emit( 'setResponse', 'loged out')
            setTimeout( () => { this.$bus.$emit('setResponse', '') }, 4000)
        }
    }
}
</script>
