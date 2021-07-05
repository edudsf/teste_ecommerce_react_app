const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  devtool: 'eval-source-map',
  mode: 'development',
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        loader: 'ts-loader',
        //include: [path.resolve(__dirname, 'src')],
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: '../images/',
              publicPath: '../images/'
            }
          }
        ]
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/js'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@': path.join(__dirname, 'src')
    }
  },
  devServer: {
    publicPath: '/js/',
    contentBase: ['./public/'],
    hot: true,
    historyApiFallback: true,
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'react-router': 'ReactRouter'
  }
}