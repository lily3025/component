'use strict';

var baseDir = __dirname + '/../../code';

var url_module = require('url');
var fs_module = require('fs');
var _ = require(baseDir + '/underscore/1.5.2/underscore.js');

var paths;

var readData = function(path, detail, callback, filter) {
	if (typeof detail == 'function') {
		filter = callback;
		callback = detail;
		detail = false;
	}

	filter = filter || /.*/;

	fs_module.readdir(path, function(error, files) {
		if (error) {
			callback(error);
		} else if (!detail) {
			callback(null, files.filter(function(fn) {
				return fn.match(filter);
			}));
		} else {
			var total = files.length, passed = 0, result = {};
			files.forEach(function(fn) {
				if (fn.match(filter)) {
					fs_module.readFile(path + '/' + fn, function(error, data) {
						passed ++;
						result[fn] = error ? '' : data;
						if (passed >= total) {
							callback(null, result);
						}
					});
				} else {
					passed ++;
				}
			});
			if (total == 0 || passed >= total) {
				callback(null, result);
			}
		}
	});
};



exports.process = function(request, response) {
	var GET = url_module.parse(request.url).query.split('&').reduce(function(a, b) {
		var arg = b.split('=');
		arg[0] && (a[arg[0]] = decodeURIComponent(arg[1]));
		return a;
	}, {});
	var path = baseDir + '/' + GET['path'];

	var errorFlag = false;

	var data = {
		docs : null,
		examples : null,
		tests : null,
		group : false
	};

	fs_module.readFile(path + '/package.json', function(error, content){
		if (error) {
			errorFlag = true;

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
			data.group = JSON.parse(content).keywords[0];
		}

		checkResult();
	});

	readData(path + '/docs', true, function(error, docs) {
		if (error) {
			data.docs = [];
		} else {
			data.docs = _.map(docs, function(content, name) {
				var match = content.toString().match(/^#+(.*)/mg);
				return match ? {
					name : name,
					title : match[0].replace(/[#*_-]/g, '')
				} : null;
			}).filter(function(a) {
				return a;
			});
		}

		checkResult();
	}, /\.md$/);

	readData(path + '/examples', true, function(error, examples) {
		if (error) {
			data.examples = [];
		} else {
			data.examples = _.map(examples, function(content, name) {
				var match = content.toString().match(/^#+(.*)/mg);
				return match ? {
					name : name,
					title : match[0].replace(/[#*_-]/g, '')
				} : null;
			}).filter(function(a) {
				return a;
			});
		}

		checkResult();
	}, /\.md$/);

	readData(path + '/tests', function(error, docs) {
		data.tests = error ? [] : docs;
		
		checkResult();
	}, /-spec\.js$/);
	
	var checkResult = function() {
		if (!errorFlag && _.values(data).every(function(a) {return a})) {

			response.writeHead(200, {"Content-Type": 'text/html'});
			response.write(JSON.stringify(data));
			response.end();
		}
	};
};