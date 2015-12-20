var fs = require('fs');
var cheerio = require('cheerio');
var _ = require('lodash-node');

var $in = cheerio.load(fs.readFileSync('2.html'));
var x = $in('*');
console.log($in.html());

$in('*').map(function() {
  if (this.type === 'tag') {
    if (this.name === 'this') {
      console.log('---', this.name);
      var text = this.name;
      if (this.attribs !== null) {
        text = text + ' ' + Object.keys(this.attribs).join(' ');
      }
      if (this.children !== null) {
        text = text + ' ' + _.map(this.children, function(el) {
          return el.data;
        }).join(' ');
      }
      console.log(text);

      this.data = text;
      this.type = 'text';
    }
  }
  return this;
})
console.log($in.html());
