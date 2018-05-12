<!--
@Author: Andree Ray <andreeray>
@Date:   2018-01-18T21:23:04+01:00
@Email:  andreeray@live.com
@Filename: App.vue
@Last modified by:   Morgan Andree Ray
@Last modified time: 12-05-2018
-->
<template>
    <div id="app" class="box">

        <Sidebar :sidebar="sidebar"  />
        <Main />

    </div>
</template>

<script>
import Sidebar from './Sidebar.vue'
import Main from './Main.vue'
export default {
    name: 'app',
    components: { Sidebar, Main }
}
</script>
<style media="screen">
    #sb {
        position: fixed;
        bottom:0;
        left:0;
        cursor: pointer;
    }
</style>
