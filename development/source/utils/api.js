/**
 * @Author: Morgan Andree Ray
 * @Date:   27-04-2018
 * @Email:  info@andreeray.se
 * @Filename: api.js
 * @Last modified by:   Morgan Andree Ray
 * @Last modified time: 14-05-2018
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
                    const modal      = args.shift() || null

                    let obj = {}
                    Object.keys( data ).forEach( key => {
                        obj[key] = data[key]
                    })

                    this.$http.post(`${collection}/`, obj)
                        .then( res => {

                            if(res.body.message) {
                                debugger
                                this.$bus.$emit('setResponse', res.body.message)
                            }
                            else {
                                this.$bus.$emit('setResponse', 'saved')
                                this.$store.dispatch('addUser', res.body)
                                this.$bus.$emit('toggleModal', modal )
                            }

                            setTimeout( () => { this.$bus.$emit('setResponse', '') }, 4000)
                        })
                        .catch( err => {
                            this.$bus.$emit( 'setResponse', 'Connection error ' )
                            setTimeout( () => { this.$bus.$emit('setResponse', '') }, 4000 )
                        })
                },

                apiUpdate() {
                    const args       = (arguments.length === 1 ? [ arguments[0] ] : Array.apply( null, arguments ))
                    const collection = args.shift() || null
                    const data       = args.shift() || null
                    const id         = args.shift() || null
                    const modal      = args.shift() || null

                    let body = {}
                    Object.keys( data ).forEach( key => {
                        body[key] = data[key]
                    })

                    this.$http.put( `${collection}/${id}`, body )
                        .then( res => {
                            if(res.body) {
                                this.$bus.$emit('setResponse', 'updated')
                                this.$bus.$emit('toggleModal', modal )

                                this.$store.dispatch('addUser', res.body)
                            }

                            else
                                this.$bus.$emit('setResponse', res.body.message)
                            setTimeout( () => { this.$bus.$emit( 'setResponse', '' ) }, 4000 )
                        })
                        .catch( err => {
                            this.$bus.$emit( 'setResponse', 'Connection error' )
                            setTimeout( () => { this.$bus.$emit('setResponse', '') }, 4000 )
                        })
                },

                apiDelete() {
                    const args       = (arguments.length === 1 ? [ arguments[0] ] : Array.apply( null, arguments ))
                    const collection = args.shift()
                    const id         = args.shift()
                    const index      = args.shift()

                    this.$http.delete(`${collection}/${id}`)
                        .then(res => {
                            this.$bus.$emit('setResponse',  'deleted')
                            setTimeout( () => { this.$bus.$emit('setResponse', '') }, 4000 )
                        }).catch(function(error){
                            this.$bus.$emit( 'setResponse', 'Connection error' )
                            setTimeout( () => { this.$bus.$emit('setResponse', '') }, 4000 )
                        })
                }
            }
        })
    }
}

export default helperFunctions
