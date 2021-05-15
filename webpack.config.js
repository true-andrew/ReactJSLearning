const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        app: path.resolve(__dirname, "src", "index.jsx"),
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'bundle.js',
    },
    devtool: 'eval-source-map',
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            components: path.resolve(__dirname, 'src', 'components'),
            actions: path.resolve(__dirname, 'src', 'actions'),
            reducers: path.resolve(__dirname, 'src', 'reducers'),
            containers: path.resolve(__dirname, 'src', 'containers'),
            middlewares: path.resolve(__dirname, 'src', 'middlewares')
        }
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html"),
            filename: "index.html"
        }),
        new MiniCssExtractPlugin({
            filename: 'main.css'
        }),
    ],
    devServer: {
        port: 3000,
        historyApiFallback: {
            index: '/'
        }
    },
};

