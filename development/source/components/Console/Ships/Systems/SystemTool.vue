<!--
@Author: Morgan Andree Ray
@Date:   18-05-2018
@Email:  info@andreeray.se
@Filename: SystemTool.vue
@Last modified by:   Morgan Andree Ray
@Last modified time: 19-05-2018
@License: MIT
-->
<template lang="html">
    <div class="system-tool">
        <div class="tool-control">
            <button @click="openModal('addSystem')">add system</button>
        </div>

    </div>
</template>

<script>
export default {
    methods: {
        openModal( modal ) {
            this.$bus.$emit( 'toggleModal', modal )
        },
        save( modal ) {
            const valid = this.validate( this.meta_data.validation_rules.avionic, this.avionic, 'avionics')
            if( valid === 'true' ) {
                this.apiSave( 'avionics', this.avionic, 'addAvionic', modal)
                this.avionic.name = ''
                this.avionic.organisation_id = ''
                this.avionic.model = ''
                this.avionic.size = ''

            }
        }
    }
}
</script>
