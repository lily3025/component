'use strict';

var fs_module = require('fs');
var path_module = require('path');

var baseDir = __dirname + '/../../code';

var showError = function(res) {
	res.writeHead(500, {'Content-type' : 'text/html'});
	res.write('\
<html>\
	<head><title>500 Internal Server Error</title></head>\
	<body>\
		<center><h1>500 Internal Server Error</h1></center>\
		<hr />\
		<center>qiwoo</center>\
	</body>\
</html>');
	res.end();
};

var getModules = function(dir, callback) {
	var total = 0, passed = 0, errorFlag = false, modules = {};
	var walk = function (dir) {
		if (errorFlag) {
			return;
		}
		fs_module.stat(dir, function(error, stats) {
			if (!checkError(error)) {
				if (stats.isDirectory()) {
					fs_module.readdir(dir, function(error, files) {
						if (!checkError(error)) {
							total += files.length;
							files.forEach(function(fn) {
								if (fn.indexOf('.') == 0) {
                                    pass();
                                } else {
                                    walk(dir + '/' + fn);
                                }
							});
							pass();
						}
					});
				} else if (stats.isFile()) {
					if (path_module.basename(dir) == 'package.json') {
						readPackage(dir, function(error, packageInfo) {
							if (!checkError(error)) {
								if (modules[packageInfo.category]) {
									modules[packageInfo.category].push(packageInfo);
								} else {
									modules[packageInfo.category] = [packageInfo];
								}
								pass();
							}
						});
					} else {
						pass();
					}
				} else {
					pass();
				}
			}
		});
	};
	var pass = function() {
		passed ++;
		if (passed == total && !errorFlag) {
            Object.keys(modules).forEach(function(module) {
                modules[module].sort(function(a,b) {
                    return a.path.toLocaleLowerCase() > b.path.toLocaleLowerCase() ? 1 : -1;
                });
            });
			callback(null, modules);
		}
	};
	var checkError = function(error) {
		if (!errorFlag && error) {
			callback(error);
			errorFlag = true;
		}
		return errorFlag;
	};
	walk(dir);
};

var readPackage = function(path, callback) {
	
	fs_module.readFile(path, function(error, data) {
		if (error) {
			callback(error);
		} else {
			try	{
				data = JSON.parse(data);
			} catch (ex) {
				console.log('数据格式出错', ex);
				console.log('出错文件路径', path);
			}
			
			callback(null, {
				data : data,
				path : path.replace('/package.json', ''),
				category : data && data.keywords ? data.keywords[0] : 'unknown'
			});
		}
	});
};

exports.process = function(request, response) {
	getModules(baseDir, function(error, modules) {
		if (error) {
			showError(response);
		} else {
			response.writeHead(200, {"Content-Type": 'text/html'});
			response.write(JSON.stringify(modules));
			response.end();
		}
	});
};


