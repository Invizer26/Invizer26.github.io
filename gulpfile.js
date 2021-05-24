const gulp = require('gulp');
const less = require('gulp-less');
const sourcemaps = require('gulp-sourcemaps');
const watch = require('gulp-watch');

gulp.task('less-compile', function (){
    return gulp.src('./less/style.less')
        .pipe(less())
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./css/'))
})



gulp.task('watch', function (){
    gulp.watch('./less/**/*.less', gulp.series('less-compile'))
})