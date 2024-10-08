const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
//const purgecss = require("gulp-purgecss");

function buildStyles() {
  return (
    src("./src/scss/**/*.scss")
      .pipe(sass())
      //.pipe(purgecss({ content: ["*.html"] }))
      .pipe(dest("src"))
  );
}

function watchTask() {
  watch(["./src/scss/**/*.scss"], buildStyles);
}

exports.default = series(buildStyles, watchTask);
