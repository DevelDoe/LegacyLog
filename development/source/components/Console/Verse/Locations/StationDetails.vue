<!--
@Author: Morgan Andree Ray <DevelDoe>
@Date:   11-05-2018
@Email:  info@andreeray.se
@Filename: StationDetails.vue
@Last modified by:   DevelDoe
@Last modified time: 11-05-2018
@License: MIT
-->


<template lang="html">
    <div v-if="location._id === location_id && location_type === 'Station'">
        <h4>{{ location.name }}</h4>
        <h5>{{ location.type }}</h5>
        <h5>Resources:</h5>
        <div v-for="resource in locationResources">
            <span v-if="resource.buy !== '' || resource.sell !== '' ">
                <h6>{{ resource.name }}: <span v-if="resource.buy">buying price: {{ resource.buy}}</span><span v-if="resource.sell">selling price: {{ resource.sell}} </span></h6>
            </span>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'StationDetails',
    props: [ 'location', 'location_id', 'location_type' ],
    computed: {
        ...mapGetters([ 'resources' ]),
        locationResources() {
            if( this.location.resources ) {
                let res = []
                let count_index = 0
                this.location.resources.forEach( locResource => {

                    let item = {}
                    item._id  = locResource.resource_id
                    item.name = this.resources.find( allResource => allResource._id === locResource.resource_id ).name
                    item.sell = locResource.sell
                    item.buy  = locResource.buy
                    item.index = count_index
                    count_index++
                    res.push(item)
                })
                return this.mixKeySrt(res, 'name')
            }
        }
    }
}
</script>
