const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: 'http://localhost:3000/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[name]__[local]___[hash:base64:5]',
                            },
                        },
                    },
                    'sass-loader',
                ],
            },
        ]
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'main_ui',
            filename: 'remoteEntry.js',
            remotes: {
                wallet_ui: 'wallet_ui@http://localhost:3001/remoteEntry.js',
                header_ui: 'header_ui@http://localhost:3002/remoteEntry.js',
            },
            shared: ['react', 'react-dom', 'react-redux'],
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    devServer: {
        static: './dist',
        port: 3000,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        },
    },
};
