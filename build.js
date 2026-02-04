// Загружаем gulpfile для регистрации задач
import './gulpfile.js';

// Импортируем gulp
import gulp from 'gulp';

// Получаем задачу build и запускаем её
const buildTask = gulp.task('build');

if (!buildTask) {
  console.error('Build task not found');
  process.exit(1);
}

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
    // Синхронная задача
    console.log('✓ Build task executed');
  }
} else {
  console.error('✗ Build task returned no result');
  process.exit(1);
}
