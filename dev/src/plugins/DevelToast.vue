<!--
@Author: Morgan Andree Ray <DevelDoe>
@Date:   27-04-2018
@Email:  info@andreeray.se
@Filename: DevelToast.vue
@Last modified by:   DevelDoe
@Last modified time: 01-05-2018
@License: MIT
-->

<!-- <DevelToast :response="response"/> -->
<template lang="html">
    <transition name="slide-fade" :duration="{ enter: 500, leave: 800 }" >
    <section id="toast" v-if="response">
        {{ response }}
    </section>
    </transition>
</template>

<script>
export default {
    name: 'DevelToast',
    props: [ 'response' ]
}
</script>

<style media="screen">
    #toast {
        position: fixed;
        bottom:0;
        right:0;
        z-index: 999;
        background: rgb(52,58,64);
        color: #f4f4f4;
    }
</style>
