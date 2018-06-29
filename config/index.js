var path = require('path')

function resolve() {
  return path.resolve.apply(path, [__dirname, '..'].concat(...arguments))
}

// `./package.json`
var tmpJson = require(resolve('./package.json'))

// var curReleasesPath = resolve('./releases', tmpJson.name + '-v' + tmpJson.version)
var curReleasesPath = resolve('./releases', tmpJson.version)

module.exports = {
  build: {
    env: require('./prod.env'),
    index: resolve('./dist/index.html'),
    assetsRoot: resolve('./dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: false,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report,
    // only build nw
    onlyNW: process.env.npm_config_onlyNW,
    // only build nw
    noSetup: process.env.npm_config_noSetup,
    nw: {
      // manifest for nw
      // the fileds will merge with `./package.json` and build to `./dist/package.json` for NW.js
      manifest: ['name', 'appName', 'version', 'description', 'author', { main: './index.html' }, 'manifestUrl', 'window', 'nodejs', 'js-flags', 'node-remote'],
      builder: {
        files: [resolve('./dist/**')],
        // platforms: ['win32', 'win64', 'osx64'],
        platforms: ['win32'],
        version: '0.14.7',
        flavor: 'normal',
        cacheDir: resolve('./node_modules/_nw-builder-cache/'),
        buildDir: resolve('./releases'),
        winIco: resolve('./build/setup_resources/icon.ico'),
        macIcns: resolve('./build/setup_resources/logo.icns'),
        buildType: function () {
          return this.appVersion
        }
      },
      setup: {
        issPath: resolve('./config/setup.iss'),
        // only one version path
        files: curReleasesPath,
        resourcesPath: resolve('./build/setup_resources'),
        appPublisher: 'Beijing Deallinker Technology Co., Ltd.',
        appURL: 'https://www.invoiceclouds.com',
        appId: '1234',
        // data: { name, version, platform }
        outputFileName: function (data) {
          return data.name + '-' + data.version
        }
      },
      upgrade: {
        outputFile: resolve('./releases/upgrade.json'),
        publicPath: 'http://localhost:8080/releases/',
        files: [curReleasesPath]
      }
    }
  },
  dev: {
    env: require('./dev.env'),
    port: 8080,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},
    cssSourceMap: false,
    upgrade: {
      publicPath: '/releases',
      directory: 'releases'
    }
  }
}
