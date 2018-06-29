var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const DeBug = process.env.NODE_ENV === 'development';

module.exports = {
  entry: {
    app: './src/main.js',
    loginWin:DeBug?['./src/wins/LoginWin.js', 'webpack-hot-middleware/client']:'./src/wins/LoginWin.js',
    mainWin:DeBug?['./src/wins/MainWin.js', 'webpack-hot-middleware/client']:'./src/wins/MainWin.js',
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath,
    libraryTarget:'umd'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json','.css', '.node'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.node$/,
        use: 'node-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  // externals: [
  //   ...Object.keys(dependencies || {}).filter(d => !whiteListedModules.includes(d))
  // ],
  externals: {
    sqlite3:'commonjs2 sqlite3'
  },
  node: {
    __dirname: process.env.NODE_ENV !== 'production',
    __filename: process.env.NODE_ENV !== 'production',
    global: false,
  },
  target: 'node-webkit'
}
