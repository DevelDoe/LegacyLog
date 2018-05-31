<!--
@Author: Morgan Andree Ray
@Date:   22-05-2018
@Email:  info@andreeray.se
@Filename: MissileRacks.vue
@Last modified by:   Morgan Andree Ray
@Last modified time: 22-05-2018
@License: MIT
-->
<template lang="html">
    <div class="missile-racks">
        <div v-for="missile_rack in missile_racks">
            <button @click="$bus.$emit( 'setId', [missile_rack._id] )">{{ missile_rack.model }} </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MissileRacks',
    computed: {
        missile_racks() { return this.$store.getters.missile_racks || null }
    }
}
</script>

<style lang="css">
</style>
