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
    <div class="thruster-control" v-if="thruster._id === thruster_id">

        <DevelModal modal="updateThruster">
            <div slot="header">
                <h2>Update {{ thruster.model }}</h2>
            </div>
            <div slot="bread">
                <form id="modal-form-thruster-update">
                    <input placeholder="Model" v-model="thruster.model">
                    <div class="">
                        <select v-model="thruster.organisation_id">
                            <option value="" selected>Manufacturer</option>
                            <option v-for="( organisation, i ) in manufacturers" :value="organisation._id" >{{ organisation.name }}</option>
                        </select>
                    </div>
                    <div class="">
                        <select v-model="thruster.category">
                            <option value="" selected>Category</option>
                            <option value="Main Thrusters">Main Thrusters</option>
                            <option value="Maneuvering Thrusters">Maneuvering Thrusters</option>
                        </select>
                    </div>
                </form>
            </div>
            <div slot="footer">
                <div class="form-control">
                    <button form="modal-form-ship-update" @click="update('updateThruster')">save</button>
                </div>
            </div>
        </DevelModal>

        <div class="">
            <button @click="openModal('updateThruster')">update</button>
        </div>
        <div class="">
            <button @click="del()">delete</button>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'ThrusterControl',
    props: [ 'thruster', 'thruster_id', 'index'],
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
            this.apiDelete( 'thrusters', this.thruster_id )
            this.$store.dispatch('delThruster', this.thruster_id )
        },
        update( modal ) {
            const valid = this.validate( this.meta_data.validation_rules.thruster, this.thruster, 'thrusters', this.index)
            if ( valid === 'true') {
                this.$store.dispatch('delThruster', this.thruster_id)
                this.apiUpdate( 'thrusters', this.thruster, this.thruster_id, 'addThruster' , modal )
            }
        }
    }
}
</script>
