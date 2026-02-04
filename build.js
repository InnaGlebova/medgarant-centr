// Импортируем gulp
import gulp from 'gulp';

// Импортируем пути
import { path } from './gulp/config/path.js';
import { distFolder } from './gulp/config/path.js';
import { srcFolder } from './gulp/config/path.js';

// Передача значений в глобальную переменную
global.app = {
  path: path,
  gulp: gulp,
  distFolder: distFolder,
  srcFolder: srcFolder,
};

// Импортируем задачи напрямую
import { html } from './gulp/tasks/html.js';
import { clean } from './gulp/tasks/clean.js';
import { styles } from './gulp/tasks/styles.js';
import { buildCss } from './gulp/tasks/styles.js';
import { scripts } from './gulp/tasks/scripts.js';
import { img } from './gulp/tasks/img.js';
import { cleanFonts } from './gulp/tasks/clean.js';
import { otfConvert } from './gulp/tasks/fonts.js';
import { ttfConvert } from './gulp/tasks/fonts.js';
import { exportFonts } from './gulp/tasks/fonts.js';
import { webpRun } from './gulp/tasks/webp.js';

// Создаем задачу build напрямую
const buildTask = gulp.series(
  clean,
  gulp.parallel(html, styles, buildCss, scripts, img, webpRun, cleanFonts, otfConvert, ttfConvert, exportFonts)
);

// Запускаем задачу
const result = buildTask();

// Обрабатываем результат
if (result) {
  if (typeof result.then === 'function') {
    // Promise - ждем завершения
    result
      .then(() => {
        console.log('✓ Build completed successfully');
      })
      .catch((err) => {
        console.error('✗ Build failed:', err);
        process.exit(1);
      });
  } else if (result && typeof result.on === 'function') {
    // Stream - обрабатываем события
    let hasError = false;
    result.on('error', (err) => {
      hasError = true;
      console.error('✗ Build failed:', err);
      process.exit(1);
    });
    result.on('end', () => {
      if (!hasError) {
        console.log('✓ Build completed successfully');
      }
    });
  } else {
    console.log('✓ Build task executed');
  }
} else {
  console.error('✗ Build task returned no result');
  process.exit(1);
}
