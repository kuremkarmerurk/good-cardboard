var gulp = require('gulp');
var bs = require('browser-sync');
var sass = require('gulp-sass');
var git = require('gulp-git');

gulp.task('default', function(){
	console.log(" Установлена приоритетная задача - Убить всех людей!!! ")
});

gulp.task('serve', ['sass'], function() {

		bs.init({
				server: "./src"
		});

		gulp.watch("src/sass/*.sass", ['sass']);
		gulp.watch("src/*.html").on('change', bs.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
		return gulp.src("src/sass/*.sass")
				.pipe(sass())
				.pipe(gulp.dest("src/css"))
				.pipe(bs.stream());
});

gulp.task('push', function(){
  git.push('origin', 'master', function (err) {
    if (err) throw err;
  });
});

gulp.task('default', ['serve']);