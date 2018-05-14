<!--
@Author: Morgan Andree Ray
@Date:   08-05-2018
@Email:  info@andreeray.se
@Filename: Forum.vue
@Last modified by:   Morgan Andree Ray
@Last modified time: 14-05-2018
@License: MIT
-->
<template lang="html">
    <div class="org">
        <div class="wrap">
            <div class="chat">
                <div class="hide-scroll">
                    <div class="viewport" ref="picker">
                        <div class="message" v-for="msg in chats">
                            <div class="message-user"> <h6>{{ msg.name }}</h6>  </div>
                            <div class="message-msg"> <span v-html="$markdown.render( msg.msg )">{{  }}</span> </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="online">
                <ul>
                    <li class="user box" v-for="user in users">
                        <div class=""> <img src="/img/profile.jpg" alt="user"> </div>
                        <div class="username">{{ user }}</div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="bottom">
            <form><input id="m" autocomplete="off" v-model="message"/><button @click.prevent="clickButton()" hidden>Send</button></form>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'forum',
    data() {
        return {
            message: '',
            users: []
        }
    },
    computed: {
        username() { return this.$store.getters.username || null },
        ...mapGetters([ 'chats' ])
    },
    sockets:{
        updateChat(payload) {
            this.chats.push(payload)
        },
        updateUsers(payload) {
            this.users = payload
        }
    },
    methods: {
        pageScroll() {
            this.$refs.picker.scrollTop = this.$refs.picker.scrollHeight
        },
        clickButton: function(){
            // $socket is socket.io-client instance
            this.$socket.emit('sendChat', this.message, this.username)
            const chat = {
                name: this.username,
                msg:this.message,
                room: 'Main',
                created_at: this.$moment().unix()
            }
            this.apiSave('chats', chat)
            this.message = ''
        }
    },
    mounted() {
        this.$http.get('http://35.189.243.23:4000/chats/').then( res => {
            this.$store.dispatch( 'setChats', res.data)
        })
        this.$socket.emit('addUser', this.username)
        this.$socket.emit('getUsers')
    },
    destroyed() {
        this.$socket.emit('removeUser')
    },
    updated() {
        this.pageScroll(this.$refs.picker)
    },
}
</script>

<style lang="css">
</style>
