<!--
@Author: Morgan Andree Ray
@Date:   16-05-2018
@Email:  info@andreeray.se
@Filename: locationLocationsResources.vue
@Last modified by:   Morgan Andree Ray
@Last modified time: 16-05-2018
@License: MIT
-->
<template lang="html">
    <div class="location-locations-resources">
        {{ resource_name }}
    </div>
</template>

<script>
export default {
    name: 'LocationLocationsResource',
    props: [ 'resource' ],
    computed: {
        resources() { return this.$store.getters.resources },
        resource_name() {
            return this.resources.find( resource => resource._id === this.resource.resource_id).name
        }
    }
}
</script>
