<!--
@Author: Morgan Andree Ray
@Date:   09-05-2018
@Email:  info@andreeray.se
@Filename: Sidebar.vue
@Last modified by:   Morgan Andree Ray
@Last modified time: 14-05-2018
@License: MIT
-->
<template>
    <div v-if="token" id="sidebar">

        <header>
            <h2>LEGACY FLEET</h2>
        </header>

        <div id="user" class="box">

            <div class="">
                <img :src="user.image" alt="">
            </div>

            <div id="info" >
                <div class="info-user">
                    <h3>{{ user.username }} </h3>
                    <i class="material-icons">
                        settings
                    </i>
                </div>

            </div>
        </div>

        <div id="mainnav" >
            <div @click="$store.dispatch('setActiveOrgLink', 'console'); $router.push({name: 'console'})" :class="{ 'menu-item': true, 'active': active_org_link === 'console'}" >
                <i class="material-icons"> home </i>
                <div>CONSOLE</div>
            </div>
            <div @click="$store.dispatch('setActiveOrgLink', 'dashboard'); $router.push({name: 'dashboard'})" :class="{ 'menu-item': true, 'active': active_org_link === 'dashboard'}" >
                <i class="material-icons"> dashboard </i>
                <div>DASHBOARD</div>
            </div>
            <div @click="$store.dispatch('setActiveOrgLink', 'forum'); $router.push({name: 'forum'})" :class="{ 'menu-item': true, 'active': active_org_link === 'forum'}" >
                <i class="material-icons"> comment </i>
                <div>MESSAGES</div>
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
        ...mapGetters([ 'token', 'user', 'active_org_link', 'show_nav' ])
    },
}
</script>

<style lang="css">
</style>
