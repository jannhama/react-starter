const path = require('path');
const webpack = require('webpack');
const NODE_ENV = (process.env.NODE_ENV || 'development').trim();


let webpackConf = {
  cache: true,
  devtool: 'eval',
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.bundle.js',
    publicPath: "/dist/"
  },

  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['react-hot-loader', 'babel-loader'],
        exclude: /node_modules/
      }, {
        test: /\.html$/,
        loader: 'html-loader',
        exclude: /node_modules/
      }, {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      }, {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }, {
        test: /\.(png|ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        loader: 'file-loader'
      }

    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
        'NODE_ENV': JSON.stringify(NODE_ENV)
      }
    )
  ],
  devServer: {
    hot: true,
    contentBase: './dist',
    inline: true,
    port: 3500
  }

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