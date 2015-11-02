var webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/scripts/entry.js',
    vendor: ['jquery'],
  },
  output: {
    filename: './bulid/bundle.js'
  },
  module: {
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
  },
    plugins: [
    new webpack.ProvidePlugin({
      //设置全局jquery
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
    }),

     new webpack.optimize.CommonsChunkPlugin('vendor', './bulid/vendor.js')//这是第三方库打包生成的文件
    ]
};