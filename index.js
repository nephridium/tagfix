var fs = require('fs');
var cheerio = require('cheerio');
var _ = require('lodash-node');

var $in = cheerio.load(fs.readFileSync('1.html'));
var x = $in('*');
_.forIn(x, function(val, key) {
  if (val.type === 'tag') {
    console.log(val.name);
  } else {
    console.log('---', key, val.type)
  }
})
// console.log(x);
