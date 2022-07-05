var gulp = require('gulp')
const pug = require('gulp-pug')
const sass = require('gulp-sass')(require('sass'));
const { watch, series } = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('pug', () => {
    return gulp.src('src/views/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('dist/'))          
});

gulp.task('sass', () => {
    return gulp.src('src/assets/scss/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/assets/css'));    
});

exports.default = function() {
    browserSync.init({
        server: {
            baseDir: "./dist/"
        }
    });
    watch([
      'src/views/*.pug',
      'src/assets/scss/*.scss'
    ], series('pug', 'sass')).on("change", reload);

};