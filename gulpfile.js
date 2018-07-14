var gulp = require('gulp'),
	sass = require('gulp-sass'),
	browsersync = require('browser-sync'),
	cleancss = require('gulp-clean-css'),
	rename = require('gulp-rename'),
	autoprefixer = require('gulp-autoprefixer'),
	notify = require('gulp-notify');

gulp.task('browser-sync', function() {
	browsersync({
		server: {
			baseDir: 'app'
		},
		notify: true,
	})
});

gulp.task('styles', function() {
	return gulp.src('app/scss/*.scss')
				.pipe(sass({outputStyle:'expand'}).on('error', notify.onError()))
				.pipe(rename({suffix:'.min', prefix:''}))
				.pipe(autoprefixer(['last 15 versions']))
				.pipe(cleancss({level:{1:{specialComments:0}}}))
				.pipe(gulp.dest('app/css'))
				.pipe(browsersync.reload({stream: true}))
});

gulp.task('watch', ['styles', 'browser-sync'], function () {
	gulp.watch('app/scss/**/*.scss', ['styles']);
	gulp.watch('app/js/*.js', browsersync.reload);
	gulp.watch('app/*.html', browsersync.reload)
});

gulp.task('default', ['watch']);