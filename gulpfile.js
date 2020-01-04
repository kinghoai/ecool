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
    gulp.watch("./images/**/*", images).on('change', browserSync.reload);
    gulp.watch("./css/**/*", styles).on('change', browserSync.reload);
    gulp.watch("./stylus/**/*.styl", styles).on('change', browserSync.reload);
    gulp.watch("./templates/**/*.pug", pages).on('change', browserSync.reload);
    gulp.watch("./js/*", scripts).on('change', browserSync.reload);
});

function styles() {
    gulp.src('./css/**/*')
        .pipe(gulp.dest('./disk/css'))
    gulp.src('./stylus/pages/*.styl')
        .pipe(stylus())
        .pipe(gulp.dest('./disk/css/pages'))
    gulp.src('./stylus/main.styl')
        .pipe(stylus())
        .pipe(gulp.dest('./disk/css'))
}

function scripts() {
    return gulp.src('./js/*.js')
        .pipe(gulp.dest('./disk/js'))
}


function images() {
    return gulp.src('./images/**/*')
        .pipe(gulp.dest('./disk/images'))
}

function pages() {
    return gulp.src('./templates/pages/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('./disk/'))
}

function layouts() {
    return gulp.src('./templates/layouts/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('./disk/'))
}

exports.pages = pages;
exports.layouts = layouts;
exports.styles = styles;
exports.scripts = scripts;
exports.images = images;
