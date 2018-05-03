angular.module("portfolioApp.menu", ["ngRoute"])

.config(["$routeProvider", function($routeProvider) {
  $routeProvider.when("/", {
    templateUrl: "views/menu.html",
    controller: "catListCtrl"
  });
}]);

