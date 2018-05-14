<!--
@Author: Morgan Andree Ray
@Date:   12-05-2018
@Email:  info@andreeray.se
@Filename: Users.vue
@Last modified by:   Morgan Andree Ray
@Last modified time: 13-05-2018
@License: MIT
-->


<template lang="html">
    <div class="users">
        <ul>
            <li class="user" v-for="( user , i ) in filter">
                <span @click="$bus.$emit( 'setId' , [user._id ])" >{{ user.username }} - Member</span>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'Users',
    computed: {
        ...mapGetters([ 'users' , 'user_search' ]),
        filter() {
            return this.sortedUserList.filter( user => {
                return user.username.toLowerCase().indexOf( this.user_search.toLowerCase() ) > -1
            })
        },
        sortedUserList() {
            return this.mixKeySrt( this.users , 'name' )
        }
    },

}
</script>
