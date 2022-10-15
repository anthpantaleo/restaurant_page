const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: {
      import: "./src/index.js",
      dependOn: "shared",
    },

    navbar: { import: "./src/navbar.js", dependOn: "shared" },
    footer: {
      import: "./src/footer.js",
      dependOn: "shared",
    },

    homepage: {
      import: "./src/renderHome.js",
      dependOn: "shared",
    },
    shared: "lodash",
  },
  devtool: "inline-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      title: "Stash Resto",
      favicon: "./src/favicon.png",
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  optimization: {
    runtimeChunk: "single",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,

        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,

        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,

        type: "asset/resource",
      },
    ],
  },
};
