<!--
@Author: Morgan Andree Ray
@Date:   17-05-2018
@Email:  info@andreeray.se
@Filename: Avionics.vue
@Last modified by:   Morgan Andree Ray
@Last modified time: 20-05-2018
@License: MIT
-->
<template lang="html">
    <div class="thrusters">
        <div v-for="thruster in thrusters">
            <button @click="$bus.$emit( 'setId', [thruster._id] )">{{ thruster.model }}  </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Thrusters',
    computed: {
        thrusters() {
            return this.$store.getters.thrusters || null
        }
    }
}
</script>
