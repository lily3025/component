var tests = [
	'add_subtract',
	'create',
	'days_in_month',
	'diff',
	'duration',
	'format',
	'getters_setters',
	'invalid',
	'is_after',
	'is_before',
	'is_moment',
	'is_same',
	'is_valid',
	/*'lang',*/
	'leapyear',
	'listers',
	'min_max',
	'mutable',
	'normalizeUnits',
	'parsing_flags',
	'preparse_postformat',
	'sod_eod',
	'string_prototype',
	'utc',
	'weekday',
	'weeks',
	'week_year',
	'zones'
];

var specs = [];
for (var i = 0, l = tests.length; i < l; i++) {
	specs.push('./moment/'+tests[i]+'.js');
};

define(specs, function() {

	var getTestStr = function(testFun){
		var canGetFunStr = testFun.caller.name == "testCaller";
		var handleStr;
		if (canGetFunStr) {
			handleStr = this.testStrList[this.testStrIndex++];
		} else {
			handleStr = testFun.caller.toString();
		}

		return handleStr || testFun.toString();
	};
	var testHook = {
		'expect': function(){this.testStrIndex++},
		'done': function(){this.testStrIndex++},
		'ok': function(value, message){
			var handle = function(){
				expect(value).to.be.ok();
			};
			var handleStr = getTestStr.call(this, arguments.callee.caller);
			handle.toString = function(){
				return handleStr;
			};

			it(message, handle);
		},
		'equal': function(actual, expected, message){
			var handle = function(){
				expect(actual).to.be(expected);
			};

			var handleStr = getTestStr.call(this, arguments.callee.caller);
			handle.toString = function(){
				return handleStr;
			};

			it(message, handle);
		},
		'equals': function(actual, expected, message){
			var handle = function(){
				expect(actual).to.be(expected);
			};

			var handleStr = getTestStr.call(this, arguments.callee.caller);
			handle.toString = function(){
				return handleStr;
			};

			it(message, handle);
		},
		'deepEqual': function(actual, expected, message){
			var handle = function(){
				expect(actual).to.eql(expected);
			};
			var handleStr = getTestStr.call(this, arguments.callee.caller);
			handle.toString = function(){
				return handleStr;
			};

			it(message, handle);
		},
		'notEqual': function(actual, expected, message){
			var handle = function(){
				expect(actual).not.to.be(expected);
			};
			var handleStr = getTestStr.call(this, arguments.callee.caller);
			handle.toString = function(){
				return handleStr;
			};

			it(message, handle);
		}
	};

	function creatDescribe(describeName, testList){
		var handle = function(testList){
			return function(){
				var setUp = null;
				var tearDown = null;
				function testCaller(){
					var funStr=testList[key].toString();
					var testStrList = funStr.match(/test\.\w+\([\w\W]*?\)\;/g);
					testHook.testStrList = testStrList;
					testHook.testStrIndex = 0;

					testList[key](testHook);
				}

				if ('setUp' in testList) {
					setUp = testList['setUp'];
					delete testList['setUp'];
				}
				if ('tearDown' in testList) {
					tearDown = testList['tearDown'];
					delete testList['tearDown'];
				}

				for(var key in testList){
					setUp && setUp(function(){});

					describe(key, testCaller);

					tearDown && tearDown(function(){});
				}
			};
		}(testList);

		describe(describeName, handle);

	}

	$(arguments).each(function(index,exports){
		for(var key in exports){
			creatDescribe(key, exports[key]);
		}
	});

});
