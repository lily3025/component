var acm = require('./acm');

var conf = {
	user: '75team',
	passwd: '75team',
	host: '127.0.0.1',
	port: 5984
};

var contestDB = require('then-couchdb').createClient(
	'http://' + conf.user + ":" + conf.passwd + '@' + conf.host 
	+ ":" + conf.port + '/contests' 
);


//console.log(typeof process.argv[2], process.argv[2]);
var problem = JSON.parse(decodeURIComponent(process.argv[2]));

acm.run(problem.id, problem.code).then(function(res){
	res.memery = process.memoryUsage();
	var result = JSON.stringify(res);
	if(problem.cb){
		result = problem.cb + "(" + result + ");";
	}


	var contestId = (problem.id+'').slice(0, 3);
	contestDB.get(contestId).then(function(data){
		//console.log(data);
		var solvelog = data.solvelogs[problem.id];
		if(res.result == "accepted"){
			solvelog.accepted++;
		}else{
			solvelog.error++;
		}
		solvelog.log.push(res);
		solvelog.log = solvelog.log.slice(0, 20);
		//console.log(solvelog);
		contestDB.save(data);
	});

	console.log(result);
}).otherwise(function(err){
	console.log(err);
});
