module.exports = {
    devServer: {
        proxy: {
            // TODO: 后端接口写好后换源
            '/apiurl': {
                target: 'http://139.196.153.21:8868/', // 后端url
                changeOrigin: true,
                pathRewrite: {
                    '^/apiurl': '/'
                }
            }
        },
        port: 8080 // 前端端口号
    }
}
