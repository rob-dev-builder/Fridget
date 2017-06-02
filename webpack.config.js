const path = require('path')
var LiveReloadPlugin = require('webpack-livereload-plugin')

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.jsx?$/,
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new LiveReloadPlugin()
  ],
  devtool: 'source-map'
}
