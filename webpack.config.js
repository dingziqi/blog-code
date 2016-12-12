var webpack = require('webpack');
var path = require('path');
var CWD = process.cwd();

module.exports = {
    entry: {
        index: './src/index',
        vendor: ['react', 'react-dom']
    },
    output: {
        path: './dist',
        publicPath: '/dist',
        filename: '[name].js'
    },
    module: {
        loaders: [
            {test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel'},
            {test: /\.scss$/, exclude: /node_modules/, loader: 'style!css!sass' },
            {test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, loader: 'url-loader?limit=50000&name=[path][name].[ext]'}
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devServer:{
        inline: true,
        hot: true
    },
    // devTools: 'source-map'
}
