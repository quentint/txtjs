var gulp = require("gulp");
var connect = require("gulp-connect");
var shell = require("gulp-shell");
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

gulp.task("server", function() {
  connect.server({
    port: 1541,
    livereload: false
  });
});

gulp.task(
  "browser",
  ["server"],
  shell.task([
    /^win/.test(require("os").platform())
      ? "start http://localhost:1541/"
      : "open http://localhost:1541/"
  ])
);

gulp.task("default", ["browser"]);
