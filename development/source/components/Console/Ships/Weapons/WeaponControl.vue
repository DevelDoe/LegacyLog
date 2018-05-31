<!--
@Author: Morgan Andree Ray
@Date:   17-05-2018
@Email:  info@andreeray.se
@Filename: AvionicControl.vue
@Last modified by:   Morgan Andree Ray
@Last modified time: 31-05-2018
@License: MIT
-->
<template lang="html">
    <div class="weapon-control" v-if="weapon._id === weapon_id">

        <LoadoutModal modal="updateWeapon">


            <div slot="header">
                <h2>update {{ weapon.model }} </h2>
            </div>

            <div slot="left">
                <div class="">
                    <input placeholder="Model" v-model="weapon.model" />
                </div>
                <div class="description">
                    <textarea rows="7" placeholder="Description" v-model="weapon.desc"></textarea>
                </div>
                <div class="">
                    <select v-model="weapon.organisation_id">
                        <option value="" selected>Manufacturer</option>
                        <option v-for="( organisation, i ) in manufacturers" :value="organisation._id" >{{ organisation.name }}</option>
                    </select>
                </div>
                <div class="">
                    <select v-model="weapon.ammo_id">
                        <option value="" selected>Ammo</option>
                        <option v-for="( ammo, i ) in ammos" :value="ammo._id" >{{ ammo.model }}</option>
                    </select>
                </div>
                <div class="">
                    <select v-model="weapon.size">
                        <option value="" selected>Select Size</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="12">12</option>
                    </select>
                </div>

                <div class="">
                    <input v-model="weapon.mass" placeholder="mass">
                </div>

                <div class="">
                    <input v-model="weapon.hp" placeholder="hp">
                </div>

                <br/>

                <div class="">
                    <input v-model="weapon.dps" placeholder="DPS">
                </div>
                <div class="">
                    <input v-model="weapon.sim_dps_3s" placeholder="DPS 3s">
                </div>
                <div class="">
                    <input v-model="weapon.sim_dps_10s" placeholder="DPS 10s">
                </div>
                <div class="">
                    <input v-model="weapon.sim_dps_30s" placeholder="DPS 30s">
                </div>
                <div class="">
                    <input v-model="weapon.sim_dps_60s" placeholder="DPS 60s">
                </div>
                <div class="">
                    <input v-model="weapon.sim_dps_90s" placeholder="DPS 90s">
                </div>
                <div class="">
                    <input v-model="weapon.shot_per_minute" placeholder="Shot/minute">
                </div>
                <div class="">
                    <input v-model="weapon.default_rounds" placeholder="Default Rounds">
                </div>
            </div>

            <div slot="middle">

                <div class="">
                    <input v-model="weapon.burst_rate" placeholder="Burst Rate (burst/m)">
                </div>

                <div class="">
                    <input v-model="weapon.burst_shots" placeholder="Burst Shots (rounds/shots)">
                </div>

                <div class="">
                    <input v-model="weapon.burst_dps" placeholder="Burst DPS (dmg/s)">
                </div>

                <br/>

                <div class="">
                    <input v-model="weapon.spread_first" placeholder="Spread First">
                </div>
                <div class="">
                    <input v-model="weapon.spread_per_shot" placeholder="Spread/Shot">
                </div>
                <div class="">
                    <input v-model="weapon.spread_min" placeholder="Spread Min">
                </div><div class="">
                    <input v-model="weapon.spread_max" placeholder="Spread Max">
                </div>
                <div class="">
                    <input v-model="weapon.spread_instability" placeholder="Spread Instability">
                </div>
                <div class="">
                    <input v-model="weapon.spread_decay" placeholder="Spread Decay">
                </div>
                <div class="">
                    <input v-model="weapon.spread_decay_end" placeholder="Spread Decay End">
                </div>

                <br/>

                <div class="">
                    <input v-model="weapon.power_online" placeholder="Power Online (pwr/s)">
                </div>
                <div class="">
                    <input v-model="weapon.heat_shot" placeholder="Heat/Shot">
                </div>
                <div class="">
                    <input v-model="weapon.heat_rate_online" placeholder="Heat Rate Online (heat/s)">
                </div>
                <div class="">
                    <input v-model="weapon.temp_max" placeholder="Temp Max">
                </div>
                <div class="">
                    <input v-model="weapon.cooling_coefficient" placeholder="Cooling Coefficient">
                </div>
                <div class="">
                    <input v-model="weapon.heating_coefficient" placeholder="Heating Coefficient">
                </div>
                <div class="">
                    <input v-model="weapon.temp_ratio_overheat" placeholder="Temp Ratio Overheat">
                </div>
                <div class="">
                    <input v-model="weapon.temp_ratio_recovery" placeholder="Temp Ratio Recovery">
                </div>
                <div class="">
                    <input v-model="weapon.heat_recovery" placeholder="Heat Recovery">
                </div>
                <div class="">
                    <input v-model="weapon.temp_ratio_ir" placeholder="Temp Ratio IR">
                </div>
            </div>

            <div slot="right">

                <div class="">
                    <input v-model="weapon.dst_decay_rate" placeholder="Distance Decay Rate (dst/s)">
                </div>
                <div class="">
                    <input v-model="weapon.dst_max" placeholder="Distance Max">
                </div>
                <div class="">
                    <input v-model="weapon.dst_ratio_overload" placeholder="Distance Ratio Overload">
                </div>
                <div class="">
                    <input v-model="weapon.dst_ratio_recovery" placeholder="Distance Ratio Recovery">
                </div>
                <div class="">
                    <input v-model="weapon.dst_recovery" placeholder="Distance Ratio Recovery (s)">
                </div>
                <div class="">
                    <input v-model="weapon.em_ratio" placeholder="EM Ratio">
                </div>

                <br/>

                <div class="">
                    <input v-model="weapon.dmg_resist_phys" placeholder="Damage Resist Physical">
                </div>
                <div class="">
                    <input v-model="weapon.dmg_resist_nrg" placeholder="Damage Resist Energy">
                </div>
                <div class="">
                    <input v-model="weapon.dmg_resist_dst" placeholder="Damage Resist Distortion">
                </div>
                <div class="">
                    <input v-model="weapon.dmg_resist_heat" placeholder="Damage Resist Thermal">
                </div>
                <div class="">
                    <input v-model="weapon.dmg_resist_bio" placeholder="Damage Resist Biological">
                </div>

                <br/>

                <div class="">
                    <input v-model="weapon.wear_lifetime" placeholder="Wear Lifetime">
                </div>
                <div class="">
                    <input v-model="weapon.wear_initial_ratio" placeholder="Wear Initial Ratio">
                </div>
                <div class="">
                    <input v-model="weapon.wear_rate_max" placeholder="Wear Rate Max">
                </div>
                <div class="">
                    <input v-model="weapon.wear_degrade_on_use" placeholder="Wear Degrade On Use">
                </div>
                <div class="">
                    <input v-model="weapon.wear_heat" placeholder="Wear Heat">
                </div>
                <div class="">
                    <input v-model="weapon.wear_overheat" placeholder="Wear Overheat">
                </div>
                <div class="">
                    <input v-model="weapon.wear_overclock" placeholder="Wear Overclock">
                </div>
                <div class="">
                    <input v-model="weapon.wear_dmg_critical" placeholder="Wear Damage Critical">
                </div>
                <div class="">
                    <input v-model="weapon.wear_performance" placeholder="Wear Performance">
                </div>
                <div class="">
                    <input v-model="weapon.wear_dmg_perf" placeholder="Wear Damage Perf">
                </div>
                <div class="">
                    <input v-model="weapon.wear_dmg_efficiency" placeholder="Wear Damage Efficiency">
                </div>
                <div class="">
                    <input v-model="weapon.wear_dmg_heat" placeholder="Wear Damage Heat">
                </div>
                <div class="">
                    <input v-model="weapon.wear_critical" placeholder="Wear Critical">
                </div>

            </div>


            <div slot="footer">
                <div class="form-control">
                    <button form="modal-form-weapon-tool" @click="update('updateWeapon')">save</button>
                </div>
            </div>
        </LoadoutModal>

        <div class="weapon-control-btn">
            <ul>
                <li @click="openModal('updateWeapon')">update</li>
                <li @click="del()">delete</li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'WeaponControl',
    props: [ 'weapon', 'weapon_id', 'index'],
    computed: {
        ...mapGetters([ 'meta_data', 'organisations', 'ammos' ]),
        manufacturers() {
            return this.organisations.filter( org => org.type === 'Manufacturer')
        },
        ammo() {
            return this.ammos.find( ammo => ammo._id === this.weapon.ammo_id) || null
        }
    },
    methods: {
        openModal( modal ) {
            this.$bus.$emit('toggleModal', modal )
        },
        del() {
            this.apiDelete( 'weapons', this.weapon_id )
            this.$store.dispatch('delWeapon', this.weapon_id )
        },
        update( modal ) {
            const valid = this.validate( this.meta_data.validation_rules.weapon, this.weapon, 'weapons', this.index)
            if ( valid === 'true') {
                this.$store.dispatch('delWeapon', this.weapon_id)
                this.apiUpdate( 'weapons', this.weapon, this.weapon_id, 'addWeapon' , modal )
            }
        }
    }
}
</script>
