const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dotenv = require('dotenv');
const fs = require('fs');

dotenv.config();

const buildTargets = process.env.BUILD_TARGET ? process.env.BUILD_TARGET.split(',') : ['home'];
const entryFiles = buildTargets.reduce((entries, target) => {
  const normalizedTarget = target.trim();
  const filePath = `./src/entries/${normalizedTarget}.js`;
  if (fs.existsSync(filePath)) {
    entries[normalizedTarget] = filePath;
  } else {
    console.warn(`[WARNING] File not found: ${filePath}`);
  }
  return entries;
}, {});

// Tạo danh sách HtmlWebpackPlugin cho mỗi entry để có thể preview độc lập
const htmlPlugins = buildTargets.map((target, index) => {
  const normalizedTarget = target.trim();
  // Nếu là target đầu tiên, đặt tên là index.html để mở localhost:3000 là thấy luôn
  const filename = index === 0 ? 'index.html' : `${normalizedTarget}.html`;

  return new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: filename,
    chunks: [normalizedTarget, 'vendor'],
    inject: 'body',
    entryName: normalizedTarget,
    minify: false,
  });
});

module.exports = {
  // Điểm vào của ứng dụng. Bạn có thể định nghĩa nhiều entry nếu cần.
  entry: entryFiles,

  // Đầu ra của Webpack trỏ TỚI THƯ MỤC CỦA DỰ ÁN PHP
  output: {
    path: path.resolve(__dirname, '../public/assets/react'),
    // Tên file sử dụng thẻ [contenthash] để chống cache trình duyệt (cache busting)
    filename: '[name].[contenthash].js',
    publicPath: '/assets/react/',
    clean: true, // Xóa các file build cũ trong thư mục output
    // publicPath được loại bỏ để Preview HTML hiện ở gốc cổng 3000
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [require('@tailwindcss/postcss'), require('autoprefixer')],
              },
            },
          },
        ],
      },
    ],
  },

  plugins: [
    // Tách manifest ra để PHP đọc và load file JS đúng hash
    new WebpackManifestPlugin({
      fileName: 'manifest.json',
    }),
    new CleanWebpackPlugin(),
    ...htmlPlugins, // Chèn danh sách trang preview vào đây
  ],

  // Tối ưu hóa: Tách các thư viện (React, ReactDOM) thành `vendor.js` dùng chung để giảm dung lượng tải
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
  },

  // Cấu hình Dev Server cho "Công xưởng" React
  devServer: {
    static: {
      directory: path.join(__dirname, '../public'),
    },
    compress: true,
    port: 3000,
    hot: true,
    headers: {
      'Access-Control-Allow-Origin': '*', // Cho phép PHP ở port khác load file
    },
    devMiddleware: {
      writeToDisk: true, // Vẫn ghi file ra đĩa để PHP ReactLoader đọc được manifest
    },
  },
};
