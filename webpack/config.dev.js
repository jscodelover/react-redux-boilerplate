const webpack = require('webpack');
const path = require("path");
const DashboardPlugin = require('webpack-dashboard/plugin');

const base = require('./config.base');

module.exports = {
    ...base,
    mode: 'development',
    entry: `${path.resolve(__dirname, '..')}/src/main.jsx`,
    output: {
        path: `${path.resolve(__dirname, '..')}/public`,
        filename: "bundle.js",
    },
    devtool: "cheap-module-eval-source-map",
    devServer: {
        port: 3001,
        historyApiFallback: true,
        hot: true,
        publicPath: '/'
    },
    module: {
        rules: [
            ...base.module.rules,
            {
                test: /\.(sa|sc)ss$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ],
    },
    plugins: [
        ...base.plugins,
        new webpack.HotModuleReplacementPlugin(),
        new DashboardPlugin(),
    ],
    optimization: {
        ...base.optimization,
        splitChunks: {
          ...base.optimization.splitChunks,
          chunks: 'async',
        },
    },
};

