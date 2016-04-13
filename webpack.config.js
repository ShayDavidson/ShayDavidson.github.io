var path = require("path");
var webpack = require("webpack");

module.exports = {
    entry: "./src/es6/index.es6",
    output: {
        path: __dirname + "/public",
        filename: "index.js"
    },
    module: {
        loaders: [
            {
                loader: "vue",
                test: /\.vue$/
            },
            {
                loader: "json",
                test: /\.json$/
            },
            {
                loader: "babel-loader",
                test: /\.es6$/
            }
        ]
    },
    vue: {
        loaders: {
            scss: "sass"
        }
    },
    plugins: [
        new webpack.NoErrorsPlugin()
    ],
    stats: {
        colors: true
    },
    resolve: {
		modulesDirectories: [".", "src/config", "src/es6", "src/less", "src/vue", "node_modules"],
		extensions: ["", ".es6", ".js", ".less", ".vue", ".json"]
	}
};
