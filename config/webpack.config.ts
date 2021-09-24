// @ts-nocheck
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

module.exports = (ENV, argv) => {
  return {  
    entry: path.join(__dirname, '..', 'src/client/PaaS/app.tsx'),
    output: { path: path.join(__dirname, '../src/client/PaaS', "dist"), filename: "bundle.js" },
    mode: process.env.NODE_ENV || "development",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [{
                    // loader:  "babel-loader",
                    options: {
                        extends: path.join(__dirname, '.babelrc')
                        // extends: path.join(__dirname, 'babel.config.js')
                    }}
                ],
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: [{
                    loader: "ts-loader",
                    options: {
                        configFile: path.join(__dirname, '..', 'src/client/tsconfig.json')
                    }
                }],
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    "style-loader", 
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                config: path.resolve(__dirname, 'postcss.config.js')
                            }
                        }
                    }
                ],
            },
            {
                test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
                use: ["file-loader"],
            },
        ],
    },
    resolve: {
        modules: [path.resolve(__dirname, '..', 'node_modules')],
        extensions: [".tsx", ".ts", ".js", ".css", ".scss"],
        plugins: [  
            new TsconfigPathsPlugin({
                configFile: path.resolve(__dirname, '..', 'src/client/tsconfig.json')
            })
        ]
    },
    resolveLoader: {
        modules: [
            path.resolve(__dirname, '..', 'node_modules'),
        ],
    },
    // devtool: process.env.NODE_ENV === 'development' ? 'source-map' : 'none',
    devtool: 'eval',
    devServer: {
        historyApiFallback: true,
        static: {
          directory: path.join(__dirname, '..', 'src/client/PaaS/public'),
        },
        compress: true,
        port: 9000,
        headers: {
            // "Access-Control-Allow-Origin": "*",
            // "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            // "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
            'Access-Control-Allow-Origin': '*',
            // 'Access-Control-Allow-Headers': '*',
            // 'Access-Control-Allow-Methods': '*',
          }
      },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: path.join(__dirname, "..", "src/client/PaaS/public/index.html"),
        }),
        new MonacoWebpackPlugin()
    ],
  }
};