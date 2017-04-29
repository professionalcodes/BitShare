var profileApp = angular.module("profileApp", ["profileAppControllers", "ngRoute"]);

/* routing configuration for production */
var routeConfig = function($routeProvider) {
    $routeProvider.otherwise({
        redirectTo: '/'
    });
};

routeConfig.$inject = ["$routeProvider"];
profileApp.config(routeConfig);

