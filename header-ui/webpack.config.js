const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    devServer: {
        historyApiFallback: true,
        static: path.join(__dirname, 'dist'),
        port: 3002,
    },
    output: {
        publicPath: 'auto',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['@babel/preset-react'],
                    plugins: ['react-refresh/babel'],
                },
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
            {
                test: /\.(png|jpg|jpeg|gif|webp)$/i,
                type: 'asset'
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            },
        ]
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'csp_header_ui',
            filename: 'remoteEntry.js',
            remotes: {
                "csp-wallet-ui": 'csp_header_ui@http://localhost:3001/remoteEntry.js',
            },
            exposes: {
                './Header': './src/components/Header',
                './Greetings': './src/components/Greetings/Greetings',
                './headerActions': './src/actions/headerActions',
                './headerReducer': './src/reducers/headerReducer'
            },

            shared: {
                react: { eager: true, singleton: true, requiredVersion: '^16.14.0' },
                'react-dom': { eager: true, singleton: true, requiredVersion: '^16.14.0' },
                'react-redux': { eager: true, singleton: true, requiredVersion: '^7.2.6' },
                '@reduxjs/toolkit': { eager: true, singleton: true, requiredVersion: '^1.9.5' }
            },
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new ReactRefreshWebpackPlugin({
            overlay: false
        }),
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    },
};
