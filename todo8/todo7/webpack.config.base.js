const path = require("path");
const webpackBar = require("webpackbar");
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {

    plugins: [
        new HtmlWebpackPlugin({
            title: "首页",
            filename: "index.html",
            template: "./public/index.html",
            chunks: '[index]'
        }),

        new CleanWebpackPlugin(),
        new webpackBar({})
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_module\bower_components)/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(eot|woff|woff2|ttf)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]",
                        publicPath: "./../fonts",
                        outputPath: "fonts/"
                    }
                }
            },
            {
                test: /\.(png|gif|jpe?g)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 8129,
                        publicPath: "./../img",
                        outputPath: "img/"
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: [
            ".jsx", ".less", ".js", ".css"
        ]
    }
}