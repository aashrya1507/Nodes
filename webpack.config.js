var path = require('path');


module.exports = {
  context : path.join(__dirname, 'public/src'),
  entry: [
    './index.js'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    port: 8080,
    hot: true,
    stats: { colors: true}
  },
  devtool: 'source-map',
  serverPort : 8080
};
