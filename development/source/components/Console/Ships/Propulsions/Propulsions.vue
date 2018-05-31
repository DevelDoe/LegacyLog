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
    <div class="propulsions">
        <div v-for="propulsion in propulsions">
            <button @click="$bus.$emit( 'setId', [propulsion._id] )">{{ propulsion.model }}</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Propulsions',
    computed: {
        propulsions() {
            return this.$store.getters.propulsions || null
        }
    }
}
</script>
