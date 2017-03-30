var cleanCSS = require('gulp-clean-css');
var ghPages = require('gulp-gh-pages');
var gulp = require('gulp');
var rename = require('gulp-rename');
var rimraf = require('rimraf');

gulp.task('default', ['build']);
gulp.task('build', ['css', 'css:min']);

gulp.task('css', ()=>
	gulp.src('./src/animate.css')
		.pipe(rename('animate.css'))
		.pipe(gulp.dest('./dist'))
);

gulp.task('css:min', ()=>
	gulp.src('./src/animate.css')
		.pipe(rename('animate.min.css'))
		.pipe(cleanCSS())
		.pipe(gulp.dest('./dist'))
);


gulp.task('gh-pages', ['build'], function() {
	rimraf.sync('./gh-pages');

	return gulp.src([
		'./LICENSE',
		'./demo/_config.yml',
		'./demo/app.js',
		'./demo/index.html',
		'./demo/views/**/*',
		'./dist/**/*',
		'./node_modules/angular/angular.min.js',
		'./node_modules/angular-animate/angular-animate.min.js',
		'./node_modules/bootstrap/dist/css/bootstrap.min.css',
		'./node_modules/bootstrap/dist/js/bootstrap.min.js',
		'./node_modules/font-awesome/css/font-awesome.min.css',
		'./node_modules/font-awesome/fonts/fontawesome-webfont.ttf',
		'./node_modules/font-awesome/fonts/fontawesome-webfont.woff',
		'./node_modules/font-awesome/fonts/fontawesome-webfont.woff2',
		'./node_modules/jquery/dist/jquery.min.js',
		'./node_modules/lodash/lodash.min.js',
		'./node_modules/mfdc-router/dist/angular-mfdc-router.min.js',
	], {base: __dirname})
		.pipe(rename(function(path) {
			if (path.dirname == 'demo') { // Move all demo files into root
				path.dirname = '.';
			} else if (path.dirname == 'demo/views') {
				path.dirname = 'views';
			}

			return path;
		}))
		.pipe(ghPages({
			cacheDir: 'gh-pages',
			push: true, // Change to false for dryrun (files dumped to cacheDir)
			// force: true, // Required to include node_modules files even though they are in .gitignore
		}))
});
