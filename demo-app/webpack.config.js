var path = require("path");

module.exports = {
	entry: "./wwwroot/demo.js",
	output: {
		path: "wwwroot/bundle",
		publicPath: "/wwwroot/bundle",
		filename: "demo.js"
	},
	// module: {
	// 	loaders: [{
	// 		test: /\.js$/,
	// 		exclude: /node_modules/,
	// 		loaders: ["ng-annotate", "babel-loader?presets=latest"]
	// 	}, {
	// 		test: /\.html$/,
	// 		loader: "html"
	// 	}]
	// },
	devserver: {
		inline: true
	},
}