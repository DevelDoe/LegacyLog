<!--
@Author: Morgan Andree Ray
@Date:   10-05-2018
@Email:  info@andreeray.se
@Filename: MoonDetails.vue
@Last modified by:   Morgan Andree Ray
@Last modified time: 16-05-2018
@License: MIT
-->
<template lang="html">
    <div class="moon-details" v-if="location._id === location_id && location_type === 'Moon'">
        <h4>{{ location.name }}</h4>
        <h5>{{ location.type }}</h5>
        <div class="locations">
            <div class="location" v-for="location in locationLocations">
                <h6 class="btn" @click="$bus.$emit('setId', [location._id, 'Outpost'] )">{{ location.name }}</h6>
                <LocationLocationsResource v-for="( resource , i ) in location.resources" :key=" 'locloc' + i" :resource="resource" />
            </div>
        </div>

    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import LocationLocationsResource from './LocationLocationsResource.vue'
export default {
    name: 'MoonDetails',
    props: [ 'location', 'location_id', 'location_type' ],
    computed: {
        ...mapGetters([ 'locations' ]),
        locationLocations() { return this.locations.filter( l => l.location_id === this.location_id ) || null }
    },
    components: {
        LocationLocationsResource
    }
}
</script>

<style lang="css">
</style>
