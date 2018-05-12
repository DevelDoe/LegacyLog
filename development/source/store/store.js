/**
 * @Author: Morgan Andree Ray
 * @Date:   08-05-2018
 * @Email:  info@andreeray.se
 * @Filename: store.js
 * @Last modified by:   Morgan Andree Ray
 * @Last modified time: 12-05-2018
 * @License: MIT
 */
import Vue from 'vue'
import Vux from 'vuex'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vux)
const store = new Vux.Store({
    state: {
        user: { username: '', token: '' },
        users: '',
        isConnected: false,
        socketMessage: '',
        meta_data: [],
        locations: [],
        location_search: '',
        resources: [],
        resource_search: '',
        organisations: [],
        organisation_search: '',
        characters: [],
        characters_search: '',
        missions: [],
        missions_search: ''
    },
    getters: {
        username:            state => { return state.user.username },
        token:               state => { return state.user.token },
        users:               state => { return state.users },
        connected:           state => { return state.isConnected },
        meta_data:           state => { return state.meta_data },
        resources:           state => { return state.resources },
        resource_search:     state => { return state.resource_search },
        locations:           state => { return state.locations },
        location_search:     state => { return state.location_search },
        organisations:       state => { return state.organisations },
        organisation_search: state => { return state.organisation_search },
        characters:          state => { return state.characters },
        characters_search:   state => { return state.characters_search },
        missions:            state => { return state.missions },
        missions_search:     state => { return state.missions_search }
    },
    mutations: {
        login:                 ( state , payload ) => { state.user.username = payload[0]; state.user.token = payload[1] },
        setUsers:              ( state , payload ) => { state.users = payload },
        SOCKET_CONNECT         ( state ) { state.isConnected = true; },
        SOCKET_DISCONNECT      ( state ) { state.isConnected = false; },
        SOCKET_updateChat      ( state , message ) { state.socketMessage = message },
        setLocations:          ( state , payload ) => { state.locations = payload },
        delLocation:           ( state , payload ) => { state.locations.splice( payload , 1 ) },
        setMetaData:           ( state , payload ) => { state.meta_data = payload },
        setLocationSearch:     ( state , payload ) => { state.location_search = payload },
        setResources:          ( state , payload ) => { state.resources = payload },
        delResource:           ( state , payload ) => { state.resources.splice( payload , 1 ) },
        setResourceSearch:     ( state , payload ) => { state.resource_search = payload },
        setOrganisations:      ( state , payload ) => { state.organisations = payload },
        delOrganisation:       ( state , payload ) => { state.organisations.splice( payload , 1 ) },
        setOrganisationSearch: ( state , payload ) => { state.organisation_search = payload },
        setCharacters:         ( state , payload ) => { state.characters = payload },
        delCharacter:          ( state , payload ) => { state.characters.splice( payload , 1 ) },
        setCharactersSearch:   ( state , payload ) => { state.characters_search = payload },
        setMissions:           ( state , payload ) => { state.missions = payload },
        delMission:            ( state , payload ) => { state.missions.splice( payload , 1 ) },
        setMissionsSearch:     ( state , payload ) => { state.missions_search = payload }
    },
    actions: {
        login:               ( cxt , payload ) => { cxt.commit('login', payload) },
        setUsers:            ( cxt , payload ) => { cxt.commit('setUsers', payload) },
        setLocations:        ( ctx , payload ) => { ctx.commit( 'setLocations' , payload ) },
        delLocation:         ( ctx , payload ) => { ctx.commit( 'delLocation', payload) },
        setMetaData:         ( ctx , payload ) => { ctx.commit( 'setMetaData' , payload ) },
        setLocationSearch:   ( ctx , payload ) => { ctx.commit( 'setLocationSearch' , payload ) },
        setResources:        ( ctx , payload ) => { ctx.commit( 'setResources' , payload ) },
        delResource:         ( ctx , payload ) => { ctx.commit( 'delResource', payload) },
        setResourceSearch:   ( ctx , payload ) => { ctx.commit( 'setResourceSearch' , payload ) },
        setOrganisations:    ( ctx , payload ) => { ctx.commit( 'setOrganisations' , payload ) },
        delOrganisation:     ( ctx , payload ) => { ctx.commit( 'delOrganisation', payload) },
        setResourceSearch:   ( ctx , payload ) => { ctx.commit( 'setResourceSearch' , payload ) },
        setCharacters:       ( ctx , payload ) => { ctx.commit( 'setCharacters' , payload ) },
        delCharacter:        ( ctx , payload ) => { ctx.commit( 'delCharacter', payload) },
        setCharactersSearch: ( ctx , payload ) => { ctx.commit( 'setCharactersSearch' , payload ) },
        setMissions:         ( ctx , payload ) => { ctx.commit( 'setMissions' , payload ) },
        delMission:          ( ctx , payload ) => { ctx.commit( 'delMission', payload) },
        setMissionsSearch:   ( ctx , payload ) => { ctx.commit( 'setMissionsSearch' , payload ) }

    },
    plugins: [createPersistedState()]
})

export default store
