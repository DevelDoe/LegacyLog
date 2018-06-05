<!--
@Author: Morgan Andree Ray
@Date:   17-05-2018
@Email:  info@andreeray.se
@Filename: AvionicDetails.vue
@Last modified by:   Morgan Andree Ray
@Last modified time: 02-06-2018
@License: MIT
-->
<template lang="html">
    <div class="weapon-detail" v-if="weapon._id === weapon_id">
        <section>
            <h3>{{ weapon.model }}</h3>
            <p>{{ weapon.desc }}</p>
        </section>

        <section>
            <h6>Basic Stats</h6>
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
            <canvas ref="icanvas" width="400" height="100" ></canvas>
        </section>

        <section>
            <h6>Ammunition</h6>
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
            <h6>Burst</h6>
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
            <h6>Spread</h6>
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

        <section>
            <h6>Thermals</h6>
            <table>
                <tr>
                    <th title="Power online">PO pwr/s</th>
                    <th title="Heat Shot">heat/shot</th>
                    <th title="heat rate online">HRO(heat/sec)</th>
                    <th title="Temp Max">Temp Max</th>
                    <th title="cooling coefficient">CC</th>
                    <th title="heating coefficient">HC</th>
                    <th title="Temp Ratio Overheat">TRO</th>
                    <th title="Temp Ratio Recovery">TRR</th>
                    <th title="heat recovery">HR(s)</th>
                    <th title="Temp Ratio IR">TRI</th>
                </tr>
                <tr>
                    <td title="Power online">{{ weapon.power_online }}</td>
                    <td title="Heat Shot">{{ weapon.heat_shot }}</td>
                    <td title="heat rate online">{{ weapon.heat_rate_online }}</td>
                    <th title="Temp Max">{{ weapon.temp_max }}</th>
                    <td title="cooling coefficient">{{ weapon.cooling_coefficient }}</td>
                    <td title="heating coefficient">{{ weapon.heating_coefficient }}</td>
                    <td title="Temp Ratio Overheat">{{ weapon.temp_ratio_overheat }}</td>
                    <td title="Temp Ratio Recovery">{{ weapon.temp_ratio_recovery }}</td>
                    <td title="heat recovery">{{ weapon.heat_recovery }}</td>
                    <td title="Temp Ratio IR">{{ weapon.temp_ratio_ir }}</td>
                </tr>
            </table>
        </section>

        <section>
            <h6>Distance</h6>
            <table>
                <tr>
                    <th title="Distance Decay Rate (dst/s)">DDR</th>
                    <th title="Distance Max">Distance Max</th>
                    <th title="Distance Ratio Overload">DRO</th>
                    <th title="Distance Ratio Recovery">DRR</th>
                    <th title="Distance Recovery (s)">DR (s)</th>
                    <th title="EM Ratio">EM Ratio (pwr/em)</th>
                </tr>
                <tr>
                    <td title="Distance Decay Rate (dst/s)">{{ weapon.dst_decay_rate }}</td>
                    <td title="Distance Max">{{ weapon.dst_max }}</td>
                    <td title="Distance Ratio Overload">{{ weapon.dst_ratio_overload }}</td>
                    <td title="Distance Ratio Recovery">{{ weapon.dst_ratio_recovery }}</td>
                    <td title="Distance Recovery (s)">{{ weapon.dst_recovery }}</td>
                    <td title="EM Ratio">{{ weapon.em_ratio }}</td>
                </tr>
            </table>
        </section>

        <section>
            <h6>Damage Type</h6>
            <table>
                <tr>
                    <th title="Damage Resist Physical">DRP</th>
                    <th title="Damage Resist Energy">DRE</th>
                    <th title="Damage Resist Distortion">DRD</th>
                    <th title="Damage Resist Thermal">DRT</th>
                    <th title="Damage Resist Biological">DRB</th>
                </tr>
                <tr>
                    <td title="Damage Resist Physical">{{ weapon.dmg_resist_phys }}</td>
                    <td title="Damage Resist Energy">{{ weapon.dmg_resist_nrg }}</td>
                    <td title="Damage Resist Distortion">{{ weapon.dmg_resist_dst }}</td>
                    <td title="Damage Resist Thermal">{{ weapon.dmg_resist_heat }}</td>
                    <td title="Damage Resist Biological">{{ weapon.dmg_resist_bio }}</td>
                </tr>
            </table>
        </section>

        <section>
            <h6>Wear</h6>
            <table>
                <tr>
                    <th title="Wear Lifetime">DRP</th>
                    <th title="Wear Initial Ratio">DRP</th>
                    <th title="Wear Rate Max">DRP</th>
                    <th title="Wear Degrade On Use">DRP</th>
                    <th title="Wear Heat">DRP</th>
                    <th title="Wear Overheat">DRP</th>
                    <th title="Wear Overclock">DRP</th>
                    <th title="Wear Damage Critical">DRP</th>
                    <th title="Wear Performance">DRP</th>
                    <th title="Wear Damage Perf">DRP</th>
                    <th title="Wear Damage Efficiency">DRP</th>
                    <th title="Wear Damage Heat">DRP</th>
                    <th title="Wear Critical">DRP</th>
                </tr>
                <tr>
                    <td title="Wear Lifetime">{{ weapon.wear_lifetime }}</td>
                    <td title="Wear Initial Ratio">{{ weapon.wear_initial_ratio }}</td>
                    <td title="Wear Rate Max">{{ weapon.wear_rate_max }}</td>
                    <td title="Wear Degrade On Use">{{ weapon.wear_degrade_on_use }}</td>
                    <td title="Wear Heat">{{ weapon.wear_heat }}</td>
                    <td title="Wear Overheat">{{ weapon.wear_overheat }}</td>
                    <td title="Wear Overclock">{{ weapon.wear_overclock }}</td>
                    <td title="Wear Damage Critical">{{ weapon.wear_dmg_critical }}</td>
                    <td title="Wear Performance">{{ weapon.wear_performance }}</td>
                    <td title="Wear Damage Perf">{{ weapon.wear_dmg_perf }}</td>
                    <td title="Wear Damage Efficiency">{{ weapon.wear_dmg_efficiency }}</td>
                    <td title="Wear Damage Heat">{{ weapon.wear_dmg_heat }}</td>
                    <td title="Wear Critical">{{ weapon.wear_critical }}</td>
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
        if(this.weapon._id === this.weapon_id) {
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
}
</script>
