module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),

		clean: {
			build: [
				"build"
			],
			dev: {
				options: {
					force: true
				},
				src: [
					"/var/www/kevinjoseph-dev/*"
				],
			},
			prod: {
				options: {
					force: true
				},
				src: [
					"/var/www/kevinjoseph/*"
				]
			}
		},
		concat: {
			app: {
				src: [
					"src/js/models/*.js",
					"src/js/views/*.js",
					"src/js/collections/*.js",
					"src/js/router.js",
					"src/js/app.js"
				],
				dest: "build/js/app.js"
			},
			backbone: {
				src: [
					"src/js/lib/backbone*"
				],
				dest: "build/js/backbone.js"
			},
			lib: {
				src: [
					"src/js/lib/*",
					"!src/js/lib/backbone*"
				],
				dest: "build/js/lib.js"
			}
		},

		uglify: {
			app: {
				src: "build/js/app.js",
				dest: "build/js/app-min.js"
			},
			backbone: {
				src: "build/js/backbone.js",
				dest: "build/js/backbone-min.js"
			},
			lib: {
				src: "build/js/lib.js",
				dest: "build/js/lib-min.js"
			}
		},

		cssmin: {
			concat: {
				files: {
					"build/css/style-min.css": [
						"src/css/reset-min.css",
						"src/css/style.css"
						]
				}
			}
		},

		htmlmin: {
			min: {
				options: {
					removeComments: true,
					collapseWhitespace: false
				},
				files: {
					"build/index.html": "src/html/index.html"
				}
			}
		},

		copy: {
			build: {
				files: [
					{
						expand: true,
						cwd: "src/img",
						src: [
							"*"
						],
						dest: "build/img/"
					},
					{
						expand: true,
						cwd: "src/files",
						src: [
							"*"
						],
						dest: "build/files/"
					},
					{
						expand: true,
						cwd: "src/data",
						src: [
							"*",
							"!testboxes.json"
						],
						dest: "build/data/"
					},
					{
						expand: true,
						cwd: "src/js/lib",
						src: [
							"*"
						],
						dest: "build/js/lib/"
					},
					{
						expand: true,
						dot: true,
						cwd: "src/html",
						src: [
							".htaccess"
						],
						dest: "build/"
					}
				]
			},
			dev: {
				files: [
					{
						expand: true,
						dot: true,
						cwd: "build",
						mode: "775",
						src: [
							"**/*"
						],
						dest: "/var/www/kevinjoseph-dev/"
					}
				]
			},
			prod: {
				files: [
					{
						expand: true,
						dot: true,
						cwd: "build",
						mode: "775",
						src: [
							"**/*"
						],
						dest: "/var/www/kevinjoseph/"
					}
				]
			}

		},

	});

	grunt.loadNpmTasks("grunt-contrib-clean");
	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-cssmin");
	grunt.loadNpmTasks("grunt-contrib-htmlmin");
	grunt.loadNpmTasks("grunt-contrib-copy");

	grunt.registerTask("default", ["clean:build", "concat:app", "uglify:app", "cssmin", "htmlmin", "copy:build"]);
	grunt.registerTask("dev", ["clean:build", "clean:dev", "concat", "uglify:app", "cssmin", "htmlmin", "copy:build", "copy:dev"]);
	grunt.registerTask("prod", ["clean", "clean:prod", "concat", "uglify:app", "cssmin", "htmlmin", "copy:build", "copy:prod"]);

};
