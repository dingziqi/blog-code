var webpack = require('webpack');
var path = require('path');
var CWD = process.cwd();

// var Dashboard = require('webpack-dashboard');
// var DashboardPlugin = require('webpack-dashboard/plugin');
// var dashboard = new Dashboard();
var NODE_ENV = JSON.stringify(process.env.NODE_ENV);

var plugins = [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: NODE_ENV
        }
    }),
];

if(NODE_ENV !== 'development'){
    plugins.push(new webpack.optimize.UglifyJsPlugin());
}else{
    // plugins.push(new DashboardPlugin(dashboard.setData));
}

module.exports = {
    entry: {
        vendor: ['whatwg-fetch', 'react', 'react-dom'],
        index: './src/index',
    },
    output: {
        path: './dist',
        publicPath: '/dist',
        filename: '[name].js'
    },
    module: {
        loaders: [
            {test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel'},
            {test: /\.(scss|css)$/, loader: 'style!css!sass' },
            {test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, loader: 'url-loader?limit=50000&name=[path][name].[ext]'},
            {test: /\.md$/, loader: 'html!markdown'},
            {test: /\.json$/, loader: 'json'}
        ]
    },
    plugins: plugins,
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devServer:{
        inline: true,
        hot: true,
        quiet: true
    },
    context: path.join(CWD)
    // devTools: 'source-map'
}
