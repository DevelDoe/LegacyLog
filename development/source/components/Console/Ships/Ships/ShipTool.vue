<!--
@Author: Morgan Andree Ray
@Date:   16-05-2018
@Email:  info@andreeray.se
@Filename: ShipTool.vue
@Last modified by:   Morgan Andree Ray
@Last modified time: 19-05-2018
@License: MIT
-->
<template lang="html">
    <div class="ship-tool">
        <LoadoutModal modal="addShip">

            <div slot="header">
                <h2>Model Ship</h2>
                <input placeholder="Name" v-model="ship.name" />
                <div class="">
                    <select v-model="ship.organisation_id">
                        <option value="" selected>Manufacturer</option>
                        <option v-for="( organisation, i ) in manufacturers" :value="organisation._id" >{{ organisation.name }}</option>
                    </select>
                </div>
            </div>

            <div slot="left">
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
                    <span @click="removeSystem(i)">delete</span>
                </div>
            </div>

            <div slot="middle">
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
                    <input class="small" v-model="thruster.count" placeholder="Total Mount Points">
                    <span @click="removeThruster(i)">delete</span>
                </div>
            </div>

            <div slot="right">
                <div @click="addWeapon">add weapon</div>
                <div v-for="( weapon, i ) in ship.weapons">
                    <select v-model="weapon.category">
                        <option value="" selected>Select Category</option>
                        <option value="Weapon">Weapon</option>
                        <option value="Turret">Turrets</option>
                        <option value="Missile">Missile</option>
                        <option value="Utility Item">Utility Item</option>
                    </select>
                    <select v-model="weapon.size">
                        <option value="" selected>Select Size</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <span @click="removeWeapon(i)">delete</span>
                </div>
            </div>

            <div slot="footer">
                <div class="form-control">
                    <button form="modal-form-ship-tool" @click="save('addShip')">save</button>
                </div>
            </div>
        </loadoutModal>
        <div class="tool-control">
            <button @click="openModal('addShip')">model ship</button>
        </div>

    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'ShipTool',
    data() {
        return {
            ship: {
                name: '',
                organisation_id: '',
                avionics: [],
                systems: [],
                propulsions: [],
                thrusters: [],
                weapons: []
            }
        }
    },
    computed: {
        ...mapGetters([  'meta_data', 'organisations' ]),
        manufacturers() {
            return this.organisations.filter( org => org.type === 'Manufacturer')
        }
    },
    methods: {
        openModal( modal ) {
            this.$bus.$emit( 'toggleModal', modal )
        },
        addAvionic() {
            this.ship.avionics.push({ category: '', size: '', count: '' })
        },
        removeAvionic( index ) {
            this.ship.avionics.splice(index, 1)
        },
        addSystem() {
            this.ship.systems.push({ category: '', size: '', count: '' })
        },
        removeSystem( index ) {
            this.ship.systems.splice(index, 1)
        },
        addPropulsion() {
            this.ship.propulsions.push({ category: '', size: '', count: '' })
        },
        removePropulsion( index ) {
            this.ship.propulsions.splice(index, 1)
        },
        addThruster() {
            this.ship.thrusters.push({ category: 'thruster', type: '', count: '' })
        },
        removeThruster( index ) {
            this.ship.thrusters.splice(index, 1)
        },
        addWeapon() {
            this.ship.weapons.push({ category: '', type: '', count: '' })
        },
        removeWeapon( index ) {
            this.ship.weapons.splice(index, 1)
        },
        save( modal ) {
            const valid = this.validate( this.meta_data.validation_rules.ship, this.ship, 'ships')
            if( valid === 'true' ) {
                this.apiSave( 'ships', this.ship, 'addShip', modal)
                this.ship.name = ''
                this.ship.organisations = ''
                this.ship.avionics = []
                this.ship.systems = []
                this.ship.propulsions = []
                this.ship.thrusters = [],
                this.ship.weapons = []
            }
        }
    }
}
</script>

<style lang="css">
</style>
