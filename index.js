var express = require('express');
var path = require('path');
var puid = new (require('puid'));
var child_process = require('child_process');
var fs = require('fs');
var os = require('os');
var util = require('util');

var app = express();
app.get(/\/(:?[0-9]+,[0-9]+\/)?/, function(req, res) {
  var url = req.query.url;
  if (url === undefined) {
    res.end();
    return;
  }
  res.type('png');

  var size = req.path.replace(/\//g, '') || '1280,1024'
  console.log(url, size);

  var filename = path.resolve(path.join(__dirname, puid.generate() + '.png'));
  //var filename = path.resolve([__dirname, 'screenshot.png'].join('/'));

  var args = [
    '--headless',
    '--disable-gpu',
    '--incognito',
    '--window-size=' + size,
    '--screenshot=' + filename,
    url
  ];
  child_process.execFile('chromium-browser', args, function() {
    res.sendFile(filename, function() {
      fs.unlinkSync(filename);
    });
  });
});

var args = process.argv;
var port = args[2];
app.listen(port);
console.log(util.format('Server running at http://localhost:%d/', port));
