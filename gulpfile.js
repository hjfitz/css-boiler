const gulp = require('gulp');
const concat = require('gulp-concat-css');
const clean = require('gulp-clean-css');
const rename = require('gulp-rename');

gulp.task('concat', () => {
    return gulp.src('src/*.css')
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest('dist'));
});

gulp.task('minify', ['concat'], () => {
    return gulp.src('dist/bundle.css')
        .pipe(clean({ compatibility: 'ie9' }))
        .pipe(rename('bundle.min.css'))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['minify']);