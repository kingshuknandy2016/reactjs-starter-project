const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const webpack = require('webpack')

module.exports = (envVariables) => {
  // Extracting the Variable
  const { env } = envVariables
  const mode = env === 'dev' ? 'development' : 'production'
  const devtool = env === 'dev' ? 'cheap-module-source-map' : 'source-map'

  //Dev Server in case of development
  const hotModule =
    env === 'dev'
      ? {
          devServer: {
            hot: true,
            historyApiFallback: true,
          },
        }
      : {}
  return {
    entry: path.resolve(__dirname, '..', './src/index.tsx'),
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
            },
          ],
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    output: {
      path: path.resolve(__dirname, '..', './build'),
      filename: 'bundle.js',
    },
    mode,
    devtool,
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '..', './src/index.html'),
      }),
      new NodePolyfillPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new ReactRefreshWebpackPlugin(),
    ],
    stats: 'errors-only',
    ...hotModule,
  }
}
