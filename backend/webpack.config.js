const path = require('path');
const nodeExternals = require('webpack-node-externals');

// https://medium.com/code-oil/webpack-javascript-bundling-for-both-front-end-and-back-end-b95f1b429810

module.exports = {
    entry: {
        app: ['./index.js']
    },
    target: 'node',
    output: {
        path: path.resolve(__dirname),
        filename: 'bundle-back.js'
    },
    externals: [nodeExternals()]
};