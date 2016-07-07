var express = require('express');
var phantomjs = require('phantomjs');
var path = require('path');
var child_process = require('child_process');
var puid = new (require('puid'));
var fs = require('fs');
var os = require('os');

var app = express();
app.get('/', function(req, res) {
  res.type('png');

  var url = req.query.url;
  var filename = path.join(os.tmpdir(), puid.generate() + '.png');

  var args = [path.join(__dirname, 'phantomjs/capture.js'), url, filename];
  child_process.execFile(phantomjs.path, args, function() {
    res.sendFile(filename, function() {
      fs.unlink(filename);
    });
  });
});

app.listen(65200);
console.log('Server running at http://localhost:3000/');
