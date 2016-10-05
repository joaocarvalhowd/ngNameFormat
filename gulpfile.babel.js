'use strict';

import gulp from 'gulp';
import babel from 'gulp-babel';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';

function onError(err) {
  console.log(err);
  this.emit('end');
}

gulp.task('js', () => {
    return gulp.src('src/**.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(concat('ngNameFormat.min.js'))
        .pipe(uglify())
        .on('error', onError)
        .pipe(gulp.dest('dist/'));
});

gulp.task('build', ['js']);