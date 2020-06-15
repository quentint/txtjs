var gulp = require("gulp");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");

// 1541 - Claude Garamond was commissioned to create fonts for King Francis I
// of France and established himself as the first type designer.

gulp.task("build", ["compile"], function() {
  gulp
    .src(["./dist/txt.js"])
    .pipe(uglify())
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest("./dist/"));
});

