<!--
@Author: Morgan Andree Ray
@Date:   28-05-2018
@Email:  info@andreeray.se
@Filename: Ammos.vue
@Last modified by:   Morgan Andree Ray
@Last modified time: 28-05-2018
@License: MIT
-->
<template lang="html">
    <div class="ammos">
        <div v-for="ammo in ammos" class="btn" @click="$bus.$emit( 'setId', [ammo._id] )">
            <h5>{{ ammo.model }}</h5>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Ammos',
    computed: {
        ammos() {
            return this.$store.getters.ammos || null
        }
    }
}
</script>
