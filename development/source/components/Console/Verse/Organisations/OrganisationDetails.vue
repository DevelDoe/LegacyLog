<!--
@Author: Morgan Andree Ray <DevelDoe>
@Date:   11-05-2018
@Email:  info@andreeray.se
@Filename: OrganisationDetails.vue
@Last modified by:   Morgan Andree Ray
@Last modified time: 17-05-2018
@License: MIT
-->
<template lang="html">
    <div class="organisation-details" v-if="organisation._id === organisation_id">
        <h4>{{ organisation.name }}</h4>
        <p>{{ organisation.type }}</p>
        <h5 v-if="location">{{ location.name }}</h5>
        <p v-html="$markdown.render( organisation.description )"></p>
    </div>
</template>

<script>
export default {
    name: 'OrganisationDetails',
    props: [ 'organisation' , 'organisation_id' ],
    computed: {
        locations() {
            return this.$store.getters.locations || null
        },
        location() {
            return this.locations.find(location => location._id === this.organisation.location_id) || null
        }
    }
}
</script>
