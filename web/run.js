'use strict';

var http_module = require('http');
var url_module = require('url');
var fs_module = require('fs');
var os_module = require('os');
var path_module = require('path');
var child_process = require('child_process');

var config = _extend({
	port : 61300,
	showLog : false,
	openBrowser : true,
	remoteAccess : false
}, require('./config'));

var requestListener = function(request, response) {
	var url = url_module.parse(request.url);

	var process = function(result) {
		response.writeHead(result.code || 200, _extend({
			'Content-type' : 'text/html; charset=utf-8'
		}, result.header));
		result.body && response.write(result.body);
		response.end();
	};

	var listFlag = false;

	if (url.pathname === '/') {
		url.pathname += "index.html";
	}

	if (url.pathname.match(/\/__list__$/)) {
		listFlag = true;
		url.pathname = url.pathname.replace(/__list__$/, '');
	}

	if (url.pathname.indexOf('/web') == 0) {
		config.showLog && console.log('Request: ' + request.url);
		handler.relocate(url.href.replace(/(\/web\/?)/, '$1'), process);
	} else {
		fs_module.exists(__dirname + url.pathname.replace(/\/module(?=\/|$)/, '/../code').replace(/(\/data\/[^\/]*)\.php$/, '$1.js'), function(exist) {
			config.showLog && console.log('Request: ' + request.url);
			if (exist) {
				if (listFlag) {
					handler.list(url, process);
				} else if (url.pathname.indexOf('/data') == 0) {
					handler.dynamic(url, process, request, response);
				} else if (path_module.dirname(url.pathname) == '/' && path_module.extname(url.pathname) == '.js') {
					handler.error(403, process);
				} else {
					handler.statik(url, process);
				}
			} else {
				handler.error(404, process)
			}
		});
	}
};

var handler = {
	statik : function(url, callback) {
		config.showLog && console.log('\t=>static');
		var path = __dirname + url.pathname.replace('/module', '/../code');
		fs_module.stat(path, function(error, stat) {

			if (error) {
				handler.error(404, callback);
			} else if (stat.isDirectory()) {
				handler.list(url, callback);
			} else {
				fs_module.readFile(path, function (error, file) {
					var typeMap = {
						'.htm' : 'text/html; charset=utf-8',
						'.html': 'text/html; charset=utf-8',
						'.md': 'text/plain; charset=utf-8',
						'.js'  : 'application/x-javascript; charset=utf-8',
						'.css' : 'text/css; charset=utf-8',
						'.jpeg': 'image/jpeg',
						'.jpg' : 'image/jpeg',
						'.png' : 'image/png',
						'.ico' : 'image/x-icon',
						'.swf' : 'application/x-shockwave-flash',
						'.svg' : 'image/svg+xml'
					};
					if (error) {
						handler.error(404, callback);
					} else {
						var ext = path_module.extname(url.pathname);
						callback({
							header : {"Content-type": typeMap[ext] || null},
							body : file
						});
					}
				});
			}
		});

	},

	list : function(url, callback) {
		config.showLog && console.log('\t=>list');
		fs_module.readdir(__dirname + url.pathname, function(error, files) {
			if (error) {
				handler.error(500, callback);
			} else {
				var list = files.map(function(fn) {
					var name = path_module.basename(fn);
					var path = url.pathname.replace(/\/?$/, '\/') + fn;
					return [name, path];
				}).sort(function(a, b) {
					if (a[0].indexOf('.') && b[0].indexOf('.') == -1) {
						return 1;
					} else if (b[0].indexOf('.') && a[0].indexOf('.') == -1) {
						return -1;
					} else {
						return a[0] > b[0] ? 1 : -1;
					}
				});
				list.unshift(['↑', url.pathname.replace(/\/[^\/]*\/?$/,'/')]);
				var html = '\
<html>\
<head>\
	<title>' + url.pathname + '</title>\
	<style>body {line-height: 1em;padding: 3% 10%;} p { margin:0;}</style>\
</head>\
<body>\
<h2>' + url.pathname + '</h2>\
' + list.reduce(function(a, b, i) {
	var last = i == list.length - 1;
	var dir = b[0].indexOf('.') == -1;
	return a + '<p>' + (last ? '└' : '├') + '─ ' + '<a href="' + b[1] + '">' + (dir ? '<b>' : '') + b[0] + (dir ? '</b>' : '') +'</a></p>\n' + (last ? '' : '<p>│</p>\n')
}, '') +'\
<hr />\
<center>qiwoo</center>\
</body>\
</html>';
				callback({body: html});
			}
		});
	},

	dynamic : function(url, callback, request, response) {
		config.showLog && console.log('\t=>dynamic');
		var path = __dirname + url.pathname.replace('/web', '').replace(/(\/data\/[^\/]*)\.php$/, '$1.js');
		try {
			var module = require(path);
			if (module.process && typeof module.process === 'function') {
				module.process(request, response);
			} else {
				handler.error(500, callback);
			}
		} catch (e) {
			handler.error(500, callback);
		}
	},

	relocate : function(url, callback) {
		config.showLog && console.log('\t=>relocate to ' + url);
		callback({
			code : 302,
			header : {'Location': url}
		});
	},

	error : function(code, callback) {
		config.showLog && console.log('\t=>error ' + code);
		var msg = code + ' ' + http_module.STATUS_CODES[404];
		callback({
			code : code,
			body : '\
<html>\
<head><title>' + msg + '</title></head>\
<body>\
<center><h1>' + msg + '</h1></center>\
<hr />\
<center>qiwoo</center>\
</body>\
</html>'
		});

	}
};

function _extend(obj) {
	[].forEach.call([].slice.call(arguments, 1), function(source) {
		if (source) {
			for (var prop in source) {
				if (source[prop] === null) {
					delete obj[prop];
				} else {
					obj[prop] = source[prop];
				}
			}
		}
	});
	return obj;
}

if (config.remoteAccess) {
	http_module.createServer(requestListener).listen(config.port);
} else {
	http_module.createServer(requestListener).listen(config.port, '127.0.0.1');
}

if (config.openBrowser ) {
	var exec = os_module.platform() == 'win32' ? 'start' : 'open';
	child_process.exec(exec + " http://127.0.0.1" + (config != 80 ? ':' + config.port : ''));
}

console.log("Qiwoo Server has been started.\nListening on "+ config.port);
