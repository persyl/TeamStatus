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
        loaders: [{
            exclude: /node_modules/,
            loaders: ['babel-loader']
        }]
    }
};