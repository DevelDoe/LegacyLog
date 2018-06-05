<!--
@Author: Morgan Andree Ray
@Date:   02-06-2018
@Email:  info@andreeray.se
@Filename: WeaponFilter.vue
@Last modified by:   Morgan Andree Ray
@Last modified time: 02-06-2018
@License: MIT
-->
<template lang="html">
    <div class="weapon-filter">
        <input v-model="weapon_search" placeholder="search">
        <Size v-for="(size ,i) in meta_data.weapon_sizes" :key="i" :size="size" />
    </div>
</template>

<script>
import Size from './Size.vue'
import { mapGetters } from 'vuex'
export default {
    name: 'WeaponFilter',
    data() {
        return {
            weapon_search: ''
        }
    },
    computed: { ...mapGetters([ 'meta_data' ]) },
    updated() { this.$store.dispatch('setWeaponSearch', this.weapon_search) },
    components: { Size }
}
</script>

<style lang="css">
</style>
