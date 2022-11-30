const gulp = require('gulp');
const rename = require('gulp-rename');
const sass = require('gulp-sass')(require('sass'));

var styleDist = "dist/css";
var styleSrc = "src/scss/style.scss";

gulp.task("style", () => {
    gulp.src(styleSrc)
        .pipe(sass({
            errorLogToConsole: true,
            outputStyle: 'compressed'
        }))
        .on("error", console.error.bind(console))
        .pipe(rename({ suffix: ".min" }))
        .pipe(gulp.dest(styleDist))
});