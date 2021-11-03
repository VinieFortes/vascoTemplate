module.exports = {
  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: false,
      animations: 'all'
    }
  },
  transpileDependencies: [
    'quasar'
  ],
  animations: [
    'bounceInLeft',
    'bounceOutRight'
  ]
}
