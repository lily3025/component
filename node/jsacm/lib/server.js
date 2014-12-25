var conf = require('./conf');

var http = require('http'), querystring = require('querystring');

http.createServer(function (req, res) {

	var path = req.url;

	if(req.headers.origin && (req.headers.origin.indexOf('http://127.0.0.1') === 0
		|| req.headers.origin.indexOf('http://localhost') === 0)){
		conf.ACAO = '*';
	}

	if(/^\/submit/.test(path)){
		//提交某问题的结果 - POST http://water.weizoo.com:9527/submit

		var postData = '';

		req.setEncoding('utf8');

		req.addListener('data', function(postDataChunk) {
			postData += postDataChunk;
		});

		req.addListener('end', function() {

			var param = querystring.parse(postData);

			//console.log(param);
			param = "\""+encodeURIComponent(JSON.stringify(param))+"\"";
			var child_process = require('child_process');

			var p = child_process.exec(['node', 'jsacm/lib/acm_process', param].join(' '), 
					function(err, stdout, stderr) {
						clearTimeout(timer);

						res.writeHead(200,{
							"Access-Control-Allow-Origin": conf.ACAO,
							"Access-Control-Allow-Methods": "GET,POST,OPTIONS",
							"Content-Type":"text/x-javascript"
						});

						if(stderr){
							var ret = {result: 'compile error'};
							res.write(JSON.stringify(ret));
						}else{
							res.write(stdout);
						}

						res.end();
					});
			//console.log(p);	

			var timer = setTimeout(function(){
					res.writeHead(200,{
						"Access-Control-Allow-Origin": conf.ACAO,
						"Access-Control-Allow-Methods": "GET,POST,OPTIONS",
						"Content-Type":"application/x-json"
					});		
					
					res.write(JSON.stringify({result: 'time limited'}));

					res.end();	

					p.kill();
			}, 10000); 
		});
	
	}else if(/^\/contest\/(\d+)/.test(path)){
		//http://water.weizoo.com:9527/contest/id - 获得指定id的比赛
		var id = RegExp.$1, couch_conf = conf.couch;

		var db = require('then-couchdb').createClient(
			'http://' + couch_conf.user + ":" + couch_conf.passwd + '@' 
			+ couch_conf.host 
			+ ":" + couch_conf.port + '/contests' 
		);

		/*console.log('http://' + couch_conf.user + ":" + couch_conf.passwd + '@' 
			+ couch_conf.host 
			+ ":" + couch_conf.port + '/contests');*/

		db.get(id).then(function(data){

			res.writeHead(200,{
				"Access-Control-Allow-Origin": conf.ACAO,
				"Access-Control-Allow-Methods": "GET,POST,OPTIONS",
				"Content-Type":"application/x-json"
			});
			res.write(JSON.stringify(data));
			res.end();
		}).otherwise(function(err){
			console.log(err);
			res.writeHead(500);
			res.write(JSON.stringify(err));
			res.end();
		});	

	}else if(/^\/problem\/(\d+)/.test(path)){
		//获得指定问题的title和描述
		var id = RegExp.$1, couch_conf = conf.couch;

		var db = require('then-couchdb').createClient(
			'http://' + couch_conf.user + ":" + couch_conf.passwd + '@' 
			+ couch_conf.host 
			+ ":" + couch_conf.port + '/problems' 
		);

		db.get(id).then(function(data){

			res.writeHead(200,{
				"Access-Control-Allow-Origin": conf.ACAO,
				"Access-Control-Allow-Methods": "GET,POST,OPTIONS",
				"Content-Type":"application/x-json"
			});
			res.write(JSON.stringify(data));
			res.end();
		}).otherwise(function(err){
			console.log(err);
			res.writeHead(500);
			res.write(JSON.stringify(err));
			res.end();
		});	
		
	}else if(/^\/solvelog\/(\d+)/.test(path)){
		//http://water.weizoo.com:9527/solvelog/id - 获得指定问题的解题记录

	}else if(/^\/wiki\/(.+)/.test(path)){
		var id = RegExp.$1, couch_conf = conf.couch;

		var db = require('then-couchdb').createClient(
			'http://' + couch_conf.user + ":" + couch_conf.passwd + '@' 
			+ couch_conf.host 
			+ ":" + couch_conf.port + '/wiki' 
		);		

		id = decodeURIComponent(id);

		db.get(id).then(function(data){
			res.writeHead(200,{
				"Access-Control-Allow-Origin": conf.ACAO,
				"Access-Control-Allow-Methods": "GET,POST,OPTIONS",
				"Content-Type":"application/x-json"
			});
			res.write(JSON.stringify(data));
			res.end();
		}).otherwise(function(err){
			console.log(err);
			res.writeHead(500);
			res.write(JSON.stringify(err));
			res.end();
		});	
				
	}else{
		res.writeHead(404);
		res.end();		
	}

}).listen(conf.port);

console.log('start listening at ' + conf.port);
