<!--
@Author: Morgan Andree Ray
@Date:   13-05-2018
@Email:  info@andreeray.se
@Filename: Dashboard.vue
@Last modified by:   Morgan Andree Ray
@Last modified time: 14-05-2018
@License: MIT
-->
<template lang="html">
    <div class="org">
        <div id="dashboard">
            <div class="controls">
                <div class="select">
                    <h2>Dashboard</h2>
                    <div class="">
                        <select v-model="selected">
                            <option disabled value="">Please select one</option>
                            <option selected>Users</option>
                        </select>
                    </div>
                </div>
                <div class="filter">
                    <UsersFilter v-if="selected === 'Users'" />
                </div>
                <div class="buttons">
                    <UsersTools />
                </div>
            </div>
            <div class="list">
                <Users v-if="selected === 'Users'" />
            </div>
            <div class="details">
                <div class="about">
                    <UsersDetails v-if="selected === 'Users'" v-for="( user , i ) in users" :key=" 'usedet' + i" :user="user" :user_id="id"/>
                </div>
                <div class="buttons">
                    <UsersControls  v-if="selected === 'Users'"  v-for="( user , i ) in users" :key=" 'usecon' + i" :users="users" :user="user" :user_id="id" :index="i"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

import Users          from './Users/Users.vue'
import UsersFilter    from './Users/UsersFilter.vue'
import UsersTools     from './Users/UsersTools.vue'
import UsersDetails   from './Users/UsersDetails.vue'
import UsersControls  from './Users/UsersControls.vue'

export default {
    name: 'Dashboard',
    data() {
        return {
            selected: '',
            id: ''
        }
    },
    computed: { ...mapGetters([ 'users' ]) },
    mounted() {
        this.$bus.$on('setId', payload => {
            let args = (payload.length === 1 ? [payload[0]] : Array.apply(null, payload) )
            let id   = args.shift() || null
            this.id = id
        })
    },
    components: {
        Users,
        UsersFilter,
        UsersTools,
        UsersDetails,
        UsersControls
    }
}
</script>
