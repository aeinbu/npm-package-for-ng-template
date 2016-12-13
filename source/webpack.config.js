var nodeExternals = require("webpack-node-externals");

module.exports = {
	entry: "./app/index.js",
	output: {
		path: "../dist",
		filename: "index.js"
	},
	externals: [
		nodeExternals({modulesDir: '../node_modules'})
	],
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loaders: ["ng-annotate", "babel-loader?presets=latest"]
		}, {
			test: /node_modules/,
			loaders: []
		}, {
			test: /\.html$/,
			loader: "html"
		}]
	}
}