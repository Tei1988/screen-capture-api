var webpage = require('webpage');
var system = require('system');

var args = system.args;
console.log(phantom);
console.log(args);
var url = args[1];
var filename = args[2];

var page = webpage.create();
console.log(url);
page.open(url, function() {
  page.render(filename);
  phantom.exit();
});
