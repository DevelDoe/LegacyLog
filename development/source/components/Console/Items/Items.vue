<!--
@Author: Morgan Andree Ray
@Date:   10-05-2018
@Email:  info@andreeray.se
@Filename: Verse.vue
@Last modified by:   Morgan Andree Ray
@Last modified time: 17-05-2018
@License: MIT
-->

<template>
    <div id="ships">
        <div class="wrapper">
            <section id="leftbar" class="screen">
                <div class="top">
                    <h3>Items</h3>
                    <div class="nav">
                        <select v-model="selected">
                            <option disabled  value="">Please select one</option>
                            <option selected>Ships</option>
                            <option selected>Avionics</option>
                        </select>
                    </div>
                </div>
                <div class="filters">

                </div>
                <div class="tools">
                    <ShipTool />
                    <AvionicTool />
                </div>
            </section>
            <section id="content" class="screen">
                <div class="hide-scroll">
                    <div class="viewport">
                        <Ships v-if="selected === 'Ships'" />
                        <Avionics v-if="selected === 'Avionics'" />
                    </div>
                </div>
            </section>
            <section id="rightbar" class="screen">
                <div class="top">
                    <div class="hide-scroll">
                        <div class="viewport">
                            <ShipDetail v-for="( ship, i ) in ships" :key="'shipdet'+i" :ship="ship" :ship_id="id" />
                            <AvionicDetail v-for="( avionic, i ) in avionics" :key="'avidet'+i" :avionic="avionic" :avionic_id="id" />
                        </div>
                    </div>
                        </div>
                <div class="bottom">
                    <ShipControl v-if="selected === 'Ships'" v-for="( ship , i ) in ships" :key="'shicon'+i" :ship="ship" :ship_id="id" :index="i" />
                    <AvionicControl v-if="selected === 'Avionics'" v-for="( avionic , i ) in avionics" :key="'avicon'+i" :avionic="avionic" :avionic_id="id" :index="i" />
                </div>
            </section>
        </div>

    </div>
</template>

<script>
import ShipTool         from './Ships/ShipTool.vue'
import Ships            from './Ships/Ships.vue'
import ShipDetail       from './Ships/ShipDetail.vue'
import ShipControl      from './Ships/ShipControl.vue'

import AvionicTool      from './Avionics/AvionicTool.vue'
import Avionics         from './Avionics/Avionics.vue'
import AvionicDetail    from './Avionics/AvionicDetail.vue'
import AvionicControl   from './Avionics/AvionicControl.vue'

import { mapGetters }   from 'vuex'
export default {
    name: 'Items',
    data() {
        return {
            selected        : '',
            id              : '',
            location_type   : '',
        }
    },
    mounted() {
        this.$bus.$on('setId', payload => {
            let args = (payload.length === 1 ? [payload[0]] : Array.apply(null, payload) )
            let id   = args.shift() || null
            let type = args.shift() || null
            this.id = id
            if( type ) this.location_type = type
        })
    },
    computed: { ...mapGetters([ 'meta_data', 'ships', 'avionics' ]) },
    components: {
        ShipTool,
        Ships,
        ShipDetail,
        ShipControl,
        AvionicTool,
        Avionics,
        AvionicDetail,
        AvionicControl
    }
}
</script>
