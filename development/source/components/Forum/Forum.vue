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

        <ul id="messages" v-for="msg in messages">{{ msg }}</ul>
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
            messages: []
        }
    },
    sockets:{
        connect() {
            // Fired when the socket connects.
            this.isConnected = true;
        },
        disconnect() {
            this.isConnected = false;
        },
        messageChannel(data) {
            this.messages.push(data)
        }
    },
    methods: {
        clickButton: function(){
            // $socket is socket.io-client instance
            this.$socket.emit('messageChannel', this.message);
            this.message = ''
        }
  }
}
</script>

<style lang="css">
</style>
