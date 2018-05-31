<!--
@Author: Morgan Andree Ray
@Date:   17-05-2018
@Email:  info@andreeray.se
@Filename: AvionicControl.vue
@Last modified by:   Morgan Andree Ray
@Last modified time: 19-05-2018
@License: MIT
-->
<template lang="html">
    <div class="propulsion-control" v-if="propulsion._id === propulsion_id">

        <DevelModal modal="updatePropulsion">
            <div slot="header">
                <h2>Update {{ propulsion.model }}</h2>
            </div>
            <div slot="bread">
                <form id="modal-form-propulsion-update">
                    <input placeholder="Model" v-model="propulsion.model">
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
                    <button form="modal-form-propulsion-update" @click="update('updatePropulsion')">save</button>
                </div>
            </div>
        </DevelModal>

        <div class="">
            <button @click="openModal('updatePropulsion')">update</button>
        </div>
        <div class="">
            <button @click="del()">delete</button>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'PropulsionControl',
    props: [ 'propulsion', 'propulsion_id', 'index'],
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
            this.apiDelete( 'propulsions', this.propulsion_id )
            this.$store.dispatch('delPropulsion', this.propulsion_id )
        },
        update( modal ) {
            const valid = this.validate( this.meta_data.validation_rules.propulsion, this.propulsion, 'propulsions', this.index)
            if ( valid === 'true') {
                this.$store.dispatch('delPropulsion', this.propulsion_id)
                this.apiUpdate( 'propulsions', this.propulsion, this.propulsion_id, 'addPropulsion' , modal )
            }
        }
    }
}
</script>
