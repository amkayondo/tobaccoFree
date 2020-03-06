const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./App.js",
    output: {
        path: path.join(
            __dirname, '/prod'
        ),
        filename: "app.bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_module/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
    },
    plugins: [
        new HtmlPlugin({
            template: './public/index.html'
        })
    ]
}