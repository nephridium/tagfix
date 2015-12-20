var fs = require('fs');
var cheerio = require('cheerio');
var _ = require('lodash-node');
var concat = require('concat-stream')

// var $input = cheerio.load(fs.readFileSync('2.html'));
var tags = require('./tags');
var validTagList = Object.keys(tags.valid);

var isValidTag = function(tag) {
  return validTagList.indexOf(tag.toLowerCase()) >= 0;
}

// read from stdin and write to stdout
process.stdin.pipe(concat(function(data){
  fix(cheerio.load(data.toString()));
}))

var fix = function($in) {
  // console.log($in.html());

  $in('*').map(function() {
    if (this.type === 'tag') {
      if (!isValidTag(this.name)) {
        console.error('---', this.name);
        var text = this.name;
        if (this.attribs !== null) {
          // append attributes
          text = text + ' ' + Object.keys(this.attribs).join(' ');
        }
        if (this.children !== null) {
          // append children text nodes
          text = text + ' ' + _.map(this.children, function(el) {
            return el.data;
          }).join(' ');
        }
        console.error(text);

        this.data = text;
        this.type = 'text';
      }
    }
    return this;
  })
  console.log($in.html());
}
