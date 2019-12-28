var gulp = require('gulp');
const browserSync = require('browser-sync');
const stylus = require('gulp-stylus');
const pug = require('gulp-pug');

/**
 * task for livereload page in browser
 */
gulp.task('dev', () => {
    browserSync({
        server: {
            baseDir: 'disk'
        },
        notify: false
    })
    gulp.watch("./stylus/**/*.styl", styles).on('change', browserSync.reload);
    gulp.watch("./templates/pages/*.pug", pages).on('change', browserSync.reload);
});

function styles() {
    return gulp.src('./stylus/main.styl')
        .pipe(stylus())
        .pipe(gulp.dest('./disk/css'))
}

function pages() {
    return gulp.src('./templates/pages/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('./disk'))
}

exports.pages = pages;
exports.styles = styles;