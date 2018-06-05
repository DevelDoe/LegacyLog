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
    <div class="thruster-tool">

        <DevelModal modal="addThruster">
            <div slot="header"> <h2>Add Thruster</h2> </div>
            <div slot="bread">
                <form id="modal-form-thruster-tool">
                    <input placeholder="Model" v-model="thruster.model" />
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
                    <div class="">
                        <input v-model="thruster.count" placeholder="Count">
                    </div>
                </form>
            </div>
            <div slot="footer">
                <div class="form-control">
                    <button form="modal-form-thruster-tool" @click="save('addThruster')">save</button>
                </div>
            </div>
        </DevelModal>

        <div class="tool-control">
            <button @click="openModal('addThruster')">add thruster</button>
        </div>

    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'ThrusterTool',
    data() {
        return {
            thruster: {
                organisation_id: '',
                model: '',
                count: '',
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
            const valid = this.validate( this.meta_data.validation_rules.thruster, this.thruster, 'thrusters')
            if( valid === 'true' ) {
                this.apiSave( 'thrusters', this.thruster, 'addThruster', modal)
                this.thruster.organisation_id = ''
                this.thruster.model = ''
                this.thruster.size = ''

            }
        }
    }
}
</script>
