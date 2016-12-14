const commonConfig = require("./webpack.common.config");
const nodeExternals = require("webpack-node-externals");


const combinedConfig = Object.assign({}, commonConfig, {
	output: {
		path: "./dist",
		filename: "index.js"
	},
	externals: [
		nodeExternals()
	],
});

module.exports = combinedConfig;