<!--
@Author: Morgan Andree Ray
@Date:   13-05-2018
@Email:  info@andreeray.se
@Filename: Usersfilter.vue
@Last modified by:   Morgan Andree Ray
@Last modified time: 15-05-2018
@License: MIT
-->
<template lang="html">
    <div class="routes-filter">
        <input v-model="filter_search" placeholder="search">
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'RouteFilters',
    data() {
        return {
            filter_search: ''
        }
    },
    computed: {
        ...mapGetters([ 'routes' , 'route_search' ])
    },
    updated() {
        this.$store.dispatch('setUserSearch', this.filter_search)
    },
}
</script>
