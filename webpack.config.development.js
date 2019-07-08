const path = require('path'),
    webpack = require('webpack');

let hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&reload=true';

module.exports = {
    mode: 'development',
    context: __dirname,
    entry: {
        styles: '../src/app/styles/app.scss',
        app: ['babel-polyfill', '../src/client.js', hotMiddlewareScript],
    },
    output: {
        filename: '[name].bundle.js',
        path: __dirname,
        publicPath: '/assets/',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: [/node_modules/],
                use: [{
                    loader: 'babel-loader',
                    options: { presets: ['es2015', 'stage-0', 'react'], plugins: ['react-hot-loader/babel', 'transform-class-properties', 'transform-object-rest-spread', 'async-to-promises'] }
                }],
            },
            {
              test: /\.svg/,
              exclude: [/node_modules|fonts/],
              use: {
                loader: 'svg-url-loader',
                options: {}
              }
            },
            {
              test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
              exclude: [
                /(node_modules|bower_components|unitTest|icons)/
              ],
              use: [{
                loader: 'file-loader',
                options: {
                  name: '[hash]-[name].[ext]',
                  outputPath: '/fonts/',
                  publicPath: '/assets/fonts/'
                }
              }]
            },
            {
                test: /\.scss$/,
                use: [
                  {
                    loader: 'style-loader'
                  },
                  {
                    loader: 'css-loader?-minimize',
                  },
                  {
                    loader: 'postcss-loader'
                  },
                  {
                    loader: 'sass-loader'
                  }
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
}
