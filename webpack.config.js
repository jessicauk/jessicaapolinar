const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

console.log("__dirname",__dirname )
console.log("process.env.PUBLIC_URL",process.env.PUBLIC_URL )

module.exports = {
  entry: { index: path.resolve(__dirname, "src", "index.js") },
  output: {
    path: path.resolve(__dirname, "build"),
    // filename: "[name].js", 
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html")
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        use: ["file-loader"],
      },
    ]
  },
  optimization: {
    splitChunks: { chunks: "all" }
  }
};