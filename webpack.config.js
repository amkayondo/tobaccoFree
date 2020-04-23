const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require("webpack-pwa-manifest");
const SWPrecacheWebpackPlugin = require("sw-precache-webpack-plugin");

module.exports = {
  entry: './App.jsx',
  output: {
    path: path.join(
      __dirname, '/prod',
    ),
    filename: '[hash]-[name].js',
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.js$|jsx/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/i,
        loader: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
      },
      {
        test: /\.(png|jp(e*)g|gif|webp|woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[hash]-[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlPlugin({
      template: './public/index.html',
      hash: true,
      chunks: ["main", "vendors"],
      minify: {
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true,
      },
    }),
    new WebpackPwaManifest({
      name: "Free Tobacco",
      short_name: "Free Tobacco",
      description: "Free Tobacco",
      background_color: "#ffffff",
      theme_color: "#ffffff",
      "theme-color": "#ffffff",
      crossorigin: "use-credentials",
      icons: [
        {
          src: path.resolve("src/app/assets/img/app/logo.webp"),
          sizes: [96, 128, 192, 256, 384, 512],
          destination: path.join("assets", "icons"),
        },
      ],
      publicPath: "/",
    }),
    new SWPrecacheWebpackPlugin(
      {
        cacheId: "tobaccoFreeApp",
        dontCacheBustUrlsMatching: /\.\w{8}\./,
        filename: "service-worker.js",
        minify: true,
        navigateFallback: "/",
        staticFileGlobsIgnorePatterns: [/\.map$/, /manifest\.json$/],
      },
    ),
  ],
  devServer: {
    historyApiFallback: true,
  },
};
