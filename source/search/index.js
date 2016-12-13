var angular = require("angular");

angular
	.module("search", [])
	.config(function () {
		console.log("This is from module.config for search module...")
	});


require("./searchService");
require("./searchComponent");

module.exports = "search";

