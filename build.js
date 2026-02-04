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

// Создаем задачу build напрямую и регистрируем её
gulp.task('build', gulp.series(
  clean,
  gulp.parallel(html, styles, buildCss, scripts, img, webpRun, cleanFonts, otfConvert, ttfConvert, exportFonts)
));

// Получаем зарегистрированную задачу и запускаем её
const buildTask = gulp.task('build');

if (!buildTask) {
  console.error('✗ Build task not found');
  process.exit(1);
}

// Вызываем задачу и обрабатываем результат как Promise
Promise.resolve()
  .then(() => {
    const result = buildTask();
    return result;
  })
  .then((result) => {
    // Если результат - Promise, ждем его
    if (result && typeof result.then === 'function') {
      return result;
    }
    // Если результат - Stream, конвертируем в Promise
    if (result && typeof result.on === 'function') {
      return new Promise((resolve, reject) => {
        result.on('end', resolve);
        result.on('error', reject);
      });
    }
    // Если результат undefined или другой тип, считаем успешным
    return Promise.resolve();
  })
  .then(() => {
    console.log('✓ Build completed successfully');
  })
  .catch((err) => {
    console.error('✗ Build failed:', err);
    process.exit(1);
  });
