// Копирование favicon в корень dist (чтобы GET /favicon.ico не давал 404)
export function favicon() {
  return app.gulp
    .src(`${app.srcFolder}/assets/img/favicon.ico`, { encoding: false })
    .pipe(app.gulp.dest(app.distFolder));
}
