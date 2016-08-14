import gulp from 'gulp';
import webpack from 'webpack-stream';
import  webpackConfig from './webpack.config.js';

gulp.task('default', () => {
  return gulp.src('src/app.js')
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('build/'));
});
