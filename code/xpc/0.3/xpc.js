//     XPC.js 1.1.1
//     @description XPCJS, a common xdomain postmessage solution 
//     @author liangchao@360.cn
//     @license XPC may be freely distributed under the MIT license.


(function(root, factory) {
    if(typeof exports === 'object') {
        module.exports = factory();
    }
    else if(typeof define === 'function' && define.amd) {
        define([], factory);
    }
    else {
        root['XPC'] = factory();
    }
}(this, function() {
		var mix = function(des, src, map) {
			map = map || function(d, s, i) {
			   
				if (!(des[i] || (i in des))) {
					return s;
				}
				return d;
			}
			if (map === true) { //override
				map = function(d, s) {
					return s;
				}
			}

			for (var i in src) {
				des[i] = map(des[i], src[i], i, des, src);
				if (des[i] === undefined) delete des[i]; 
			}
			return des;
		};

		// 自定义事件
		var createEvents = function(obj) {
			var events = {};

			mix(obj, {
				on: function(evtType, handler) {
					events[evtType] = events[evtType] || [];
					events[evtType].push(handler);
				},
				fire: function(evtType, args) {
					args = args || {};
					mix(args, {
						type: evtType,
						target: obj,
						preventDefault: function() {
							args.returnValue = false;
						}
					});
					var handlers = events[evtType] || [];
					for (var i = 0; i < handlers.length; i++) {
						handlers[i](args);
					}
					return args.returnValue !== false
				}
			});

			return obj;
		};

		// 事件辅助函数
		var addEvent = function(obj, type, fn) {
			if (obj.addEventListener) obj.addEventListener(type, fn, false);
			else if (obj.attachEvent) {
				obj["e" + type + fn] = fn;
				obj.attachEvent("on" + type, function() {
					obj["e" + type + fn].call(obj, window.event);
				});
			}
		};

		// 消息前缀，建议使用自己的项目名，避免多项目之间的冲突
		var prefix = "[PROJECT_NAME]",
			supportPostMessage = 'postMessage' in window,
			isParent = parent == window;    

		// Message类，消息对象
		function Message(target, name) {
			this.name = name || 'XPC_IFRAME';
			this.target = target;
		   
		}

		if (supportPostMessage) {
			Message.prototype.send = function(msg) {
				this.target.postMessage(prefix + msg, '*');
			};
		} else {
			Message.prototype.send = function(msg) {
				var targetFunc = window.navigator[prefix + this.name];
				if (typeof targetFunc == 'function') {
					targetFunc(prefix + msg, window);
				} else {
					throw new Error('target callback function is not defined');
				}
			};
		}

		// 信使主类
		function XPC(name, options) {
			this.targets = {};
			this.name = name || 'MAIN_DOC';
			this.listenFunc = [];
			createEvents(this);
			var o = mix({ defaultMain: true }, options || {}, true);
			if (!isParent && o.defaultMain) {
				this.addTarget('MAIN_DOC');
			}
			this.initListen();
		}

		// 添加一个消息对象
		XPC.prototype.addTarget = function(targetName) {

			if ({}.toString.call(targetName) === '[object Array]') {
				for (var i = 0, l = targetName.length; i < l; i++) {
					this.addTarget(targetName[i]);
				}
			} else {
				var targetObj = new Message(isParent ? window.frames[targetName] : parent, targetName);
				this.targets[targetName] = targetObj;	        	
			}
		};

		// 初始化消息监听
		XPC.prototype.initListen = function() {
			var self = this;
			var _callback = function(msg) {
				if (typeof msg == 'object' && msg.data) {
					msg = msg.data;
				}
				if (!(typeof msg == 'string' && msg.indexOf(prefix) == 0)){ return; }
				
				msg = msg.slice(prefix.length);
				self.fire('message', { 'msg' : msg, 'ts': (+new Date).toString(36) });
			};

			if (supportPostMessage) {
				addEvent(window, 'message', _callback);
			} else {
				window.navigator[prefix + this.name] = _callback;
			}
		};

		// 广播消息
		XPC.prototype.send = function(msg) {
			var targets = this.targets,
				target;
			for (target in targets) {
				if (targets.hasOwnProperty(target)) {
					targets[target].send(msg);
				}
			}
		};

		return XPC;
}));
