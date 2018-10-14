const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/main.js',
    mode: 'production',
    output: {
        path: path.resolve(__dirname, "/build"),
        filename: "bundle.js"
    },,
    devServer: {
        historyApiFallback: true,
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.json'],
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
            {
                test: /\.scss$/,
                use: [
                    // fallback to style-loader in development
                    process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            }
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
        new ExtractTextPlugin({
            filename: "[name].[hash].css",
            allChucks: true
        }),
        new webpack.HotModuleReplacementPlugin()
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
