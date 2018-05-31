<!--
@Author: Morgan Andree Ray
@Date:   16-05-2018
@Email:  info@andreeray.se
@Filename: ShipTool.vue
@Last modified by:   Morgan Andree Ray
@Last modified time: 27-05-2018
@License: MIT
-->
<template lang="html">
    <div class="ship-tool">
        <LoadoutModal modal="addShip">

            <div slot="header">
                <h2> Model </h2>
                <input placeholder="Name" v-model="ship.name" />
                <div class="">
                    <select v-model="ship.organisation_id">
                        <option value="" selected>Manufacturer</option>
                        <option v-for="( organisation, i ) in manufacturers" :value="organisation._id" >{{ organisation.name }}</option>
                    </select>
                </div>
            </div>

            <div slot="left">

                <div class="avionics" v-if="ship.avionics.length > 0">
                    <h4>Avionics</h4>
                    <div v-for="( avionic, i ) in ship.avionics">
                        <select v-model="avionic.category">
                            <option value="" selected>Category</option>
                            <option value="Radar">Radar</option>
                            <option value="Computer">Computer</option>
                        </select>
                        <select v-model="avionic.size">
                            <option value="" selected>Size</option>
                            <option value="S">S</option>
                            <option value="V">V</option>
                        </select>
                        <select v-model="avionic.model_id">
                            <option value="" selected>avionics</option>
                            <option v-for="( avionic, i) in avionics" :value="avionic._id">{{ avionic.model }}</option>
                        </select>
                        <span @click="removeAvionic(i)">&#xd7;</span>
                    </div>
                </div>

                <div class="systems" v-if="ship.systems.length > 0">
                    <h4>Systems</h4>
                        <div v-for="( system, i ) in ship.systems">
                            <select v-model="system.category">
                                <option value="" selected>Category</option>
                                <option value="Power Plant">Power Plant</option>
                                <option value="Cooler">Cooler</option>
                                <option value="Shild Generator">Shield Generator</option>
                            </select>
                            <select v-model="system.size">
                                <option value="" selected>Size</option>
                                <option value="S">S</option>
                                <option value="V">V</option>
                            </select>
                            <select v-model="system.model_id">
                                <option value="" selected>systems</option>
                                <option v-for="( system, i) in systems" :value="system._id">{{ system.model }}</option>
                            </select>
                            <span @click="removeSystem(i)">&#xd7;</span>
                        </div>
                </div>


            </div>

            <div slot="middle">

                <div class="propulsions" v-if="ship.propulsions.length > 0">
                    <h4>Propulsions</h4>
                    <div v-for="( propulsion, i ) in ship.propulsions">
                        <select v-model="propulsion.category">
                            <option value="" selected>Category</option>
                            <option value="Fuel Intake">Fuel Intake</option>
                            <option value="Fuel Tank">Fuel Tank</option>
                            <option value="Quantum Drive">Quantum Drive</option>
                            <option value="Jump Module">Jump Module</option>
                            <option value="Quantum Fuel Tank">Quantum Fuel Tank</option>
                        </select>
                        <select v-model="propulsion.size">
                            <option value="" selected>Size</option>
                            <option value="S">S</option>
                            <option value="V">V</option>
                        </select>
                        <select v-model="propulsion.model_id">
                            <option value="" selected>propulsions</option>
                            <option v-for="( propulsion, i) in propulsions" :value="propulsion._id">{{ propulsion.model }}</option>
                        </select>
                        <span @click="removePropulsion(i)">&#xd7;</span>
                    </div>
                </div>

                <div class="thrusters" v-if="ship.thrusters.length > 0">
                    <h4>Thrusters</h4>
                    <div v-for="( thruster, i ) in ship.thrusters">
                            <select v-model="thruster.type">
                                <option value="" selected>type</option>
                                <option value="Main">Main</option>
                                <option value="Retro">Retro</option>
                                <option value="Maneuvering">Maneuvering</option>
                        </select>
                        <input class="small" v-model="thruster.count" placeholder="Count">
                        <select v-model="thruster.model_id">
                            <option value="" selected>thrusters</option>
                            <option v-for="( thruster, i) in thrusters" :value="thruster._id">{{ thruster.model }}</option>
                        </select>
                        <span @click="removeThruster(i)">&#xd7;</span>
                    </div>
                </div>

            </div>

            <div slot="right">

                <div class="weapons" v-if="ship.weapons.length > 0">
                    <h4>Weapons</h4>
                    <div v-for="( weapon, i ) in ship.weapons">
                        <select v-model="weapon.size">
                            <option value="" selected>Size</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>

                        <select v-if="weapon.size === '1' " v-model="weapon.model_id">
                            <option v-for="( weapon, i) in weaponsSizeOne" :value="weapon._id">{{ weapon.model }}</option>
                        </select>

                        <select v-if="weapon.size === '2' " v-model="weapon.model_id">
                            <option v-for="( weapon, i) in weaponsSizeTwo" :value="weapon._id">{{ weapon.model }}</option>
                        </select>

                        <select v-if="weapon.size === '3' " v-model="weapon.model_id">
                            <option v-for="( weapon, i) in weaponsSizeThree" :value="weapon._id">{{ weapon.model }}</option>
                        </select>

                        <select v-if="weapon.size === '4' " v-model="weapon.model_id">
                            <option v-for="( weapon, i) in weaponsSizeFour" :value="weapon._id">{{ weapon.model }}</option>
                        </select>

                        <select v-if="weapon.size === '5' " v-model="weapon.model_id">
                            <option v-for="( weapon, i) in weaponsSizeFive" :value="weapon._id">{{ weapon.model }}</option>
                        </select>

                        <span @click="removeWeapon(i)">&#xd7;</span>
                    </div>
                </div>


            </div>

            <div slot="footer">
                <div class="form-control">
                    <div @click="addAvionic">add avionic</div>
                    <div @click="addSystem">add system</div>
                    <div @click="addPropulsion">add propulsion</div>
                    <div @click="addThruster">add thruser</div>
                    <div @click="addWeapon">add weapon</div>
                    <div form="modal-form-ship-tool" @click="save('addShip')">save</div>
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
        ...mapGetters([  'meta_data', 'organisations', 'avionics', 'systems', 'propulsions', 'thrusters', 'weapons' ]),
        manufacturers() {
            return this.organisations.filter( org => org.type === 'Manufacturer')
        },
        weaponsSizeOne() {
            return this.weapons.filter( weapon => weapon.size === 1 )
        },
        weaponsSizeTwo() {
            return this.weapons.filter( weapon => weapon.size === 2 )
        },
        weaponsSizeThree() {
            return this.weapons.filter( weapon => weapon.size === 3 )
        },
        weaponsSizeFour() {
            return this.weapons.filter( weapon => weapon.size === 4 )
        },
        weaponsSizeFive() {
            return this.weapons.filter( weapon => weapon.size === 5 )
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
