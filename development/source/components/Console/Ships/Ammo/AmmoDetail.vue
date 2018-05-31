<!--
@Author: Morgan Andree Ray
@Date:   28-05-2018
@Email:  info@andreeray.se
@Filename: AmmoDetail.vue
@Last modified by:   Morgan Andree Ray
@Last modified time: 28-05-2018
@License: MIT
-->
<template lang="html">
    <div class="ammo-detail" v-if="ammo._id === ammo_id">
        <h3>{{ ammo.model }}</h3>
        <p>Size: {{ ammo.size }}</p>
        <p>lifetime: {{ ammo.lifetime }}</p>
        <p>speed: {{ ammo.speed }}</p>
        <p>range: {{ ammo.range }}</p>
        <p>Total physical damaged: {{ ammo.damage_total_phys }}</p>
        <p>Total energy damage: {{ ammo.damage_total_erg }}</p>
        <p>Total distortion damage: {{ ammo.damage_total_dist }}</p>
        <p>Total Thermal damage: {{ ammo.damage_total_heat }}</p>
        <p>Total biological damage: {{ ammo.damage_total_bio }}</p>
        <p>Total damage: {{ ammo.damage_total }}</p>
        <p>Max penetration: {{ ammo.max_pen }}</p>
        <p>per shot: {{ ammo.per_shot }}</p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'AmmoDetail',
    props: [ 'ammo', 'ammo_id' ]
}
</script>
