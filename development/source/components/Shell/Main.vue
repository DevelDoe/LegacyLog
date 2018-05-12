<!--
@Author: Morgan Andree Ray
@Date:   09-05-2018
@Email:  info@andreeray.se
@Filename: Main.vue
@Last modified by:   Morgan Andree Ray
@Last modified time: 10-05-2018
@License: MIT
-->
<template lang="html">
    <div id="main">

        <div id="wrapper">
            <div class="box">
                <div class="catselector">
                    <nav>
                        <button @click="$router.push({ name: 'trade' })">TRADE</button>
                        <button @click="$router.push({ name: 'verse' })">VERSE</button>
                    </nav>
                </div>
                <div class="background">
                    <router-view
                        :resources="resources"
                        :locations="locations"
                        :location_types="location_types"
                        :missions="missions"
                        :characters="characters"
                        :organisations="organisations"
                        :meta_data="meta_data"
                        :bus="bus" />
                </div>
            </div class="box">

        </div>
    </div>
</template>

<script>
export default {
    props: [ 'resources', 'locations', 'location_types', 'missions', 'organisations', 'characters', 'meta_data', 'bus' ],
    methods: {
        openModal( modal ) {
            this.$bus.$emit('toggleModal', modal )
        },
    }
}
</script>

<style lang="css">
</style>
