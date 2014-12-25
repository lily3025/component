'use strict';

var fs_module = require('fs');
var os_module = require('os');
var url_module = require('url');
var child_process = require('child_process');

var tmpDir = os_module.tmpdir().replace(/\/?$/, '\/') + 'qiwoo';
var baseDir = __dirname + '/../../code';

var mkDir = function(dir, callback) {
	fs_module.mkdir(dir, function(error) {
		if (!error || error.code == 'EEXIST') {
			callback();
			return;
		}

		if (error.code != 'ENOENT') {
			callback(error);
			return;
		}

		mkDir(dir.replace(/[^\/]*\/?$/, ''), function(error) {
			if (error) {
				callback(error);
			} else {
				mkDir(dir, callback);
			}
		});

	});
};

var copyDir = function(from, to, callback) {
	var total = 0, passed = 0, errorFlag = false;

	mkDir(to, function(error) {
		if (error) {
			checkError(error);
			return;
		}
		fs_module.readdir(from, function(error, files) {
			if (checkError(error)) {
				return;
			}
			total += files.length;
			files.forEach(function(fn) {
				if (fn.indexOf('.') == 0) {
					pass();
					return;
				}

				var fileFrom = from + '/' + fn;
				var fileTo = to + '/' + fn;

				fs_module.stat(fileFrom, function(error, stats) {
					if (checkError(error)) {
						return;
					}
					if (stats.isDirectory()) {
						copyDir(fileFrom, fileTo, function(error) {
							checkError(error) || pass();
						});
					} else if (stats.isFile()) {
						var jsModule = fn.match(/\.js$/) ? fn.replace(/\.js$/, '').replace(/(-spec|require)$/, '') : false;
						var readStream = fs_module.createReadStream(fileFrom, {encoding: 'utf-8'});
						var writeStream = fs_module.createWriteStream(fileTo);

						readStream.on("data", function (data) {
							if (!jsModule || data.toString().match(/define\(\s*['\"][^\[\('\"\{]+['\"]\s*,?/)) {
								writeStream.write(data);
							} else {
								writeStream.write(data.toString().replace('define(', 'define(' + jsModule + ', '));
							}
						});

						readStream.on("end", function () {
							writeStream.end();
							pass();
						});
						readStream.on("error", function (error) {
							checkError(error);
						});
					} else {
						pass();
					}
				});
			});
			pass(0);
		});
	});


	var pass = function(num) {
		num = num == undefined ? 1 : num;
		passed += num;
		if (passed == total && !errorFlag) {
			callback(null, total);
		}
	};

	var checkError = function(error) {
		if (!errorFlag && error) {
			callback(error);
			errorFlag = true;
		}
		return errorFlag;
	}
};

exports.process = function(request, response) {
	var ip = request.connection.remoteAddress;
	var url = url_module.parse(request.url);

	if (ip != '127.0.0.1') {
		var jumpUrl = 'http://www.qiwoo.org/qiwoo/web' + url.path;
		response.writeHead(302, {'Location': jumpUrl});
		response.write('正在跳转至下载地址...');
		response.end();
		return;
	}

	var GET = url_module.parse(request.url).query.split('&').reduce(function(a, b) {
		var arg = b.split('=');
		arg[0] && (a[arg[0]] = decodeURIComponent(arg[1]));
		return a;
	}, {});

	if (!GET['sure']) {
		response.writeHead(200, {'Content-type' : 'text/html; charset=utf-8'});
		response.write('<script>alert("建议首先执行 git pull \\n\\n点确定继续!");location.href += "&sure"</script>')
		response.end();
		return;
	}

	var path = tmpDir + '/' + new Date().getTime() + '/module';
	var modules = JSON.parse(GET['d']);
	var total = modules.length, passed = 0, errorFlag = false;
	modules.forEach(function(module) {
		var modulePath = path + '/' + module[2];
		copyDir(baseDir + '/' + module[2], modulePath, function(error) {
			if (checkError(error)) {
				return;
			}

			if (++ passed == total && !errorFlag) {
				response.writeHead(200, {'Content-type' : 'text/html'});
				response.write('\
<html>\
<head>\
<meta charset="UTF-8" />\
<title>文件已创建——qiwoo</title>\
</head>\
<body>\
<p>&nbsp;</p>\
<center><h3>请把新打开的 Finder/Explorer 中的module文件夹复制到项目根目录。</h3></center>\
<hr />\
<center>qiwoo</center>\
</body>\
</html>');
				response.end();
				if (os_module.platform() == 'win32') {
					child_process.exec('explorer ' + path.replace(/\//g, '\\'));
				} else {
					child_process.spawn('open',[path]);
				}

			}
		});

		function checkError(error) {
			if (!errorFlag && error) {
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
				errorFlag = true;
			}
			return errorFlag;
		}
	});


};
