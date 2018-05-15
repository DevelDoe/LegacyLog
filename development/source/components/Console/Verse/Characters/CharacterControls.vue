<!--
@Author: Morgan Andree Ray <DevelDoe>
@Date:   11-05-2018
@Email:  info@andreeray.se
@Filename: OrganisationControls.vue
@Last modified by:   Morgan Andree Ray
@Last modified time: 15-05-2018
@License: MIT
-->
<template lang="html">
    <div v-if="character._id === character_id">
        <DevelModal modal="updateCharacter">
            <div slot="header">
                <h2>Update Character</h2>
            </div>
            <div slot="bread">
                <form id="modal-form.carcon">
                    <input type="text" v-model="character.name" placeholder="Name">
                    <textarea v-model="character.description" rows="8" cols="80" placeholder="Biography"></textarea>
                    <select v-model="character.location_id">
                        <option v-for="( o, i) in locations" :value="o._id">{{ o.name }}</option>
                    </select>
                </form>
            </div>
            <div slot="footer">
                <div class="form-control">
                    <button @click="update('updateCharacter')">save</button>
                </div>
            </div>
        </DevelModal>

        <button @click="openModal('updateCharacter')">update</button>
        <button @click="del()">delete</button>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'CharacterControls',
    props: [ 'character' , 'character_id' , 'index'],
    computed: {
        ...mapGetters([ 'meta_data', 'locations' ]),
    },
    methods: {
        openModal( modal ) {
            this.$bus.$emit('toggleModal', modal )
        },
        del() {
            this.apiDelete( 'characters' , this.character_id )
            this.$store.dispatch('delCharacter', this.index )
        },
        update( modal ) {
            const valid = this.validate( this.meta_data.validation_rules.character, this.character, 'characters', this.index)
            if( valid === 'true' ) {
                this.$store.dispatch('delCharacter', this.index)
                this.apiUpdate( 'characters', this.character, this.character_id, 'addCharacter' , modal )
            }
        }
    }
}
</script>
