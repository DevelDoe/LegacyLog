<!--
@Author: Morgan Andree Ray
@Date:   08-05-2018
@Email:  info@andreeray.se
@Filename: Forum.vue
@Last modified by:   Morgan Andree Ray
@Last modified time: 15-05-2018
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
                    <li class="user box" v-for="user in chat_users">
                        <div class=""> <img :src="user.image" alt="user"> </div>
                        <div class="username">{{ user.username }}</div>
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
            chat_users: []
        }
    },
    computed: {
        logged() {
            return this.users.find(user => user._id === this.user.id) || null
        },
        ...mapGetters([ 'chats' , 'user' , 'users'])
    },
    sockets:{
        updateChat(payload) {
            this.chats.push(payload)
        },
        updateUsers(payload) {
            this.chat_users = (payload)
        }
    },
    methods: {
        pageScroll() {
            this.$refs.picker.scrollTop = this.$refs.picker.scrollHeight
        },
        clickButton: function(){
            // $socket is socket.io-client instance
            this.$socket.emit('sendChat', this.message, this.logged.username)
            const chat = {
                name: this.logged.username,
                msg:this.message,
                room: 'Main',
                created_at: this.$moment().unix()
            }
            this.apiSave('chats', chat)
            this.message = ''
        }
    },
    mounted() {
        const self = this
        this.$http.get('http://35.189.243.23:4000/chats/').then( res => {
            this.$store.dispatch( 'setChats', res.data)
        })
        this.$socket.emit('addUser', this.logged.username, this.logged.image_src)
        this.$socket.emit('getUsers')
        document.addEventListener("visibilitychange", function() {
            if (document.hidden){
                self.$socket.emit('removeUser', self.logged.username)
                console.log('remove')
            } else {
                self.$socket.emit('addUser', self.logged.username, self.logged.image_src)
                console.log('add')
            }
        })
    },
    destroyed() {
        this.$socket.emit('removeUser', this.logged.username)
    },
    updated() {
        this.pageScroll(this.$refs.picker)
    },
}
</script>
