<!--
@Author: Morgan Andree Ray
@Date:   09-05-2018
@Email:  info@andreeray.se
@Filename: Trade.vue
@Last modified by:   Morgan Andree Ray
@Last modified time: 15-05-2018
@License: MIT
-->
<template>
    <div id="trade">

        <nav id="headbar" class="box screen">
            <div class="wrapper">
                <h2>Legacy Console</h2>
                <div></div>
                <div></div>
            </div>
        </nav>

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
                <div class="scroll">
                    <Routes v-if="selected === 'Trade Routes'" :tradeRoutes="tradeRoutes" />
                    <Resources v-if="selected === 'Resources'" />
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
        tradeRoutes() {
            let res = []
            this.comResources.forEach( resource => {
                resource.trade_routes.forEach( route => {
                    res.push( route )
                })
            })
            return res || null
        },
        comResources() {
            let id = 0
            let comResources = []
            this.resources.forEach( resource => {
                let comResource = {}
                comResource._id = resource._id
                comResource.name = resource.name
                comResource.locations_sell = []
                comResource.locations_buy = []
                comResource.trade_routes = []
                // Locations Sell
                this.locations.forEach( location => {
                    let comLocation = {}
                    comLocation._id = location._id
                    if( location.name.length > 6) {
                        var splitStr = location.name.toLowerCase().split(' ')
                        for (var i = 0; i < splitStr.length; i++) {
                            var isnum = /^\d+$/.test(splitStr[i])
                            if(isnum) splitStr[i] = splitStr[i]
                            else splitStr[i] = splitStr[i].charAt(0).toUpperCase()
                        }
                        comLocation.abbr = splitStr.join('')
                    } else {
                        comLocation.abbr = location.name
                    }
                    comLocation.name = location.name
                    location.resources.forEach( locationResource => {
                        if( locationResource.resource_id === comResource._id  && locationResource.sell) {
                            comLocation.sell = locationResource.sell
                            comResource.locations_sell.push(comLocation)
                        }
                    })
                })
                // Locations Buy
                this.locations.forEach( location => {
                    let comLocation = {}
                    comLocation._id = location._id
                    if( location.name.length > 6) {
                        var splitStr = location.name.toLowerCase().split(' ')
                        for (var i = 0; i < splitStr.length; i++) {
                            var isnum = /^\d+$/.test(splitStr[i])
                            if(isnum) splitStr[i] = splitStr[i]
                            else splitStr[i] = splitStr[i].charAt(0).toUpperCase()
                        }
                        comLocation.abbr = splitStr.join('')
                    } else {
                        comLocation.abbr = location.name
                    }
                    comLocation.name = location.name
                    location.resources.forEach( locationResource => {
                        if( locationResource.resource_id === comResource._id  && locationResource.buy) {
                            comLocation.buy = locationResource.buy
                            comResource.locations_buy.push(comLocation)
                        }
                    })
                })
                // Trade Routes
                this.locations.forEach( location => {

                    location.resources.forEach( locationResource => {
                        if( locationResource.resource_id === comResource._id && locationResource.buy ) {
                            let route = {
                                sell: []
                            }
                            if( location.name.length > 6) {
                                var splitStr = location.name.toLowerCase().split(' ')
                                for (var i = 0; i < splitStr.length; i++) {
                                    var isnum = /^\d+$/.test(splitStr[i])
                                    if(isnum) splitStr[i] = splitStr[i]
                                    else splitStr[i] = splitStr[i].charAt(0).toUpperCase()
                                }
                                route.abbr = splitStr.join('')
                            } else {
                                route.abbr = location.name
                            }
                            route.id       = id
                            route.resource = comResource.name
                            route.buy_name = location.name
                            route.buy      = locationResource.buy
                            id += 1
                            this.locations.forEach( loca => {
                                loca.resources.forEach( locaResource => {
                                    if( locaResource.resource_id === comResource._id && locaResource.sell ) {
                                        let sell = {}
                                        if( loca.name.length > 6) {
                                            var splitStr = loca.name.toLowerCase().split(' ')
                                            for (var i = 0; i < splitStr.length; i++) {
                                                var isnum = /^\d+$/.test(splitStr[i])
                                                if(isnum) splitStr[i] = splitStr[i]
                                                else splitStr[i] = splitStr[i].charAt(0).toUpperCase()
                                            }
                                            sell.abbr = splitStr.join('')
                                        } else {
                                            sell.abbr = loca.name
                                        }
                                        sell.sell_name = loca.name
                                        sell.sell = locaResource.sell
                                        route.sell.push(sell)
                                    }

                                })
                            })
                            comResource.trade_routes.push(route)
                        }
                    })
                })
                comResources.push(comResource)
            })
            return comResources || null
        }
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
