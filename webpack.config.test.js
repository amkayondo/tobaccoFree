const webPackExternals = require('webpack-node-externals');

module.exports = {
  node: {
    fs: 'empty',
  },
  mode: 'development',
  target: 'node',
  externals: [webPackExternals()],
  module: {
    rules: [
      {
        test: /\.js$|jsx/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/i,
        use: ['css-loader'],
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
      },
      {
        test: /\.(png|jp(e*)g|webp|svg|gif)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: 'images/[hash]-[name].[ext]',
          },
        }],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
};
