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
            }
        ]
    }
};
