//assignment 1
console.log("HELLO WORLD");

//assignment 2
// console.log(process.argv);
var answer = 0;

for (var i = 2; i < process.argv.length; i++) {
  answer += Number(process.argv[i]);
}

console.log(answer);

//assignment 3
var fs = require('fs');
var fileName = process.argv[2];

var buf = fs.readFileSync(fileName);
var string = buf.toString();
var count = string.split('\n').length;

console.log(count -1);

//assignment 4
var fs = require('fs');
var file = process.argv[2];

fs.readFile(file, 'utf8', (err, data) => {
  var lines = contents.toString().split('\n').length - 1
  console.log(lines)
});

//assignment 5
var fs = require('fs');
var path = require('path');

var dir = process.argv[2];
var ext = process.argv[3];

fs.readdir(dir, function (err, list) {
  list.forEach(function (file) {
    if (path.extname(file) === '.' + ext) {
      console.log(file);
    }
  });
});

//assignment 6 in: 6-module-filter.js and 6-module.js

//assignment 7
var http = require('http');

http.get(process.argv[2], function callback (response) {
  response.setEncoding('utf8');
  response.on('data', console.log);
  response.on('error', console.error);
});

//assignment 8
var http = require('http');
var concat = require('concat-stream');
var url = process.argv[2];

http.get(url, function (res) {
  res.setEncoding('utf8');
  var info = concat(function(data) {
    console.log(data.split('').length);
    console.log(data);
  });
  res.pipe(info);
});

//assignment 9 - I found this answer online 
var http = require('http');
var concat = require('concat-stream')

var urls = [];
var data = [];
var responseCount = 0;

process.argv.slice(2).forEach(function (item) {
  urls.push(item);
})

urls.forEach(function (item, index) {
  http.get(item, function (req) {
    req.setEncoding('utf8')
    req.pipe(concat(function (res) {
      data[index] = res;
      responseCount++
      if (responseCount === urls.length) {
        console.log(data.join('\n'));
      }
    }))
  })
})
