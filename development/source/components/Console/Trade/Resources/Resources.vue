<!--
@Author: Morgan Andree Ray
@Date:   27-04-2018
@Email:  info@andreeray.se
@Filename: Resources.vue
@Last modified by:   DevelDoe
@Last modified time: 11-05-2018
@License: MIT
-->
<template lang="html">
    <div id="resources">
        <input v-model="filter_search" placeholder="search">
        <div v-for="(resource, i) in resources" :key="i" >
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
        ...mapGetters([ 'resources' ]),
        filterSearch() { return this.sortedResourcesList.filter( resource => {
            return resource.name.toLowerCase().indexOf( this.filter_search.toLowerCase() ) > -1
        })},
        sortedResourcesList () { return this.mixKeySrt( this.resources, 'name' ) }
    }
}
</script>

<style lang="css">
</style>
