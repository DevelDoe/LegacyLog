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
    <div class="thruster-detail" v-if="thruster._id === thruster_id">
        <h3>{{ thruster.model }}</h3>
        <p>Category: {{ thruster.category }}</p>
        <p v-if="organisation">Manufacturer: {{ organisation.name }}</p>
        <p v-else>Manufacturer: TBD</p>
        <p>Count: {{ thruster.count }}</p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'ThrusterDetail',
    props: [ 'thruster', 'thruster_id' ],
    computed: {
        ...mapGetters([ 'organisations' ]),
        organisation() {
            return this.organisations.find( org => org._id === this.thruster.organisation_id)
        }
    }
}
</script>

<style lang="css">
</style>
