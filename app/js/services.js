var dataService = angular.module("dataService", ["ngResource"]);

dataService.factory("CatList", ["$resource",
	function($resource) {
		return $resource("data/boxes.json", {}, {
			list: { method: "GET", isArray: true }
		});
	}
]);

dataService.factory("CategoryInfo", ["$http",
	function($http) {
		return {
			get: function(catName) {
				return $http.get("data/"+catName+".inc");
			}
		};
	}
]);
