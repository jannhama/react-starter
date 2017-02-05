/**
 * File: webpack.config.js
 * Date: 27.11.2016
 * Author: Janne Hämäläinen
 * Twitter: @JanneHamalainen
 */
/*    "build": "babel src -d lib",*/

const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const NODE_ENV = (process.env.NODE_ENV || 'development').trim();

console.log(NODE_ENV);


/*
 var webpackConf = {

 cache: true,
 devtool: 'eval',
 entry: './app.js',
 output: {
 path: path.join(__dirname, 'dist'),
 filename: 'app.bundle.js'
 },
 resolve: {
 modulesDirectories: ['node_modules'],
 extensions: ['.js', '.jsx'],
 },
 */

var webpackConf = {

    devtool: 'eval',
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
            /*        , {
             test: /\.html$/,
             loader: 'html-loader',
             exclude: /node_modules/
             }, {
             test: /\.scss$/,
             loader: 'style!css!sass'
             }, {
             test: /\.css$/,
             loader: 'style!css'
             }, {
             test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
             loader: 'file-loader'
             }*/
        ]
    },
    plugins: [

        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.DefinePlugin({
                'NODE_ENV': JSON.stringify(NODE_ENV)
            }
        )
    ]
};

// For final binary we disable source maps and uglify code
if (NODE_ENV === 'production') {
    console.log('Compressing...');
    webpackConf.devtool = '';
    webpackConf.plugins.push(new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: true
        }
    }));
}

module.exports = webpackConf;