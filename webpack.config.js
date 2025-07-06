const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.jsx', // エントリーポイント
    output: {
        filename: 'bundle.js', // バンドルされるファイル名
        path: path.resolve(__dirname, 'dist'), // 出力先ディレクトリ
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, // .jsファイルと.jsxファイルに対してBabelを適用
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'], // JSXの変換
                    },
                },
            },
            {
                test: /\.css$/,        // CSS 用ローダーを追加
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],      // ← .jsと.jsx を解決対象に追加
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html', // HTMLテンプレート
        }),
    ],
    mode: 'development',
    devServer: {
        static: path.join(__dirname, 'public'),
        compress: true,
        port: 3000, // ローカルサーバーを立ち上げるポート
    },
};
