var angular = require("angular");

module.exports = angular
	.module("search", [])
	.config(function () {
		console.log("This is from module.config for search module...")
	});


require("./searchService");
require("./searchComponent");

//require("./search.css")

