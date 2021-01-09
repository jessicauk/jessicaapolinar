const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const webpack = require('webpack');

const path = require("path");

const PUBLIC_URL = process.env.PUBLIC_URL || '/';
const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';
module.exports = {
  mode,
  entry: { index: path.resolve(__dirname, "src", "index.js") },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].bundle.[hash].js",
    publicPath: PUBLIC_URL, 
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
      title: 'Output Management'
    }),
    new webpack.DefinePlugin({
      PUBLIC_URL: JSON.stringify(PUBLIC_URL),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(css|scss)$/i,
        include: path.resolve(__dirname, 'src'),
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        // exclude: /node_modules/,
        include: path.resolve(__dirname, 'src'),
        use: ["babel-loader"]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
        exclude: /node_modules/,
        use: ["file-loader"],
      },
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      // `...`
    ],
    splitChunks: { 
      chunks: "all", 
      minSize: 0,
      minRemainingSize: 0,
      maxSize: 20000,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      automaticNameDelimiter: '~',
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },
  // devtool: 'source-map'
};