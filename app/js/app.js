// Declare app level module which depends on views, and components
var portfolioApp = angular.module("portfolioApp", [
  "ngRoute",
	"ngSanitize",
	"ngAnimate",
	"mgo-mousetrap",
	"dataService",
	"portfolioControllers",
  "portfolioApp.menu",
  "portfolioApp.category"
]);

portfolioApp.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});
	$routeProvider.otherwise({redirectTo: "/"});
}]);

