<!--
@Author: Morgan Andree Ray
@Date:   17-05-2018
@Email:  info@andreeray.se
@Filename: AvionicTool.vue
@Last modified by:   Morgan Andree Ray
@Last modified time: 17-05-2018
@License: MIT
-->
<template lang="html">
    <div class="avionic-tool">
        <DevelModal modal="addAvionic">
            <div slot="header"> <h2>Add Avionic</h2> </div>
            <div slot="bread">
                <form id="modal-form-avionic-tool">
                    <input placeholder="Name" v-model="avionic.name" />
                    <div class="">
                        <select v-model="avionic.organisation_id">
                            <option value="" selected>Manufacturer</option>
                            <option v-for="( organisation, i ) in manufacturers" :value="organisation._id" >{{ organisation.name }}</option>
                        </select>
                    </div>
                    <div class="">
                        <select v-model="avionic.model">
                            <option value="" selected>Model</option>
                            <option value="Radar">Radar</option>
                            <option value="Computer">Computer</option>
                        </select>
                    </div>
                    <div class="">
                        <select v-model="avionic.size">
                            <option value="" selected>Size</option>
                            <option value="S">S</option>
                            <option value="V">V</option>
                        </select>
                    </div>

                </form>
            </div>
            <div slot="footer">
                <div class="form-control">
                    <button form="modal-form-ship-tool" @click="save('addAvionic')">save</button>
                </div>
            </div>
        </DevelModal>
        <button @click="openModal('addAvionic')">add avionic</button>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'AvionicTool',
    data() {
        return {
            avionic: {
                name: '',
                organisation_id: '',
                model: '',
                size: ''
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
            const valid = this.validate( this.meta_data.validation_rules.avionic, this.avionic, 'avionics')
            if( valid === 'true' ) {
                this.apiSave( 'avionics', this.avionic, 'addAvionic', modal)
                this.avionic.name = ''
                this.avionic.organisation_id = ''
                this.avionic.model = ''
                this.avionic.size = ''

            }
        }
    }
}
</script>

<style lang="css">
</style>
