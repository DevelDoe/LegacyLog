<!--
@Author: Morgan Andree Ray
@Date:   19-05-2018
@Email:  info@andreeray.se
@Filename: Propulsions.vue
@Last modified by:   Morgan Andree Ray
@Last modified time: 27-05-2018
@License: MIT
-->
<template lang="html">
    <div class="missile-rack-tool">

        <MissileModal modal="addMissileRack">

            <div slot="header">
                <h2>Add Missile Rack</h2>
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
                    <div form="modal-form-ship-tool" @click="save('addMissileRack')">save</div>
                </div>
            </div>
        </MissileModal>

        <div class="tool-control">
            <button @click="openModal('addMissileRack')">add missile rack</button>
        </div>

    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'SystemTool',
    data() {
        return {
            missile_rack: {
                model: '',
                organisation_id: '',
                desc: '',
                size: '',
                mass: '',
                hp: '',
                missile_count: '',
                Missile_size: '',
                launch_delay: '',
                detach_velocity: '',
                distance_decay_rate: '',
                distance_max: '',
                distance_ratio_overload: '',
                distance_ratio_recovery: '',
                distance_recovery: '',
                em_ratio: '',
                dmg_resist_phys: '',
                dmg_resist_nrg: '',
                dmg_resist_dst: '',
                dmg_resist_heat: '',
                dmg_resist_bio: ''
            }
        }
    },
    computed: {
        ...mapGetters([  'meta_data', 'organisations' ]),
        manufacturers() {
            return this.organisations.filter( org => org.type === 'Manufacturer')
        }
    },
    methods: {
        openModal( modal ) {
            this.$bus.$emit( 'toggleModal', modal )
        },
        save( modal ) {
            const valid = this.validate( this.meta_data.validation_rules.missile_rack, this.missile_rack, 'missile_racks')
            if( valid === 'true' ) {
                this.apiSave( 'missile_racks', this.missile_rack, 'addMissileRack', modal)
                this.missile_rack.model = '',
                this.missile_rack.organisation_id = '',
                this.missile_rack.desc = '',
                this.missile_rack.size = '',
                this.missile_rack.grade = '',
                this.missile_rack.mass = '',
                this.missile_rack.hp = '',
                this.missile_rack.missile_count = '',
                this.missile_rack.Missile_size = '',
                this.missile_rack.launch_delay = '',
                this.missile_rack.detach_velocity = '',
                this.missile_rack.distance_decay_rate = '',
                this.missile_rack.distance_max = '',
                this.missile_rack.distance_ratio_overload = '',
                this.missile_rack.distance_ratio_recovery = '',
                this.missile_rack.distance_recovery = '',
                this.missile_rack.em_ratio = '',
                this.missile_rack.dmg_resist_phys = '',
                this.missile_rack.dmg_resist_nrg = '',
                this.missile_rack.dmg_resist_dst = '',
                this.missile_rack.dmg_resist_heat = '',
                this.missile_rack.dmg_resist_bio = ''
            }
        }
    }
}
</script>
