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
    <div class="propulstion-tool">

        <DevelModal modal="addAvionic">
            <div slot="header"> <h2>Add Avionic</h2> </div>
            <div slot="bread">
                <form id="modal-form-avionic-tool">
                    <input placeholder="Model" v-model="avionic.model" />
                    <div class="">
                        <select v-model="avionic.organisation_id">
                            <option value="" selected>Manufacturer</option>
                            <option v-for="( organisation, i ) in manufacturers" :value="organisation._id" >{{ organisation.name }}</option>
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

        <div class="tool-control">
            <button @click="openModal('addPropulsion')">add propulsion</button>
        </div>

    </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
