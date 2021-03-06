const cdn = {
    css: [
        "//unpkg.zhimg.com/element-ui@2.15.6/lib/theme-chalk/index.css",
    ],
    js: [
        "//unpkg.zhimg.com/vue@2.6.11/dist/vue.min.js",
        "//unpkg.zhimg.com/element-ui@2.15.6/lib/index.js",
        "//unpkg.zhimg.com/axios@0.24.0/dist/axios.min.js",
    ]
}

module.exports = {
    lintOnSave: false,
    publicPath: './',
    outputDir:"docs",   // 打包时生成的生产环境构建文件的目录
    productionSourceMap: process.env.NODE_ENV !== 'production',
    chainWebpack: config => {
        config.resolve.symlinks(true)
        if (process.env.NODE_ENV === 'production') {
            config.plugin('webpack-bundle-analyzer')
                .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
                .end()
        }
    },
    configureWebpack: {
        externals: {
            vue: "Vue",
            "element-ui": "ELEMENT",
            axios: "axios",
        }
    },
    pages: {
        index: {
            entry: 'src/main.js',
            template: 'public/index.html',
            filename: 'index.html',
            title: '文本识别OCR',
            chunks: ['chunk-vendors', 'chunk-common', 'index'],
            cdn: cdn
        }
    },
    devServer: {
        hotOnly: true,
        disableHostCheck: true,
        proxy: {
            '^/baiduCloud/': {
                target: process.env.VUE_APP_BAIDU_CLOUD_BASE_URL,
                changeOrigin: true, // 跨域
                pathRewrite: {
                    '^/baiduCloud/': '/'
                }
            },
            '^/tencentCloudOcr/': {
                target: process.env.VUE_APP_TENCENT_CLOUD_OCR_BASE_URL,
                changeOrigin: true, // 跨域
                pathRewrite: {
                    '^/tencentCloudOcr/': '/'
                }
            },
        }
    }
}