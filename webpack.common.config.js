var nodeExternals = require("webpack-node-externals");

module.exports = {
	entry: "./source/index.js",
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