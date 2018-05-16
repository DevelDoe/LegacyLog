<!--
@Author: Morgan Andree Ray
@Date:   10-05-2018
@Email:  info@andreeray.se
@Filename: Verse.vue
@Last modified by:   Morgan Andree Ray
@Last modified time: 16-05-2018
@License: MIT
-->

<template>
    <div id="verse">

        <div class="wrapper">
            <section id="leftbar" class="screen">
                <div class="top">
                    <h3>The Verse</h3>
                    <div class="nav">
                        <select v-model="selected">
                            <option disabled  value="">Please select one</option>
                            <option selected>Locations</option>
                            <option>Organisations</option>
                            <option>Characters</option>
                            <option>Missions</option>
                        </select>
                    </div>
                </div>
                <div class="filters">
                    <FltrLocation v-if="selected === 'Locations'" />
                    <OrganisationFilter v-if="selected === 'Organisations'" />
                    <CharacterFilter v-if="selected === 'Characters'" />
                    <MissionFilter v-if="selected === 'Missions'" />
                </div>
                <div class="tools">
                    <LocationTools />
                    <OrganisationTools />
                    <CharacterTools  />
                    <MissionTools  />
                </div>
            </section>
            <section id="content" class="screen">
                <div class="hide-scroll">
                    <div class="viewport">
                        <Locations      v-if="selected === 'Locations'" />
                        <Organisations  v-if="selected === 'Organisations'" />
                        <Characters     v-if="selected === 'Characters'" />
                        <Missions       v-if="selected === 'Missions'" />
                    </div>
                </div>
            </section>
            <section id="rightbar" class="screen">
                <div class="top">
                    <MoonDetails         v-if="selected === 'Locations'" v-for="( location , i ) in locations"             :key=" 'moodet' + i " :location="location" :location_id="id" :location_type="location_type" />
                    <OutpostDetails      v-if="selected === 'Locations'" v-for="( location , i ) in locations"             :key=" 'outdet' + i " :location="location" :location_id="id" :location_type="location_type"/>
                    <StationDetails      v-if="selected === 'Locations'" v-for="( location , i ) in locations"             :key=" 'stadet' + i " :location="location" :location_id="id" :location_type="location_type"/>
                    <OrganisationDetails v-if="selected === 'Organisations'" v-for="( organisation , i ) in organisations" :key=" 'orgdet' + i " :organisation="organisation" :organisation_id="id" />
                    <CharacterDetails    v-if="selected === 'Characters'" v-for="( character , i ) in characters"          :key=" 'chadet' + i " :character="character" :character_id="id" />
                    <MissionDetails      v-if="selected === 'Missions'" v-for="( mission , i ) in missions"                :key=" 'misdet' + i " :mission="mission" :mission_id="id"/>
                </div>
                <div class="bottom">
                    <LocationControls     v-if="selected === 'Locations'" v-for="( location , i ) in locations"             :key=" 'loccon' + i " :location_id="id"      :location="location"         :index="i" :location_type="location_type" />
                    <OrganisationControls v-if="selected === 'Organisations'" v-for="( organisation , i ) in organisations" :key=" 'orgcon' + i " :organisation_id="id"  :organisation="organisation" :index="i" />
                    <CharacterControls    v-if="selected === 'Characters'" v-for="( character , i ) in characters"          :key=" 'chacon' + i " :character="character" :character_id="id"           :index="i" />
                    <MissionControls      v-if="selected === 'Missions'" v-for="( mission , i ) in missions"                :key=" 'miscon' + i " :mission="mission"     :mission_id="id"             :index="i" />
                </div>
            </section>
        </div>

    </div>
</template>

<script>
import Locations            from './Locations/Locations.vue'
import LocationTools        from './Locations/LocationTools.vue'
import MoonDetails          from './Locations/Moon/MoonDetails.vue'
import OutpostDetails       from './Locations/OutpostDetails.vue'
import StationDetails       from './Locations/StationDetails.vue'
import LocationControls     from './Locations/LocationControls.vue'
import FltrLocation         from './Locations/Filters/Filters.vue'

import Organisations        from './Organisations/Organisations.vue'
import OrganisationDetails  from './Organisations/OrganisationDetails.vue'
import OrganisationControls from './Organisations/OrganisationControls.vue'
import OrganisationTools    from './Organisations/OrganisationTools.vue'
import OrganisationFilter    from './Organisations/OrganisationFilter.vue'


import Characters           from './Characters/Characters.vue'
import CharacterDetails     from './Characters/CharacterDetails.vue'
import CharacterTools       from './Characters/CharacterTools.vue'
import CharacterControls    from './Characters/CharacterControls.vue'
import CharacterFilter      from './Characters/CharacterFilter.vue'

import Missions             from './Missions/Missions.vue'
import MissionDetails       from './Missions/MissionDetails.vue'
import MissionTools         from './Missions/MissionTools.vue'
import MissionControls      from './Missions/MissionControls.vue'
import MissionFilter        from './Missions/MissionFilter.vue'

import { mapGetters }       from 'vuex'
export default {
    name: 'Verse',
    data() {
        return {
            selected        : '',
            id              : '',
            location_type   : '',
        }
    },
    mounted() {
        this.$bus.$on('setId', payload => {
            let args = (payload.length === 1 ? [payload[0]] : Array.apply(null, payload) )
            let id   = args.shift() || null
            let type = args.shift() || null
            this.id = id
            if( type ) this.location_type = type
        })
    },
    computed: { ...mapGetters([ 'locations', 'organisations' , 'characters' , 'missions' ]) },
    components: {
        Locations,
        FltrLocation,
        LocationTools,
        MoonDetails,
        LocationControls,
        OutpostDetails,
        StationDetails,
        Organisations,
        OrganisationDetails,
        OrganisationControls,
        OrganisationTools,
        OrganisationFilter,
        Characters,
        CharacterDetails,
        CharacterTools,
        CharacterControls,
        CharacterFilter,
        Missions,
        MissionDetails,
        MissionTools,
        MissionControls,
        MissionFilter
    }
}
</script>

<style lang="css">
</style>
