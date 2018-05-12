<!--
@Author: Morgan Andree Ray
@Date:   27-04-2018
@Email:  info@andreeray.se
@Filename: ResourceDetails.vue
@Last modified by:   Morgan Andree Ray
@Last modified time: 11-05-2018
@License: MIT
-->


<template lang="html">
    <div id="resource-details" v-if="resource._id === resource_id">
        <h3>{{ resource.name }}</h3>
        <div v-for="( o, i ) in comLocations">
            <strong>{{ o.location }}:</strong>
            <span v-if="o.sell">SELL {{ o.sell }}</span>
            <span v-if="o.buy">BUY {{ o.buy }}</span>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    props: [ 'resource', 'resource_id' ],
    computed: {
        ...mapGetters([ 'locations' ]),
        comLocations() {
            let res = []
            this.locations.forEach(location => {
                location.resources.forEach(resource => {
                    if( resource.resource_id === this.resource._id) {
                        res.push( { location: location.name, sell: resource.sell, buy: resource.buy })
                    }
                })

            })
            return res.sort((a, b) => parseFloat(a.sell) - parseFloat(b.sell))
        }
    }
}
</script>
