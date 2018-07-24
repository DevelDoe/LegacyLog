<!--
@Author: Morgan Andree Ray
@Date:   18-05-2018
@Email:  info@andreeray.se
@Filename: LoadoutTool.vue
@Last modified by:   Morgan Andree Ray
@Last modified time: 02-06-2018
@License: MIT
-->
<template lang="html">
    <div class="loadout-tool">

        <LoadoutModal modal="createLoadout">

            <div slot="header">
                <h2>Loadout Creator</h2>
                <select v-model="base_model_id">
                    <option value="" selected>Base Model</option>
                    <option v-for="( ship, i ) in ships" :value="ship._id">{{ ship.name }}</option>
                </select>
            </div>

            <div slot="left">
                <div class="avionics" v-if="base_model">
                    <h4>Avionics</h4>
                    <div class="avionic" v-for="( avionic, i ) in base_model.avionics" >
                        {{ avionic.category }}
                        <select v-model="avionic.model_id">
                            <option value="" selected>avionics</option>
                            <option v-for="( avionic, i) in avionics" :value="avionic._id">{{ avionic.model }}</option>
                        </select>
                    </div>
                </div>
                <div class="systems" v-if="base_model">
                    <h4>Systems</h4>
                    <div class="system" v-for="( system, i ) in base_model.systems" >
                        {{ system.category }}
                        <select v-model="system.model_id">
                            <option value="" selected>systems</option>
                            <option v-for="( system, i) in systems" :value="system._id">{{ system.model }}</option>
                        </select>
                    </div>
                </div>
            </div>

            <div slot="middle">
                <div class="propulsions" v-if="base_model">
                    <h4>Propulsions</h4>
                    <div class="propulsion" v-for="( propulsion, i ) in base_model.propulsions" >
                        {{ propulsion.category }}
                        <select v-model="propulsion.model_id">
                            <option value="" selected>propulsions</option>
                            <option v-for="( propulsion, i) in propulsions" :value="propulsion._id">{{ propulsion.model }}</option>
                        </select>
                    </div>
                </div>
                <div class="thrusters" v-if="base_model">
                    <h4>Thrusters</h4>
                    <div class="thruster" v-for="( thruster, i ) in base_model.thrusters" >
                        {{ thruster.category }}
                        <select v-model="thruster.model_id">
                            <option value="" selected>thrusters</option>
                            <option v-for="( thruster, i) in thrusters" :value="thruster._id">{{ thruster.model }}</option>
                        </select>
                    </div>
                </div>
            </div>

            <div slot="right">
                <div class="weapons" v-if="base_model">
                    <h4>Weapons</h4>
                    <div class="weapon" v-for="( weapon, i ) in base_model.weapons" >
                        {{ weapon.category }}
                        <select v-model="weapon.model_id">
                            <option value="" selected>thrusters</option>
                            <option v-for="( weapon, i) in weapons" :value="weapon._id">{{ weapon.model }}</option>
                        </select>
                    </div>
                </div>
            </div>

        </LoadoutModal>
        <div class="tool-control"  @click="openModal('createLoadout')">
            <button>NEW LOADOUT</button>
        </div>

    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'LoadoutTool',
    data() {
        return {
            base_model_id: '',
        }
    },
    computed: {
        ...mapGetters([ 'ships', 'avionics', 'systems', 'propulsions', 'thrusters', 'weapons' ]),
        base_model() {
            return this.ships.find( ship => ship._id === this.base_model_id ) || null
        }
    },
    methods: {
        openModal( modal ) {
            this.$bus.$emit( 'toggleModal', modal )
        },

    }
}
</script>

<style lang="css">
</style>
