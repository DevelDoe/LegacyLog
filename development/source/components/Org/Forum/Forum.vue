<!--
@Author: Morgan Andree Ray
@Date:   08-05-2018
@Email:  info@andreeray.se
@Filename: Forum.vue
@Last modified by:   Morgan Andree Ray
@Last modified time: 12-05-2018
@License: MIT
-->
<template lang="html">
    <div class="org">
        <div class="wrap">
            <div class="chat">
                <div class="message" v-for="msg in messages">
                    <div class="message-user"> <h6>{{ msg.name }}</h6>  </div>
                    <div class="message-msg"> <p v-html="$markdown.render( msg.msg )">{{  }}</p> </div>
                </div>
            </div>
            <div class="online">
                <ul>
                    <li id="messages" v-for="user in users">{{ user }}</li>
                </ul>
            </div>
        </div>
        <div class="bottom">
            <form><input id="m" autocomplete="off" v-model="message"/><button @click.prevent="clickButton()">Send</button></form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'forum',
    data() {
        return {
            isConnected: false,
            message: '',
            messages: [],
            users: []
        }
    },
    computed: {
        username() { return this.$store.getters.username || null }
    },
    sockets:{
        connect() {
            // Fired when the socket connects.
            this.isConnected = true
        },
        disconnect() {
            this.isConnected = false
        },
        updateChat(payload) {
            this.messages.push(payload)
        },
        updateUsers(payload) {
            this.users = payload
        }
    },
    methods: {
        clickButton: function(){
            // $socket is socket.io-client instance
            this.$socket.emit('sendChat', this.message, this.username)
            this.message = ''
        }
    },
    mounted() {
        this.$socket.emit('addUser', this.username)
        this.$socket.emit('getUsers')
    },
    destroyed() {
        this.$socket.emit('removeUser')
    }
}
</script>

<style lang="css">
</style>
