<!--
@Author: Morgan Andree Ray <DevelDoe>
@Date:   11-05-2018
@Email:  info@andreeray.se
@Filename: OrganisationTools.vue
@Last modified by:   Morgan Andree Ray
@Last modified time: 12-05-2018
@License: MIT
-->
<template lang="html">
    <div>
        <DevelModal modal="addCharacter">
            <div slot="header"> <h2>Add Character</h2> </div>
            <div slot="bread">
                <form id="modal-form-characters">
                    <input type="text" v-model="inputs.name" placeholder="Name">
                    <textarea v-model="inputs.description" rows="8" cols="80" placeholder="Biography"></textarea>
                    <select v-model="inputs.location_id">
                        <option v-for="( location, i) in srtLocationLst" :value="location._id">{{ location.name }}</option>
                    </select>
                </form>
            </div>
            <div slot="footer">
                <div class="form-control">
                    <button type="button" @click="save('addCharacter')">save</button>
                </div>
            </div>
        </DevelModal>

        <button @click="openModal('addCharacter')">add character</button>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'CharacterTools',
    data () {
        return {
            inputs: {
                name: '',
                description: '',
                location_id: ''
            }
        }
    },
    computed: {
        ...mapGetters([ 'characters' , 'meta_data', 'locations' ]),
        srtLocationLst() {
            return this.mixKeySrt( this.locations, 'name' ) || null
        },
    },
    methods: {
        openModal( modal ) {
            this.$bus.$emit('toggleModal', modal )
        },
        save ( modal ) {
            const character = {
                name        : this.inputs.name,
                description : this.inputs.description,
                location_id : this.inputs.location_id
            }
            const valid = this.validate( this.meta_data.validation_rules.character, character, 'characters')
            if ( valid === 'true' ) {
                this.apiSave( 'characters', character, modal  )
                this.inputs.name = ''
                this.inputs.description = ''
                this.inputs.location_id = ''
            }
        }
    }
}
</script>
