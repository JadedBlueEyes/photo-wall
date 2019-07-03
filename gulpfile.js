const tlpackage = require('./package');

const preamble = `${tlpackage.name} v${tlpackage.version} ©${new Date().getFullYear()} Joel Ellis`;

const gulp = require('gulp');
const header = require('gulp-header');
const fs = require('fs');

function html () {
  return gulp.src(['./src/**.html'])
    .pipe(require('gulp-htmlmin')({
      collapseWhitespace: true,
      caseSensitive: true,
      collapseBooleanAttributes: true,
      processConditionalComments: true,
      removeScriptTypeAttributes: true,
      sortAttributes: true,
      useShortDoctype: true,
      minifyCSS: true,
      removeComments: true
    }))
    .pipe(header('<!-- '+ preamble + '-->'))
    .pipe(gulp.dest('./public/'));
}

function copy (done) {
  // gulp.src(['./src/config/*'])
  //   .pipe(gulp.dest('./build/config'));
  // gulp.src(['./package.json'])
  //   .pipe(gulp.dest('./build'));
  // gulp.src(['./src/client/*.*'])
  //   .pipe(gulp.dest('./build/client'));
  done();
}

function css () {
  return gulp.src('./src/**.*ss')
    .pipe(require('gulp-postcss')())
    .pipe(require('gulp-ext-replace')('.css'))
    .pipe(header('/* '+ preamble + ' */'))
    .pipe(gulp.dest('./public/'));
}

let minifyConfig = {
  compress: {
    unsafe: true,
    passes: 2,
    keep_fargs: false,
    drop_console: true,
    arguments: true
  },
  mangle: {
    properties: false,
    toplevel: true
  },
  output: {
    beautify: false,
    // preamble: '/* ' + preamble + ' */',
    safari10: true,
    webkit: true
  }
  // TODO: nameCache: {}
};

function js () {
  return gulp.src(['./src/**.js'])
    .pipe(require('gulp-terser')(minifyConfig))
    .pipe(header('/* '+ preamble + ' */'))
    .pipe(gulp.dest('./public/'));
}


module.exports = {
  html,
  css,
  js,
  copy
};
