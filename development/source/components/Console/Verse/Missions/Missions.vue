<!--
@Author: Morgan Andree Ray <DevelDoe>
@Date:   27-04-2018
@Email:  info@andreeray.se
@Filename: Organisations.vue
@Last modified by:   Morgan Andree Ray
@Last modified time: 15-05-2018
@License: MIT
-->
<template lang="html">
    <div id="organisations">
        <div v-for="(mission, index) in filter"  >
            <button @click="$bus.$emit('setId', [mission._id] )">{{ mission.name }}</button>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'Missions',
    computed: {
        ...mapGetters([ 'missions', 'missions_search' ]),
        filter() {
            return this.sortedMissionList.filter( mission => {
                return mission.name.toLowerCase().indexOf( this.missions_search.toLowerCase() ) > -1
            })
        },
        sortedMissionList() {
            return this.mixKeySrt( this.missions, 'name' )
        }
    }
}
</script>
