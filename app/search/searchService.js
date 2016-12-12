var angular = require("angular");

angular
	.module("search")
	.service("searchService", function () {
		console.log("in service for search.js");

		this.message = "This is from the service";

		this.getMessage = function () {
			return "This is a message from getService method on the service";
		}
	});