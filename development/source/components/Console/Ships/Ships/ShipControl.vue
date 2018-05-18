<!--
@Author: Morgan Andree Ray
@Date:   16-05-2018
@Email:  info@andreeray.se
@Filename: ShipsControls.vue
@Last modified by:   Morgan Andree Ray
@Last modified time: 18-05-2018
@License: MIT
-->
<template lang="html">
    <div class="ship-control" v-if="ship._id === ship_id">
        <DevelModal modal="updateShip">
            <div slot="header">
                <h2>Update {{ ship.name }}</h2>
            </div>
            <div slot="bread">
                <form id="modal-form-ship-update">
                    <input placeholder="Name" v-model="ship.name">
                    <div class="">
                        <select v-model="ship.organisation_id">
                            <option value="" selected>Manufacturer</option>
                            <option v-for="( organisation, i ) in manufacturers" :value="organisation._id" >{{ organisation.name }}</option>
                        </select>
                    </div>
                    <div @click="addAvionic">add avionic</div>
                    <div v-for="( avionic, i ) in ship.avionics">
                        <select v-model="avionic.category">
                            <option value="" selected>Select Category</option>
                            <option value="Radar">Radar</option>
                            <option value="Computer">Computer</option>
                        </select>
                        <select v-model="avionic.size">
                            <option value="" selected>Select Size</option>
                            <option value="S">S</option>
                            <option value="V">V</option>
                        </select>
                        <input class="small" v-model="avionic.count" placeholder="Total Mounts">
                        <span @click="removeAvionic(i)">delete</span>
                    </div>
                    <div @click="addSystem">add system</div>
                    <div v-for="( sytem, i ) in ship.systems">
                        <select v-model="sytem.category">
                            <option value="" selected>Select TyCategorype</option>
                            <option value="Power Plant">Power Plant</option>
                            <option value="Cooler">Cooler</option>
                            <option value="Shild Generator">Shield Generator</option>
                        </select>
                        <select v-model="sytem.size">
                            <option value="" selected>Select Size</option>
                            <option value="S">S</option>
                            <option value="V">V</option>
                        </select>
                        <input class="small" v-model="sytem.count" placeholder="Total Mounts">
                        <span @click="removeSystem(i)">delete</span>
                    </div>
                    <div @click="addPropulsion">add propulsion</div>
                    <div v-for="( propulsion, i ) in ship.propulsions">
                        <select v-model="propulsion.category">
                            <option value="" selected>Select Category</option>
                            <option value="Fuel Intake">Fuel Intake</option>
                            <option value="Fuel Tank">Fuel Tank</option>
                            <option value="Quantum Drive">Quantum Drive</option>
                            <option value="Jump Module">Jump Module</option>
                            <option value="Quantum Fuel Tank">Quantum Fuel Tank</option>
                        </select>
                        <select v-model="propulsion.size">
                            <option value="" selected>Select Size</option>
                            <option value="S">S</option>
                            <option value="V">V</option>
                        </select>
                        <input class="small" v-model="propulsion.count" placeholder="Total Mounts">
                        <span @click="removePropulsion(i)">delete</span>
                    </div>
                    <div @click="addThruster">add thruser</div>
                    <div v-for="( thruster, i ) in ship.thrusters">
                        <span>{{ thruster.category }}</span>
                            <select v-model="thruster.type">
                                <option value="" selected>Select type</option>
                                <option value="Main">Main</option>
                                <option value="Retro">Retro</option>
                                <option value="Maneuvering">Maneuvering</option>
                        </select>
                        <input class="small" v-model="thruster.count" placeholder="Total Mounts">
                        <span @click="removeThruster(i)">delete</span>
                    </div>
                </form>
            </div>

            <div slot="footer">
                <div class="form-control">
                    <button form="modal-form-ship-update" @click="update('updateShip')">save</button>
                </div>
            </div>
        </DevelModal>

        <div class="">
            <button @click="openModal('updateShip')">update</button>
        </div>
        <div class="">
            <button @click="del()">delete</button>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'ShipControl',
    props: [ 'ship', 'ship_id', 'index' ],
    computed: {
        ...mapGetters([ 'meta_data', 'organisations' ]),
        manufacturers() {
            return this.organisations.filter( org => org.type === 'Manufacturer')
        }
    },
    methods: {
        openModal( modal ) {
            this.$bus.$emit('toggleModal', modal )
        },
        del() {
            this.$store.dispatch('delShip', this.ship_id )
            this.apiDelete( 'ships', this.ship_id)
        },
        addAvionic() {
            this.ship.avionics.push({ category: '', size: '' })
        },
        removeAvionic( index ) {
            this.ship.avionics.splice(index, 1)
        },
        addSystem() {
            this.ship.systems.push({ category: '', size: '' })
        },
        removeSystem( index ) {
            this.ship.systems.splice(index, 1)
        },
        addPropulsion() {
            this.ship.propulsions.push({ category: '', size: '' })
        },
        removePropulsion( index ) {
            this.ship.propulsions.splice(index, 1)
        },
        addThruster() {
            this.ship.thrusters.push({ category: 'thruster', type: '' })
        },
        removeThruster( index ) {
            this.ship.thrusters.splice(index, 1)
        },
        update( modal ) {
            const valid = this.validate( this.meta_data.validation_rules.ship, this.ship, 'ships', this.index)
            if ( valid === 'true') {
                this.$store.dispatch('delShip', this.ship_id)
                this.apiUpdate( 'ships', this.ship, this.ship_id, 'addShip' , modal )
            }
        }
    }
}
</script>
