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
                test: /\.js$|jsx/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            },
            {
                test: /\.(png|jp(e*)g|svg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: 'images/[hash]-[name].[ext]',
                      }
                }]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[name].[ext]',
                      outputPath: 'fonts/'
                    }
                  }
                ]
              }
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },
    plugins: [
        new HtmlPlugin({
            template: './public/index.html'
        })
    ],
    devServer: {
        historyApiFallback: true,
      }
}