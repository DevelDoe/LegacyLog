<!--
@Author: Morgan Andree Ray
@Date:   10-05-2018
@Email:  info@andreeray.se
@Filename: Routes.vue
@Last modified by:   Morgan Andree Ray
@Last modified time: 16-05-2018
@License: MIT
-->
<template lang="html">
    <div id="routes">
            <div v-for="(trade_route, index) in sortedRoute" class="trade-route" >
                <div class="">
                    {{ trade_route.name }} : {{ mixFormatPrice(trade_route.margin) }}
                </div>
                <div class="">
                    {{ trade_route.buyLocation }} to
                </div>
                <div class="">
                    {{ trade_route.sellLocation}}
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Routes',
    props: [ 'tradeRoutes' ],
    data() {
        return {
            filter_search: '',
        }
    },
    computed: {
        filterSearch() {
            return this.tradeRoutes.filter( route => {
                return route.abbr.toLowerCase().indexOf( this.filter_search.toLowerCase() ) > - 1
            })
        },
        sortedRoute(){
            return this.mixKeySrt(this.tradeRoutes, 'margin', true)
        }
    },
}
</script>

<style lang="css">
</style>
