/*
 * XPC - 跨域解决方案
 * author : ququ，主要代码来源于欢欢（huanghuan@360.cn）同学的xdomain。致谢!
 * update : 2013.04.16
 * 
 * v0.2 (2013.04.16) 增对IE6、7下快速发送消息做了延时，防止丢消息 
 * v0.1 (2012.06.19) 第一个版本，利用window.name(IE6、7)和postMessage跨域传输数据
*/

(function(define) {
	define(function () {
		var usePM = (typeof window.postMessage !== 'undefined');

		var parse = JSON.parse,
			stringify = JSON.stringify;

		function XPC(options) {
			var defaultOpts = {
				isParent : parent == window,
				iframeName : 'XPC_IFRAME'
			};
			this.options = $.extend(defaultOpts, options || {});
			this._initialize();
		};

		$.extend(XPC.prototype, {
			_initialize : function() {
				var instance = this;

				function callback(msg) {
					if(msg.indexOf('xpc:') == 0) {
						msg = msg.replace('xpc:', '');
						try {
							var msgData = parse(msg);
							$(instance).trigger('message', msgData.data);
						} catch(e) {}
					}
				};

				if(usePM){
					$(window).on('message', function(e) {
						callback(e.originalEvent.data);
					});
				}else{
					var lastName = window.name;
					setInterval(function(){
						if(window.name != lastName && window.name != ''){
							lastName = window.name;
							var msgList = [];
							try {
								msgList = parse(lastName);
							} catch(e) {}

							$.each(msgList, function(_, msg) {
								callback(msg);
							});
						}
					}, 20);
				}
			},

			_postMessage : function(data) {
				this.win.postMessage(data, '*');
			},

			_postMessageForIE : function(data) {
				if(!this.msgList) {
					this.msgList = [];
				}

				this.msgList.push(data);

				if(!this.timer) {
					var instance = this;
					instance.timer = setInterval(function() {
						clearInterval(instance.timer);
						instance.win.name = stringify(instance.msgList);
						instance.msgList = [];
						instance.timer = null;
					}, 50);
				}
			},

			send : function(data) {
				var opts = this.options;

				this.win = opts.win || (opts.isParent ? window.frames[opts.iframeName] : parent);

				if(!this.win) throw new Error('XPC', "can not find window!");

				var newData = {
					data : data,
					ts : (+(new Date)).toString(36)
				};

				newData = stringify(newData);

				newData = 'xpc:' + newData;

				if(usePM){
					this._postMessage(newData);
				} else {
					this._postMessageForIE(newData);
				}
			}
		}, true);

		return XPC;
	});
})(
    typeof define === 'function' && define.amd ? define : function (name, requires, factory) { 
        if(typeof name === 'function') {
            factory = name;
        } else if(typeof requires === 'function') {
            factory = requires;
        }
        
		if(typeof module != 'undefined'){
			module.exports = factory(require); 
		}else if(typeof window != 'undefined'){
			window.XPC = factory();
		}
	}
);