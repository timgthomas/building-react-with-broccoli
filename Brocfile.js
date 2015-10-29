var browserify = require('broccoli-browserify');
var babel = require('broccoli-babel-transpiler');
var compileSass = require('broccoli-sass');
var merge = require('broccoli-merge-trees');

var js = 'app';
js = babel(js, {});
js = browserify(js, {
  entries: [ './app.js' ],
  outputFile: 'app.js'
});

var css = compileSass([ 'app/styles' ], 'app.scss', 'app.css');

module.exports = merge([ 'public', js, css ]);
