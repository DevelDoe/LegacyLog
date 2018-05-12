<!--
@Author: Morgan Andree Ray
@Date:   12-05-2018
@Email:  info@andreeray.se
@Filename: MissionDetails.vue
@Last modified by:   Morgan Andree Ray
@Last modified time: 12-05-2018
@License: MIT
-->
<template lang="html">
    <div class="mission-details" v-if="mission._id === mission_id">
        <h4>{{ mission.name }}</h4>
        <h5>{{ mission.type }}</h5>
        <h5>payment: {{ mission.payment }}</h5>
        <h5 v-if="giver">from {{ giver.name }}</h5>
        <p v-html="$markdown.render( mission.description )"></p>
        <h6>Objectives:</h6>
        <ul>
            <li v-for="objective in mission.objectives">{{ objective.description }}</li>
        </ul>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'MissionDetails',
    props: [ 'mission' , 'mission_id' ],
    computed: {
        ...mapGetters([ 'characters' , 'organisations' ]),
        locations() {
            return this.$store.getters.locations || null
        },
        location() {
            return this.locations.find(location => location._id === this.mission.location_id) || null
        },
        charactersAndEntities () {
            return this.characters.concat(this.organisations) || null
        },
        giver () {
            return this.charactersAndEntities.find(p => p._id === this.mission.giver_id) || null
        },
    }
}
</script>
