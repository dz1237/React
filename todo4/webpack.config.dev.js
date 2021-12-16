
const path = require("path");
const base = require("./webpack.config.base");
const merge = require("webpack-merge");

module.exports = merge(base, {
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader",
                        options: {
                            modules: false
                        }
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules: true
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "sass.loader"
                    }
                ]
            }

        ]
    },
    mode: "development",
    devtool: "source-map",
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 3000,
        proxy: {
            "/data": {
                "target": "http://www.bjlink32.com/data/php",
                "changeOrigin": true,
                "pathRewrite": {
                    "^/data": ""
                }
            }
        },
        overlay: {
            werning: true,
            errors: true
        }
    }
})