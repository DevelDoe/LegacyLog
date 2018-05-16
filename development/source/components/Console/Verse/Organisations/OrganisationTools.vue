<!--
@Author: Morgan Andree Ray <DevelDoe>
@Date:   11-05-2018
@Email:  info@andreeray.se
@Filename: OrganisationTools.vue
@Last modified by:   Morgan Andree Ray
@Last modified time: 16-05-2018
@License: MIT
-->
<template lang="html">
    <div>
        <DevelModal modal="addOrg">
            <div slot="header"> <h2>Add Organisations</h2> </div>
            <div slot="bread">
                <form id="modal-form-org">
                    <input type="text" v-model="inputs.name" placeholder="Name">
                    <textarea v-model="inputs.description" rows="8" cols="80" placeholder="About"></textarea>
                    <select v-model="inputs.location_id">
                        <option v-for="( location, i) in locations" :value="location._id">{{ location.name }}</option>
                    </select>
                </form>
            </div>
            <div slot="footer">
                <div class="form-control">
                    <button form="modal-form-org" type="button" @click="save('addOrg')">save</button>
                </div>
            </div>
        </DevelModal>

        <button @click="openModal('addOrg')">add organisation</button>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'OrganisationTools',
    data () {
        return {
            inputs: {
                name: '',
                description: '',
                location_id: ''
            }
        }
    },
    computed: {
        ...mapGetters([ 'organisations' , 'meta_data', 'locations' ]),
    },
    methods: {
        openModal( modal ) {
            this.$bus.$emit('toggleModal', modal )
        },
        save ( modal ) {
            const organisation = {
                name        : this.inputs.name,
                description : this.inputs.description,
                location_id : this.inputs.location_id
            }
            const valid = this.validate( this.meta_data.validation_rules.organisation, organisation, 'organisations')
            if ( valid === 'true' ) {
                this.apiSave( 'organisations', organisation, 'addOrg' , modal  )
                this.inputs.name = ''
                this.inputs.description = ''
                this.inputs.location_id = ''
            }
        }
    }
}
</script>
