<!--
@Author: Morgan Andree Ray
@Date:   18-05-2018
@Email:  info@andreeray.se
@Filename: LoadoutTool.vue
@Last modified by:   Morgan Andree Ray
@Last modified time: 19-05-2018
@License: MIT
-->
<template lang="html">
    <div class="loadout-tool">

        <LoadoutModal modal="createLoadout">

            <div slot="header">
                <h2>Loadout Creator</h2>
                <select v-model="base_model_id">
                    <option value="" selected>Base Model</option>
                    <option v-for="( ship, i ) in ships" :value="ship._id">{{ ship.name }}</option>
                </select>
            </div>

            <div slot="left">
                <div class="avionics" v-if="base_model">
                    <div class="avionic" v-for="( avionic, i ) in base_model.avionics" >
                        {{ avionic.category }}
                        <select v-model="avionic.model_id">
                            <option value="" selected>avionics</option>
                            <option v-for="( avionic, i) in avionics" :value="avionic._id">{{ avionic.name }}</option>
                        </select>
                    </div>
                </div>
                <div class="systems" v-if="base_model">
                    <div class="system" v-for="( system, i ) in base_model.systems" >
                        {{ system.category }}
                        <select v-model="system.model_id">
                            <option value="" selected>systems</option>
                            <option v-for="( system, i) in systems" :value="system._id">{{ system.name }}</option>
                        </select>
                    </div>
                </div>
            </div>

            <div slot="middle">
                hello middle
            </div>

            <div slot="right">
                hello right
            </div>

        </LoadoutModal>
        <div class="tool-control">
            <button @click="openModal('createLoadout')">create loadout</button>
        </div>

    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'LoadoutTool',
    data() {
        return {
            base_model_id: '',
        }
    },
    computed: {
        ...mapGetters([ 'ships', 'avionics', 'systems' ]),
        base_model() {
            return this.ships.find( ship => ship._id === this.base_model_id ) || null
        }
    },
    methods: {
        openModal( modal ) {
            this.$bus.$emit( 'toggleModal', modal )
        },

    }
}
</script>

<style lang="css">
</style>
