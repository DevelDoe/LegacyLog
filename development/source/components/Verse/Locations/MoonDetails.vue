<!--
@Author: Morgan Andree Ray
@Date:   10-05-2018
@Email:  info@andreeray.se
@Filename: MoonDetails.vue
@Last modified by:   DevelDoe
@Last modified time: 11-05-2018
@License: MIT
-->
<template lang="html">
    <div v-if="location._id === location_id && location_type === 'Moon'">
        <h4>{{ location.name }}</h4>
        <h5>{{ location.type }}</h5>
        <h5>Locations:</h5>
        <div v-for="location in locationLocations">
            <h6>{{ location.name }}</h6>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'MoonDetails',
    props: [ 'location', 'location_id', 'location_type' ],
    computed: {
        ...mapGetters([ 'locations' ]),
        locationLocations() { return this.locations.filter( l => l.location_id === this.location_id ) || null }
    }
}
</script>

<style lang="css">
</style>
