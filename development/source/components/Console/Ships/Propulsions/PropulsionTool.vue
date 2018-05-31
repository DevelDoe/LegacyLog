<!--
@Author: Morgan Andree Ray
@Date:   19-05-2018
@Email:  info@andreeray.se
@Filename: Propulsions.vue
@Last modified by:   Morgan Andree Ray
@Last modified time: 19-05-2018
@License: MIT
-->
<template lang="html">
    <div class="propulstion-tool">

        <DevelModal modal="addPropulsion">
            <div slot="header"> <h2>Add Propulsion</h2> </div>
            <div slot="bread">
                <form id="modal-form-propulsion-tool">
                    <input placeholder="Model" v-model="propulsion.model" />
                    <div class="">
                        <select v-model="propulsion.organisation_id">
                            <option value="" selected>Manufacturer</option>
                            <option v-for="( organisation, i ) in manufacturers" :value="organisation._id" >{{ organisation.name }}</option>
                        </select>
                    </div>
                    <div class="">
                        <select v-model="propulsion.category">
                            <option value="" selected>Category</option>
                            <option value="Fuel Intake">Fuel Intake</option>
                            <option value="Fuel Tank">Fuel Tank</option>
                            <option value="Quantum Drive">Quantum Drive</option>
                            <option value="Jump Module">Jump Module</option>
                            <option value="Quantum Fuel Tanks">Quantum Fuel Tanks</option>
                        </select>
                    </div>
                    <div class="">
                        <select v-model="propulsion.size">
                            <option value="" selected>Size</option>
                            <option value="S">S</option>
                            <option value="V">V</option>
                        </select>
                    </div>

                </form>
            </div>
            <div slot="footer">
                <div class="form-control">
                    <button form="modal-form-propulsion-tool" @click="save('addPropulsion')">save</button>
                </div>
            </div>
        </DevelModal>

        <div class="tool-control">
            <button @click="openModal('addPropulsion')">add propulsion</button>
        </div>

    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'PropulsionTool',
    data() {
        return {
            propulsion: {
                organisation_id: '',
                model: '',
                size: '',
                category: ''
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
        save( modal ) {
            const valid = this.validate( this.meta_data.validation_rules.propulsion, this.propulsion, 'propulsions')
            if( valid === 'true' ) {
                this.apiSave( 'propulsions', this.propulsion, 'addPropulsion', modal)
                this.propulsion.organisation_id = ''
                this.propulsion.model = ''
                this.propulsion.size = ''
                this.propulsion.category = ''

            }
        }
    }
}
</script>

<style lang="css">
</style>
