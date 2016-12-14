const commonConfig = require("./webpack.common.config");

module.exports = Object.assign({}, commonConfig, {
	output: {
		publicPath: "/bundles",
		filename: "bundle.js"
	},
	devServer: {
		inline: true,
		contentBase: "wwwroot"
	},
});
