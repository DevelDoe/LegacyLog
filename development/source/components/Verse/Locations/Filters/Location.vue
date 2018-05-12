<!--
@Author: Morgan Andree Ray
@Date:   27-04-2018
@Email:  info@andreeray.se
@Filename: Location.vue
@Last modified by:   DevelDoe
@Last modified time: 11-05-2018
@License: MIT
-->


<template lang="html">
    <div :class="locationsFltrClass" @click="filter"> {{ location }} </div>
</template>

<script>
export default {
    props: [ 'location' ],
    data() {
        return {
            checked: this.location === 'Moon' || this.location === 'Station' || false
        }
    },
    methods: {
        filter() {
            this.checked = !this.checked
            this.$bus.$emit('filter', 'filterLocations', this.location, this.checked)
        }
    },
    computed: {
        locationsFltrClass() {
            return {
                'location-filter': true,
                'active': this.checked
            }
        },
    }
}
</script>

<style lang="css">
    .location-filter {
        cursor: pointer;
    }
    .active  {
        background: rgba(255,255,255,0.2);
    }
</style>
