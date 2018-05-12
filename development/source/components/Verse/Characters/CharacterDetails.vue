<!--
@Author: Morgan Andree Ray
@Date:   12-05-2018
@Email:  info@andreeray.se
@Filename: CharacterDetails.vue
@Last modified by:   Morgan Andree Ray
@Last modified time: 12-05-2018
@License: MIT
-->
<template lang="html">
    <div v-if="character._id === character_id">
        <h4>{{ character.name }}</h4>
        <h5 v-if="location">{{ location.name }}</h5>
        <p v-html="$markdown.render( character.description )"></p>
    </div>
</template>

<script>
export default {
    name: 'CharacterDetails',
    props: [ 'character' , 'character_id' ],
    computed: {
        locations() {
            return this.$store.getters.locations || null
        },
        location() {
            return this.locations.find(location => location._id === this.character.location_id)
        }
    }
}
</script>
