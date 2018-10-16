const webpack = require('webpack');
const path = require("path");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer =  require('autoprefixer');

const base = require('./config.base');

module.exports = {
    ...base,
    entry: `${path.resolve(__dirname, '..')}/src/main.jsx`,
    mode: 'production',
    output: {
        path: `${path.resolve(__dirname, '..')}/public`,
        filename: "bundle.js"
    },
    module: {
        rules: [
            ...base.module.rules,
            {
                test: /\.(sa|sc)ss$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    MiniCssExtractPlugin.loader,
                    { 
                        loader: "css-loader",
                        options: {
                            importLoaders: 1
                        }
                    },
                    { 
                        loader: "postcss-loader",
                        options: {
                            ident: "postcss",
                            plugins: () => [
                                autoprefixer({
                                    browsers: [
                                    "> 1%",
                                    "last 2 versions"
                                    ]
                                })
                            ]
                        }
                    },
                    "sass-loader"
                ]
            }
        ],
    },
    plugins: [
        ...base.plugins,
        new CleanWebpackPlugin(['public'], { 
            root: path.resolve(__dirname , '..'),
        }),
    ],  optimization: {
        ...base.optimization,
        splitChunks: {
          ...base.optimization.splitChunks,
          chunks: 'all',
        },
    },
};

