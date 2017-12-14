const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const path = require('path');

const htmlWebpackPlugin = new HtmlWebpackPlugin({
    title: 'Team Status',
    filename: '../index.html',
    template: 'index_template.ejs', // Load a custom template (ejs by default see the FAQ for details)
    inject: 'body',
    hash: false, //Will apply a hash to scripts and CSS files
  });

const extractLess = new ExtractTextPlugin({
    filename: "[name].css",//"[name].[contenthash].css"
    //disable: process.env.NODE_ENV === "development"
});

module.exports = {
    context: path.join(__dirname, "/"),
    entry: "./index.js",
    devServer: {
        contentBase: './',
        hot: true,
    },
    output: {
        path: path.join(__dirname, "/dist"),
        publicPath: "/dist",
        filename: "bundle.js"
    },
    resolve: {
        modules: [
            path.resolve('./node_modules'),
            path.resolve('./src'),
          ]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['react', 'env']
                    }
                }
            },

            {
                test: /\.less$/,
                use: extractLess.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "less-loader"
                    }],
                    // use style-loader in development
                    fallback: "style-loader"
                })
            }
        ]
    },

    plugins: [
        new ManifestPlugin({ fileName: 'build-manifest.json' }),
        htmlWebpackPlugin,
        extractLess
    ]
};
