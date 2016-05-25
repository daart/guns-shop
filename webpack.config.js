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
        }]
    },

    resolve: {
        root: path.resolve(__dirname),
        alias: {
            shared: '/public/backend/shared'
        },
        extensions: ['', '.js']

    }

};
