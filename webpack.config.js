const glob = require('glob-all');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HTMLInlineCSSWebpackPlugin = require('html-inline-css-webpack-plugin')
  .default;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const path = require('path');
const PurgecssPlugin = require('purgecss-webpack-plugin');
const purgecssWhitelister = require('purgecss-whitelister');

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const purgePaths = glob.sync([
  path.resolve(__dirname, 'src', '**', '*.html'),
  path.resolve(__dirname, 'src', '**', '*.js'),
]);

class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-Za-z0-9-_:/]+/g) || [];
  }
}

const config = {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-class-properties'],
          },
        },
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts',
            },
          },
        ],
      },
    ],
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
      }),
      new OptimizeCSSAssetsPlugin(),
    ],
  },
  output: {
    path: path.resolve(__dirname),
    publicPath: '/',
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      hash: true,
      template: 'src/index.html',
    }),
    new HTMLInlineCSSWebpackPlugin(),
    new PurgecssPlugin({
      extractors: [
        {
          extensions: ['html', 'js'],
          extractor: TailwindExtractor,
        },
      ],
      paths: purgePaths,
      whitelist: [
        ...purgecssWhitelister(
          path.resolve(
            __dirname,
            '..',
            'node_modules',
            'tailwindcss',
            'css',
            'preflight.css'
          )
        ),
      ],
    }),
  ],
};

module.exports = config;
