var dirs = {
		local: "build",
		dev: "/var/www/kevinjoseph-dev",
		prod: "/var/www/kevinjoseph"
	},
	outdir = dirs.local,
	gulp = require("gulp"),
	jasmine = require("gulp-jasmine"),
	karma = require("karma").server,
	//karma = require("gulp-karma"),
	sass = require("gulp-ruby-sass"),
	autoprefixer = require("gulp-autoprefixer"),
	minifycss = require("gulp-minify-css"),
	jshint = require("gulp-jshint"),
	uglify = require("gulp-uglify"),
	imagemin = require("gulp-imagemin"),
	rename = require("gulp-rename"),
	concat = require("gulp-concat"),
	notify = require("gulp-notify"),
	cache = require("gulp-cache"),
	del = require("del"),
	map = require("map-stream"),
	//istanbul = require("gulp-istanbul"),
	lintReport = map(function(file, cb) {
		if (!file.jshint.success) {
			console.log("JSHINT fail in "+file.path);
			file.jshint.results.forEach(function(err) {
				if (err) {
					console.log (" > " + file.path + " " + err.error.line + ": " + err.error.reason);
				}
			});
			process.exit(1);
		}
		cb(null, file);
	});
			 

gulp.task("test", ["lint"], function(done) {
	gulp.src(["app/js/*.js","app/views/**/*.js"])
	//	.pipe(istanbul())
	//	.pipe(istanbul.hookRequire())
		.on("finish", function() {			
			karma.start({
				configFile: __dirname + "/karma.conf.js",
				singleRun: true
			}, done);
		})
});

gulp.task("lint", function() {
	return gulp.src(["app/js/*.js","app/views/**/*.js","tests/*.js"])
		.pipe(jshint())
		.pipe(lintReport)
});

gulp.task("clean", ["test"], function() {
	del.sync(outdir + "/*", {force: true})
});


gulp.task("styles", function() {
	return sass("app/css/app.scss", { style: "expanded" })
		.pipe(autoprefixer({browsers:["last 2 versions"]}))
		.pipe(gulp.dest(outdir+"/css"))
		.pipe(rename({suffix: ".min"}))
		.pipe(minifycss())
		.pipe(gulp.dest(outdir+"/css"))
});

gulp.task("images", function() {
	cache.clearAll();
	return gulp.src("app/img/*")
		.pipe(cache(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
		.pipe(gulp.dest(outdir + "/img"));
});

gulp.task("data", function() {
	return gulp.src("app/data/*")
	.pipe(gulp.dest(outdir+"/data"));
});

gulp.task("appjs", function() {
	return gulp.src(["app/js/*.js","app/views/**/*.js"])
		.pipe(concat("app.js"))
		.pipe(gulp.dest(outdir+"/js"))
		.pipe(rename({suffix: ".min"}))
		.pipe(uglify())
		.pipe(gulp.dest(outdir+"/js"))
});

gulp.task("libraries", function() {
	return gulp.src([
			"app/bower_components/html5-boilerplate/js/vendor/modernizr-2.6.2.min.js",
			"app/bower_components/angular/angular.min.js",
			"app/bower_components/angular-route/angular-route.min.js",
			"app/bower_components/angular-resource/angular-resource.min.js",
			"app/bower_components/angular-sanitize/angular-sanitize.min.js",
			"app/bower_components/angular-animate/angular-animate.min.js",
			"app/bower_components/jquery/dist/jquery.min.js"])
		.pipe(gulp.dest(outdir+"/js/libraries"))
});

gulp.task("libraries-min", function() {
	return gulp.src([
			"node_modules/mgo-mousetrap/mousetrap.js",
			"node_modules/mgo-mousetrap/wMousetrap.js"])
		.pipe(uglify())
		.pipe(rename({suffix: ".min"}))
		.pipe(gulp.dest(outdir+"/js/libraries"))
});

gulp.task("htaccess", function() {
	return gulp.src("app/.htaccess")
		.pipe(gulp.dest(outdir))
});

gulp.task("index", function() {
	return gulp.src([
	"app/index.html",
	"app/favicon.ico"])
	.pipe(gulp.dest(outdir))
});

gulp.task("views", function() {
	return gulp.src("app/views/**/*.html")
		.pipe(rename({dirname: ""}))
		.pipe(gulp.dest(outdir+"/views"))
});

gulp.task("default", ["clean"], function() {
	gulp.start("styles", "images", "data", "appjs", "index", "libraries", "libraries-min", "htaccess", "views");
});

gulp.task("dev", ["clean"], function() {
	outdir = dirs.dev;
	gulp.start("styles", "images", "data", "appjs", "index", "libraries", "libraries-min", "htaccess", "views");
});

gulp.task("prod", ["clean"], function() {
	outdir = dirs.prod;
	gulp.start("styles", "images", "data", "appjs", "index", "libraries", "libraries-min", "htaccess", "views");
});

