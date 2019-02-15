var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry:['babel-polyfill', path.normalize(__dirname + '/app/main.js')],// './app/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'build.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [path.resolve(__dirname, 'app')]
            },
            {
                loader: 'style!css',
                test: /\.css$/,
                include: [path.resolve(__dirname, 'assets', 'css')]
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': '"development"'
        })
    ],
    devServer: {
        historyApiFallback: true,
        noInfo: true
    },
    devtool: '#eval-source-map'
}