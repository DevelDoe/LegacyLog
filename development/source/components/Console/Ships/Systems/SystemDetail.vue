<!--
@Author: Morgan Andree Ray
@Date:   17-05-2018
@Email:  info@andreeray.se
@Filename: AvionicDetails.vue
@Last modified by:   Morgan Andree Ray
@Last modified time: 19-05-2018
@License: MIT
-->
<template lang="html">
    <div class="system-detail" v-if="system._id === system_id">
        <h3>{{ system.model }}</h3>
        <p>Category: {{ system.category }}</p>
        <p v-if="organisation">Manufacturer: {{ organisation.name }}</p>
        <p v-else>Manufacturer: TBD</p>
        <p>Size: {{ system.size }}</p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'SystemDetail',
    props: [ 'system', 'system_id' ],
    computed: {
        ...mapGetters([ 'organisations' ]),
        organisation() {
            return this.organisations.find( org => org._id === this.system.organisation_id)
        }
    }
}
</script>

<style lang="css">
</style>
