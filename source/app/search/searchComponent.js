var angular = require("angular");

var m = angular.module("search");
m.component("search", {
	bindings: {},
	template: require("./searchComponent.html"),
	controller: function (searchService) {
		console.log("This is from module.run for demo module...");
		console.log("asked from service:", searchService.message, searchService.getMessage())

	}
})