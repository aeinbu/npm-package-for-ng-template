var angular = require("angular");
var searchModule = require("./search");

var module = angular.module("demo", [searchModule.name]);
module.config(function(){
    console.log("This is from module.config for demo module...")
});
module.run(function(searchService){
    console.log("This is from module.run for demo module...");
    console.log("asked from service:", searchService.message, searchService.getMessage())
});