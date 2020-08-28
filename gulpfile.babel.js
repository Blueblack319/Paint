import autoprefixer from "gulp-autoprefixer";
import bro from "gulp-bro";
import babelify from "babelify";
import del from "del";
import gulp from "gulp";
import minify from "gulp-csso";
import sass from "gulp-sass";

sass.compiler = require("node-sass");

const clean = () => del(["dist"]);

const routes = {
  style: {
    src: "src/scss/*.scss",
    dist: "dist/style/",
    watch: "src/scss/**/*.scss",
  },
  js: {
    src: "src/js/*.js",
    dist: "dist/js",
    watch: "src/js/**/*.js",
  },
};

const watch = () => {
  gulp.watch(routes.style.watch, style);
  gulp.watch(routes.js.watch, js);
};

const style = () =>
  gulp
    .src(routes.style.src)
    .pipe(sass().on("error", sass.logError))
    .pipe(
      autoprefixer({
        cascade: false,
        flexbox: true,
        grid: "autoplace",
      })
    )
    .pipe(minify())
    .pipe(gulp.dest(routes.style.dist));

const js = () =>
  gulp
    .src(routes.js.src)
    .pipe(
      bro({
        transform: [
          babelify.configure({ presets: ["es2015"] }),
          ["uglifyify", { global: true }],
        ],
      })
    )
    .pipe(gulp.dest(routes.js.dist));

const assets = gulp.series([style, js]);
const live = gulp.series([watch]);

export const build = gulp.series([clean, assets]);
export const dev = gulp.series([build, live]);
// export const deploy =
