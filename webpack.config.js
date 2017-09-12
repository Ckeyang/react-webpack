const path = require('path');
const webpack = require('webpack');
const HtmlwebpackPlugin = require('html-webpack-plugin');
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
        loaders: [
            {
                test: /\.jsx?$/, loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                },
                exclude: /node_modules/
            },
            {test: /\.css$/, loader: 'style-loader!css-loader'},
            {test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader'},
            {test: /\.less$/, loader: 'style-loader!css-loader!less-loader'},
            {test: /\.js$/, loader: 'babel-loader'},
            {test: /\.jsx$/, loader: 'babel-loader'},
            {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
        ]
    },
    /*    devServer:{
            historyApiFallback:true,
            hot:true,
            inline:true,
        },*/
    plugins: [
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
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            },
        })
    ],
    resolve: {
        //自动扩展文件后缀名
        extensions: ['.js', '.json', '.scss', '.ts']
    }
};