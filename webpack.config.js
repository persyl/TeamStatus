const ExtractTextPlugin = require("extract-text-webpack-plugin");


const extractLess = new ExtractTextPlugin({
    filename: "[name].css", //"[name].[contenthash].css"
    //disable: process.env.NODE_ENV === "development"
});

const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
    context: __dirname + "/",
    entry: "./index.js",
    devServer: {
        contentBase: './',
        hot: true,
    },
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
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
        extractLess
    ]
};
