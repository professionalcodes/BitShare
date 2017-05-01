'use strict';

var profileApp = profileApp || {};
var controllers = profileApp.controllers = angular.module('profileAppControllers', []);

/* RootCtrl handles all signin options */
controllers.controller('RootCtrl', ["$scope", "$location", function ($scope, $location) {


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

controllers.controller('HomeCtrl', ["$scope", function($scope){

	$scope.homeCtrlOnload = function() {
		log("home controller loaded");
	};

}]);

controllers.controller('AboutCtrl', ["$scope", function($scope){

	$scope.aboutCtrlOnload = function() {
		log("about controller loaded");
	};

}]);

controllers.controller('ContactCtrl', ["$scope", function($scope){

	$scope.contactCtrlOnload = function() {
		log("contact controller loaded");
	};

}]);

controllers.controller('DonateCtrl', ["$scope", "stripeService", function($scope, stripeService){

	stripeService.initStripe();

}]);



	