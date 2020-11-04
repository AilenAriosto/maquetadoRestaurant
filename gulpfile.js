var gulp = require('gulp');
var sass = require('gulp-sass');
var pug = require('gulp-pug');
const image = require('gulp-image');

gulp.task('sass', () => {

    return gulp.src(['assets/scss/style.scss',
                    'assets/scss/styleTablet.scss',
                    'assets/scss/styleWeb.scss' ])
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

    gulp.watch(['assets/scss/style.scss'], function(sass) {
        sass();
    });

    gulp.watch(['index.pug'], function(pug) {
        pug();
    });

});


