const path=require("path");
const MiniCssExtractPlugin=require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HTMLWebpackrequir=require('html-webpack-plugin');
module.exports={
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname,'build'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.ts','.tsx','.js','.json']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'] 
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader'
            },
            {
                test: /\.(png|jpe?g|gif|jp2|webp|mp3)$/,
                loader: 'file-loader',
                options: {
                    name: 'imagenes/[name].[ext]'
                }
            }
        ]
    },
    devServer: { 
        historyApiFallback:{ 
         index:'build/index.html' 
        }
    }, 
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new MiniCssExtractPlugin('style.css')
    ]

};