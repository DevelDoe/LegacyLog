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
    <div class="avionic-control" v-if="avionic._id === avionic_id">

        <DevelModal modal="updateAvionic">
            <div slot="header">
                <h2>Update {{ avionic.model }}</h2>
            </div>
            <div slot="bread">
                <form id="modal-form-avionic-update">
                    <input placeholder="Model" v-model="avionic.model">
                    <div class="">
                        <select v-model="avionic.organisation_id">
                            <option value="" selected>Manufacturer</option>
                            <option v-for="( organisation, i ) in manufacturers" :value="organisation._id" >{{ organisation.name }}</option>
                        </select>
                    </div>
                    <div class="">
                        <select v-model="avionic.category">
                            <option value="" selected>Category</option>
                            <option value="Radar">Radar</option>
                            <option value="Computer">Computer</option>
                        </select>
                    </div>
                    <div class="">
                        <select v-model="avionic.size">
                            <option value="" selected>Size</option>
                            <option value="S">S</option>
                            <option value="V">V</option>
                        </select>
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
            <button @click="openModal('updateAvionic')">update</button>
        </div>
        <div class="">
            <button @click="del()">delete</button>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'AvionicControl',
    props: [ 'avionic', 'avionic_id', 'index'],
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
            this.apiDelete( 'avionics', this.avionic_id )
            this.$store.dispatch('delAvionic', this.avionic_id )
        },
        update( modal ) {
            const valid = this.validate( this.meta_data.validation_rules.avionic, this.avionic, 'avionics', this.index)
            if ( valid === 'true') {
                this.$store.dispatch('delAvionic', this.avionic_id)
                this.apiUpdate( 'avionics', this.avionic, this.avionic_id, 'addAvionic' , modal )
            }
        }
    }
}
</script>
