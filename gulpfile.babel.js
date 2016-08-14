import gulp from 'gulp';
import webpack from 'webpack-stream';
import del from 'del';

import webpackConfig from './webpack.config.js';

gulp.task('clean', () => del('build/'));

gulp.task('default', () => {
  return gulp.src('src/app.js')
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('build/'));
});

gulp.task('watch', () => {
  gulp.watch('src/**/*.js', ['default']);
});
