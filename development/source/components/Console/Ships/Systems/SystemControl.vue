<!--
@Author: Morgan Andree Ray
@Date:   17-05-2018
@Email:  info@andreeray.se
@Filename: AvionicControl.vue
@Last modified by:   Morgan Andree Ray
@Last modified time: 19-05-2018
@License: MIT
-->
<template lang="html">
    <div class="system-control" v-if="system._id === system_id">

        <DevelModal modal="updateSystem">
            <div slot="header">
                <h2>Update {{ system.model }}</h2>
            </div>
            <div slot="bread">
                <form id="modal-form-system-update">
                    <input placeholder="Model" v-model="system.model">
                    <div class="">
                        <select v-model="system.organisation_id">
                            <option value="" selected>Manufacturer</option>
                            <option v-for="( organisation, i ) in manufacturers" :value="organisation._id" >{{ organisation.name }}</option>
                        </select>
                    </div>
                    <div class="">
                        <select v-model="system.category">
                            <option value="" selected>Category</option>
                            <option value="Power Plants">Power Plants</option>
                            <option value="Coolers">Coolers</option>
                            <option value="Shield Generators">Shield Generators</option>
                        </select>
                    </div>
                    <div class="">
                        <select v-model="system.size">
                            <option value="" selected>Size</option>
                            <option value="S">S</option>
                            <option value="V">V</option>
                        </select>
                    </div>
                </form>
            </div>
            <div slot="footer">
                <div class="form-control">
                    <button form="modal-form-system-update" @click="update('updateSystem')">save</button>
                </div>
            </div>
        </DevelModal>

        <div class="">
            <button @click="openModal('updateSystem')">update</button>
        </div>
        <div class="">
            <button @click="del()">delete</button>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'SystemControl',
    props: [ 'system', 'system_id', 'index'],
    computed: {
        ...mapGetters([ 'meta_data', 'organisations' ]),
        manufacturers() {
            return this.organisations.filter( org => org.type === 'Manufacturer')
        }
    },
    methods: {
        openModal( modal ) {
            this.$bus.$emit('toggleModal', modal )
        },
        del() {
            this.apiDelete( 'systems', this.system_id )
            this.$store.dispatch('delSystem', this.system_id )
        },
        update( modal ) {
            const valid = this.validate( this.meta_data.validation_rules.system, this.system, 'systems', this.index)
            if ( valid === 'true') {
                this.$store.dispatch('delSystem', this.system_id)
                this.apiUpdate( 'systems', this.system, this.system_id, 'addSystem' , modal )
            }
        }
    }
}
</script>
