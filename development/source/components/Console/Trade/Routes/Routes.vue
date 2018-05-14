<!--
@Author: Morgan Andree Ray
@Date:   10-05-2018
@Email:  info@andreeray.se
@Filename: Routes.vue
@Last modified by:   Morgan Andree Ray
@Last modified time: 14-05-2018
@License: MIT
-->
<template lang="html">
    <div id="routes">
        <div class="scroll">
            <span v-for="(trade_route, index) in filterSearch"  >
                <span v-if="trade_route.sell.length > 0">
                    <span v-for="( route, i ) in trade_route.sell" class="route" >
                        <button  @click="$bus.$emit('showRoute', trade_route.id)"> {{ trade_route.abbr }} {{ route.abbr }}: {{ comMargin(route.sell, trade_route.buy) }}</button>
                    </span>
                </span>
            </span>
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
        }
    },
    methods: {
        comMargin(sell, buy) {
            let res = sell - buy
            return this.mixFormatPrice(res)
        }
    },
}
</script>

<style lang="css">
</style>
