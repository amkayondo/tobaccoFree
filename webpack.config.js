const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");

module.exports = {
    node: {
        fs: 'empty'
    },
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
                test: /\.js$|jsx/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            { test: /\.js$|jsx/, use: 'mocha-loader' },
        ],
        options: {
            presets: ["es2015"]
        },
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },
    plugins: [
        new HtmlPlugin({
            template: './public/index.html'
        })
    ]
}