<!--
@Author: Morgan Andree Ray
@Date:   28-05-2018
@Email:  info@andreeray.se
@Filename: AmmoTool.vue
@Last modified by:   Morgan Andree Ray
@Last modified time: 28-05-2018
@License: MIT
-->
<template lang="html">
    <div class="ammo-tool">

        <DevelModal modal="addAmmo">


            <div slot="header">
                <h2>Add Ammo</h2>
            </div>

            <div slot="bread">
                <div class="">
                    <input placeholder="Model" v-model="ammo.model" />
                </div>
                <div class="">
                    <select v-model="ammo.size">
                        <option value="" selected>Select Size</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </div>
                <div class="">
                    lifetime: <input v-model="ammo.lifetime">
                </div>
                <div class="">
                    speed: <input v-model="ammo.speed">
                </div>
                <div class="">
                    range: <input v-model="ammo.range">
                </div>
                <div class="">
                    Total physical damage: <input v-model="ammo.damage_total_phys">
                </div>
                <div class="">
                    Total energy damage: <input v-model="ammo.damage_total_erg">
                </div>
                <div class="">
                    Total distortion damage: <input v-model="ammo.damage_total_dist">
                </div>
                <div class="">
                    Total Thermal damage: <input v-model="ammo.damage_total_heat">
                </div>
                <div class="">
                    Total biological damage: <input v-model="ammo.damage_total_bio">
                </div>
                <div class="">
                    Total damage: <input v-model="ammo.damage_total">
                </div>
                <div class="">
                    Max penetration: <input v-model="ammo.max_pen">
                </div>
                <div class="">
                    per shot: <input v-model="ammo.per_shot">
                </div>
            </div>


            <div slot="footer">
                <div class="form-control">
                    <button @click="save('addAmmo')">save</button>
                </div>
            </div>
        </DevelModal>

        <div class="tool-control">
            <button @click="openModal('addAmmo')">add ammo</button>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'AmmoTool',
    data() {
        return {
            ammo: {
                model: '',
                size: '',
                lifetime: '',
                speed: '',
                range: '',
                damage_total_phys: '',
                damage_total_erg: '',
                damage_total_dist: '',
                damage_total_heat: '',
                damage_total_bio: '',
                damage_total: '',
                max_pen: '',
                per_shot: '',
            }
        }
    },
    computed: {
        ...mapGetters([  'meta_data' ])
    },
    methods: {
        openModal( modal ) {
            this.$bus.$emit( 'toggleModal', modal )
        },
        save( modal ) {
            const valid = this.validate( this.meta_data.validation_rules.ammo, this.ammo, 'ammos')
            if( valid === 'true' ) {
                this.apiSave( 'ammos', this.ammo, 'addAmmo', modal)
                this.ammo.model = ''
                this.ammo.size = '',
                this.ammo.lifetime = '',
                this.ammo.speed = '',
                this.ammo.range = '',
                this.ammo.damage_total_phys = '',
                this.ammo.damage_total_erg = '',
                this.ammo.damage_total_dist = '',
                this.ammo.damage_total_heat = '',
                this.ammo.damage_total_bio = '',
                this.ammo.damage_total = '',
                this.ammo.max_pen = '',
                this.ammo.per_shot = ''
            }
        }
    }
}
</script>

<style lang="css">
</style>
