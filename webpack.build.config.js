var commonConfig = require("./webpack.common.config");
var nodeExternals = require("webpack-node-externals");


var combinedConfig = Object.assign({}, commonConfig, {
	output: {
		path: "./dist",
		filename: "index.js"
	},
	externals: [
		nodeExternals()
	],
});

module.exports = combinedConfig;