// vue.config.js
module.exports = {
    css: {
        loaderOptions: {
            // by default the `sass` option will apply to both syntaxes
            // because `scss` syntax is also processed by sass-loader underlyingly
            // but when configuring the `prependData` option
            // `scss` syntax requires an semicolon at the end of a statement, while `sass` syntax requires none
            // in that case, we can target the `scss` syntax separately using the `scss` option
            scss: {
                // 统一加载全局样式变量
                prependData: `@import "~@/styles/variables.scss";`
            },
        }
    },

    devServer: {
        proxy: {
            '/boss': {
                target: 'http://eduboss.lagou.com',
                changeOrigin: true // 把请求头中的host配置为target
            },
            '/front': {
                target: 'http://edufront.lagou.com',
                changeOrigin: true 
            }
        }
    }
}