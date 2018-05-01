/**
 * @Author: Morgan Andree Ray <DevelDoe>
 * @Date:   28-04-2018
 * @Email:  info@andreeray.se
 * @Filename: webpack.dev.js
 * @Last modified by:   DevelDoe
 * @Last modified time: 01-05-2018
 * @License: MIT
 */


const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
    devtool: 'inlinesourcemap',
    mode: 'development'
})
