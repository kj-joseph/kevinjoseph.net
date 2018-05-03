var portfolioControllers = angular.module("portfolioControllers", []);

portfolioControllers.controller("catListCtrl", ["$scope", "$location", "CatList", function($scope, $location, CatList) {
	$scope.categories = CatList.list();

	$scope.go = function(path) {
		$location.path(path);
	};

}]);

portfolioControllers.controller("categoryCtrl", ["$scope", "$location", "$routeParams", "CategoryInfo", "CatList", function($scope, $location, $routeParams, CategoryInfo, CatList) {

	$scope.esc = function() {
		$location.path("/");
	};

	CategoryInfo.get($routeParams.catName).success(function(data) {
		$scope.catInfo = data;
	}).error(function() {
		$location.path("/");
	});

}]);

