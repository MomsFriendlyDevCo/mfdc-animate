var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var gulp = require('gulp');

gulp.task('default', ['build']);
gulp.task('build', ['css', 'css:minified']);

gulp.task('css', ()=>
	gulp.src('./src/animate.css')
		.pipe(concat('animate.css'))
		.pipe(gulp.dest('./dist'))
);

gulp.task('css:minified', ()=>
	gulp.src('./src/animate.css')
		.pipe(concat('animate.min.css'))
		.pipe(cleanCSS())
		.pipe(gulp.dest('./dist'))
);
