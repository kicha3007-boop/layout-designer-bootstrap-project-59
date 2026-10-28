// Сборка проекта: Pug → HTML, SCSS (с исходниками Bootstrap) → CSS, копирование картинок и JS в build/
import gulp from "gulp";
import pug from "gulp-pug";
import gulpSass from "gulp-sass";
import * as dartSass from "sass";
import browserSync from "browser-sync";

const { src, dest, series, parallel, watch } = gulp;
const sass = gulpSass(dartSass);
const server = browserSync.create();

const paths = {
  pages: "app/pug/*.pug",
  pug: "app/pug/**/*.pug",
  scss: "app/scss/**/*.scss",
  scssEntry: "app/scss/app.scss",
  images: "app/images/**/*",
  scripts: "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js",
  build: "build",
};

// Компилируются только страницы верхнего уровня: index.pug и chat.pug
export const html = () =>
  src(paths.pages).pipe(pug()).pipe(dest(paths.build)).pipe(server.stream());

export const styles = () =>
  src(paths.scssEntry)
    .pipe(
      sass({
        loadPaths: ["node_modules"],
        outputStyle: "compressed",
        quietDeps: true,
      }).on("error", sass.logError),
    )
    .pipe(dest(`${paths.build}/css`))
    .pipe(server.stream());

// encoding: false — иначе gulp 5 испортит бинарные файлы (jpg)
export const images = () =>
  src(paths.images, { encoding: false }).pipe(dest(`${paths.build}/images`));

export const scripts = () => src(paths.scripts).pipe(dest(`${paths.build}/js`));

const serve = () => {
  server.init({ server: paths.build, port: 3000, notify: false, open: false });
  watch(paths.pug, html);
  watch(paths.scss, styles);
  watch(paths.images, images);
};

export const build = parallel(html, styles, images, scripts);

export default series(build, serve);
