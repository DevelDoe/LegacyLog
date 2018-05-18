<!--
@Author: Morgan Andree Ray
@Date:   16-05-2018
@Email:  info@andreeray.se
@Filename: Aopoa.vue
@Last modified by:   Morgan Andree Ray
@Last modified time: 17-05-2018
@License: MIT
-->
<template lang="html">
    <div class="aopoa">
        <div v-for="ship in ships">
            <button @click="$bus.$emit( 'setId', [ship._id] )">{{ ship.name }} </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Ships',
    computed: {
        ships() {
            return this.$store.getters.ships || null
        }
    }
}
</script>
