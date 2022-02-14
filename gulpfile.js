const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const pug = require('gulp-pug');

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