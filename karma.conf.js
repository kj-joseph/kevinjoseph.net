module.exports = function(config){
  config.set({

    basePath : "./",

    files : [
      "app/bower_components/angular/angular.js",
      "app/bower_components/angular-route/angular-route.js",
      "app/bower_components/angular-mocks/angular-mocks.js",
			"app/bower_components/angular-resource/angular-resource.js",
			"app/bower_components/angular-sanitize/angular-sanitize.js",
			"app/bower_components/angular-animate/angular-animate.min.js",
			"app/bower_components/jquery/dist/jquery.min.js",
			"node_modules/mgo-mousetrap/mousetrap.js",
			"node_modules/mgo-mousetrap/wMousetrap.js",
			"app/js/*.js",
      "app/views/**/*.js",
			"tests/*.js"
    ],

//    autoWatch : true,

		reporters: [
			"verbose",
			"coverage"
		],

		preprocessors: {
			"app/js/*.js": ["coverage"],
			"app/views/**/*.js": ["coverage"]
		},

		coverageReporter: {
			type: "text",
			dir: "coverage/"
		},

    frameworks: ["jasmine"],

    browsers : ["PhantomJS"],

    plugins : [
//			"karma-chrome-launcher",
//			"karma-firefox-launcher",
			"karma-jasmine",
			"karma-verbose-reporter",
//			"karma-junit-reporter"
			"karma-phantomjs-launcher",
			"karma-coverage"
            ]//,

/*
    junitReporter : {
      outputFile: "test_out/unit.xml",
      suite: "unit"
    }
*/

  });
};
