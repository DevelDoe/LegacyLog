<!--
@Author: Morgan Andree Ray
@Date:   10-05-2018
@Email:  info@andreeray.se
@Filename: Locations.vue
@Last modified by:   Morgan Andree Ray
@Last modified time: 02-06-2018
@License: MIT
-->
<template lang="html">
    <div id="locations">
        <div v-for="(location, index) in filterSearch"  >
            <button @click="$bus.$emit('setId', [location._id, location.type])">{{ location.name }}</button>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'Locations',
    data() {
        return {
            inputs: {
                location_name: '',
                location_type: '',
                location_id: '',
            },
            filterLocations: [ 'Moon', 'Station' ]
        }
    },
    computed: {
        ...mapGetters([ 'locations' , 'meta_data' , 'location_search' ]),
        filterSearch() {
            return this.fltLoc.filter( location => {
                return location.name.toLowerCase().indexOf( this.location_search.toLowerCase() ) > - 1
            })
        },
        fltLoc () {
            return this.locations.filter( loc => {
                if ( !this.filterLocations.length ) return true
                else {
                    return this.filterLocations.find( fLoc => {
                        return loc.type === fLoc
                    })
                }
            })
        }
    },
    mounted() {
        this.$bus.$on('filter', ( filter, location, checked ) => {
            this.mixFltrBy( filter, location, checked )
        })
    }
}
</script>
