<!--
@Author: Morgan Andree Ray
@Date:   08-05-2018
@Email:  info@andreeray.se
@Filename: Forum.vue
@Last modified by:   Morgan Andree Ray
@Last modified time: 09-05-2018
@License: MIT
-->
<template lang="html">
    <div id="forum">
        <ul>
            <li id="messages" v-for="user in users">{{ user }}</li>
        </ul>
        <ul>
            <li id="messages" v-for="msg in messages">{{ msg.name }}: {{ msg.msg }}</li>
        </ul>

        <footer class="chat box">
            <input id="m" autocomplete="off" v-model="message"/><button @click.prevent="clickButton()">Send</button>
        </footer>
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
            this.$socket.emit('addUser', this.username);
            this.isConnected = true;
        },
        disconnect() {
            
            this.isConnected = false;
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
            this.$socket.emit('sendChat', this.message, this.username);
            this.message = ''
        }
    }
}
</script>

<style lang="css">
</style>
