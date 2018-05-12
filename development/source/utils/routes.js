/**
 * @Author: Morgan Andree Ray
 * @Date:   28-04-2018
 * @Email:  info@andreeray.se
 * @Filename: routes.js
 * @Last modified by:   Morgan Andree Ray
 * @Last modified time: 10-05-2018
 * @License: MIT
 */




import Trade from '../components/Trade/Trade.vue'
import Verse from '../components/Verse/Verse.vue'

import Users from '../components/Users/Users.vue'
import Dashboard from '../components/Dashboard/Dashboard.vue'
import Forum from '../components/Forum/Forum.vue'

import store from '../store/store'

function requireAuth(to, from, next) {
    if (store.getters.username != '') {
        next();
    } else {
        next('/');
    }
}


export default [
    {
        path: '/',
        component: Trade,
        name: 'trade'
    },{
        path: '/verse',
        component: Verse,
        name: 'verse'
    },{
        path: '/dashboard',
        component: Dashboard,
        name: 'dashboard',
        beforeEnter: requireAuth
    },{
        path: '/users',
        component: Users,
        name: 'users',
        beforeEnter: requireAuth
    },{
        path: '/forum',
        component: Forum,
        name: 'forum',
        beforeEnter: requireAuth
    }
]
