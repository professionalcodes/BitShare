'use strict';

var app = angular.module('bitShareApp', ['bitShareAppControllers', 'ngRoute']);

var routeConfig = function($routeProvider) {

  $routeProvider
  .otherwise({
    redirectTo: "/"
  });
}

routeConfig.$inject = ["$routeProvider"];
app.config(routeConfig);
