module.exports = {
    devServer: {
        proxy: {
            '/apiurl/dim': {
                target: 'http://yelangpi.natapp1.cc/', // 后端url
                changeOrigin: true,
                pathRewrite: {
                    '^/apiurl': '/'
                }
            },
            '/apiurl/neo4j': {
                target: 'http://yelangpi.natapp1.cc/', // 后端url
                changeOrigin: true,
                pathRewrite: {
                    '^/apiurl': '/'
                }
            },
            '/apiurl/hive': {
                target: 'http://49.234.12.110:4800/', // 后端url
                changeOrigin: true,
                pathRewrite: {
                    '^/apiurl/hive': '/'
                }
            }
        },
        port: 8080 // 前端端口号
    }
}
