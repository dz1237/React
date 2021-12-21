const path = require("path");
const WebpackBar = require("webpackbar")
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");


module.exports = {
    entry: {
        index: "./src/index.js",
        one: "./src/one.js"
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "js/[name].[chunkhash].main.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "首页",
            filename: "index.html",
            template: "./public/index.html",
            chunks: "[index]"
        }),
        new HtmlWebpackPlugin({
            title: "one",
            filename: "one.html",
            template: "./public/one.html",
            chunks: "[one]"
        }),
        new webpack.ProvidePlugin({
            React: 'react',
            ReactDOM: 'react-dom',
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new CleanWebpackPlugin(),
        new WebpackBar({})
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
                        outputPath: "fonts/",

                    }
                }
            },
            {
                test: /\.(png|gif|jpe?g)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 8129,
                        publicPath: "./../fonts",
                        outputPath: "fonts/",

                    }
                }
            }
        ]
    },
    resolve: {
        extensions: [".jsx", ".less", ".js", ".css"]
    }

}