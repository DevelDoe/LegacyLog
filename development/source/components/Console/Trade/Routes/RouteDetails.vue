<!--
@Author: Morgan Andree Ray
@Date:   10-05-2018
@Email:  info@andreeray.se
@Filename: TradeDetails.vue
@Last modified by:   Morgan Andree Ray
@Last modified time: 10-05-2018
@License: MIT
-->
<template lang="html">
    <div id="route" v-if="route.id === id">
        <h3> {{ route.resource }} </h3>
        <h4> {{ route.buy_name}} </h4>
        <p> price: {{ route.buy }} aUEC </p>
        <div v-for="l in route.sell ">
            <h5>{{ l.sell_name }}</h5>
            <p> price: {{ l.sell }} aUEC </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RouteDetails',
    props: [ 'route', 'id' ]
}
</script>

<style lang="css">
</style>
