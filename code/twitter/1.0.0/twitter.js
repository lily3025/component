/**
 *
 	require(['twitter'], function(Twitter){
		var sender = new Twitter(), receiver = new Twitter();
		sender.tweet('hello world', [data1, data2, data3]);
		receiver.receive('hello world',function(sender, data){
			console.log(data); 
		});
 	});
 */

(function(define, global) { 'use strict';
define(function(require){

	var isNode = !!(require && require.extensions && '.node' in require.extensions);
	var when, EventEmitter, nodeRequire = require;

	//add wrap begin -->
	if(isNode){
		when = nodeRequire("when");
		EventEmitter = nodeRequire("events").EventEmitter;
	}else if(jQuery){
		when = {
			defer: function(){
				var deferred = jQuery.Deferred();
				deferred.promise = deferred.promise();
				return deferred;
			}
		};
		EventEmitter = function(){};
		EventEmitter.prototype.on = function(type, fn){
			var target = jQuery(this), type = encodeURIComponent(type); //消除空格
			return target.on(type, function(){
				var args = [].slice.call(arguments, 1);
				return fn.apply(target, args);
			});
		};
		EventEmitter.prototype.emit = function(){
			var target = jQuery(this);
			var type = encodeURIComponent(arguments[0]), 
				args = [].slice.call(arguments, 1);
			return target.trigger.call(target, type, args);
		};
	}else{
		throw new Error('Only support node.js or jQuery...');
	}
	//<-- add wrap end

	function Twitter(target){
		this.target = target || {};
	}

	Twitter.prototype.emitter = new EventEmitter();

	Twitter.prototype.tweet = function(message, data){
		var target = this.target, conf = this.conf, emitter = this.emitter;

		setTimeout(function(){
			emitter.emit(message, target, data);
			emitter.emit('*', target, data);				
		});
	}

	Twitter.prototype.receive = function(message, fn){
		var emitter = this.emitter;
		emitter.on(message, fn);
	}

	return Twitter;
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
			window.Twitter = factory();
		}
	},
	this
);