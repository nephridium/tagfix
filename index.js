var fs = require('fs');
var cheerio = require('cheerio');
var _ = require('lodash-node');

var $in = cheerio.load(fs.readFileSync('2.html'));
var x = $in('*');
console.log($in.html());

$in('*').map(function() {
  // console.log(this;
  // console.log('===', this.type);
  if (this.type === 'tag') {
    if (this.name === 'this') {
      // console.log(this.parent);
      console.log('---', this.name);
      // console.log(this);

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
      // console.log(Object.keys(this.attribs));


      this.data = text;
      this.type = 'text';

      // console.log(this);

      var self = {
        data: this.nane,
        type: 'text',
        parent: this.parent
      };
      // console.log(cheerio.load(this).html());
      // this.html('moo');
      return self;
    } else {
      return this;
    }
  } else {
    return this;
  }
})
// console.log($out.html());
console.log($in.html());

// _.forIn(x, function(val, key) {
//   if (val.type === 'tag') {
//     // console.log(val.name);
//     if (val.name === 'this') {
//       // console.log(Object.keys(val));
//       // console.log(val);
//       $tag = cheerio.load(val);
//       $tag.html(val.name);
//       console.log(val)
//     }
//   // } else {
//   //   console.log('---', key, val.type)
//   }
// })
// // console.log(x);
// console.log($in.html());
