'use strict';

var bitShareApp = bitShareApp || {};
var controllers = bitShareApp.controllers = angular.module('bitShareAppControllers', []);

controllers.controller('RootCtrl', ["$scope", "$location", function ($scope, $location) {

    $scope.onload = function() {
		log("Root Controller laoded");
    }

    $scope.onload();
}]);

controllers.controller('Header1Ctrl', ['$scope', function ($scope) {
	
}]);