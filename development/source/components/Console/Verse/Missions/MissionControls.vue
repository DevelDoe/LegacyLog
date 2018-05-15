<!--
@Author: Morgan Andree Ray
@Date:   12-05-2018
@Email:  info@andreeray.se
@Filename: MissionControl.vue
@Last modified by:   Morgan Andree Ray
@Last modified time: 15-05-2018
@License: MIT
-->
<template lang="html">
  <div v-if="mission._id === mission_id ">
      <DevelModal modal="updateMission">
          <div slot="header">
              <h2>Update Character</h2>
          </div>
          <div slot="bread">
              <form id="modal-form">
                  <input type="text" v-model="mission.name" placeholder="Mission Name">
                  <input type="text" v-model="mission.type" placeholder="Mission type">
                  <textarea rows="8" cols="80" v-model="mission.description" placeholder="Mission description"></textarea>
                  <input type="text" v-model="mission.payment" placeholder="Mission payment">
                  <div v-for="( objective, i ) in mission.objectives">
                      <input type="text" v-model="objective.description"><button @click="removeObjective(i)">remove</button>
                  </div>
                  <select v-model="mission.giver_id">
                      <option value="" selected>Mission giver</option>
                      <option v-for="giver in charactersAndEntities" :value="giver._id">{{ giver.name }}</option>
                  </select>
              </form>
          </div>
          <div slot="footer">
              <div class="form-control">
                  <button @click="addObjective">add objective</button>
                  <button @click="update('updateMission')">save</button>
              </div>
          </div>
      </DevelModal>
      <button @click="openModal('updateMission')">update</button>
      <button @click="del()">delete</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'MissionControls',
    props: [ 'mission' , 'mission_id' , 'index' ],
    computed: {
        ...mapGetters([ 'meta_data', 'organisations', 'characters' ]),
        charactersAndEntities () {
            return this.characters.concat(this.organisations) || null
        },
        giver () {
            return this.charactersAndEntities.find(p => p._id === this.mission.giver_id) || null
        }
    },
    methods: {
        openModal( modal ) {
            this.$bus.$emit('toggleModal', modal )
        },
        addObjective () {
            this.mission.objectives.push({ description: '' })
        },
        removeObjective( index ) {
            this.mission.objectives.splice(index, 1)
        },
        del() {
            this.apiDelete( 'missions', this.mission_id)
            this.$store.dispatch('delMission', this.index )
        },
        update( modal ) {
            const valid = this.validate( this.meta_data.validation_rules.mission, this.mission, 'missions', this.index)
            if ( valid === 'true') {
                this.$store.dispatch('delMission', this.index)
                this.apiUpdate( 'missions', this.mission, this.mission_id, 'addMission' , modal )
            }
        }
    }
}
</script>
