const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');//压缩插件
const ExtractTextPlugin = require("extract-text-webpack-plugin");  //CSS样式分离成文件插件
const HtmlwebpackPlugin = require('html-webpack-plugin');
const Autoprefixer = require('autoprefixer');
const config = require('./config');
module.exports = {
    entry: path.resolve(__dirname, './app/main.js'),
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: config.contentBase,  //设置根目录
        host: config.host,  //主机的ip地址
        port: config.port    //端口
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: [{loader: 'babel-loader'}]
            },
            {
                test: /\.jsx$/,
                exclude: /(node_modules)/,
                use: [{loader: 'babel-loader', options: {presets: ["react", "es2015"]}}]
            },
            {
                test: /\.less$/,
                exclude: /(node_modules)/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [{loader: "css-loader", options: {minimize: true}}, {
                        loader: "less-loader",
                        options: {noIeCompat: true, sourceMap: true}
                    }],
                })
            },

            {
                test: /\.sass$/, exclude: /(node_modules)/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [{loader: "css-loader", options: {minimize: true}}, {
                        loader: "sass-loader",
                        options: {noIeCompat: true, sourceMap: true}
                    }],
                })
            },
            {
                test: /\.css$/,
                exclude: /(node_modules)/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [{loader: "css-loader", options: {minimize: true}}],
                })
            },
            {
                test: /\.(png|jpg|woff|woff2|svg|ttf|eot)($|\?)/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000
                        }
                    }
                ]
            },

        ]
    },
    plugins: [
        // CSS文件分离
        new ExtractTextPlugin({
            filename: "css/index.css"
        }),
        Autoprefixer,
        new HtmlwebpackPlugin({
            template: "index.html"
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false,  // remove all comments
            },
            compress: {
                warnings: false
            }
        }),
        new UglifyJSPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify("production")
            },
        })
    ],
    resolve: {
        //自动扩展文件后缀名
        extensions: ['.js', '.json', '.scss', '.ts']
    }
};