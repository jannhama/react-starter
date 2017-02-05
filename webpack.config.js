var path = require('path');
var webpack = require('webpack');

var config = {
    devtool: 'eval',
    entry: [
        './src/app.js'

    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel',
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
                exclude: /node_modules/
            }
        ]
    }
};

module.exports = config;