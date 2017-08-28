const gulp = require('gulp');
const concat = require('gulp-concat-css');
const clean = require('gulp-clean-css');
const rename = require('gulp-rename');
const notifier = require('node-notifier');

/**
 * Because there exist a few CSS files we aim to bundle them in to one nice browser import
 * Stick everything that ends in .css in src/ together and bung it in dist/
 */
gulp.task('bundle', () => {
    return gulp.src('src/*.css')
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest('dist'));
});

/**
 * This library may be used one day in production
 * We therefore seek to minify the bundle previously generated
 */
gulp.task('minify', ['bundle'], () => {
    return gulp.src('dist/bundle.css')
        .pipe(clean({ compatibility: 'ie9' }))
        .pipe(rename('bundle.min.css'))
        .pipe(gulp.dest('dist'));
});

/**
 * Waiting for changes is hard, and keeping a terminal in the foreground is a ballache.
 * Shooting a notification on build takes up less screen real-estate 
 *  -- we use gulp to run libnotify
 * Because minify is listed as a dependency, we can ensure that we're notified after a build AND minify!
 */
gulp.task('notify', ['minify'], () => {
    notifier.notify({
        title: 'Gulp',
        message: 'Build complete',
    });
});

/**
 * We may want to test this CSS file in the browser, and make changes accordingly
 * To aid this, we keep a watch on everything that we change, so that the browser import stays the same
 */
gulp.task('watch', () => {
    gulp.watch('src/*.css', ['notify']);
});

/**
 * By default, we don't want to watch this file, because it's gulp is the postinstall command
 * So, the user gets one fresh file once they've installed.
 */
gulp.task('default', ['notify']);