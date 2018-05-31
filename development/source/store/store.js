/**
 * @Author: Morgan Andree Ray
 * @Date:   08-05-2018
 * @Email:  info@andreeray.se
 * @Filename: store.js
 * @Last modified by:   Morgan Andree Ray
 * @Last modified time: 28-05-2018
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
        avionics_search: '',
        propulsions: [],
        propulstion_search: '',
        thrusters: [],
        thruster_search: '',
        weapons: [],
        weapon_search: '',
        ammos: [],
        ammo_search: '',
        systems: [],
        system_search: '',
        missile_racks: [],
        missile_rack_search: ''
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
        avionics_search:     state => { return state.avionics_search },
        propulsions:         state => { return state.propulsions },
        propulstion_search:  state => { return state.propulstion_search },
        thrusters:           state => { return state.thrusters },
        thruster_search:     state => { return state.thruster_search },
        weapons:             state => { return state.weapons },
        weapon_search:       state => { return state.weapon_search },
        ammos:               state => { return state.ammos },
        ammo_search:         state => { return state.ammo_search },
        systems:             state => { return state.systems },
        system_search:       state => { return state.system_search },
        missile_racks:       state => { return state.missile_racks },
        missile_rack_search: state => { return state.missile_rack_search },
    },
    mutations: {
        setActiveOrgLink:      ( state , payload ) => { state.active_org_link = payload },
        setShowNav:            ( state , payload ) => { state.show_nav = payload },
        setUserSearch:         ( state , payload ) => { state.user_search = payload},
        setLoading:            ( state , payload ) => { state.loading = payload },
        setMetaData:           ( state , payload ) => { state.meta_data = payload },
        setLocationSearch:     ( state , payload ) => { state.location_search = payload },
        setResponse:           ( state , payload ) => { state.response = payload},

        login:                 ( state , payload ) => { state.user.id = payload[0]; state.user.token = payload[1]; },
        logout:                ( state , payload ) => { state.user = {}; state.user.token = '' },

        setChats:              ( state , payload ) => { state.chats = payload },
        addChat:               ( state , payload ) => { state.chats.push(payload) },
        SOCKET_updateChat      ( state , message ) { state.socketMessage = message },

        setUsers:              ( state , payload ) => { state.users = payload },
        addUser:               ( state , payload ) => { state.users.push(payload) },
        removeUser:            ( state , payload ) => { state.users.splice( payload , 1 ) },

        setLocations:          ( state , payload ) => { state.locations = payload },
        addLocation:           ( state , payload ) => { state.locations.push(payload) },
        delLocation:           ( state , payload ) => {
            state.locations = state.locations.filter( location => {
                return location._id != payload
            })
        },

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
        setAvionicsSearch:     ( state , payload ) => { state.avionics_search = payload },

        setPropulsions:           ( state , payload ) => { state.propulsions = payload },
        addPropulsion:            ( state , payload ) => { state.propulsions.push(payload) },
        delPropulsion:            ( state , payload ) => {
            state.propulsions = state.propulsions.filter( propulsion => {
                return propulsion._id != payload
            })
        },
        setpropulsionSearch:     ( state , payload ) => { state.propulsion_search = payload },

        setThrusters:           ( state , payload ) => { state.thrusters = payload },
        addThruster:            ( state , payload ) => { state.thrusters.push(payload) },
        delThruster:            ( state , payload ) => {
            state.thrusters = state.thrusters.filter( thruster => {
                return thruster._id != payload
            })
        },
        setThrusterSearch:     ( state , payload ) => { state.thruster_search = payload },

        setWeapons:           ( state , payload ) => { state.weapons = payload },
        addWeapon:            ( state , payload ) => { state.weapons.push(payload) },
        delWeapon:            ( state , payload ) => {
            state.weapons = state.weapons.filter( weapon => {
                return weapon._id != payload
            })
        },
        setWeaponSearch:      ( state , payload ) => { state.weapon_search = payload },

        setAmmos:             ( state , payload ) => { state.ammos = payload },
        addAmmo:              ( state , payload ) => { state.ammos.push(payload) },
        delAmmo:            ( state , payload ) => {
            state.ammos = state.ammos.filter( ammo => {
                return ammo._id != payload
            })
        },
        setAmmoSearch:        ( state , payload ) => { state.ammo_search = payload },

        setSystems:           ( state , payload ) => { state.systems = payload },
        addSystem:            ( state , payload ) => { state.systems.push(payload) },
        delSystem:            ( state , payload ) => {
            state.systems = state.systems.filter( system => {
                return system._id != payload
            })
        },
        setSystemSearch:     ( state , payload ) => { state.system_search = payload },

        setMissileRacks:           ( state , payload ) => { state.missile_racks = payload },
        addMissileRack:            ( state , payload ) => { state.missile_racks.push(payload) },
        delMissileRack:            ( state , payload ) => {
            state.missile_racks = state.missile_racks.filter( missile_rack => {
                return missile_rack._id != payload
            })
        },
        setMissileRackSearch:     ( state , payload ) => { state.missile_rack_search = payload },

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

        setPropulsions:           ( ctx , payload ) => { ctx.commit( 'setPropulsions' , payload ) },
        addPropulsion:            ( ctx , payload ) => { ctx.commit( 'addPropulsion' , payload ) },
        delPropulsion:            ( ctx , payload ) => { ctx.commit( 'delPropulsion', payload) },
        setpropulsionSearch:     ( ctx , payload ) => { ctx.commit( 'setpropulsionSearch', payload) },

        setThrusters:           ( ctx , payload ) => { ctx.commit( 'setThrusters' , payload ) },
        addThruster:            ( ctx , payload ) => { ctx.commit( 'addThruster' , payload ) },
        delThruster:            ( ctx , payload ) => { ctx.commit( 'delThruster', payload) },
        setThrusterSearch:     ( ctx , payload ) => { ctx.commit( 'setThrusterSearch', payload) },

        setWeapons:           ( ctx , payload ) => { ctx.commit( 'setWeapons' , payload ) },
        addWeapon:            ( ctx , payload ) => { ctx.commit( 'addWeapon' , payload ) },
        delWeapon:            ( ctx , payload ) => { ctx.commit( 'delWeapon', payload) },
        setWeaponSearch:     ( ctx , payload ) => { ctx.commit( 'setWeaponSearch', payload) },

        setAmmos:           ( ctx , payload ) => { ctx.commit( 'setAmmos' , payload ) },
        addAmmo:            ( ctx , payload ) => { ctx.commit( 'addAmmo' , payload ) },
        delAmmo:            ( ctx , payload ) => { ctx.commit( 'delAmmo', payload) },
        setAmmoSearch:     ( ctx , payload ) => { ctx.commit( 'setAmmoSearch', payload) },

        setSystems:           ( ctx , payload ) => { ctx.commit( 'setSystems' , payload ) },
        addSystem:            ( ctx , payload ) => { ctx.commit( 'addSystem' , payload ) },
        delSystem:            ( ctx , payload ) => { ctx.commit( 'delSystem', payload) },
        setSystemSearch:     ( ctx , payload ) => { ctx.commit( 'setSystemSearch', payload) },

        setMissileRacks:           ( ctx , payload ) => { ctx.commit( 'setMissileRacks' , payload ) },
        addMissileRack:            ( ctx , payload ) => { ctx.commit( 'addMissileRack' , payload ) },
        delMissileRack:            ( ctx , payload ) => { ctx.commit( 'delMissileRack', payload) },
        setMissileRackSearch:     ( ctx , payload ) => { ctx.commit( 'setMissileRackSearch', payload) },
    },
    plugins: [createPersistedState()]
})

export default store
