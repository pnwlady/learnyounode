var filFunc = require('./6-module-filter.js');
var dir = process.argv[2];
var ext = process.argv[3];

filFunc (dir, ext, function (err, list) {
  if(err)
    return console.error('error', err);

    list.forEach(function (file) {
      console.log(file);
    });
});
