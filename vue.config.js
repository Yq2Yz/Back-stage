const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false, // 关闭eslint校验
    devServer: { host: 'localhost', port: 8080, }
})