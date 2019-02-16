var syntax = 'sass';
var gulp = require('gulp'); // Подключаем Gulp
var sass = require('gulp-sass'), // Подключаем Sass пакет               
    notify = require('gulp-notify');

gulp.task('styles', function() { // Создаем таск "sass"
    return gulp.src(syntax+'/**/*.'+syntax)
    .pipe(sass({ outputStyle: 'expanded' }).on("error", notify.onError())) // Преобразуем Sass в CSS посредством gulp-sass
	.pipe(gulp.dest('css')) // Выгружаем результата в папку css
	});

    gulp.task('watch', function() {
		gulp.watch(syntax+'/**/*.'+syntax, gulp.parallel('styles')); // Наблюдение за sass файлами в папке sass
});

gulp.task('default', gulp.parallel('styles', 'watch'));

