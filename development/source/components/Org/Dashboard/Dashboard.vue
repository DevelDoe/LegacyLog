<!--
@Author: Morgan Andree Ray
@Date:   13-05-2018
@Email:  info@andreeray.se
@Filename: Dashboard.vue
@Last modified by:   Morgan Andree Ray
@Last modified time: 13-05-2018
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
                            <option>Corses</option>
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
                    about
                </div>
                <div class="buttons">
                    buttons
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

export default {
    name: 'Dashboard',
    data() {
        return {
            selected: ''
        }
    },
    components: {
        Users,
        UsersFilter,
        UsersTools
    }
}
</script>
