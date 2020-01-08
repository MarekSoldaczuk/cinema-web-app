const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// do package.json ewentualnie (+ doinstalowanie webpacka)
// "start": "webpack-dev-server --open --mode development",
// "build": "webpack --mode production",

module.exports = {
  entry: './src/index.js', // relative path
  output: {
    path: path.join(__dirname, 'dist'), // absolute path
    filename: 'bundle.js' // file name
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
    {
        test: /\.css$/,
        use: [{
                loader: MiniCssExtractPlugin.loader
            },
            "css-loader"
        ]
    },
    {
        test: /\.(png|jpg|JPG|gif|jpeg)$/,
        use: [{
            loader: "file-loader",
            options: {}
        }]
    },
    {
        test: /\.svg$/,
        loader: 'url-loader?limit=65000&mimetype=image/svg+xml&name=font/[name].[ext]'
    },
    {
        test: /\.woff$/,
        loader: 'url-loader?limit=65000&mimetype=application/font-woff&name=font/[name].[ext]'
    },
    {
        test: /\.woff2$/,
        loader: 'url-loader?limit=65000&mimetype=application/font-woff2&name=font/[name].[ext]'
    },
    {
        test: /\.[ot]tf$/,
        loader: 'url-loader?limit=65000&mimetype=application/octet-stream&name=font/[name].[ext]'
    },
    {
        test: /\.eot$/,
        loader: 'url-loader?limit=65000&mimetype=application/vnd.ms-fontobject&name=font/[name].[ext]'
     }
    ,
    // {
    //     test: /\.html$/,
    //     use: [
    //       {
    //         loader: "html-loader"
    //       }
    //     ]
    //   }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./main.html"
    })
  ]

};

