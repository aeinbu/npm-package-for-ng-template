var angular = require("angular");
var searchModule = require("./search");

var module = angular.module("demo", ["search"]);

module.config(function () {
	console.log("This is from module.config for demo module...")
});

module.run(function ($templateCache) {
	$templateCache.put("logoheader.html", require("./logoheader.html"));

	const fn = (...num) => {
		for (let val of num) {
			console.log(val);
		}
	};

	console.log("test: ", fn(1, 2, 3, 4));
});