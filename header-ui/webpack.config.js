const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'header-ui.js',
        publicPath: 'http://localhost:3002/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
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
            name: 'header_ui',
            filename: 'remoteEntry.js',
            exposes: {
                './Header': './src/components/Header',
                './headerActions': './src/actions/headerActions'
            },
            shared: ['react', 'react-dom', 'react-redux'],
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        static: './dist',
        port: 3002,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        }
    }
};
