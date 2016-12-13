var angular = require("angular");

angular
	.module("search")
	.component("search", {
		bindings: {},
		template: require("./searchComponent.html"),
		controller: function (searchService) {
			console.log("This is from module.run for demo module...");
			console.log("asked from service:", searchService.message, searchService.getMessage())

		}
	})