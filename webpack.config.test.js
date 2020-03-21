const webPackExternals = require('webpack-node-externals')

module.exports = {
    mode:'development',
    target: 'node',
    externals: [webPackExternals()],
    module: {
        rules: [
            {
                test: /\.js$|jsx/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            { test: /\.css$/, use: 'css-loader' },
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },
}