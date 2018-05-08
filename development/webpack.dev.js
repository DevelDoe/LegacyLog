/**
 * @Author: Morgan Andree Ray DevelDoe
 * @Date:   29-04-2018
 * @Email:  info@andreeray.se
 * @Filename: webpack.dev.js
 * @Last modified by:   Morgan Andree Ray
 * @Last modified time: 02-05-2018
 * @License: MIT
 */


 const webpack = require('webpack')
 const path = require('path')
 const merge = require('webpack-merge')
 const common = require('./webpack.common.js')

module.exports = merge(common, {
    devtool: 'inlinesourcemap',
    devServer: {
        contentBase: path.join(__dirname, "../dist"),
        compress: false,
        inline: true,
        port: 3001
    },
    mode: 'development'
})
//
