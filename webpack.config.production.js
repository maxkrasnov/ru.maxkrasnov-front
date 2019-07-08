const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  context: path.resolve(__dirname, './src'),
  entry: {
    app: ['babel-polyfill', './client.js', './app/styles/app.scss'],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './dist/public/assets/'),
    publicPath: '/assets/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015', 'stage-0', 'react'], plugins: ['transform-class-properties', 'transform-object-rest-spread', 'async-to-promises'] }
        }],
      },
      {
        test: /\.svg/,
        exclude: [/node_modules|fonts/],
        use: {
          loader: 'svg-url-loader',
          options: {},
        }
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        exclude: [
          /(node_modules|bower_components|unitTest|icons)/,
        ],
        use: [{
          loader: 'file-loader',
          options: {
            name: '[hash]-[name].[ext]',
            outputPath: '/fonts/',
            publicPath: '/assets/fonts/',
          },
        }],
      },
      {
        test: /\.(png|xml|json|ico)(\?v=\d+\.\d+\.\d+)?$/,
        exclude: [
          /(node_modules|bower_components|unitTest|fonts)/,
        ],
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: '/',
            publicPath: '/',
          },
        }],
      },
      {
        test: /\.(scss|css)$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].bundle.css',
              outputPath: '/',
            },
          },
          {
            loader: 'extract-loader',
          },
          {
            loader: 'css-loader?-minimize',
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: path.resolve(__dirname, './src/app/assets/favicons/*'), to: path.resolve(__dirname, './dist/public/'), flatten: true },
    ]),
  ],
}
