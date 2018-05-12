/**
 * @Author: Morgan Andree Ray
 * @Date:   12-05-2018
 * @Email:  info@andreeray.se
 * @Filename: _globals.js
 * @Last modified by:   Morgan Andree Ray
 * @Last modified time: 12-05-2018
 * @License: MIT
 */
 import Vue from 'vue'
 import upperFirst from 'lodash/upperFirst'
 import camelCase from 'lodash/camelCase'

 const requireComponent = require.context( '.' , false , /Characters-[\w-]+\.vue$/)
 requireComponent.keys()forEach( filename => {
     const componentConfig = requireComponent( filename )
     const componentName = upperFirst(
         camelCase(filename.replace( /^\.\// , '' ).replace( /\.\w+$/ , ''))
     )
     Vue.component(componentName, componentConfig.default || componentConfig)
 })
