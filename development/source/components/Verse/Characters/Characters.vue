<!--
@Author: Morgan Andree Ray
@Date:   27-04-2018
@Email:  info@andreeray.se
@Filename: Characters.vue
@Last modified by:   Morgan Andree Ray
@Last modified time: 12-05-2018
@License: MIT
-->
<template lang="html">
    <div class="characters">
        <div class="hide-scroll">
            <div class="viewport">
                <div v-for="(character, index) in filter"  >
                    <button @click="$bus.$emit('setId', [character._id] )">{{ character.name }}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'Characters',
    computed: {
        ...mapGetters([ 'characters', 'characters_search' ]),
        filter() {
            return this.sortedCharacterList.filter( character => {
                return character.name.toLowerCase().indexOf( this.characters_search.toLowerCase() ) > -1
            })
        },
        sortedCharacterList() {
            return this.mixKeySrt( this.characters, 'name' )
        }
    }
}
</script>
