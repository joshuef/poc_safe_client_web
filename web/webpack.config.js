const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require('path');

module.exports = {
    entry: "./bootstrap.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bootstrap.js",
    },
    mode: "development",
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                { from: 'index.html', to: 'index.html' }
            ]
        })
    ],
    experiments: {
        asyncWebAssembly: true,
    },
    module: {
        rules: [
            // ... (other rules)
            // Note: Since Webpack 5 has native support for WASM, 
            // you might not need wasm-loader. 
            // However, keeping it for now in case it's needed for your specific setup
            // {
            //     test: /\.wasm$/,
            //     type: 'webassembly/async',
            //     use: {
            //         loader: 'wasm-loader',
            //     },
            // },
        ],
    },
};
