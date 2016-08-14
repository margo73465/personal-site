import path from 'path';

module.exports = {
  entry: {
    app: ['./src/app.js']
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules)/,
      loader: 'babel',
      query: { presets: ['react', 'es2015'] }
    }]
  }
};

