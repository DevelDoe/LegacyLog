<!--
@Author: Morgan Andree Ray
@Date:   11-05-2018
@Email:  info@andreeray.se
@Filename: LocationControls.vue
@Last modified by:   Morgan Andree Ray
@Last modified time: 11-05-2018
@License: MIT
-->
<template lang="html">
    <div v-if="location_id === location._id" >
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
        <button @click="openModal('updateLocation')">update</button>
        <button @click="del()">delete</button>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'OutpostControls',
    props: [ 'location' , 'location_id' , 'index' ],
    computed: { ...mapGetters([ 'meta_data' ]) },
    methods: {
        openModal( modal ) {
            this.$bus.$emit('toggleModal', modal )
        },
        update( modal ) {
            const valid = this.validate(  this.meta_data.validation_rules.location, this.location, 'locations', this.index)
            if ( valid === 'true' ) this.apiUpdate( 'locations', this.location, this.location_id, modal )
        },
        del() {
            this.apiDelete( 'locations', this.location_id, this.index )
        }
    },
}
</script>
