var assert          = require('assert');
var isES2016Keyword = require('./');

assert(isES2016Keyword('async'));
assert(isES2016Keyword('class'));
assert(isES2016Keyword('let'));

assert(!isES2016Keyword('let you go'));
assert(!isES2016Keyword('super class'));
assert(!isES2016Keyword('yo'));
assert(!isES2016Keyword('const\ntime'));

