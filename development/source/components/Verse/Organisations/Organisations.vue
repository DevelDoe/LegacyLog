<!--
@Author: Morgan Andree Ray <DevelDoe>
@Date:   27-04-2018
@Email:  info@andreeray.se
@Filename: Organisations.vue
@Last modified by:   DevelDoe
@Last modified time: 11-05-2018
@License: MIT
-->
<template lang="html">
    <div id="Organisations">
        <div class="hide-scroll">
            <div class="viewport">
                <div v-for="(organisation, index) in filter"  >
                    <button @click="$bus.$emit('setId', [organisation._id] )">{{ organisation.name }}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'Organisations',
    computed: {
        ...mapGetters([ 'organisations', 'organisation_search' ]),
        filter() {
            return this.sortedOrganisationList.filter( organisation => {
                return organisation.name.toLowerCase().indexOf( this.organisation_search.toLowerCase() ) > -1
            })
        },
        sortedOrganisationList() {
            return this.mixKeySrt( this.organisations, 'name' )
        }
    }
}
</script>
