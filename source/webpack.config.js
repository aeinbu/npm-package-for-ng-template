var path = require("path");

module.exports = {
	entry: "./app/index.js",
	output: {
		path: "../dist",
		filename: "index.js"
	},
	externals: {
		"angular": "angular"
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loaders: ["ng-annotate", "babel-loader?presets=latest"]
		}, {
			test: /\.html$/,
			loader: "html"
		}]
	}
}