describe("controllers", function() {
	var scope, menuCtrl, catCtrl;

  beforeEach(module("portfolioApp"));

  describe("menu controller", function() {

		beforeEach(inject(function($controller) {
			scope = {};
			menuCtrl = $controller("catListCtrl", { $scope: scope });
		}));

    it("should be defined", function() {
			expect(menuCtrl).toBeDefined();
    });

		it("should change paths", inject(function(_$location_) {
			$location = _$location_;
			
			$location.path("/");
			scope.go("/test");
			expect($location.path()).toBe("/test");
		}));

  });

	describe("category controller", function() {

		beforeEach(inject(function($controller) {
			scope = {};
			catCtrl = $controller("categoryCtrl", { $scope: scope });
		}));

		it("should be defined", function() {
			expect("catCtrl").toBeDefined();
		});

	});


});
