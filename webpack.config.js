const path = require('path');

module.exports = {
    // 开发模式
    mode: "development",
    // 入口
    entry: './src/index.js',
    // 打包到什么文件
    output: {
        filename: 'bundle.js',
    },
    // 配置虚拟服务器
    devServer: {
        // 静态文件根目录
        contentBase:path.join(__dirname,"www"),
        // 不压缩
        compress:false,
        // 端口号
        port:8080,
        // 虚拟打包路径
        publicPath:"/test/"
    }
};