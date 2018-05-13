<!--
@Author: Morgan Andree Ray
@Date:   09-05-2018
@Email:  info@andreeray.se
@Filename: Sidebar.vue
@Last modified by:   Morgan Andree Ray
@Last modified time: 13-05-2018
@License: MIT
-->
<template>
    <div v-if="token" id="sidebar">

        <header>
            <h1>LEGACY FLEET</h1>
        </header>

        <div id="user" class="box">
            <img src="/img/profile.jpg" alt="">
            <div id="info" >
                <div class="top box">
                    <div id="info-username">
                        {{ username }}
                    </div>
                    <div id="info-icon">
                        <i class="material-icons">
                            settings
                        </i>
                    </div>
                </div>
                <div class="bottom">
                    <span v-if="connected">ONLINE</span>
                    <span v-else>OFFLINE</span>
                </div>
            </div>
        </div>

        <div id="mainnav" class="box">
            <div class="iconbar" >
                <i class="material-icons" @click=" $store.dispatch('setActiveOrgLink', 'console'); $router.push({name: 'console'})" :class="{ 'active': active_org_link === 'console'}">
                    dashboard
                </i>
                <i class="material-icons" @click=" $store.dispatch('setActiveOrgLink', 'users'); $router.push({name: 'users'})" :class="{ 'active': active_org_link === 'users' }">
                    people
                </i>
                <i class="material-icons" @click=" $store.dispatch('setActiveOrgLink', 'forum'); $router.push({name: 'forum'})" :class="{ 'active': active_org_link === 'forum' }">
                    comment
                </i>
            </div>
            <div class="console">

                    <div v-if="active_org_link === 'console'"
                         @click="$store.dispatch('setActiveOrgLink', 'console'); $router.push({name: 'console'})"
                         :class="{ 'active': active_org_link === 'console'}"
                         >CONSOLE
                     </div>
            </div>

            <div class="users">
                    <div
                        v-if="active_org_link === 'users'"
                        @click="$store.dispatch('setActiveOrgLink', 'users'); $router.push({name: 'users'})"
                        :class="{ 'active': active_org_link === 'users'}"
                        >USERS
                    </div>
            </div>

            <div class="forum">

                    <div
                        v-if="active_org_link === 'forum'"
                        @click="$store.dispatch('setActiveOrgLink', 'forum'); $router.push({name: 'forum'})"
                        :class="{ 'active': active_org_link === 'forum'}"
                        >FORUM
                    </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import jQuery from 'jquery'
export default {
    name: 'Sidebar',
    props: [ 'sidebar' ],
    computed: {
        ...mapGetters([ 'token', 'username', 'connected', 'active_org_link' ])
    },
}
</script>

<style lang="css">
</style>
