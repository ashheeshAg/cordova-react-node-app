/* eslint-disable */
const path = require('path')

module.exports = (env, argv) => {
  const SERVER_PATH =
    argv.mode === 'production'
      ? './src/server/server-prod.js'
      : './src/server/server-dev.js'

  return {
    entry: {
      server: SERVER_PATH,
    },
    output: {
      path: path.join(__dirname, 'dist'),
      publicPath: '/',
      filename: '[name].js',
    },
    mode: argv.mode,
    target: 'node',
    node: {
      __dirname: false,
      __filename: false,
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
      ],
    },
  }
}
