<!--
@Author: Andree Ray <andreeray>
@Date:   2018-01-18T21:23:04+01:00
@Email:  andreeray@live.com
@Filename: App.vue
@Last modified by:   DevelDoe
@Last modified time: 01-05-2018
-->
<template>
    <div id="app">
        <DevelModal modal="login">
            <div slot="header"><h2>Login</h2></div>
            <div slot="bread">
                <input v-model="user.username" placeholder="Username">
                <input v-model="user.password" type="password" placeholder="Password">
            </div>
            <div slot="footer">
                <div class="form-control">
                    <button @click="login( 'login' )">login</button>
                </div>
            </div>
        </DevelModal>

        <header> <h1>Captains Log</h1> </header>
        <nav>
          <ul class="group">
            
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
            :users="users"
            />
        <DevelToast :response="response"/>
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
        'develLS'
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
                        this.$develLS.set('localStorage',[ { user: res.body.user } ])
                        this.$bus.$emit( 'setResponse', res.body.user + ' loged in')
                        this.$bus.$emit('toggleModal', modal )
                    }
                    else this.$bus.$emit( 'setResponse', res.body.message)
                    setTimeout( () => { this.$bus.$emit('setResponse', '') }, 4000)
                })
            }

        },
        logout( ) {
            this.$develLS.set('localStorage', [''] )
            this.$bus.$emit( 'setResponse', 'loged out')
            setTimeout( () => { this.$bus.$emit('setResponse', '') }, 4000)
        }
    }
    mounted() {
        console.log('mounted')
    }
}
</script>
