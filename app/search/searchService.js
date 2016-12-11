var angular = require("angular");

var m = angular.module("search");
m.service("searchService", function(){
    console.log("in service for search.js");

    this.message="This is from the service";

    this.getMessage = function(){
        return "This is a message from getService method on the service";
    }
});
