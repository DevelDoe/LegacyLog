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
    <div class="users-details" v-id="route._id === user_id">
        hello user details
    </div>
</template>

<script>
export default {
    name: 'UserDetails',
    props: [ 'user' , 'user_id' ]
}
</script>
