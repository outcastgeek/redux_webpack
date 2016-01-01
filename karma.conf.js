/**
 * Created by outcastgeek on 1/1/16.
 */

var webpack = require('webpack');

module.exports = function(config) {
    config.set({
        browsers: ['Chrome'], // run in Chrome
        singleRun: false, // run more than once
        //singleRun: true, // just run once by default
        frameworks: ['mocha'], // use the mocha test framework
        files: [
            'webpack-test.config.js' // just load this file
        ],
        preprocessors: {
            'webpack-test.config.js': ['webpack', 'sourcemap'] // preprocess with webpack and our sourcemap loader
        },
        reporters: ['dots', 'progress'], // report results in this format
        //reporters: ['dots'], // report results in this format
        webpack: { // kind of copy of your webpack config
            devtool: 'inline-source-map', // just do inline source maps instead if the default
            module: {
                loaders: [
                    { test: /\.js$/, loaders: ['react-hot', 'babel', 'eslint'] }
                ]
            }
        },
        webpackServer: {
            noInfo: true // please don't spam the console when running in karma!
        }
    });
};
