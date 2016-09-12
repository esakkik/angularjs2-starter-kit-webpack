var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry: './src/main.ts',
    output: {
        path: './dist',
        filename: 'app.bundle.js'
    },
    module:{
        loaders:[
            {
                test: /\.ts$/,
                loader: 'ts' 
            },
            {
                test: /\.css$/, 
                loader: "file?name=[path][name].[ext]?[hash]"
            }]
    },
    resolve: {
        extensions:['', '.js', '.ts']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
    ]
};