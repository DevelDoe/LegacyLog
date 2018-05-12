<!--
@Author: Morgan Andree Ray
@Date:   09-05-2018
@Email:  info@andreeray.se
@Filename: Sidebar.vue
@Last modified by:   Morgan Andree Ray
@Last modified time: 12-05-2018
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
                <i class="material-icons" @click="show = 'console'; setActive('console'); $router.push({name: 'console'})" :class="{ 'active': activeLink === 'console' || activeLink === 'users'}">
                    dashboard
                </i>
                <i class="material-icons" @click="show = 'users'; setActive('users'); $router.push({name: 'users'})" :class="{ 'active': activeLink === 'users' }">
                    people
                </i>
                <i class="material-icons" @click="show = 'forum'; setActive('forum'); $router.push({name: 'forum'})" :class="{ 'active': activeLink === 'forum' }">
                    comment
                </i>
            </div>
            <div class="console">
                <transition
                    v-on:before-enter="beforeEnter"
                    v-on:enter="enter"
                    v-on:leave="leave"
                    v-on:after-leave="afterLeave"
                    :css="false"
                >
                    <div v-if="show === 'console'"
                         @click="setActive('console'); $router.push({name: 'console'})"
                         :class="{ 'active': activeLink === 'console'}"
                         >CONSOLE</div>
                </transition>
            </div>

            <div class="users">
                <transition
                    v-on:before-enter="beforeEnter"
                    v-on:enter="enter"
                    v-on:leave="leave"
                    v-on:after-leave="afterLeave"
                    :css="false"
                >
                    <div
                        v-if="show === 'users'"
                        @click="setActive('users'); $router.push({name: 'users'})"
                        :class="{ 'active': activeLink === 'users'}"
                        >USERS</div>
                </transition>
            </div>

            <div class="forum">
                <transition
                    v-on:before-enter="beforeEnter"
                    v-on:enter="enter"
                    v-on:leave="leave"
                    v-on:after-leave="afterLeave"
                    :css="false"
                >
                    <div
                        v-if="show === 'forum'"
                        @click="setActive('forum'); $router.push({name: 'forum'})"
                        :class="{ 'active': activeLink === 'forum'}"
                        >FORUM</div>
                </transition>
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
    data() {
        return {
            activeLink  : 'console',
            show        : 'console',
        }
    },
    computed: {
        ...mapGetters([ 'token', 'username', 'connected' ])
    },
    methods: {
        setActive( link ) {
            this.activeLink = link
        },
        beforeEnter (el) {
            el.style.width = "0px";
            el.style.display = 'block'
        },
        enter (el, done) {
            $(el).animate({ width: '50px' }, 100).animate({ width: '190px'}, 50)
            $(el).parent().css("zIndex", '1')
            done()
        },
        leave (el, done) {
            $(el).animate({
                width:'0px'
            }, 100);
            done()
        },
        afterLeave (el) {
            $(el).parent().css("zIndex", '-1')
        },
    }
}
</script>

<style lang="css">
</style>
