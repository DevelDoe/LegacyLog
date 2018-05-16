<!--
@Author: Morgan Andree Ray <DevelDoe>
@Date:   11-05-2018
@Email:  info@andreeray.se
@Filename: OrganisationControls.vue
@Last modified by:   Morgan Andree Ray
@Last modified time: 16-05-2018
@License: MIT
-->
<template lang="html">
    <div v-if="organisation._id === organisation_id ">
        <DevelModal modal="updateOrg">
            <div slot="header">
                <h2>Update Organisation</h2>
            </div>
            <div slot="bread">
                <form id="modal-form-org-update">
                    <input type="text" v-model="organisation.name" placeholder="Name">
                    <textarea v-model="organisation.description" rows="8" cols="80" placeholder="Description"></textarea>
                    <select v-model="organisation.location_id">
                        <option v-for="( location , i ) in locations" :value="location._id">{{ location.name }}</option>
                    </select>
                </form>
            </div>
            <div slot="footer">
                <div class="form-control">
                    <button form="modal-form-org-update" @click="update('updateOrg')">save</button>
                </div>
            </div>
        </DevelModal>
        <div class="">
            <button @click="openModal('updateOrg')">update</button>
        </div>
        <div class="">
            <button @click="del()">delete</button>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'OrganisationControls',
    props: [ 'organisation' , 'organisation_id' , 'index' ],
    computed: {
        ...mapGetters([ 'meta_data', 'locations' ]),
        srtLocLst() {
            return this.mixKeySrt( this.locations, 'name' )
        },
    },
    methods: {
        openModal( modal ) {
            this.$bus.$emit('toggleModal', modal )
        },
        del() {
            this.apiDelete( 'organisations', this.organisation_id )
            this.$store.dispatch('delOrganisation', this.index )
        },
        update( modal ) {
            const valid = this.validate( this.meta_data.validation_rules.organisation, this.organisation, 'organisations', this.index)
            if( valid === 'true' ) {
                this.$store.dispatch('delOrganisation', this.index)
                this.apiUpdate( 'organisations', this.organisation, this.organisation_id, 'addOrg' , modal )
            }
        }
    }
}
</script>
