angular.module("portfolioApp.category", ["ngRoute"])

.config(["$routeProvider", function($routeProvider) {
  $routeProvider.when("/:catName", {
    templateUrl: "views/category.html",
    controller: "categoryController"
  });
}])

.controller("categoryController", [ function() {

}]);
