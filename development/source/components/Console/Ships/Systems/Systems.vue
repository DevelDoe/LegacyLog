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
    <div class="systems">
        <div v-for="system in systems">
            <button @click="$bus.$emit( 'setId', [system._id] )">{{ system.model }} </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Systems',
    computed: {
        systems() {
            return this.$store.getters.systems || null
        }
    }
}
</script>
