<!--
@Author: Morgan Andree Ray
@Date:   17-05-2018
@Email:  info@andreeray.se
@Filename: Avionics.vue
@Last modified by:   Morgan Andree Ray
@Last modified time: 01-06-2018
@License: MIT
-->
<template lang="html">
    <div class="weapons">
        <div class="btn" >
            <h5 @click=" open = !open">{{ weapon.model }}</h5>
            <transition name="slide-fade">
                <table v-if="open" @click="$bus.$emit( 'setId', [weapon._id] );">
                    <tr>
                        <th title="Type Of Damage">TOD</th>
                        <th title="Damage Per Round">DPR</th>
                        <th title="Rate Of Fire">ROF</th>
                        <th title="Damage Per Second">DPS</th>
                        <th title="Velocity">VEL</th>
                        <th title="Distance">DST</th>
                    </tr>
                    <tr>
                        <td title="Type Of Damage">
                            <span v-if="weapon.ammo_id">
                                <span v-if="ammos.find(ammo => ammo._id === weapon.ammo_id).damage_total_phys"><span class="phys" title="physical"></span> <span>physical</span> </span>
                                <span v-if="ammos.find(ammo => ammo._id === weapon.ammo_id).damage_total_erg"><span class="erg" title="energy"></span> <span>energy</span> </span>
                                <span v-if="ammos.find(ammo => ammo._id === weapon.ammo_id).damage_total_heat"><span class="ther" title="thermal"></span> <span>thermal</span> </span>
                                <span v-if="ammos.find(ammo => ammo._id === weapon.ammo_id).damage_total_bio"><span class="bio" title="biological"></span> <span>biological</span> </span>
                                <span v-if="ammos.find(ammo => ammo._id === weapon.ammo_id).damage_total_dist"><span class="dist" title="distortion"></span> <span>distortion</span> </span>
                            </span>
                        </td>
                        <td title="Damage Per Round">{{ ammos.find(ammo => ammo._id === weapon.ammo_id).damage_total }}</td>
                        <td title="Rate Of Fire">{{ (weapon.shot_per_minute / 60).toFixed(2) }}</td>
                        <td title="Damage Per Second">{{ (ammos.find(ammo => ammo._id === weapon.ammo_id).damage_total * (weapon.shot_per_minute / 60) ).toFixed(2) }}</td>
                        <td title="Velocity">{{ ammos.find(ammo => ammo._id === weapon.ammo_id).speed }}</td>
                        <td title="Distance">{{ ammos.find(ammo => ammo._id === weapon.ammo_id).range}}</td>
                    </tr>
                </table>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Weapons',
    props: [ 'weapon' ],
    data() {
        return {
            open: false
        }
    },
    computed: {
        ammos() {
            return this.$store.getters.ammos
        }
    }
}
</script>
