/**
 * Created by outcastgeek on 12/31/15.
 */

'use strict';

var webpack = require('webpack'),
    webpackConfig = require('./webpack.config.js');

module.exports = {
    entry: webpackConfig.entry,
    output: {
        path: __dirname + '/dist',
        filename: 'js/bundle.[hash].js'
    },
    plugins: webpackConfig.plugins.concat([
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': '"production"'
            }
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({minimize: true})
    ]),
    module: {
        loaders: webpackConfig.module.loaders
    }
};
