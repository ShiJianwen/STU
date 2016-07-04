var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var livereload = require('gulp-livereload');

var nodemonConfig = {
	script: 'app.js'
};

gulp.task('serve', ['watch'], function() {
	return nodemon(nodemonConfig);
});

gulp.task('livereload', function() {
	gulp.src(['app/public/**/*.*', 'app/**/*.html', 'app.js', 'routes/*.js'])
		.pipe(livereload());
});

gulp.task('watch', function() {
	livereload.listen();
	gulp.watch(['app/public/**/*.*', 'app/**/*.html', 'app.js', 'routes/*.js'], ['livereload']);
});

gulp.task('default', ['serve', 'watch']);