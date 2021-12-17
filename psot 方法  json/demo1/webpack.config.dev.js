const base = require("./webpack.config.base");
const merge = require("webpack-merge");
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = merge(base, {
    // plugins: [
    //     new CopyWebpackPlugin([{
    //         from: __dirname + '/src/mock',
    //         to: __dirname + '/dist/mock'
    //     }])
    // ],
    module: {
        rules: [
            {
                test: /\.css$/,
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
                    },
                    {
                        loader: "less-loader"
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
                        loader: "css-loader",
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            }
        ]
    },
    mode: 'development',
    devtool: "source-map",
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 4023,
        proxy: {
            "/data": {
                "target": "http://www.bjlink32.com/data.php",
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
});