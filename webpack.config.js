// Imports
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
require("babel-register");
// Webpack Configuration
const config = {
    // Entry
    entry: './src/index.js',

    // Output
    output: {
        path: path.resolve(__dirname, './client/dist'),
        filename: 'bundle.js'
    },
    // Loaders
    module: {
        rules : [
            // JavaScript/JSX Files
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            // CSS Files
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    devServer: {
        inline:true,
        port: 3000,
        proxy: {
            '/api': 'http://localhost:8080',
        },
    },
    // Plugins
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html',
            hash: true
        })
    ],
    // OPTIONAL
    // Reload On File Change
    watch: true,
    // Development Tools (Map Errors To Source File)
    devtool: 'source-map',
};
// Exports
module.exports = config;