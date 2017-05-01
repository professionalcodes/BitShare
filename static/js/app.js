var profileApp = angular.module("profileApp", ["profileAppControllers", "ngRoute"]);

/* routing configuration for production */
var routeConfig = function($routeProvider) {
    $routeProvider.when('/home', {
        templateUrl: "/home",
        controller: "HomeCtrl"
    });
    $routeProvider.when('/about', {
        templateUrl: "/about",
        controller: "AboutCtrl"
    });
    $routeProvider.when('/donate', {
        templateUrl: "/donate",
        controller: "DonateCtrl"
    });
    $routeProvider.when('/contact', {
        templateUrl: "/contact",
        controller: "ContactCtrl"
    });
    $routeProvider.otherwise({
        redirectTo: '/home'
    });
};

routeConfig.$inject = ["$routeProvider"];
profileApp.config(routeConfig);

profileApp.factory('stripeService', function () {
    var service = {};
    service.initStripe = function() {
        service.stripe = Stripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');

        // Create an instance of Elements
        service.elements = service.stripe.elements();

        // Custom styling can be passed to options when creating an Element.
        // (Note that this demo uses a wider set of styles than the guide below.)
        service.style = {
            base: {
                color: '#32325d',
                lineHeight: '24px',
                fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                fontSmoothing: 'antialiased',
                fontSize: '16px',
                '::placeholder': {
                    color: '#aab7c4'
                }
            },
            invalid: {
                color: '#fa755a',
                iconColor: '#fa755a'
            }
        };

        // Create an instance of the card Element
        service.card = service.elements.create('card', {style: service.style});

        // Add an instance of the card Element into the `card-element` <div>
        service.card.mount('#card-element');
    };
  return service;

});

