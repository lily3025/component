'use strict';

var baseDir = __dirname + '/../../code';

var url_module = require('url');
var fs_module = require('fs');

exports.process = function(request, response) {
	var GET = url_module.parse(request.url).query.split('&').reduce(function(a, b) {
		var arg = b.split('=');
		arg[0] && (a[arg[0]] = decodeURIComponent(arg[1]));
		return a;
	}, {});

	var path = baseDir + '/' + GET['file'];

	fs_module.readFile(path, function(error, data) {
		if (error) {
			response.writeHead(500, {'Content-type' : 'text/html'});
			response.write('\
<html>\
	<head><title>500 Internal Server Error</title></head>\
	<body>\
		<center><h1>500 Internal Server Error</h1></center>\
		<hr />\
		<center>qiwoo</center>\
	</body>\
</html>');
			response.end();
		} else {
			response.writeHeader(200, {"Content-Type": 'text/html'});
			response.write('```html\n' + data + '```');
			response.end();
		}
	});
};