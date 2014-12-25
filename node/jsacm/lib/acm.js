/*
	从couchdb数据库中读取测试用例（和题目对应，JSON格式）
	用测试用例作为输入，执行js代码
	判断是否正确，返回测试结果以及执行的分数
	{
		result: Accepted|Compile Error|Runtime Error|Timeout|Wrong Answer|Permission Denied,
		cases: case数,
		exec_time: 代码平均执行时间（总时间/case数）,
		start_time: 代码提交时间,
		username: 用户名,
	}
*/

module.exports = (function(){

'use strict';

var conf = require('./conf').couch;

var casesDB = require('then-couchdb').createClient(
	'http://' + conf.user + ":" + conf.passwd + '@' + conf.host 
	+ ":" + conf.port + '/cases' 
);

var when = require('when');

/*casesDB.get('1001').then(function(data){
	console.log(data);
});*/

function compile(code){
	
	var task = new Function("var console = {log:function(){}}; return " + code);

	var ret = null;
	try{
	 	ret = task();
	}catch(ex){
		ret = ex;
	}
	return ret;
}

function runCases(func, cases, checker){
	var ret = {
		result: 'accepted',
		cases: cases.length,
		exec_time: 0,
		start_time: Date.now(),
	};

	cases.forEach(function(_case){
		var args = _case.args;
		var result = func.apply(this, args);
		try{
			//console.log(_case.result, result);
			if(!checker(_case.result, result)){
				ret.result = 'wrong answer';
			}
		}catch(ex){
			ret.result = 'wrong answer';
		}
	});

	if(cases.length > 0){
		ret.exec_time = Math.round((Date.now() - ret.start_time)/cases.length);
	}

	return ret;
}

function run(id, code){
	var res = {},
		func = compile(code),
		deferred = when.defer();


	if(func == null || func instanceof Error){
		res.result = 'compile error';
		deferred.resolve(res);
		return deferred.promise;
	}

	casesDB.get(id).then(function(data){
		var checker = data.checker;
		if(checker){
			checker = (new Function("return " + checker))();
		}else{
			checker = function(_case, result){
				return _case === result;
			}
		}
		res = runCases(func, data.cases, checker);
		deferred.resolve(res);
	}).otherwise(function(err){
		err.result = 'runtime error';
		deferred.resolve(err);
	});

	return deferred.promise;
}

if(process.argv[2] == 'cmd'){
	run('1006', "function solve(e){function t(e,t){var n=[],r=e;do n.push(r);while(r=t[r]);return n}var n={},r=0;for(var i in e)n[i]=null;for(var i in e){r++;var s=e[i];for(var o=0;o<s.length;o++){var u=s[o];if(!n[i])n[i]=u;else if(!n[u]){var a=n[i];n[i]=u,n[u]=a}else{var f=t(i,n),l=t(u,n);if(l.indexOf(i)>=0)return[];if(f.indexOf(u)>=0)continue;var c=!1;for(var h=1;h<l.length;h++){var p=f.indexOf(l[h]);if(p>=0){n[f[p-1]]=l[h-1],c=!0;break}}c||(n[f[f.length-1]]=l[h-1])}}}var d=[],v=0;while(d.length<r&&v++<1e3)for(var i in n)if(n[i]==null||d.indexOf(n[i])>=0)d.push(i),delete n[i];return d};")
		.then(function(res){
			console.log(res);
		});
}

return {
	run: run
};

})();
