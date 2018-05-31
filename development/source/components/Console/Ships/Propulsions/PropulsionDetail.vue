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
    <div class="propulsion-detail" v-if="propulsion._id === propulsion_id">
        <h3>{{ propulsion.model }}</h3>
        <p>Category: {{ propulsion.category }}</p>
        <p v-if="organisation">Manufacturer: {{ organisation.name }}</p>
        <p v-else>Manufacturer: TBD</p>
        <p>Size: {{ propulsion.size }}</p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'PropulsionDetail',
    props: [ 'propulsion', 'propulsion_id' ],
    computed: {
        ...mapGetters([ 'organisations' ]),
        organisation() {
            return this.organisations.find( org => org._id === this.propulsion.organisation_id)
        }
    }
}
</script>
