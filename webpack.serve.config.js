var commonConfig = require("./webpack.common.config");

module.exports = Object.assign({}, commonConfig, {
	output: {
		// path: "wwwroot/bundle",
		publicPath: "/wwwroot/bundle",
		filename: "demo.js"
	}
	,
	devServer: {
		inline: true,
		contentBase: "wwwroot"
	},
});
