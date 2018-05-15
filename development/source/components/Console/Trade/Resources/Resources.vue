<!--
@Author: Morgan Andree Ray
@Date:   27-04-2018
@Email:  info@andreeray.se
@Filename: Resources.vue
@Last modified by:   Morgan Andree Ray
@Last modified time: 15-05-2018
@License: MIT
-->
<template lang="html">
    <div id="resources">
        <div v-for="(resource, i) in filterSearch" :key="i" >
            <button @click="$bus.$emit('setResourceId', resource._id)">
                {{ resource.name }}
            </button>
        </div>

    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'Resources',
    computed: {
        ...mapGetters([ 'resources' , 'resources_search']),
        filterSearch() { return this.sortedResourcesList.filter( resource => {
            return resource.name.toLowerCase().indexOf( this.resources_search.toLowerCase() ) > -1
        })},
        sortedResourcesList () { return this.mixKeySrt( this.resources, 'name' ) }
    }
}
</script>

<style lang="css">
</style>
