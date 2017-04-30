'use strict';

var profileApp = profileApp || {};
var controllers = profileApp.controllers = angular.module('profileAppControllers', []);

/* RootCtrl handles all signin options */
controllers.controller('RootCtrl', ["$scope", function ($scope) {

	$scope.rootCtrlOnload = function() {
		log("root controller loaded");
	};

}]);

controllers.controller('HeaderCtrl', ["$scope", function($scope){

	$scope.headerCtrlOnload = function() {
		log("header controller loaded");
	};
}]);

controllers.controller('PalletCtrl', ["$scope", function($scope){

	$scope.palletCtrlOnload = function() {
		log("pallet controller loaded");
	};
}]);



	