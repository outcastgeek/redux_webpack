/**
 * Created by outcastgeek on 12/31/15.
 */

'use strict';

var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./app/entry.js",
    output: {
        path: __dirname,
        filename: "js/bundle.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Redux Webpack',
            template: './app/index.html',
            inject: 'body'
        })
    ],
    module: {
        loaders: [
            { test: /\.js$/, loaders: ['react-hot', 'babel', 'eslint']},
            { test: /\.css$/, loader: "style!css" },
            { test: /\.scss$/, loader: "style!css!sass" }
        ]
    }
};
