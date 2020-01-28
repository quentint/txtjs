var gulp = require("gulp");
var connect = require("gulp-connect");
var shell = require("gulp-shell");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");

// 1541 - Claude Garamond was commissioned to create fonts for King Francis I
// of France and established himself as the first type designer.

gulp.task("copy-easel", function() {
  return gulp
    .src("./node_modules/easeljs/lib/easeljs.js")
    .pipe(gulp.dest("./dist"));
});

gulp.task("copy-pathseg", function() {
  return gulp
    .src("./node_modules/pathseg/pathseg.js")
    .pipe(gulp.dest("./dist"));
});

gulp.task("copy-vendor-files", ["copy-easel", "copy-pathseg"]);

gulp.task("build", ["compile", "copy-vendor-files"], function() {
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
