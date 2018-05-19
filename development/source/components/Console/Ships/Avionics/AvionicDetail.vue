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
    <div class="avionic-detail" v-if="avionic._id === avionic_id">
        <h3>{{ avionic.model }}</h3>
        <p v-if="organisation">Manufacturer: {{ organisation.name }}</p>
        <p v-else>Manufacturer: TBD</p>
        <p>Size: {{ avionic.size }}</p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'AvionicDetail',
    props: [ 'avionic', 'avionic_id' ],
    computed: {
        ...mapGetters([ 'organisations' ]),
        organisation() {
            return this.organisations.find( org => org._id === this.avionic.organisation_id)
        }
    }
}
</script>

<style lang="css">
</style>
