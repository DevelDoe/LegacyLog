/**
 * @Author: Morgan Andree Ray
 * @Date:   08-05-2018
 * @Email:  info@andreeray.se
 * @Filename: store.js
 * @Last modified by:   Morgan Andree Ray
 * @Last modified time: 08-05-2018
 * @License: MIT
 */
 import Vue from 'vue'
 import Vux from 'vuex'
 import createPersistedState from 'vuex-persistedstate'
 Vue.use(Vux)
 export const store = new Vux.Store({
     state: {
         user: {
             username: '',
             token: ''
         },
         users: ''
     },
     getters: {
         username: state => {
            return state.user.username
         },
         token: state => {
             return state.user.token
         },
         users: state => {
             return state.users
         }
     },
     mutations: {
         login: ( state, payload ) => {
             state.user.username = payload[0]
             state.user.token    = payload[1]
         },
         setUsers: ( state , payload ) => {
             state.users = payload
         }
     },
     actions: {
         login: ( cxt , payload) => {
             cxt.commit( 'login' , payload)
         },
         setUsers: ( cxt , payload ) => {
             cxt.commit( 'setUsers' , payload )
         }
     },
     plugins: [createPersistedState()]
 })
