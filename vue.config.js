const cdn = {
    css: [
        "//unpkg.zhimg.com/element-ui@2.15.6/lib/theme-chalk/index.css",
    ],
    js: [
        "//unpkg.zhimg.com/vue@2.6.11/dist/vue.min.js",
        "//unpkg.zhimg.com/element-ui@2.15.6/lib/index.js",
    ]
}

module.exports = {
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
        }
    },
    pages: {
        index: {
            entry: 'src/main.js',
            template: 'public/index.html',
            filename: 'index.html',
            title: '文本识别',
            chunks: ['chunk-vendors', 'chunk-common', 'index'],
            cdn: cdn
        }
    }
}