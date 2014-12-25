define(function() {
    var queryUrl=function(e,t){e=e.replace(/^[^?=]*\?/ig,"").split("#")[0];var n={};return e.replace(/(^|&)([^&=]+)=([^&]*)/g,function(e,t,r,i){try{r=decodeURIComponent(r)}catch(s){}try{i=decodeURIComponent(i)}catch(s){}r in n?n[r]instanceof Array?n[r].push(i):n[r]=[n[r],i]:n[r]=/\[\]$/.test(r)?[i]:i}),t?n[t]:n};

    var urlQuery = queryUrl(location.search),
        tests   = (urlQuery.file || '').split(','),
        path    = urlQuery.path,
        name    = urlQuery.name,
        output  = urlQuery.output,
        specs   = [];

    var paths = {};
    
    paths[name] = 'module/' + path + '/' + output.replace(/\.js$/i, '');
    paths['{{module}}'] = 'module/' + path + '/' + output.replace(/\.js$/i, '');

    require.config({ 
            paths : paths,
            urlArgs : + new Date
        });

    for(var i = 0; i < tests.length; i++) {
        specs.push('module/' + path + '/tests/' +tests[i]);
    }

    if(Function.prototype.bind) {
        var originalReporter = mocha._reporter;
        
        var blanketReporter = function(runner) {
            runner.on('start', function() {
                blanket.setupCoverage();
            });

            runner.on('end', function() {
                blanket.onTestsDone();
            });

            runner.on('suite', function() {
                blanket.onModuleStart();
            });

            runner.on('test', function() {
                blanket.onTestStart();
            });

            runner.on('test end', function(test) {
                blanket.onTestDone(test.parent.tests.length, test.state === 'passed');
            });

            //I dont know why these became global leaks
            //I know, because we eval the reporter.
            runner.globals(['stats', 'failures', 'runner']);

            originalReporter(runner);
        };

        mocha.reporter(blanketReporter);
    }

    mocha.setup('bdd');

    require(specs, function() {
        mocha.run();
    });
});