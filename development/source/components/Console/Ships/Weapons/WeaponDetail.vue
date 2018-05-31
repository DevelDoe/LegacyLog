<!--
@Author: Morgan Andree Ray
@Date:   17-05-2018
@Email:  info@andreeray.se
@Filename: AvionicDetails.vue
@Last modified by:   Morgan Andree Ray
@Last modified time: 31-05-2018
@License: MIT
-->
<template lang="html">
    <div class="weapon-detail" v-if="weapon._id === weapon_id">
        <section>
            <h3>{{ weapon.model }}</h3>
            <p>{{ weapon.desc }}</p>
        </section>

        <section>
            <table>
                <tr>
                    <th>MANUFACTURER</th>
                    <th>SIZE</th>
                    <th title="Damage Per Second">DPS</th>
                    <th>MASS</th>
                    <th title="Healt Points">HP</th>
                    <th title="Rate Of Fire">ROF</th>
                    <th  v-if="weapon.default_rounds" title="default rounds">DR</th>
                </tr>
                <tr>
                    <td v-if="organisation">{{ organisation.name }}</td>
                    <td v-else>TBD</td>
                    <td>{{ weapon.size }}</td>
                    <td title="Damage Per Second">{{ weapon.dps }}</td>
                    <td>{{ weapon.mass }}</td>
                    <td title="Healt Points">{{ weapon.hp }}</td>
                    <td title="Rate Of Fire">{{ (weapon.shot_per_minute / 60).toFixed(2) }}</td>
                    <td v-if="weapon.default_rounds" title="default rounds">{{ weapon.default_rounds }}</td>
                </tr>
            </table>

        </section>

        <section>
            <canvas ref="icanvas" ></canvas>
        </section>

        <section>
            <table>
                <tr>
                    <th>AMMUNITION</th>
                    <th>SIZE</th>
                    <th title="Life Time">LIFETIME</th>
                    <th title="Speed">VEL</th>
                    <th title="RANGE">RANGE</th>
                    <th>DAMAGE</th>
                    <th v-if="ammo.damage_total_phys" title="Total Physical Damage">PHYSICAL</th>
                    <th v-if="ammo.damage_total_erg" title="Total Energy Damage">ENERGY</th>
                    <th v-if="ammo.damage_total_dist" title="Total Distortion Damage">DISTORTION</th>
                    <th v-if="ammo.damage_total_heat" title="Total Thermal Damage">THERMAL</th>
                    <th v-if="ammo.damage_total_bio" title="Total Biological Damage">BIOLOGICAL</th>
                    <th v-if="ammo.max_pen" title="Max Penetration">MAX PEN</th>
                    <th v-if="ammo.per_shot" title="Ammo Per Shot">PER SHOT</th>
                </tr>
                <tr>
                    <td>{{ ammo.model }}</td>
                    <td>{{ ammo.size }}</td>
                    <td title="Life Time">{{ ammo.lifetime }}</td>
                    <td>{{ ammo.speed }}</td>
                    <td>{{ ammo.range }}</td>
                    <td>{{ ammo.damage_total }}</td>
                    <td v-if="ammo.damage_total_phys" title="Total Physical Damage">{{ ammo.damage_total_phys }}</td>
                    <td v-if="ammo.damage_total_erg" title="Total Energy Damage">{{ ammo.damage_total_erg }}</td>
                    <td v-if="ammo.damage_total_dist" title="Total Distortion Damage">{{ ammo.damage_total_dist }}</td>
                    <td v-if="ammo.damage_total_heat" title="Total Thermal Damage">{{ ammo.damage_total_heat }}</td>
                    <td v-if="ammo.damage_total_bio" title="Total Biological Damage">{{ ammo.damage_total_bio }}</td>
                    <td v-if="ammo.max_pen" title="Max Penetration">{{ ammo.max_pen }}</td>
                    <td v-if="ammo.per_shot" title="Ammo Per Shot">{{ ammo.per_shot }}</td>
                </tr>
            </table>
        </section>

        <section v-if="weapon.burst_rate">
            <table>
                <tr>
                    <th>Burst Rate</th>
                    <th>Burst Shots</th>
                    <th>Burst DPS</th>
                </tr>
                <tr>
                    <td>{{ weapon.burst_rate }}</td>
                    <td>{{ weapon.burst_shots }}</td>
                    <td>{{ weapon.burst_dps }}</td>
                </tr>
            </table>
        </section>

        <section>
            <table>
                <tr>
                    <th v-if="weapon.spread_first">Spread First</th>
                    <th>Spread/Shot</th>
                    <th>Spread Min</th>
                    <th>Spread Max</th>
                    <th v-if="weapon.spread_instability">Spread Instability</th>
                    <th>Spread Decay</th>
                    <th v-if="weapon.spread_decay_end">Spread Decay End</th>
                </tr>
                <tr>
                    <td v-if="weapon.spread_first" >{{ weapon.spread_first }}</td>
                    <td>{{ weapon.spread_per_shot }}</td>
                    <td>{{ weapon.spread_min }}</td>
                    <td>{{ weapon.spread_max }}</td>
                    <td v-if="weapon.spread_instability">{{ weapon.spread_instability }}</td>
                    <td>{{ weapon.spread_decay }}</td>
                    <td>{{ weapon.spread_decay_end }}</td>
                </tr>
            </table>
        </section>

    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'WeaponDetail',
    props: [ 'weapon', 'weapon_id' ],
    computed: {
        ...mapGetters([ 'organisations', 'ammos' ]),
        organisation() {
            return this.organisations.find( org => org._id === this.weapon.organisation_id)
        },
        ammo() {
            return this.ammos.find( ammo => ammo._id === this.weapon.ammo_id) || null
        }
    },
    methods: {

    },
    updated() {
        var chart = new Chart(this.$refs.icanvas, {
            // The type of chart we want to create
            type: 'line',

            // The data for our dataset
            data: {
                labels: ["3s", "10s", "30s", "60s", "90s"],
                datasets: [{
                    label: "DPS over time",
                    backgroundColor: 'rgba(255, 99, 132,1)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: [this.weapon.sim_dps_3s, this.weapon.sim_dps_10s, this.weapon.sim_dps_30s, this.weapon.sim_dps_60s, this.weapon.sim_dps_90s],
                }]
            },

            // Configuration options go here
            options: {}
        });
    }
}
</script>
