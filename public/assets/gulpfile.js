var gulp = require('gulp');
var sass = require('gulp-sass');
var rtlcss = require('gulp-rtlcss');
var rename = require("gulp-rename");
const errorHandler = require('gulp-error-handle');
//var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var gutil = require('gulp-util');

//main task
gulp.task('default', function(){
	gulp.watch('source/scss/**/*.scss', ['sass-kologi', 'rtl-kologi', 'build-js', 'build-js-css']); 
})

//gulp.task('develop', gulp.series('sass-kologi', 'rtl-kologi'))


//Task 1 - scss to css
gulp.task('sass-kologi', function(){
	return gulp.src(
		[
		'source/scss/**/*.scss',
		]
	)
	.pipe(errorHandler())
	.pipe(sass()) // Using gulp-sass
	.pipe(gulp.dest('../css'))
});

//Task 2 - css to rtl-css
gulp.task('rtl-kologi', function () {
	return gulp.src('../css/style-main.css')
	.pipe(rtlcss())
	.pipe(rename('style-main-rtl.css'))
	.pipe(gulp.dest('../css/'));
});


//Task 3 - bundle js files
gulp.task('build-js', function() {
	return gulp.src(
		[
		'source/js/**/*.js',
		]
	)
	//.pipe(sourcemaps.init())
	.pipe(concat('javascript-plugins-bundle.js'))
	//only uglify if gulp is ran with '--type production'
	.pipe(gutil.env.type === 'production' ? uglify() : gutil.noop()) 
	//.pipe(sourcemaps.write())
	.pipe(gulp.dest('../js'));
});


//Task 4 - bundle css files
gulp.task('build-js-css', function(){
	return gulp.src(
		[
		'source/js/**/*.css',
		]
	)
	//.pipe(sourcemaps.init())
	.pipe(concat('javascript-plugins-bundle.css'))
	//.pipe(sourcemaps.write())
	.pipe(gulp.dest('../css'))
});