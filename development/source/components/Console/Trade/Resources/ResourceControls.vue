<!--
@Author: Morgan Andree Ray
@Date:   10-05-2018
@Email:  info@andreeray.se
@Filename: ResourceControls.vue
@Last modified by:   Morgan Andree Ray
@Last modified time: 11-05-2018
@License: MIT
-->
<template lang="html">
    <div id="resource-controls" v-if="resource._id === resource_id">

        <DevelModal modal="updateResource">
            <div slot="header">
                <h2>Update Resource</h2>
            </div>
            <div slot="bread">
                <input type="text" v-model="input.name" placeholder="Name" />
            </div>
            <div slot="footer">
                <div class="form-control">
                    <button @click="update('updateResource')">save</button>
                </div>
            </div>
        </DevelModal>

        <button @click="openModal('updateResource')">update</button>
        <button @click="del()">delete</button>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'ResourceControls',
    props: [ 'resource_id', 'index', 'resource' ],
    data() {
        return {
            input: {
                name: ''
            }
        }
    },
    computed: { ...mapGetters([ 'meta_data', 'resources' ]) },
    methods: {
        del() {
            this.apiDelete( 'resources', this.resource_id, this.index),
            this.resources.splice(this.index, 1)
        },
        update( modal ) {
            const resource = {
                _id: this.resource_id,
                name: this.input.name
            }
            const valid = this.validate( this.meta_data.validation_rules.resource, resource, 'resources' )
            if( valid === 'true' ) {
                this.resources.splice(this.index, 1)
                this.apiUpdate( 'resources', resource, this.resource_id, modal )
                this.resources.push(resource)
            }
        },
        openModal( modal ) {
            this.$bus.$emit('toggleModal', modal )
        }
    }
}
</script>

<style lang="css">
</style>
