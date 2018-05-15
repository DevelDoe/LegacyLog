/**
 * @Author: Morgan Andree Ray
 * @Date:   27-04-2018
 * @Email:  info@andreeray.se
 * @Filename: api.js
 * @Last modified by:   Morgan Andree Ray
 * @Last modified time: 15-05-2018
 * @License: MIT
 */

import store from '../store/store'
const helperFunctions = {
    install(Vue, options) {
        Vue.mixin({
            methods: {
                apiSave() {
                    const args = (arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments))
                    const collection = args.shift() || null
                    const data       = args.shift() || null
                    const action     = args.shift() || null
                    const modal      = args.shift() || null

                    let obj = {}
                    Object.keys( data ).forEach( key => {
                        obj[key] = data[key]
                    })

                    this.$http.post(`${collection}/`, obj)
                        .then( res => {

                            if(res.body.err) {
                                store.dispatch('setResponse', res.body.err)
                            }
                            else {
                                store.dispatch('setResponse', 'article saved' )
                                this.$store.dispatch(action, res.body)
                                this.$bus.$emit('toggleModal', modal )
                            }

                            setTimeout( () => { store.dispatch('setResponse', '' ) }, 4000 )
                        })
                        .catch( err => {
                            setTimeout( () => { store.dispatch('setResponse', 'Connection error' ) }, 4000 )
                            setTimeout( () => { store.dispatch('setResponse', '' ) }, 4000 )
                        })
                },

                apiUpdate() {
                    const args       = (arguments.length === 1 ? [ arguments[0] ] : Array.apply( null, arguments ))
                    const collection = args.shift() || null
                    const data       = args.shift() || null
                    const id         = args.shift() || null
                    const action     = args.shift() || null
                    const modal      = args.shift() || null
                    let body = {}
                    Object.keys( data ).forEach( key => {
                        body[key] = data[key]
                    })

                    this.$http.put( `${collection}/${id}`, body )
                        .then( res => {
                            if(res.body.err) {
                                store.dispatch('setResponse', res.body.err)
                            }
                            else {
                                store.dispatch('setResponse', 'article updated' )
                                this.$store.dispatch(action, res.body)
                                this.$bus.$emit('toggleModal', modal )
                            }
                            setTimeout( () => { store.dispatch('setResponse', '' ) }, 4000 )
                        })
                        .catch( err => {
                            setTimeout( () => { store.dispatch('setResponse', 'Connection error' ) }, 4000 )
                            setTimeout( () => { store.dispatch('setResponse', '' ) }, 4000 )
                        })
                },

                apiDelete() {
                    const args       = (arguments.length === 1 ? [ arguments[0] ] : Array.apply( null, arguments ))
                    const collection = args.shift()
                    const id         = args.shift()
                    const index      = args.shift()

                    this.$http.delete(`${collection}/${id}`)
                        .then(res => {
                            store.dispatch('setResponse', 'article deleted' )
                            setTimeout( () => { store.dispatch('setResponse', '' ) }, 4000 )
                        }).catch(function(error){
                            setTimeout( () => { store.dispatch('setResponse', 'Connection error' ) }, 4000 )
                            setTimeout( () => { store.dispatch('setResponse', '' ) }, 4000 )
                        })
                }
            }
        })
    }
}

export default helperFunctions
