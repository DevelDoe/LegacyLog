<!--
@Author: Morgan Andree Ray
@Date:   02-06-2018
@Email:  info@andreeray.se
@Filename: Size.vue
@Last modified by:   Morgan Andree Ray
@Last modified time: 02-06-2018
@License: MIT
-->
<template lang="html">
    <div class="size" :class="sizeFilterClass" @click="filter"> Size {{ size }} </div>
</template>

<script>
export default {
    name: 'Size',
    props: [ 'size' ],
    data() {
        return {
            checked: false
        }
    },
    methods: {
        filter() {
            this.checked = !this.checked
            this.$bus.$emit('sizeFilter', 'filterWeaponSize', this.size, this.checked)
        }
    },
    computed: {
        sizeFilterClass() {
            return {
                'size-filter': true,
                'active': this.checked
            }
        },
    }
}
</script>

<style lang="css">
    .size-filter {
        cursor: pointer;
        padding: 10px;
        text-align: center;
        margin: 5px auto;
        background: rgba(255,255,255,0.04);
    }
    .active  {
        background: rgba(255,255,255,0.2);
    }
</style>
