<!--
@Author: Morgan Andree Ray
@Date:   10-05-2018
@Email:  info@andreeray.se
@Filename: Verse.vue
@Last modified by:   Morgan Andree Ray
@Last modified time: 02-06-2018
@License: MIT
-->

<template>
    <div id="ships">
        <div class="wrapper">
            <section id="leftbar" class="screen">
                <div class="top">
                    <h3>Ships</h3>
                    <div class="nav">
                        <select v-model="selected">
                            <option disabled  value="">Please select one</option>
                            <option>Loadouts</option>
                            <option selected>Ships Models</option>
                            <option>Avionics</option>
                            <option>Systems</option>
                            <option>Propulsions</option>
                            <option>Thrusters</option>
                            <option>Weapons</option>
                            <option>Ammunition</option>
                            <option>Missile Racks</option>
                        </select>
                    </div>
                </div>
                <div class="filters">
                    <WeaponFilter v-if="selected === 'Weapons'" />
                </div>
                <div class="tools">

                </div>
            </section>
            <section id="content" class="screen">
                    <div class="viewport">
                        <Ships v-if="selected === 'Ships Models'" />
                        <Avionics v-if="selected === 'Avionics'" />
                        <Systems v-if="selected === 'Systems'" />
                        <Propulsions v-if="selected === 'Propulsions'" />
                        <Thrusters v-if="selected === 'Thrusters'" />
                        <Weapons v-if="selected === 'Weapons'" v-for="(weapon, i) in weaponsFilter" :key="'wea'+i" :weapon="weapon" />
                        <Ammos v-if="selected === 'Ammunition'" />
                        <MissileRacks v-if="selected === 'Missile Racks'" />
                    </div>
            </section>
            <section id="rightbar" class="screen">
                <div class="top">
                    <div class="viewport">
                            <ShipDetail v-if="selected === 'Ships Models'" v-for="( ship, i ) in ships" :key="'shipdet'+i" :ship="ship" :ship_id="id" />
                            <AvionicDetail  v-if="selected === 'Avionics'" v-for="( avionic, i ) in avionics" :key="'avidet'+i" :avionic="avionic" :avionic_id="id" />
                            <SystemDetail v-if="selected === 'Systems'" v-for="( system, i ) in systems" :key="'sysdet'+i" :system="system" :system_id="id" />
                            <PropulsionDetail v-if="selected === 'Propulsions'" v-for="( propulsion, i ) in propulsions" :key="'prodet'+i" :propulsion="propulsion" :propulsion_id="id" />
                            <ThrusterDetail v-if="selected === 'Thrusters'" v-for="( thruster, i ) in thrusters" :key="'thrdet'+i" :thruster="thruster" :thruster_id="id" />
                            <WeaponDetail v-if="selected === 'Weapons'" v-for="( weapon, i ) in weapons" :key="'weadet'+i" :weapon="weapon" :weapon_id="id" />
                            <AmmoDetail v-if="selected === 'Ammunition'" v-for="( ammo, i ) in ammos" :key="'ammdet'+i" :ammo="ammo" :ammo_id="id" />
                            <MissileRackDetail v-if="selected === 'Missile Racks'" v-for="( missile_rack, i ) in missile_racks" :key="'misdet'+i" :missile_rack="missile_rack" :missile_rack_id="id" />
                    </div>
                </div>
                <div class="bottom">
                    <ShipControl v-if="selected === 'Ships Models'" v-for="( ship , i ) in ships" :key="'shicon'+i" :ship="ship" :ship_id="id" :index="i" />
                    <AvionicControl v-if="selected === 'Avionics'" v-for="( avionic , i ) in avionics" :key="'avicon'+i" :avionic="avionic" :avionic_id="id" :index="i" />
                    <SystemControl v-if="selected === 'Systems'" v-for="( system , i ) in systems" :key="'syscon'+i" :system="system" :system_id="id" :index="i" />
                    <PropulsionControl v-if="selected === 'Propulsions'" v-for="( propulsion , i ) in propulsions" :key="'procon'+i" :propulsion="propulsion" :propulsion_id="id" :index="i" />
                    <ThrusterControl v-if="selected === 'Thrusters'" v-for="( thruster , i ) in thrusters" :key="'thucon'+i" :thruster="thruster" :thruster_id="id" :index="i" />
                    <WeaponControl v-if="selected === 'Weapons'" v-for="( weapon , i ) in weapons" :key="'weacon'+i" :weapon="weapon" :weapon_id="id" :index="i" />
                    <AmmoControl v-if="selected === 'Ammunition'" v-for="( ammo , i ) in ammos" :key="'ammcon'+i" :ammo="ammo" :ammo_id="id" :index="i" />
                    <MissileRackControl v-if="selected === 'Missile Racks'" v-for="( missile_rack , i ) in missile_racks" :key="'weadet'+i" :missile_rack="missile_rack" :missile_rack_id="id" :index="i" />
                </div>
            </section>
        </div>

    </div>
