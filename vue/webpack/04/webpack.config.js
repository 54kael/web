const path = require('path')

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        // url
        publicPath: 'dist/'
    },
    module: {
        rules: [{
                test: /\.css$/,
                // css-loader只负责将css文件进行加载
                // style-loader负责将样式添加到dom中
                // 使用多个loader时,是从右向左加载
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/i,
                use: [{
                    loader: 'url-loader',
                    options: {
                        // 当加载的图片，小于limit时，会将图片编译成base64字符串形式
                        // 当加载的图片，大于limit时，会使用file-loader模块进行加载
                        limit: 10,
                        name: 'img/[name].[hash:8].[ext]'
                    },

                }, ],
            }
        ]
    }
}