<!--
@Author: Morgan Andree Ray
@Date:   28-04-2018
@Email:  info@andreeray.se
@Filename: Users.vue
@Last modified by:   Morgan Andree Ray
@Last modified time: 12-05-2018
@License: MIT
-->


<template lang="html">
    <div class='org'>
        <DevelModal modal="addUser">
            <div slot="header"><h2>Register new user</h2></div>
            <div slot="bread">
                <input v-model="user.username" placeholder="Username">
                <input v-model="user.password" type="password" placeholder="Password">
            </div>
            <div slot="footer">
                <div class="form-control">
                    <button @click="save('addUser')">save</button>
                </div>
            </div>
        </DevelModal>

        <header>
            <h2>Users</h2>
        </header>
        <section class="main">
            <ul>
                <li v-for="user in users">
                    {{ user.username }}
                </li>
            </ul>
        </section>
        <footer>
            <div class="form-control">
                <button @click="openModal('addUser')">add new user</button>
            </div>
        </footer>

    </div>
</template>

<script>
export default {
    name: 'users',
    props: [ 'meta_data' ],
    data() {
        return {
            user: {
                name: '',
                username: '',
                password: '',
                email: '',
                image_src: ''
            }
        }
    },
    computed: {
        users() {
            return this.$store.getters.users || null
        }
    },
    methods: {
        openModal( modal ) {
            this.$bus.$emit( 'toggleModal', modal )
        },
        save( modal ) {
            const valid = this.mixinsValidate( this.meta_data.validation_rules.users, this.user, 'users')
            if( valid === 'true' ) {
                this.apiSave( 'users', this.user, modal )
                this.user.name     = ''
                this.user.password = ''
            }
        }
    }
}
</script>

<style lang="css">
</style>
