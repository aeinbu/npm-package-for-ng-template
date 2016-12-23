const nodeExternals = require("webpack-node-externals");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: [
		"./source/index.js",
		"./source/index.css"
	],
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loaders: ["ng-annotate", "babel-loader?presets=latest"]
		}, {
			test: /\.html$/,
			loader: "html"
		}, {
			test: /\.css$/,
			loader: ExtractTextPlugin.extract( "css-loader")
		}, {
			test: /.(png|woff|woff2|eot|ttf|svg)(\?.*)?$/,
			loader: "url-loader?limit=100000"
		}]
	},
	plugins:[
		new ExtractTextPlugin("index.css")
	]
}