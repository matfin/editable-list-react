const path = require('path');

module.exports = {
  entry: { app: path.resolve(__dirname, './src/index.tsx') },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'emails-input.js',
    publicPath: '/dist',
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components/'),
      hooks: path.resolve(__dirname, 'src/hooks/'),
      models: path.resolve(__dirname, 'src/models/'),
      utils: path.resolve(__dirname, 'src/utils/'),
    },
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  target: 'web',
};
