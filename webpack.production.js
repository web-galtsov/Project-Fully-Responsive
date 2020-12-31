const path = require('path');
const common = require('./webpack.config');
const { merge } = require('webpack-merge');
//const HtmlWebPackPlugin = require('html-webpack-plugin');
//const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports =merge(common, {
    mode: 'production',
    devtool: 'source-map',
    output: {
        filename: "[name].build.js",
        path: path.resolve (__dirname, "dist"),
        publicPath: './'
    },
    optimization: {
        splitChunks: {
            chunks: "all"
        },
      },
/*

    plugins: [
        new MiniCssExtractPlugin({ filename: "[name].[contentHash].css" }),
    ],
*/

})