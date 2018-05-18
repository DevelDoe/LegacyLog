<!--
@Author: Morgan Andree Ray
@Date:   16-05-2018
@Email:  info@andreeray.se
@Filename: ShipDetail.vue
@Last modified by:   Morgan Andree Ray
@Last modified time: 18-05-2018
@License: MIT
-->
<template lang="html">
    <div class="ship-detail" v-if="ship._id === ship_id">
        <h3>{{ ship.name }}</h3>
        <p>Manufacturer: {{ organisation.name }}</p>
        <div class="avionics">
            <h4>Avionics</h4>
            <div v-for="( avionic, i) in ship.avionics">{{ avionic.category }} - {{ avionic.size}} <span v-if="avionic.count > 1">{{ avionic.count }}</span> </div>
        </div>
        <div class="systems">
            <h4>Systems</h4>
            <div v-for="( system, i) in ship.systems">{{ system.category }} - {{ system.size}} <span v-if="system.count > 1">{{ system.count }}</span></div>
        </div>
        <div class="propulsions">
            <h4>Propulsions</h4>
            <div v-for="( propulsion, i) in ship.propulsions">{{ propulsion.category }} - {{ propulsion.size}} <span v-if="propulsion.count > 1">{{ propulsion.count }}</span></div>
        </div>
        <div class="thrusters">
            <h4>Thrusters</h4>
            <div v-for="( thruster, i) in ship.thrusters">{{ thruster.category }} - {{ thruster.type}} <span v-if="thruster.count > 1">{{ thruster.count }}</span></div>
        </div>
        <div class="weapons">
            <h4>Weapons</h4>
            <div v-for="( weapon, i) in ship.weapons">{{ weapon.category }} - {{ weapon.size}} <span v-if="weapon.count > 1">{{ weapon.count }}</span></div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'ShipDetail',
    props: [ 'ship', 'ship_id' ],
    computed: {
        ...mapGetters([ 'organisations' ]),
        organisation() {
            return this.organisations.find( org => org._id === this.ship.organisation_id)
        }
    }
}
</script>
