<!--
@Author: Morgan Andree Ray
@Date:   27-04-2018
@Email:  info@andreeray.se
@Filename: Filters.vue
@Last modified by:   Morgan Andree Ray
@Last modified time: 11-05-2018
@License: MIT
-->


<template lang="html">
    <div>
        <input v-model="filter_search" placeholder="search">
        <Location v-for="( location, i ) in meta_data.location_filters" :key="i" :location="location" />
    </div>
</template>

<script>
import Location from './Location.vue'
import { mapGetters } from 'vuex'
export default {
    name: 'Filters',
    data() {
        return {
            checked: this.location === 'Moon' || this.location === 'Station' || false,
            filter_search: ''
        }
    },
    computed: { ...mapGetters([ 'locations' , 'meta_data', 'location_search' ]) },
    updated() {
        this.$store.dispatch('setLocationSearch', this.filter_search)
    },
    components: {
        Location
    }
}
</script>
