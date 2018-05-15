<!--
@Author: Morgan Andree Ray
@Date:   10-05-2018
@Email:  info@andreeray.se
@Filename: ResourceTools.vue
@Last modified by:   Morgan Andree Ray
@Last modified time: 15-05-2018
@License: MIT
-->
<template lang="html">
    <div id="resource-tools">
        <DevelModal modal="addResource">
            <div slot="header"> <h2>Add Resource</h2> </div>
            <div slot="bread">
                <input type="text" v-model="resource.name" placeholder="Name">
            </div>
            <div slot="footer">
                <div class="form-control">
                    <button type="button" @click="save('addResource')">save</button>
                </div>
            </div>
        </DevelModal>

        <button @click="openModal('addResource')">add new resource</button>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'ResourceTools',
    computed: {
        ...mapGetters([ 'resources', 'meta_data' ])
    },
    data() {
        return {
            resource: {
                name: ''
            }
        }
    },
    methods: {
        save( modal ) {
            const valid = this.validate( this.meta_data.validation_rules.resource, this.resource, 'resources' )
            if( valid === 'true' ) {
                this.apiSave( 'resources', this.resource, 'addResource', modal  )
                this.resource.name = ''
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
