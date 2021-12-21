const merge = require("webpack-merge");
const base = require("./webpack.config.base");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlufin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
module.exports = merge(base, {
    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/[name]-[chunkhash].css",
            chunkFilename: "[id].css"
        }),

    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
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
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: "css-loader"
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
                        loader: MiniCssExtractPlugin.loader
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
    mode: 'production',
    optiomization: {
        minimize: true,
        minimizer: [
            new TerserPlufin({
                cache: true,
                parallel: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    }
});