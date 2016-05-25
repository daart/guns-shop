const
        path = require('path'),
        webpack = require('webpack');

module.exports = {
    entry: [
        path.resolve(__dirname + '/public/backend/app.module.js')
    ],

    output: {
        path: path.resolve(__dirname + '/builds'),
        filename: 'bundle.js'
    },

    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules|bower_components|.vscode/,
            loader: 'babel'
        },
        {
            test: /\.html$/,
            loader: 'raw'
        },
        {
            test: /\.scss$/,
            loader: "style!css!sass"
        },
        {
            test: /\.css$/,
            loader: 'style!css'
        },
        {
            test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff'
        },
        {
            test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'
        },
        {
            test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'
        },
        {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'
        }]
    },

    resolve: {
        root: path.resolve(__dirname),
        alias: {
            shared: '/public/backend/shared',
            libs: path.resolve(__dirname + '/node_modules')
        },
        extensions: ['', '.js', '.css']

    }

};
