<!--
@Author: Morgan Andree Ray
@Date:   22-05-2018
@Email:  info@andreeray.se
@Filename: MissileRackDetail.vue
@Last modified by:   Morgan Andree Ray
@Last modified time: 27-05-2018
@License: MIT
-->
<template lang="html">
    <div class="missile-rack-detail">
        <div class="missile-rack-detail" v-if="missile_rack._id === missile_rack_id">
            <h3>{{ missile_rack.model }}</h3>
            <p v-if="organisation">Manufacturer: {{ organisation.name }}</p>
            <p v-else>Manufacturer: TBD</p>
            <p>{{ missile_rack.desc }}</p>
            <p>size: {{ missile_rack.size }}</p>
            <p>mass: {{ missile_rack.mass }}</p>
            <p>hp: {{ missile_rack.hp }}</p>
            <p>missile count: {{ missile_rack.missile_count }}</p>
            <p>Missile size: {{ missile_rack.Missile_size }}</p>
            <p>launch delay: {{ missile_rack.launch_delay }}</p>
            <p>detach velocity: {{ missile_rack.detach_velocity }}</p>
            <p>distance decay rate: {{ missile_rack.distance_decay_rate }}</p>
            <p>distance max: {{ missile_rack.distance_max }}</p>
            <p>distance ratio overload: {{ missile_rack.distance_ratio_overload }}</p>
            <p>distance ratio recovery: {{ missile_rack.distance_ratio_recovery }}</p>
            <p>distance recovery: {{ missile_rack.distance_recovery }}</p>
            <p>em ratio: {{ missile_rack.em_ratio }}</p>
            <p>damage resist phys: {{ missile_rack.dmg_resist_phys }}</p>
            <p>damage resist nrg: {{ missile_rack.dmg_resist_nrg }}</p>
            <p>damage resist dst: {{ missile_rack.dmg_resist_dst }}</p>
            <p>damage resist heat: {{ missile_rack.dmg_resist_heat }}</p>
            <p>damage resist bio: {{ missile_rack.dmg_resist_bio }}</p>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'MissileRackDetail',
    props: [ 'missile_rack', 'missile_rack_id' ],
    computed: {
        ...mapGetters([ 'organisations' ]),
        organisation() {
            return this.organisations.find( org => org._id === this.missile_rack.organisation_id)
        }
    }
}
</script>

<style lang="css">
</style>
