<!--
@Author: Morgan Andree Ray <DevelDoe>
@Date:   11-05-2018
@Email:  info@andreeray.se
@Filename: OrganisationTools.vue
@Last modified by:   Morgan Andree Ray
@Last modified time: 19-05-2018
@License: MIT
-->
<template lang="html">
    <div>
        <DevelModal modal="addMission">
            <div slot="header"> <h2>Add Mission</h2> </div>
            <div slot="bread">
                <form id="modal-form-mission">
                    <input type="text" v-model="inputs.name" placeholder="Mission Name">
                    <input type="text" v-model="inputs.type" placeholder="Mission type">
                    <textarea rows="8" cols="80" v-model="inputs.description" placeholder="Mission description"></textarea>
                    <input type="text" v-model="inputs.payment" placeholder="Mission payment">
                    <div v-for="( objective, i ) in inputs.objectives">
                        <input type="text" v-model="objective.description"><span @click="removeObjective(i)">delete</span>
                    </div>
                    <div class="">
                        <select v-model="inputs.giver_id">
                            <option value="" selected>Mission giver</option>
                            <option v-for="( giver, i ) in charactersAndEntities" :key=" 'giv' +i " :value=" giver._id ">{{ giver.name }}</option>
                        </select>
                    </div>

                </form>
            </div>
            <div slot="footer">
                <div class="form-control">
                    <button @click="addObjective">add objective</button>
                    <button form="modal-form-mission" @click="save('addMission')">save</button>
                </div>
            </div>
        </DevelModal>
        <div class="tool-control">
            <button @click="openModal('addMission')">add mission</button>
        </div>

    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'OrganisationTools',
    data () {
        return {
            inputs: {
                name: '',
                description: '',
                givver_id: '',
                objectives: [],
                payment: '',
                type: ''
            }
        }
    },
    computed: {
        ...mapGetters([ 'missions' , 'meta_data', 'organisations', 'characters' ]),
        srtMissionLst () {
            return this.mixKeySrt( this.missions, 'name' ) || null
        },
        charactersAndEntities () {
            return this.mixKeySrt( this.characters.concat(this.organisations), 'name' ) || null
        }
    },
    methods: {
        openModal( modal ) {
            this.$bus.$emit('toggleModal', modal )
        },
        addObjective () {
            this.inputs.objectives.push({ description: '' })
        },
        removeObjective( index ) {
            this.inputs.objectives.splice(index, 1)
        },
        save ( modal ) {
            const mission = {
                name: this.inputs.name,
                type: this.inputs.type,
                description: this.inputs.description,
                payment: this.inputs.payment,
                giver_id: this.inputs.giver_id,
                objectives: this.inputs.objectives,
            }
            const valid = this.validate( this.meta_data.validation_rules.mission, mission, 'missions')
            if ( valid === 'true' ) {
                this.apiSave( 'missions', mission, 'addMission' , modal  )
                this.inputs.name = ''
                this.inputs.type = ''
                this.inputs.description = ''
                this.inputs.payment = ''
                this.inputs.giver_id = ''
                this.inputs.objectives = []
            }
        }
    }
}
</script>
