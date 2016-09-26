var webpack = require('webpack');
var path = require('path');
var CWD = process.cwd();

module.exports = {
    entry: {
        index: './src/index.jsx',
        vendor: ['react', 'react-dom']
    },
    output: {
        path: './dist',
        publicPath: '/dist',
        filename: '[name].js'
    },
    module: {
        loaders: [
            {test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel'}
        ],
        noParse: [/\/react\//]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        alias: {
            'react': path.resolve('node_modules/react/dist/react.min.js'),
            'react-dom': path.resolve('node_modules/react-dom/dist/react-dom.min.js')
        }
    },
    devServer:{
        inline: true,
        hot: true
    }
}
