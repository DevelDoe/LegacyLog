<!--
@Author: Morgan Andree Ray
@Date:   11-05-2018
@Email:  info@andreeray.se
@Filename: LocationControls.vue
@Last modified by:   Morgan Andree Ray
@Last modified time: 15-05-2018
@License: MIT
-->
<template lang="html">
    <div v-if="location_id === location._id " >
        <span v-if="location_type === 'Moon'" >
            <DevelModal modal="updateLocation">
                <div slot="header"> <h2>Update Location</h2> </div>
                <div slot="bread">
                    <form id="modal-form">
                        <input type="text" v-model="location.name" placeholder="Name">
                        type:
                        <select v-model="location.type">
                            <option v-for='location in meta_data.location_types' :value="location" >{{ location }}</option>
                        </select>
                    </form>
                </div>
                <div slot="footer">
                    <div class="form-control">
                        <button @click="update('updateLocation')">save</button>
                    </div>
                </div>
            </DevelModal>
            <div class="">
                <button @click="openModal('updateLocation')">update</button>
            </div>
            <div class="">
                <button @click="del()">delete</button>
            </div>
        </span>

        <span v-if="location_type === 'Outpost'" >
            <DevelModal modal="updateLocation">
                <div slot="header"> <h2>Update Location</h2> </div>
                <div slot="bread">
                    <form id="modal-form">
                        <input type="text" v-model="location.name" placeholder="Name">
                        <div class="">
                            <h6>Type:</h6>
                            <select v-model="location.type">
                                <option v-for='location in meta_data.location_types' :value="location" >{{ location }}</option>
                            </select>
                        </div>
                        <div class="">
                            <h6>Resources</h6>
                            <span v-for="resource in locationResources">
                                <div class="">
                                    <button @click="inputs.name = resource.name; inputs._id = resource._id; openModal('updateLocation','updateResource')"> {{ resource.name }} </button>
                                </div>
                            </span>
                        </div>
                    </form>
                </div>
                <div slot="footer">
                    <div class="form-control">
                        <button @click="update('updateLocation')">save</button>
                    </div>
                </div>
            </DevelModal>

            <DevelModal modal="updateResource">
                <div slot="header"><h2>update resource</h2></div>
                <div slot="bread">
                    <h3>{{ inputs.name }}</h3>
                    <form id="modal-form-resource">
                        <input type="text" v-model="inputs.sell" placeholder="sell">
                        <input type="text" v-model="inputs.buy" placeholder="buy">
                    </form>
                </div>
                <div slot="footer">
                    <div class="form-control">
                        <button type="button" @click="updateResource('updateResource')">save</button>
                    </div>
                </div>
            </DevelModal>


            <div class="">
                <button @click="openModal('updateLocation')">update</button>
            </div>
            <div class="">
                <button @click="del()">delete</button>
            </div>
        </span>

        <span v-if="location_type === 'Station'" >
            <DevelModal modal="updateLocation">
                <div slot="header"> <h2>Update Station</h2> </div>
                <div slot="bread">
                    <form id="modal-form">
                        <input type="text" v-model="location.name" placeholder="Name">
                        <div class="">
                            <h6>Type:</h6>
                            <select v-model="location.type">
                                <option v-for='location in meta_data.location_types' :value="location" >{{ location }}</option>
                            </select>
                        </div>
                        <div class="">
                            <h6>Resources</h6>
                            <span v-for="resource in locationResources">
                                <div class="">
                                    <button @click="inputs.name = resource.name; inputs._id = resource._id; openModal('updateLocation','updateResource')"> {{ resource.name }} </button>
                                </div>
                            </span>
                        </div>
                    </form>
                </div>
                <div slot="footer">
                    <div class="form-control">
                        <button @click="update('updateLocation')">save</button>
                    </div>
                </div>
            </DevelModal>

            <DevelModal modal="updateResource">
                <div slot="header"><h2>update resource</h2></div>
                <div slot="bread">

                    <h3>{{ inputs.name }}</h3>
                    <form id="modal-form-resource">
                        <input type="text" v-model="inputs.sell" placeholder="sell">
                        <input type="text" v-model="inputs.buy" placeholder="buy">
                    </form>
                </div>
                <div slot="footer">
                    <div class="form-control">
                        <button type="button" @click="updateResource('updateResource')">save</button>
                    </div>
                </div>
            </DevelModal>

            <div class="">
                <button @click="openModal('updateLocation')">update</button>
            </div>
            <div class="">
                <button @click="del()">delete</button>
            </div>
        </span>

    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'LocationControls',
    props: [ 'location' , 'location_id' , 'index', 'location_type' ],
    data() {
        return {
            inputs: {
                name: '',
                _id: '',
                sell: '',
                buy: ''
            }
        }
    },
    computed: {
        ...mapGetters([ 'meta_data', 'resources' ]),
        locationResources() {
            let resources = []
            this.location.resources.forEach(locationResource => {
                let resource = {}
                resource._id  = locationResource.resource_id
                resource.name = this.resources.find(resource => resource._id === locationResource.resource_id).name
                resource.buy  = locationResource.buy
                resource.sell = locationResource.sell
                resources.push(resource)
            })
            return resources
        }
    },
    methods: {
        openModal( ) {
            const args = (arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments))
            const modal1 = args.shift() || null
            const modal2 = args.shift() || null
            this.$bus.$emit('toggleModal', modal1 )
            if(modal2) this.$bus.$emit('toggleModal', modal2 )
        },
        update( modal ) {
            const valid = this.validate(  this.meta_data.validation_rules.location, this.location, 'locations', this.index)
            if ( valid === 'true' ) {
                this.$store.dispatch('delLocation', this.location_id)
                this.apiUpdate( 'locations', this.location, this.location_id, 'addLocation' , modal )
            }
        },
        updateResource( modal ) {
            let location = this.location
            let resources = []
            let resource = {}
            location.resources = this.location.resources.forEach(resource => {
                if( resource.resource_id === this.inputs._id) {
                    resource.buy = this.inputs.buy
                    resource.sell = this.inputs.sell
                }
                if(resource.buy !== '' && resource.sell !== '' ) return
                else resources.push(resource)
            })
            location.resources = resources
            const valid = this.validate(  this.meta_data.validation_rules.location, location, 'locations', this.index)
            if ( valid === 'true' ) {
                this.$store.dispatch('delLocation', this.location_id)
                this.apiUpdate( 'locations', location, location._id, 'addLocation' , modal )
            }
        },
        addResource ( modal ) {
            let location = this.location
            let resource = this.resources.find(r => r._id === inputs._id)
            location.resources.push()
        },
        del() {
            this.apiDelete( 'locations', this.location_id )
            this.$store.dispatch('delLocation', this.location_id)
        }
    },
}
</script>
