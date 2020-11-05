var gulp = require('gulp');
var sass = require('gulp-sass');
var pug = require('gulp-pug');
var image = require('gulp-image');

gulp.task('sass', () => {

    return gulp.src('*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/assets/css'));
        
});

gulp.task('pug', () => {

    return gulp.src('./*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('dist/'))
                
});

gulp.task('image', function () {
    gulp.src('./assets/img/*')
        .pipe(image())
        .pipe(gulp.dest('./dist/assets/img/'));
});

gulp.task('watch', () =>{

    gulp.watch(['*.scss'], function(sass) {
        sass();
    });

    gulp.watch(['*.pug'], function(pug) {
        pug();
    });

});


