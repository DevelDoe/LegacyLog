<!--
@Author: Morgan Andree Ray
@Date:   10-05-2018
@Email:  info@andreeray.se
@Filename: ResourceControls.vue
@Last modified by:   Morgan Andree Ray
@Last modified time: 16-05-2018
@License: MIT
-->
<template lang="html">
    <div id="resource-controls" v-if="resource._id === resource_id">

        <DevelModal modal="updateResource">
            <div slot="header">
                <h2>Update Resource</h2>
            </div>
            <div slot="bread">
                <form class="form-update-resource" action="index.html" method="post">
                    <input type="text" v-model="resource.name" placeholder="Name" />
                </form>
            </div>
            <div slot="footer">
                <div class="form-control">
                    <button form="form-update-resource" @click="update('updateResource')">save</button>
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
    computed: { ...mapGetters([ 'meta_data', 'resources' ]) },
    methods: {
        del() {
            this.apiDelete( 'resources', this.resource_id, this.index),
            this.resources.splice(this.index, 1)
        },
        update( modal ) {
            const valid = this.validate( this.meta_data.validation_rules.resource, this.resource, 'resources', this.index )
            if( valid === 'true' ) {
                this.$store.dispatch('delResource', this.index)
                this.apiUpdate( 'resources', this.resource, this.resource_id, 'addResource' , modal )
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
