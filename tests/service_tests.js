describe("services", function() {
	var CatList, CatInfo;

  beforeEach(function() {
		module("portfolioApp");
		module("dataService");

	});

  describe("category list", function() { 
		
		beforeEach(inject(function(_CatList_) {
			CatList = _CatList_;
		}));

		it("should have a list function", function() {
			expect(angular.isFunction(CatList.list)).toBe(true);
		});

	});

	describe("categoryinfo", function() {

		beforeEach(inject(function(_CategoryInfo_) {
			CatInfo = _CategoryInfo_;
		}));

		it("should have a get function", function() {
			expect(angular.isFunction(CatInfo.get)).toBe(true);
		});

	});

});
