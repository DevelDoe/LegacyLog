/**
 * @Author: Morgan Andree Ray
 * @Date:   27-04-2018
 * @Email:  info@andreeray.se
 * @Filename: plugins.js
 * @Last modified by:   Morgan Andree Ray
 * @Last modified time: 20-05-2018
 * @License: MIT
 */


import DevelModal   from '../plugins/DevelModal.vue'
import DevelToast   from '../plugins/DevelToast.vue'
import LoadoutModal from '../Plugins/LoadoutModal.vue'
import MissileModal from '../Plugins/MissileModal.vue'

const Plugins = {
    install(Vue, options) {
        Vue.component(DevelModal.name, DevelModal)
        Vue.component(DevelToast.name, DevelToast)
        Vue.component(LoadoutModal.name, LoadoutModal)
        Vue.component(MissileModal.name, MissileModal)
    }
}

export default Plugins
