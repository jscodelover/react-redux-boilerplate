const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: `${path.resolve(__dirname, '..')}/src/main.jsx`,
    output: {
        path: `${path.resolve(__dirname, '..')}/public`,
        filename: "bundle.js"
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.json'],
        modules: [`${path.resolve(__dirname, '..')}/src`, 'node_modules']
    },
    module: {
        rules: [
            {
                test: /\.html?$/,
                loader: 'html-loader',
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components|public\/)/,
                loader: 'babel-loader',
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'file-loader',
            },
            {
                test: /\.(woff|woff2)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'url-loader',
                options: {
                    prefix: 'font/',
                    limit: 5000,
                },
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'url-loader',
                options: {
                    mimetype: 'application/octet-stream',
                    limit: 10000,
                },
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'url-loader',
                options: {
                    mimetype: 'application/image/svg+xml',
                    limit: 10000,
                },
            },
            {
                test: /\.gif/,
                exclude: /(node_modules|bower_components)/,
                loader: 'url-loader',
                options: {
                    mimetype: 'application/image/gif',
                    limit: 10000,
                },
            },
            {
                test: /\.jpg/,
                exclude: /(node_modules|bower_components)/,
                loader: 'url-loader',
                options: {
                    mimetype: 'application/image/jpg',
                    limit: 10000,
                },
            },
            {
                test: /\.png/,
                exclude: /(node_modules|bower_components)/,
                loader: 'url-loader',
                options: {
                    mimetype: 'application/image/png',
                    limit: 10000,
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: `${path.resolve(__dirname, '..')}/src/index.html`,
            filename: 'index.html',
            inject: 'body',
            minify: {
                collapseWhitespace: true,
                html5: true,
            },
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[hash].css",
            allChucks: true,
        }),
    ],
    optimization: {
        splitChunks: {
            minSize: 30000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            name: true,
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true,
                },
            },
        },
    },
};
