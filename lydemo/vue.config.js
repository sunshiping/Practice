const vuxLoader = require('vux-loader')
module.exports = {
  configureWebpack: config => {
    vuxLoader.merge(config, {
      options: {},
      plugins: ['vux-ui', 'progress-bar', 'duplicate-style', {name: 'less-theme', path: 'src/style/vux_theme.less'}]
    })
  },
  runtimeCompiler: true
}
