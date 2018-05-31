<!--
@Author: Morgan Andree Ray
@Date:   22-05-2018
@Email:  info@andreeray.se
@Filename: MissileRackControl.vue
@Last modified by:   Morgan Andree Ray
@Last modified time: 22-05-2018
@License: MIT
-->
<template lang="html">
    <div class="missile-rack-control" v-if="missile_rack._id === missile_rack_id">
        <MissileModal modal="updateMissileRack">

            <div slot="header">
                <h2>update {{ missile_rack.model }} </h2>
            </div>

            <div slot="left">
                <div class="">
                    <input placeholder="Model" v-model="missile_rack.model" />
                </div>

                <div class="description">
                    <textarea rows="30" placeholder="Description" v-model="missile_rack.desc"></textarea>
                </div>
                <div class="">
                    <select v-model="missile_rack.organisation_id">
                        <option value="" selected>Manufacturer</option>
                        <option v-for="( organisation, i ) in manufacturers" :value="organisation._id" >{{ organisation.name }}</option>
                    </select>
                </div>

                <div class="">
                    <select v-model="missile_rack.size">
                        <option value="" selected>Select Size</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>

            </div>

            <div slot="right">
                <div class="">
                    Mass: <input v-model="missile_rack.mass">
                </div>
                <div class="">
                    hp: <input v-model="missile_rack.hp">
                </div>
                <div class="">
                    missile_count: <input v-model="missile_rack.missile_count">
                </div>
                <div class="">
                    Missile_size: <input v-model="missile_rack.Missile_size">
                </div>
                <div class="">
                    launch_delay: <input v-model="missile_rack.launch_delay">
                </div>
                <div class="">
                    detach_velocity: <input v-model="missile_rack.detach_velocity">
                </div>
                <div class="">
                    distance_decay_rate: <input v-model="missile_rack.distance_decay_rate">
                </div>
                <div class="">
                    distance_max: <input v-model="missile_rack.distance_max">
                </div>
                <div class="">
                    distance_ratio_overload: <input v-model="missile_rack.distance_ratio_overload">
                </div>
                <div class="">
                    distance_ratio_recovery: <input v-model="missile_rack.distance_ratio_recovery">
                </div>
                <div class="">
                    distance_recovery: <input v-model="missile_rack.distance_recovery">
                </div>
                <div class="">
                    em_ratio: <input v-model="missile_rack.em_ratio">
                </div>
                <div class="">
                    dmg_resist_phys: <input v-model="missile_rack.dmg_resist_phys">
                </div>
                <div class="">
                    dmg_resist_nrg: <input v-model="missile_rack.dmg_resist_nrg">
                </div>
                <div class="">
                    dmg_resist_dst: <input v-model="missile_rack.dmg_resist_dst">
                </div>
                <div class="">
                    dmg_resist_heat: <input v-model="missile_rack.dmg_resist_heat">
                </div>
                <div class="">
                    dmg_resist_bio: <input v-model="missile_rack.dmg_resist_bio">
                </div>
            </div>

            <div slot="footer">
                <div class="form-control">
                    <div form="modal-form-ship-tool" @click="update('updateMissileRack')">save</div>
                </div>
            </div>
        </MissileModal>

        <div class="tool-control">
            <button @click="openModal('updateMissileRack')">update missile rack</button>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'MissileRackControl',
    props: [ 'missile_rack', 'missile_rack_id' ],
    computed: {
        ...mapGetters([  'meta_data', 'organisations' ]),
        manufacturers() {
            return this.organisations.filter( org => org.type === 'Manufacturer')
        }
    },
    methods: {
        openModal( modal ) {
            this.$bus.$emit('toggleModal', modal )
        },
        del() {
            this.apiDelete( 'missile_racks', this.missile_rack_id )
            this.$store.dispatch('delMissileRack', this.missile_rack_id )
        },
        update( modal ) {
            const valid = this.validate( this.meta_data.validation_rules.missile_rack, this.missile_rack, 'missile_racks', this.index)
            if ( valid === 'true') {
                this.$store.dispatch('delMissileRack', this.missile_rack_id)
                this.apiUpdate( 'missile_racks', this.missile_rack, this.missile_rack_id, 'addMissileRack' , modal )
            }
        }
    }
}
</script>
