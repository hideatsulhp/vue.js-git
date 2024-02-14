const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  devServer: {
    hot: true, // HMRを有効にする
    liveReload: true, // ページの自動リロード
  },
  transpileDependencies: true
})