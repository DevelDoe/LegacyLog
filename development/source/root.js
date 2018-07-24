/**
 * @Author: Morgan Andree Ray <DevelDoe>
 * @Date:   27-04-2018
 * @Email:  info@andreeray.se
 * @Filename: root.js
 * @Last modified by:   Morgan Andree Ray
 * @Last modified time: 30-05-2018
 * @License: MIT
 */

import Vue from 'vue'
import App from './components/Shell/App.vue'

import './assets/css/app.scss'

import '../node_modules/chart.js/dist/Chart.min.js'

import develLS from  'devel-localstorage'
Object.defineProperty(Vue.prototype, '$develLS', { get() { return this.$root.develLS } } )


import VueRouter from 'vue-router'
Vue.use(VueRouter)
import routes from './utils/routes'
const router = new VueRouter({
    routes
})


import VueResource from 'vue-resource'
Vue.use(VueResource)
if( process.env.NODE_ENV === 'development' ) Vue.http.options.root = 'http://localhost:4000'
if( process.env.NODE_ENV === 'production' ) Vue.http.options.root = 'http://35.189.243.23:4000'

import Plugins from './utils/plugins.js'
Vue.use(Plugins)

import helperFunctions from './utils/helperFunctions.js'
Vue.use(helperFunctions)

import api from './utils/api.js'
Vue.use(api)

const bus = new Vue()
Object.defineProperty(Vue.prototype, '$bus', { get() { return this.$root.bus } })

const markdown = require('markdown-it')()
Object.defineProperty(Vue.prototype, '$markdown', { get() { return this.$root.markdown } } )

var moment = require('moment')
Object.defineProperty(Vue.prototype, '$moment', { get() { return this.$root.moment } } )

Vue.directive('md', {
    inserted( el , binding ) {
        el.innerHTML = markdown.render(binding.value)
    }
})

import store from './store/store'

import VueSocketio from 'vue-socket.io';
Vue.use(VueSocketio, 'http://35.189.243.23:80/', store)

import metaData from './data/meta.js'


const root = new Vue({
    el: '#app',
    store: store,
    data () {
        let data = { bus, markdown, develLS, moment}
        return data
    },
    render (h) {
        return h(App, { props: this.$data })
    },
    router,
    created() {
        bus.$on('setResponse', response => {
            this.response = response
        })
        store.dispatch( 'setMetaData' , metaData )
        this.$http.get( 'resources/' ).then(res => {
            store.dispatch( 'setResources' , res.data )
        })

        this.$http.get( 'locations/' ).then(res => {
            store.dispatch( 'setLocations' , res.data )
        })
        this.$http.get( 'characters/' ).then(res => {
            store.dispatch( 'setCharacters' , res.data )
        })
        this.$http.get( 'missions/' ).then(res => {
            store.dispatch( 'setMissions' , res.data )
        })
        this.$http.get( 'organisations/' ).then(res => {
            store.dispatch( 'setOrganisations' , res.data )
        })
        this.$http.get( 'ships/' ).then(res => {
            store.dispatch( 'setShips' , res.data )
        })
        this.$http.get( 'avionics/' ).then(res => {
            store.dispatch( 'setAvionics' , res.data )
        })
        this.$http.get( 'propulsions/' ).then(res => {
            store.dispatch( 'setPropulsions' , res.data )
        })
        this.$http.get( 'systems/' ).then(res => {
            store.dispatch( 'setSystems' , res.data )
        })
        this.$http.get( 'thrusters/' ).then(res => {
            store.dispatch( 'setThrusters' , res.data )
        })
        this.$http.get( 'weapons/' ).then(res => {
            store.dispatch( 'setWeapons' , res.data )
        })
        this.$http.get( 'missile_racks/' ).then(res => {
            store.dispatch( 'setMissileRacks' , res.data )
        })
        this.$http.get( 'ammos/' ).then(res => {
            store.dispatch( 'setAmmos' , res.data )
        })
    },
})
