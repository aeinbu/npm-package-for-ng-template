var commonConfig = require("./webpack.common.config");

module.exports = Object.assign({}, commonConfig, {
	output: {
		publicPath: "/wwwroot/bundles",
		filename: "bundle.js"
	},
	devServer: {
		inline: true,
		contentBase: "wwwroot"
	},
});
