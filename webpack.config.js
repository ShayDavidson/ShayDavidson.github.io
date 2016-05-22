var webpack = require('webpack')

module.exports = {
	entry: './src/es6/index.es6',
	output: {
		path: __dirname,
		filename: 'index.js'
	},
	module: {
		loaders: [
			{ loader: 'vue', test: /\.vue$/ },
			{ loader: 'babel', test: /\.es6$/ }
		]
	},
	vue: {
		loaders: {
			scss: 'sass'
		}
	},
	plugins: [
		new webpack.NoErrorsPlugin()
	],
	stats: {
		colors: true
	},
	resolve: {
		modulesDirectories: ['.', 'src/config', 'src/es6', 'src/less', 'src/vue', 'node_modules'],
		extensions: ['', '.es6', '.js', '.less', '.vue', '.json']
	}
}
