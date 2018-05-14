/**
 * @Author: Morgan Andree Ray
 * @Date:   28-04-2018
 * @Email:  info@andreeray.se
 * @Filename: routes.js
 * @Last modified by:   Morgan Andree Ray
 * @Last modified time: 13-05-2018
 * @License: MIT
 */




import Trade     from '../components/Console/Trade/Trade.vue'
import Verse     from '../components/Console/Verse/Verse.vue'

import Console   from '../components/Org/Console/Console.vue'
import Dashboard from '../components/Org/Dashboard/Dashboard.vue'
import Forum     from '../components/Org/Forum/Forum.vue'

import store     from '../store/store'

function beforeEnter(to, from, next) {
    // refresh?
    if(!from.name)  {
        store.dispatch('setActiveOrgLink', to.name);
    }
    // Auth
    if (store.getters.username !== '') {
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
        path: '/console/verse',
        component: Verse,
        name: 'verse'
    },{
        path: '/org/console',
        component: Console,
        name: 'console',
        beforeEnter: beforeEnter,
    },{
        path: '/org/dashbord',
        component: Dashboard,
        name: 'dashboard',
        beforeEnter: beforeEnter,

    },{
        path: '/org/forum',
        component: Forum,
        name: 'forum',
        beforeEnter: beforeEnter,
    }
]
