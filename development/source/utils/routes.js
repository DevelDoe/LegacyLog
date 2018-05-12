/**
 * @Author: Morgan Andree Ray
 * @Date:   28-04-2018
 * @Email:  info@andreeray.se
 * @Filename: routes.js
 * @Last modified by:   Morgan Andree Ray
 * @Last modified time: 12-05-2018
 * @License: MIT
 */




import Trade   from '../components/Console/Trade/Trade.vue'
import Verse   from '../components/Console/Verse/Verse.vue'

import Console from '../components/Org/Console/Console.vue'
import Users   from '../components/Org/Users/Users.vue'
import Forum   from '../components/Org/Forum/Forum.vue'

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
        path: '/console/verse',
        component: Verse,
        name: 'verse'
    },{
        path: '/org/console',
        component: Console,
        name: 'console',
        beforeEnter: requireAuth
    },{
        path: '/org/users',
        component: Users,
        name: 'users',
        beforeEnter: requireAuth
    },{
        path: '/org/forum',
        component: Forum,
        name: 'forum',
        beforeEnter: requireAuth
    }
]
