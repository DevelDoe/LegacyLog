<!--
@Author: Morgan Andree Ray
@Date:   14-05-2018
@Email:  info@andreeray.se
@Filename: UsersDetails.vue
@Last modified by:   Morgan Andree Ray
@Last modified time: 14-05-2018
@License: MIT
-->
<template lang="html">
    <div class="users-details" v-if="user._id === user_id">
        <img v-if="user.image_src" :src="user.image_src" alt="profile" >
        <h3><span v-if="user.name">{{ user.name }} aka</span> {{ user.username}} </h3>
        <h4 v-if="user.role">{{ user.role }}</h4>
    </div>
</template>

<script>
export default {
    name: 'UserDetails',
    props: [ 'user' , 'user_id' ]
}
</script>
