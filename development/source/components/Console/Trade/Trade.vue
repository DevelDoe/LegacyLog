<!--
@Author: Morgan Andree Ray
@Date:   09-05-2018
@Email:  info@andreeray.se
@Filename: Trade.vue
@Last modified by:   Morgan Andree Ray
@Last modified time: 16-05-2018
@License: MIT
-->
<template>
    <div id="trade">

        <div class="wrapper">
            <section id="leftbar" class="screen">
                <div class="top">
                    <h3>Trading</h3>
                    <div class="nav">
                        <select v-model="selected">
                            <option disabled value="">Please select one</option>
                            <option selected>Trade Routes</option>
                            <option>Resources</option>
                        </select>
                    </div>
                </div>
                <div class="main">
                    <ResourcesFilter v-if="selected === 'Resources'" />
                </div>
                <div class="bottom">
                    <ResourceTools />
                </div>
            </section>
            <section id="content" class="screen">
                <div class="hide-scroll">
                    <div class="viewport">
                        <Routes v-if="selected === 'Trade Routes'" :tradeRoutes="tradeRoutes" />
                        <Resources v-if="selected === 'Resources'" />
                    </div>
                </div>
            </section>
            <section id="rightbar" class="screen">
                <div class="top">
                    <RouteDetails v-if="selected === 'Trade Routes'" v-for="(route , i) in tradeRoutes" :key="i" :route="route" :route_id="showRoute"/>
                    <ResourceDetails v-if="selected === 'Resources'" v-for="(resource , i) in resources" :key="i" :resource="resource"  :resource_id="resource_id"/>
                </div>
                <div class="bottom">
                    <ResourceControls  v-if="selected === 'Resources'" v-for="(resource, i) in resources" :key="i" :resource="resource" :resource_id="resource_id" :index="i" />
                </div>
            </section>
        </div>

    </div>
</template>

<script>
import { mapGetters }   from 'vuex'
import Routes           from './Routes/Routes.vue'
import RouteDetails     from './Routes/RouteDetails.vue'
import Resources        from './Resources/Resources.vue'
import ResourceDetails  from './Resources/ResourceDetails.vue'
import ResourceControls from './Resources/ResourceControls.vue'
import ResourceTools    from './Resources/ResourceTools.vue'
import ResourcesFilter  from './Resources/ResourcesFilter.vue'

export default {
    name: 'Trade',
    data() {
        return {
            showRoute:'',
            resource_id: '',
            selected: ''
        }
    },
    computed: {
        ...mapGetters([ 'locations', 'meta_data', 'resources' ]),
        sellLocation() {
            let locations = []
            this.locations.forEach(location => {
                location.resources.forEach(resource => {
                    if(resource.sell !== '') {
                        let reso = {}
                        reso.location = location.name
                        reso.name = this.resources.find(r => r._id === resource.resource_id).name
                        reso.price = resource.sell
                        locations.push(reso)
                    }
                })
            })
            return locations || null
        },
        buyLocation() {
            let locations = []
            this.locations.forEach(location => {
                location.resources.forEach(resource => {
                    if(resource.buy !== '') {
                        let reso = {}
                        reso.location = location.name
                        reso.name = this.resources.find(r => r._id === resource.resource_id).name
                        reso.price = resource.buy
                        locations.push(reso)
                    }
                })
            })
            return locations || null
        },
        tradeRoutes() {
            let res = []
            this.buyLocation.forEach( buyLocation => {
                this.sellLocation.forEach( sellLocation => {
                    if (buyLocation.name === sellLocation.name) {
                        let route = {}
                        route.buyLocation = buyLocation.location
                        route.sellLocation = sellLocation.location
                        route.name = buyLocation.name
                        route.margin = sellLocation.price - buyLocation.price
                        res.push(route)
                    }
                } )
            })
            return res || null
        },
    },
    mounted() {
        this.$bus.$on('showRoute', payload => {
            this.showRoute = payload
        })
        this.$bus.$on('setResourceId', payload => {
            this.resource_id = payload
        })
    },
    components: { RouteDetails, Routes, Resources, ResourceDetails, ResourceControls, ResourceTools, ResourcesFilter }
}
</script>

<style lang="css">
</style>
