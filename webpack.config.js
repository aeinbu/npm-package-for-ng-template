var path = require("path");
// require("ngtemplate-loader")
// require("ng-cache-loader");
// require("html-loader");
// require("raw-loader");

module.exports = {
	entry: "./app/index.js",
	output: {
		path: "dist",
		publicPath: "/dist",
		filename: "index.js"
	},
	devserver: {
		inline: true
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