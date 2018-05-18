/**
 * @Author: Morgan Andree Ray
 * @Date:   08-05-2018
 * @Email:  info@andreeray.se
 * @Filename: store.js
 * @Last modified by:   Morgan Andree Ray
 * @Last modified time: 17-05-2018
 * @License: MIT
 */
import Vue from 'vue'
import Vux from 'vuex'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vux)
const store = new Vux.Store({
    state: {
        loading: true,
        user: { id: '', token: '' },
        users: '',
        user_search: '',
        socketMessage: '',
        meta_data: [],
        locations: [],
        location_search: '',
        resources: [],
        resources_search: '',
        organisations: [],
        organisation_search: '',
        characters: [],
        characters_search: '',
        missions: [],
        missions_search: '',
        chats: [],
        active_org_link: '',
        show_nav: '',
        response: '',
        ships: [],
        ships_search: '',
        avionics: [],
        avionics_search: ''
    },
    getters: {
        loading:             state => { return state.loading },
        user:                state => { return state.user },
        token:               state => { return state.user.token },
        users:               state => { return state.users },
        user_search:         state => { return state.user_search},
        meta_data:           state => { return state.meta_data },
        resources:           state => { return state.resources },
        resources_search:    state => { return state.resources_search },
        locations:           state => { return state.locations },
        location_search:     state => { return state.location_search },
        organisations:       state => { return state.organisations },
        organisation_search: state => { return state.organisation_search },
        characters:          state => { return state.characters },
        characters_search:   state => { return state.characters_search },
        missions:            state => { return state.missions },
        missions_search:     state => { return state.missions_search },
        chats:               state => { return state.chats },
        active_org_link:     state => { return state.active_org_link},
        show_nav:            state => { return state.show_nav},
        response:            state => { return state.response },
        ships:               state => { return state.ships },
        ships_search:        state => { return state.ships_search},
        avionics:            state => { return state.avionics },
        avionics_search:     state => { return state.avionics_search }
    },
    mutations: {
        setLoading:            ( state , payload ) => { state.loading = payload },
        login:                 ( state , payload ) => { state.user.id = payload[0]; state.user.token = payload[1]; },
        logout:                ( state , payload ) => { state.user = {}; state.user.token = '' },
        setUsers:              ( state , payload ) => { state.users = payload },
        addUser:               ( state , payload ) => { state.users.push(payload) },
        removeUser:            ( state , payload ) => { state.users.splice( payload , 1 ) },
        SOCKET_updateChat      ( state , message ) { state.socketMessage = message },
        setLocations:          ( state , payload ) => { state.locations = payload },
        addLocation:           ( state , payload ) => { state.locations.push(payload) },
        delLocation:           ( state , payload ) => {
            state.locations = state.locations.filter( location => {
                return location._id != payload
            })
        },
        setMetaData:           ( state , payload ) => { state.meta_data = payload },
        setLocationSearch:     ( state , payload ) => { state.location_search = payload },
        setResources:          ( state , payload ) => { state.resources = payload },
        addResource:           ( state , payload ) => { state.resources.push(payload) },
        delResource:           ( state , payload ) => { state.resources.splice( payload , 1 ) },
        setResourceSearch:     ( state , payload ) => { state.resources_search = payload },
        setOrganisations:      ( state , payload ) => { state.organisations = payload },
        addOrg:                ( state , payload ) => { state.organisations.push(payload) },
        delOrganisation:       ( state , payload ) => { state.organisations.splice( payload , 1 ) },
        setOrganisationSearch: ( state , payload ) => { state.organisation_search = payload },
        setCharacters:         ( state , payload ) => { state.characters = payload },
        addCharacter:          ( state , payload ) => { state.characters.push(payload) },
        delCharacter:          ( state , payload ) => { state.characters.splice( payload , 1 ) },
        setCharactersSearch:   ( state , payload ) => { state.characters_search = payload },
        setMissions:           ( state , payload ) => { state.missions = payload },
        addMission:            ( state , payload ) => { state.missions.push(payload) },
        delMission:            ( state , payload ) => { state.missions.splice( payload , 1 ) },
        setMissionsSearch:     ( state , payload ) => { state.missions_search = payload },
        setChats:              ( state , payload ) => { state.chats = payload },
        addChat:               ( state , payload ) => { state.chats.push(payload) },
        setActiveOrgLink:      ( state , payload ) => { state.active_org_link = payload },
        setShowNav:            ( state , payload ) => { state.show_nav = payload },
        setUserSearch:         ( state , payload ) => { state.user_search = payload},
        setResponse:           ( state , payload ) => { state.response = payload},
        setShips:              ( state , payload ) => { state.ships = payload },
        addShip:               ( state , payload ) => { state.ships.push(payload) },
        delShip:               ( state , payload ) => {
            state.ships = state.ships.filter( ship => {
                return ship._id != payload
            })
        },
        setShipsSearch:        ( state , payload ) => { state.ships_search = payload },
        setAvionics:           ( state , payload ) => { state.avionics = payload },
        addAvionic:            ( state , payload ) => { state.avionics.push(payload) },
        delAvionic:            ( state , payload ) => {
            state.avionics = state.avionics.filter( avionic => {
                return avionic._id != payload
            })
        },
        setAvionicsSearch:     ( state , payload ) => { state.avionics_search = payload }
    },
    actions: {
        setLoading:            ( cxt , payload ) => { cxt.commit( 'setLoading' , payload ) },
        login:                 ( cxt , payload ) => { cxt.commit( 'login' , payload ) },
        logout:                ( cxt , payload ) => { cxt.commit( 'logout') },
        setUsers:              ( cxt , payload ) => { cxt.commit( 'setUsers' , payload ) },
        addUser:               ( cxt , payload ) => { cxt.commit( 'addUser' , payload ) },
        removeUser:            ( cxt , payload ) => { cxt.commit( 'removeUser', payload )},
        setLocations:          ( ctx , payload ) => { ctx.commit( 'setLocations' , payload ) },
        addLocation:           ( ctx , payload ) => { ctx.commit( 'addLocation' , payload ) },
        delLocation:           ( ctx , payload ) => { ctx.commit( 'delLocation', payload ) },
        setMetaData:           ( ctx , payload ) => { ctx.commit( 'setMetaData' , payload ) },
        setLocationSearch:     ( ctx , payload ) => { ctx.commit( 'setLocationSearch' , payload ) },
        setResources:          ( ctx , payload ) => { ctx.commit( 'setResources' , payload ) },
        addResource:           ( ctx , payload ) => { ctx.commit( 'addResource' , payload ) },
        delResource:           ( ctx , payload ) => { ctx.commit( 'delResource', payload ) },
        setResourceSearch:     ( ctx , payload ) => { ctx.commit( 'setResourceSearch' , payload ) },
        setOrganisations:      ( ctx , payload ) => { ctx.commit( 'setOrganisations' , payload ) },
        addOrg:                ( ctx , payload ) => { ctx.commit( 'addOrg' , payload ) },
        delOrganisation:       ( ctx , payload ) => { ctx.commit( 'delOrganisation', payload) },
        setOrganisationSearch: ( ctx , payload ) => { ctx.commit( 'setOrganisationSearch' , payload ) },
        setCharacters:         ( ctx , payload ) => { ctx.commit( 'setCharacters' , payload ) },
        addCharacter:          ( ctx , payload ) => { ctx.commit( 'addCharacter' , payload ) },
        delCharacter:          ( ctx , payload ) => { ctx.commit( 'delCharacter', payload ) },
        setCharactersSearch:   ( ctx , payload ) => { ctx.commit( 'setCharactersSearch' , payload ) },
        setMissions:           ( ctx , payload ) => { ctx.commit( 'setMissions' , payload ) },
        addMission:            ( ctx , payload ) => { ctx.commit( 'addMission' , payload ) },
        delMission:            ( ctx , payload ) => { ctx.commit( 'delMission', payload) },
        setMissionsSearch:     ( ctx , payload ) => { ctx.commit( 'setMissionsSearch' , payload ) },
        setChats:              ( ctx , payload ) => { ctx.commit( 'setChats' , payload ) },
        addChat:               ( ctx , payload ) => { ctx.commit(  'addChat' , payload ) },
        setActiveOrgLink:      ( ctx , payload ) => { ctx.commit( 'setActiveOrgLink', payload )},
        setShowNav:            ( ctx , payload ) => { ctx.commit( 'setShowNav', payload )},
        setUserSearch:         ( ctx , payload ) => { ctx.commit( 'setUserSearch', payload )},
        setResponse:           ( ctx , payload ) => { ctx.commit( 'setResponse', payload )},
        setShips:              ( ctx , payload ) => { ctx.commit( 'setShips' , payload ) },
        addShip:               ( ctx , payload ) => { ctx.commit( 'addShip' , payload ) },
        delShip:               ( ctx , payload ) => { ctx.commit( 'delShip', payload) },
        setShipsSearch:        ( ctx , payload ) => { ctx.commit( 'setShipsSearch', payload) },
        setAvionics:           ( ctx , payload ) => { ctx.commit( 'setAvionics' , payload ) },
        addAvionic:            ( ctx , payload ) => { ctx.commit( 'addAvionic' , payload ) },
        delAvionic:            ( ctx , payload ) => { ctx.commit( 'delAvionic', payload) },
        setAvionicsSearch:     ( ctx , payload ) => { ctx.commit( 'setAvionicsSearch', payload) },
    },
    plugins: [createPersistedState()]
})

export default store
