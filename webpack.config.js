const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('mini-css-extract-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //new
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin'); //new

const { TRUE } = require('node-sass');

const PATHS = {
  source: path.join(__dirname, 'source'),
  build: path.join(__dirname, 'build'),
};

module.exports = {
  entry: {
    index: PATHS.source + '/pages/index/index.js',
    blog: PATHS.source + '/pages/blog/blog.js',
  },
  output: {
    path: PATHS.build,
    filename: './js/[name].js',
  },
  plugins: [
    new HTMLWebpackPlugin({
      filename: 'index.html',
      chunks: ['index'],
      template: PATHS.source + '/pages/index/index.pug',
    }),
    new HTMLWebpackPlugin({
      filename: 'blog.html',
      chunks: ['blog'],
      template: PATHS.source + '/pages/blog/blog.pug',
    }),
    new ExtractTextPlugin({ filename: './css/[name].css' }),

    npm,
  ],

  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        options: {
          pretty: true,
        },
      },
      {
        test: /\.(s*)css$/,
        use: [ExtractTextPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /.s?css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  optimization: {
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      // `...`,
      new CssMinimizerPlugin(),
    ],
  }, //new
};
