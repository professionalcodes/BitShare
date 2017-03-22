'use strict';

var app = angular.module('bitShareApp', ['bitShareAppControllers', 'ngRoute']);

var routeConfig = function($routeProvider) {

  $routeProvider
  .when('/home', {
    templateUrl: '/home',
    controller: 'HomeCtrl'
  })

  .otherwise({
    redirectTo: "/home"
  });
}

routeConfig.$inject = ["$routeProvider"];
app.config(routeConfig);
