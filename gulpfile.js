const {
    src,
    dest,
    parallel,
    series,
    watch
} = require('gulp')

/** LOAD PLUGINS */
const gulpsass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const browsersync = require('browser-sync').create();
const babel = require('gulp-babel');
const clean = require('gulp-clean');
const concat = require("gulp-concat");
const commonjs = require("gulp-commonjs");
const autoprefixer = require('gulp-autoprefixer');

/** FONTS */
function fonts() {
    src('./src/fonts/**/*.ttf')
        .pipe(dest('./build/fonts/'));
    return src('./src/fonts/**/*.ttf')
        .pipe(dest('./build/fonts/'))
};

/** SASS */
function sass() {
    const source = './src/sass/**/*.sass'
    return src(source)
        .pipe(sourcemaps.init())
        .pipe(gulpsass({
            includePaths: require("node-normalize-scss").includePaths
        }).on('error', gulpsass.logError))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write('./'))
        .pipe(dest('./build/css/'))
        .pipe(browsersync.stream())
};

/** HTML */
function html() {
    return src('./src/*.html')
        .pipe(dest('./build/'))
        .pipe(browsersync.stream());
};

/** IMAGES */
function img() {
    return src('./src/images/*')
        .pipe(dest('./build/images'))
};

/** WATCH FILES */
function watchFiles() {
    watch('./src/*.html', html);
    watch('./src/images/*', img);
    watch('./src/sass/**/*.sass', sass);
    watch('./src/fonts/**/*.ttf', fonts);
    watch('./src/js/*.js', js);
}

/** JS */
function js() {
    return src('./src/js/**/*.js')
        // .pipe(babel({
        //     presets: ['@babel/preset-env']
        // }))
        // .pipe(commonjs())
        // .pipe(concat("main.js")))
        .pipe(dest('./build/js'))
        .pipe(browsersync.stream());

}

/** BROWSER-SYNC */
function browserSync() {
    browsersync.init({
        server: {
            baseDir: './build'
        },
        port: 3000
    });
}

function clear() {
    return src('./build/*', {
            read: false
        })
        .pipe(clean());
}

exports.watch = parallel(watchFiles, browserSync);
exports.default = series(clear, parallel(html, img, sass, fonts, js));