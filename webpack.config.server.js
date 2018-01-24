import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import path from 'path';
import webpackNodeExternals from 'webpack-node-externals';
import autoprefixer from 'autoprefixer';
import 'babel-polyfill';

if (!process.env.ENVIRONMENT) {
  process.env.ENVIRONMENT = 'prod';
}

const Dotenv = require('dotenv-webpack');

const GLOBALS = {
  window: {},
  'process.env.NODE_ENV': JSON.stringify('production'),
  'process.env.BROWSER': false,
  __DEV__: false
};

export default {
  resolve: {
    extensions: ['*', '.js', '.jsx', '.json']
  },
  devtool: 'source-map',
  entry: ['babel-polyfill', path.resolve(__dirname, 'server')],
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'server/build'),
    publicPath: '/',
    filename: 'server.js'
  },
  plugins: [
    new webpack.DefinePlugin(GLOBALS),

    new webpack.optimize.UglifyJsPlugin({ sourceMap: true }),

    new ExtractTextPlugin('styles.css'),

    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
      noInfo: true, // set to false to see a list of every file being bundled.
      options: {
        sassLoader: {
          includePaths: [path.resolve(__dirname, 'src', 'scss')]
        },
        context: '/',
        postcss: () => [autoprefixer],
      }
    }),

    new Dotenv({
      path: path.resolve(__dirname, `.env.${process.env.ENVIRONMENT}`),
      systemvars: true
    })
  ],
  externals: [webpackNodeExternals({
    whitelist: ['actioncable']
  })],
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.eot(\?v=\d+.\d+.\d+)?$/, loader: 'url-loader?name=[name].[ext]' },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff&name=[name].[ext]' },
      { test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream&name=[name].[ext]' },
      { test: /\.svg(\?v=\d+.\d+.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml&name=[name].[ext]' },
      { test: /\.(jpe?g|png|gif)$/i, loader: 'file-loader?name=[name].[ext]' },
      { test: /\.ico$/, loader: 'file-loader?name=[name].[ext]' },
      { test: /(\.css|\.scss)$/, loader: ExtractTextPlugin.extract('css-loader?sourceMap!postcss-loader!sass-loader?sourceMap') }
    ]
  }
};
