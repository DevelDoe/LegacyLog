<!--
@Author: Morgan Andree Ray
@Date:   14-05-2018
@Email:  info@andreeray.se
@Filename: UserControls.vue
@Last modified by:   Morgan Andree Ray
@Last modified time: 14-05-2018
@License: MIT
-->
<template lang="html">
    <div class="users-controls" v-if="user._id === user_id">
        <DevelModal modal="updateUser">
            <div slot="header">
                <h2>Update User</h2>
            </div>
            <div slot="bread">
                <form id="modal-form">
                    <input v-model="new_user.name" placeholder="User Name">
                    <input v-model="new_user.username" placeholder="Handle">
                    <input v-model="new_user.password" placeholder="Password">
                    <input v-model="new_user.image_src" placeholder="Image link">
                    <div class="">
                        <select v-model="new_user.role">
                            <option value="" selected>Roles</option>
                            <option v-for="role in meta_data.roles" :value="role">{{ role }}</option>
                        </select>
                    </div>
                </form>
            </div>
            <div slot="footer">
                <div class="form-control">
                    <button @click="update('updateMission')">save</button>
                </div>
            </div>
        </DevelModal>
        <button @click="openModal('updateUser')">update</button>
        <button @click="del()">delete</button>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    Name: 'UsersControls',
    props: [ 'users' , 'user' , 'user_id' , 'index' ],
    data() {
        return {
            new_user: {
                name        : this.users[this.index].name,
                username    : this.users[this.index].username,
                password    : '',
                image_src   : this.users[this.index].image_src,
                role        : this.users[this.index].role,
                certs       : this.users[this.index].certs
            }
        }
    },
    computed: {
        ...mapGetters([ 'meta_data' ])
    },
    methods: {
        openModal( modal ) {
            this.$bus.$emit('toggleModal', modal )
        },
        update( modal ) {
            if(this.new_user.password === '') this.new_user.password = this.users[this.index].password
            const valid = this.validate( this.meta_data.validation_rules.user, this.new_user, 'users', this.index )
            if( valid !== 'true') this.new_user.password = ''
            if( valid === 'true' ) {
                this.$store.dispatch('removeUser', this.index)
                this.apiUpdate( 'users', this.new_user, this.user_id, modal )
            }
        },
        del() {
            this.apiDelete( 'users', this.user_id)
            this.$store.dispatch('removeUser', this.index )
        }
    }
}
</script>
