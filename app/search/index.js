var angular = require("angular");

module.exports = angular.module("search", []).config(function(){
    console.log("This is from module.config for search module...")
});

require("./searchService");

//module.exports = m;