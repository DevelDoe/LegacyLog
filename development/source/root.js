/**
 * @Author: Morgan Andree Ray <DevelDoe>
 * @Date:   27-04-2018
 * @Email:  info@andreeray.se
 * @Filename: root.js
 * @Last modified by:   Morgan Andree Ray
 * @Last modified time: 09-05-2018
 * @License: MIT
 */

import Vue from 'vue'
import App from './App.vue'

import '../node_modules/devel-style/devel-style.css'
import './assets/css/app.scss'

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

import store from './store/store'

import VueSocketio from 'vue-socket.io';
if( process.env.NODE_ENV === 'development' ) Vue.use(VueSocketio, 'http://localhost:8080/', store)
if( process.env.NODE_ENV === 'production' ) Vue.use(VueSocketio, 'http://35.189.243.23:80/', store)


const root = new Vue({
    el: '#app',
    store: store,
    data () {
        let data = {
            resources: [],
            locations: [],
            location_types: [
                'Sytem',
                'Star',
                'Planet',
                'Station',
                'Moon',
                'Outpost',
            ],
            missions: [],
            characters: [],
            organisations: [],
            response: '',
            meta_data: {},
            bus,
            markdown,
            users: [],
            develLS
        }
        return data
    },
    render (h) {
        return h(App, { props: this.$data })
    },
    router,
    created() {
        console.log('settings Page(release)')

        bus.$on('setResponse', response => {
            this.response = response
        })
        this.$http.get('resources/').then(res => { this.resources = res.data })
        this.$http.get('locations/').then(res => { this.locations = res.data })
        this.$http.get('characters/').then(res => { this.characters = res.data })
        this.$http.get('missions/').then(res => { this.missions = res.data })
        this.$http.get('organisations/').then(res => { this.organisations = res.data })
    },

})

import metaData from './data/meta.js'
root.meta_data = metaData
