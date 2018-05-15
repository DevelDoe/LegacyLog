<!--
@Author: Morgan Andree Ray
@Date:   13-05-2018
@Email:  info@andreeray.se
@Filename: UserTools.vue
@Last modified by:   Morgan Andree Ray
@Last modified time: 15-05-2018
@License: MIT
-->
<template lang="html">
    <div class="user-tools">
        <DevelModal modal="addUser">
            <div slot="header"><h2>Add User</h2></div>
            <div slot="bread">
                <form id="modal-form-user-tools">
                    <input v-model="inputs.name" placeholder="Name" />
                    <input v-model="inputs.username" placeholder="Username" />
                    <input v-model="inputs.password" placeholder="Password" />
                    <input v-model="inputs.email" placeholder="Email" />
                    <input v-model="inputs.image_src" Placeholder="Image" />
                    <div class="">
                        <label for="">Role: </label>
                        <select v-model="inputs.role">
                            <option selected disabled>User Role</option>
                            <option v-for="( role , i ) in meta_data.roles" :key=" 'role' + i " :value="role">{{ role }}</option>
                        </select>
                    </div>

                </form>
            </div>
            <div slot="footer">
                <div class="form-control">
                    <button @click="save('addUser')">save</button>
                </div>
            </div>
        </DevelModal>
        <button @click="openModal('addUser')">add user</button>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'UserTools',
    data() {
        return {
            inputs: {
                name: '',
                username: '',
                password: '',
                email: '',
                image_src: '',
                role: ''
            }
        }
    },
    computed: {
        ...mapGetters([ 'meta_data' , 'users' ]),
        sortRoleList() {
            return this.mixKeySrt( this.meta_data.roles, 'name' ) || null
        },
    },
    methods: {
        openModal( modal ) {
            this.$bus.$emit('toggleModal', modal )
        },
        save ( modal ) {
            const user = {
                name: this.inputs.name ,
                username: this.inputs.username,
                password: this.inputs.password,
                email: this.inputs.email,
                image_src: this.inputs.image_src,
                role: this.inputs.role,
            }
            if(user.image_src === "") user.image_src = "https://art.placefull.com/Content/Properties/shared/images/no-profile-image.png"
            const valid = this.validate( this.meta_data.validation_rules.user, user, 'users')
            if ( valid === 'true' ) {
                this.apiSave( 'users', user, 'addUser', modal  )
                this.inputs.name = ''
                this.inputs.username = ''
                this.inputs.password = ''
                this.inputs.email = ''
                this.inputs.image_src = ''
                this.inputs.role = ''
            }
        }
    }
}
</script>
