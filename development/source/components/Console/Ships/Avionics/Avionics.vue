<!--
@Author: Morgan Andree Ray
@Date:   17-05-2018
@Email:  info@andreeray.se
@Filename: Avionics.vue
@Last modified by:   Morgan Andree Ray
@Last modified time: 19-05-2018
@License: MIT
-->
<template lang="html">
    <div class="avionics">
        <div v-for="avionic in avionics">
            <button @click="$bus.$emit( 'setId', [avionic._id] )">{{ avionic.model }} - size: {{ avionic.size }} </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Avionics',
    computed: {
        avionics() {
            return this.$store.getters.avionics || null
        }
    }
}
</script>

<style lang="css">
</style>