</template>

<script>
import Ships              from './Ships/Ships.vue'
import ShipDetail         from './Ships/ShipDetail.vue'
import ShipControl        from './Ships/ShipControl.vue'

import Avionics           from './Avionics/Avionics.vue'
import AvionicDetail      from './Avionics/AvionicDetail.vue'
import AvionicControl     from './Avionics/AvionicControl.vue'

import Systems            from './Systems/Systems.vue'
import SystemDetail       from './Systems/SystemDetail.vue'
import SystemControl      from './Systems/SystemControl.vue'

import Propulsions        from './Propulsions/Propulsions.vue'
import PropulsionDetail   from './Propulsions/PropulsionDetail.vue'
import PropulsionControl  from './Propulsions/PropulsionControl.vue'

import Thrusters          from './Thrusters/Thrusters.vue'
import ThrusterDetail     from './Thrusters/ThrusterDetail.vue'
import ThrusterControl    from './Thrusters/ThrusterControl.vue'

import Weapons            from './Weapons/Weapons.vue'
import WeaponDetail       from './Weapons/WeaponDetail.vue'
import WeaponControl      from './Weapons/WeaponControl.vue'
import WeaponFilter       from './Weapons/WeaponFilter.vue'

import MissileRacks       from './MissileRacks/MissileRacks.vue'
import MissileRackDetail  from './MissileRacks/MissileRackDetail.vue'
import MissileRackControl from './MissileRacks/MissileRackControl.vue'

import Ammos              from './Ammo/Ammos.vue'
import AmmoDetail         from './Ammo/AmmoDetail.vue'
import AmmoControl        from './Ammo/AmmoControl.vue'

import { mapGetters }   from 'vuex'
export default {
    name: 'Ships',
    data() {
        return {
            selected        : '',
            id              : '',
            location_type   : '',
            filterWeaponSize: [ ]
        }
    },
    mounted() {
        this.$bus.$on('setId', payload => {
            let args = (payload.length === 1 ? [payload[0]] : Array.apply(null, payload) )
            let id   = args.shift() || null
            let type = args.shift() || null
            this.id = id
            if( type ) this.location_type = type
        })
        this.$bus.$on('sizeFilter', (filter, size, checked) => {
            this.mixFltrBy(filter, size, checked)
        })
    },
    computed: {
        ...mapGetters([ 'meta_data', 'ships', 'avionics', 'systems', 'propulsions', 'thrusters', 'weapons', 'weapon_search', 'missile_racks', 'ammos' ]),
        weaponsFilter() {
            return this.filterBySize.filter( weapon => {
                return weapon.model.toLowerCase().indexOf( this.weapon_search.toLowerCase() ) > -1
            })
        },
        filterBySize() {
            return this.weapons.filter( weapon => {
                if( !this.filterWeaponSize.length ) return true
                else {
                    return this.filterWeaponSize.find( filterSize => {
                        console.log(weapon.size)
                        console.log('filterSize', filterSize)
                        return weapon.size == filterSize
                    })
                }
            })
        }
    },
    components: {
        Ships,
        ShipDetail,
        ShipControl,
        Avionics,
        AvionicDetail,
        AvionicControl,
        Weapons,
        Thrusters,
        Propulsions,
        Systems,
        SystemDetail,
        PropulsionDetail,
        ThrusterDetail,
        WeaponDetail,
        SystemControl,
        PropulsionControl,
        ThrusterControl,
        WeaponControl,
        MissileRacks,
        MissileRackDetail,
        MissileRackControl,
        Ammos,
        AmmoDetail,
        AmmoControl,
        WeaponFilter
    }
}
</script>
