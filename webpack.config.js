const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: path.resolve(__dirname, "src", "index.jsx"),
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.js/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html"),
            filename: "index.html"
        })
    ],
    devServer: {
        port: 3000,
    }
};

