const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = (env, { mode }) => ({
  entry: { app: './src/index.tsx' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'emails-input.js',
    publicPath: '/dist'
  },
  resolve: {
    alias: {
      'components': path.resolve(__dirname, 'src/components/'),
      'hooks': path.resolve(__dirname, 'src/hooks/'),
      'models': path.resolve(__dirname, 'src/models/')
    },
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: true,
    compress: true,
    port: 3000
  },
  devtool: mode === 'development' ? 'source-map' : false,
  target: 'web',
  plugins: [
    new BundleAnalyzerPlugin()
  ],
});
