import { join } from 'path';
import { Configuration, ProvidePlugin } from 'webpack';

import { AngularCompilerPlugin } from '@ngtools/webpack';

const { BUILD_NAME } = process.env;

const aotPlugin = new AngularCompilerPlugin({
  basePath: join(__dirname, 'src'),
  tsConfigPath: join(__dirname, 'tsconfig.json'),
});

export default {
  entry: {
    main: join(__dirname, 'src/main.ts'),
  },
  output: {
      filename: '[name].js',
      chunkFilename: '[id].chunk.js',
      path: join(__dirname, 'dist', BUILD_NAME),
  },
  devtool: 'source-map',
  node: {
      fs: 'empty',
  },
  resolve: {
    extensions: [ '.ts', '.js' ],
  },
  module: {
      rules: [
          {
            test: /\.ts$/,
            loader: '@ngtools/webpack',
          },
          {
              test: /\.html$/,
              use: [{
                  loader: 'html-loader',
              }],
          }, {
              test: /\.(woff|woff2|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
              loader: 'file-loader',
              options: {
                  name: '[name].[ext]',
                  outputPath: 'fonts/',
              },
          },
          {
              test: /\.(png|jpe?g|gif|svg|ico)$/,
              use: [{
                  loader: 'file-loader',
                  options: {
                      name: '[name].[ext]',
                      outputPath: 'imgs/',
                  },
              }],
          }, {
            test: /\.css$/,
            use: [
                'css-to-string-loader',
                'css-loader',
            ],
        }],
  },
  watchOptions: {
      ignored: /node_modules/,
  },
  plugins: [
      aotPlugin,
      new ProvidePlugin({
        'process.env': {
          BUILD_NAME,
        },
      })
  ]
} as Configuration;
