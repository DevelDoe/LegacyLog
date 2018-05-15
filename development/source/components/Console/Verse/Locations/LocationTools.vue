<!--
@Author: Morgan Andree Ray
@Date:   10-05-2018
@Email:  info@andreeray.se
@Filename: LocationTools.vue
@Last modified by:   Morgan Andree Ray
@Last modified time: 15-05-2018
@License: MIT
-->
<template lang="html">
    <div id="locations-tools">
        <DevelModal modal="addLocation">
            <div slot="header"> <h2>Add Location</h2> </div>
            <div slot="bread">
                <form id="modal-form-location">
                    <input type="text" v-model="inputs.location_name" placeholder="Name">
                    type:
                    <select v-model="inputs.location_type">
                        <option v-for='location in meta_data.location_types' :value="location" >{{ location }}</option>
                    </select>
                    location:
                    <select v-model="inputs.location_id">
                        <option v-for='location in locations' :value="location._id" >{{ location.name }}</option>
                    </select>
                </form>
            </div>
            <div slot="footer">
                <div class="form-control">
                    <button type="button" @click="saveLocation('addLocation')">save</button>
                </div>
            </div>
        </DevelModal>

        <DevelModal modal="addResource">
            <div slot="header"><h2>Add Resource</h2></div>
            <div slot="bread">
                <form id="modal-form-resource">
                    resource:
                    <select v-model="inputs.resource_id">
                        <option v-for='resource in resources' :value="resource._id" >{{ resource.name }}</option>
                    </select>
                    location:
                    <select v-model="inputs.location_id">
                        <option v-for='location in locations' :value="location._id" >{{ location.name }}</option>
                    </select>
                    <input type="text" v-model="inputs.resource_sell" placeholder="sell">
                    <input type="text" v-model="inputs.resource_buy" placeholder="buy">
                </form>
            </div>
            <div slot="footer">
                <div class="form-control">
                    <button type="button" @click="saveResource('addResource')">save</button>
                </div>
            </div>
        </DevelModal>

        <button @click="openModal('addLocation')">add location</button>
        <button @click="openModal('addResource')">add resource</button>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'LocationsTools',
    data () {
        return {
            inputs: {
                location_name: '',
                location_type: '',
                location_id: '',
                resource_id: '',
                resource_sell: '',
                resource_buy: ''
            }
        }
    },
    computed: { ...mapGetters([ 'locations' , 'meta_data', 'resources' ]) },
    methods: {
        openModal( modal ) {
            this.$bus.$emit('toggleModal', modal )
        },
        saveLocation( modal ) {
            const location = {
                name: this.inputs.location_name,
                type: this.inputs.location_type,
                resources: [],
                location_id: this.inputs.location_id
            }

            const valid = this.validate( this.meta_data.validation_rules.location, location, 'locations' )
            if( valid === 'true' ) {
                this.apiSave( 'locations', location, 'addLocation' , modal )
                this.inputs.location_name = ''
                this.inputs.location_type = ''
            }
        },
        saveResource( modal ) {
            const resource = {
                resource_id: this.inputs.resource_id,
                sell: this.inputs.resource_sell,
                buy: this.inputs.resource_buy
            }
            const location = this.locations.find(location => location._id === this.inputs.location_id)
            const valid = this.validate( this.meta_data.validation_rules.location.resources, resource, 'locations')
            if( valid === 'true' ) {
                location.resources.push( resource )
                this.$store.dispatch('delLocation', this.index)
                this.apiUpdate( 'locations', location, location._id, 'addLocation' , modal )
                this.inputs.resource_id = ''
                this.inputs.location_id = ''
                this.inputs.sell = ''
                this.inputs.buy = ''
            }
        }
    }
}
</script>

<style lang="css">
</style>
