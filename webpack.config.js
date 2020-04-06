const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');


module.exports = (env, argv) => {
  const devMode = (argv.mode === 'development');

  return {
    mode: devMode ? 'development' : 'production',
    devtool: devMode ? 'source-map' : false,
    entry: {
      main: './src/js/index.js'
    },
    output: {
      filename: devMode ? '[name].js' : '[name].min.js',
      path: path.resolve(__dirname, 'dist/js')
    },
    externals: {
      jquery: 'jQuery',
      'popper.js': 'Popper'
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                url: false
              }
            },
            'postcss-loader',
            {
              loader: 'sass-loader',
              options: {
                sassOptions: {
                  outputStyle: 'expanded',
                  precision: 6,
                  sourceMap: true,
                  sourceMapContents: true
                }
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: devMode ? '../css/[name].css' : '../css/[name].min.css'
      }),
      new StylelintPlugin({}),
    ],
    optimization: {
      minimize: !devMode,
      minimizer: [
        new OptimizeCSSAssetsPlugin({}),
        new TerserPlugin({
          extractComments: false
        })
      ]
    }
  };
};
