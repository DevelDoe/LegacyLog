<!--
@Author: Morgan Andree Ray
@Date:   19-05-2018
@Email:  info@andreeray.se
@Filename: Propulsions.vue
@Last modified by:   Morgan Andree Ray
@Last modified time: 19-05-2018
@License: MIT
-->
<template lang="html">
    <div class="system-tool">

        <DevelModal modal="addSystem">
            <div slot="header"> <h2>Add System</h2> </div>
            <div slot="bread">
                <form id="modal-form-system-tool">
                    <input placeholder="Model" v-model="system.model" />
                    <div class="">
                        <select v-model="system.organisation_id">
                            <option value="" selected>Manufacturer</option>
                            <option v-for="( organisation, i ) in manufacturers" :value="organisation._id" >{{ organisation.name }}</option>
                        </select>
                    </div>
                    <div class="">
                        <select v-model="system.category">
                            <option value="" selected>Category</option>
                            <option value="Power Plant">Power Plant</option>
                            <option value="Cooler">Cooler</option>
                            <option value="Shield Generator">Shield Generator</option>
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
                    <button form="modal-form-system-tool" @click="save('addSystem')">save</button>
                </div>
            </div>
        </DevelModal>

        <div class="tool-control">
            <button @click="openModal('addSystem')">add system</button>
        </div>

    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'SystemTool',
    data() {
        return {
            system: {
                organisation_id: '',
                model: '',
                size: '',
                category: ''
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
            const valid = this.validate( this.meta_data.validation_rules.system, this.system, 'systems')
            if( valid === 'true' ) {
                this.apiSave( 'systems', this.system, 'addSystem', modal)
                this.system.organisation_id = ''
                this.system.model = ''
                this.system.size = ''
                this.system.category = ''
            }
        }
    }
}
</script>
