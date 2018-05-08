/**
 * @Author: Morgan Andree Ray
 * @Date:   30-04-2018
 * @Email:  info@andreeray.se
 * @Filename: webpack.prod.js
 * @Last modified by:   Morgan Andree Ray
 * @Last modified time: 02-05-2018
 * @License: MIT
 */


 const merge = require('webpack-merge')
 const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
 const common = require('./webpack.common.js')

 module.exports = merge(common, {
     plugins: [
         new UglifyJSPlugin()
     ],
     mode: 'production'
 })
