## 使用说明

### 简介

underscore，传说中 jQuery 的黄金搭档，提供了 `Collection`, `Array`, `Function`, `Object` 相关的工具方法，弥补了 jQuery 工具函数不足的缺点。 

### 外链形式

```html
<script src="{{src}}"></script>

<script>
	_.each(['Tom', 'Mike', 'Jed'], function(friend) {
		alert('Hello ' + friend + '!');
	});
</script>
```

### 模块加载形式
underscore在1.3.0版之后移除了对AMD规范的支持，不过在几天前又被添加到github的源码中，官方尚未发布新版，qiwoo库的underscore中已经添加了该段代码。
但是，和1.3.0之前版本略有区别：**当前版本即便是探测到环境支持amd加载，仍然会把`_`暴露到全局对象(window)**，1.3.0前则不会。

```html
<script>

	// 因为会把_暴露到全局，所以下面两种方案都是可行的
	require(['{{module}}'], function(_) {
		_.each(['Tom', 'Mike', 'Jed'], function(friend) {
			alert('Hello ' + friend + '!');
		});
	});

	require(['{{module}}'], function(_tmp) {
		_.each(['Tom', 'Mike', 'Jed'], function(friend) {
			alert('Hello ' + friend + '!');
		});
	});
</script>
```

## 使用实例

### 基本

`underscore`有 *函数式* 和 *面向对象* 两种使用风格，可以根据自己喜好选择，参考如下示例：

```js
_.map({one: 1, two: 2, three: 3}, function(num, key) {
	return num * 3;
});
_({one: 1, two: 2, three: 3}).map(function(num, key) {
	return num * 3;
});
// => [3, 6, 9]

_.isArray([]);
_([]).isArray();
// => true

_.values({one: 1, two: 2, three: 3});
_({one: 1, two: 2, three: 3}).values();
// => [1, 2, 3]
```

### 链式调用

对一个对象使用`chain`方法, 会把这个对象封装并 让以后每次方法的调用结束后都返回这个封装的对象, 直到调用了`value`函数来为止。
```js
var stooges = [{name: 'Tom', age: 26}, {name: 'Mike', age: 25}, {name: 'Jed', age: 24}];
var youngest = _.chain(stooges)
  .sortBy(function(stooge){ return stooge.age; })
  .map(function(stooge){ return stooge.name + ' is ' + stooge.age; })
  .first()
  .value();
// => "Jed is 24"
```

### **template** 函数参考

[点我查看](docs:template.md)

## 方法索引

<style>
thead {display: none;}
</style>

### *Collections*

|||||
| ---- | ---- | ---- | ---- |
| [each](http://underscorejs.org/#each) | [map](http://underscorejs.org/#map) |[reduce](http://underscorejs.org/#reduce) | [reduceRight](http://underscorejs.org/#reduceRight) 
| [find](http://underscorejs.org/#find) | [filter](http://underscorejs.org/#filter)|[where](http://underscorejs.org/#where) | [findWhere](http://underscorejs.org/#findWhere) 
| [reject](http://underscorejs.org/#reject) | [every](http://underscorejs.org/#every) | [some](http://underscorejs.org/#some) | [contains](http://underscorejs.org/#contains) 
| [invoke](http://underscorejs.org/#invoke) | [pluck](http://underscorejs.org/#pluck) | [max](http://underscorejs.org/#max) | [min](http://underscorejs.org/#min) 
| [sortBy](http://underscorejs.org/#sortBy) | [groupBy](http://underscorejs.org/#groupBy) | [indexBy](http://underscorejs.org/#indexBy) | [countBy](http://underscorejs.org/#countBy) 
| [shuffle](http://underscorejs.org/#shuffle) | [sample](http://underscorejs.org/#sample) | [toArray](http://underscorejs.org/#toArray) | [size](http://underscorejs.org/#size)

### *Arrays*

|||||
| ---- | ---- | ---- | ---- |
| [first](http://underscorejs.org/#first) | [initial](http://underscorejs.org/#initial) | [last](http://underscorejs.org/#last) | [rest](http://underscorejs.org/#rest) 
| [compact](http://underscorejs.org/#compact) | [flatten](http://underscorejs.org/#flatten) | [without](http://underscorejs.org/#without) | [union](http://underscorejs.org/#union) 
| [intersection](http://underscorejs.org/#intersection) | [difference](http://underscorejs.org/#difference) | [uniq](http://underscorejs.org/#uniq) | [zip](http://underscorejs.org/#zip) 
| [object](http://underscorejs.org/#object) | [indexOf](http://underscorejs.org/#indexOf) | [lastIndexOf](http://underscorejs.org/#lastIndexOf) | [sortedIndex](http://underscorejs.org/#sortedIndex) 
| [range](http://underscorejs.org/#range) | | | | |

### *Functions*

|||||
| ---- | ---- | ---- | ---- |
| [bind](http://underscorejs.org/#bind) | [bindAll](http://underscorejs.org/#bindAll) | [partial](http://underscorejs.org/#partial) | [memoize](http://underscorejs.org/#memoize) 
| [delay](http://underscorejs.org/#delay) | [defer](http://underscorejs.org/#defer) | [throttle](http://underscorejs.org/#throttle) | [debounce](http://underscorejs.org/#debounce) 
| [once](http://underscorejs.org/#once) | [after](http://underscorejs.org/#after) | [wrap](http://underscorejs.org/#wrap) | [compose](http://underscorejs.org/#compose)

### *Objects*

|||||
| ---- | ---- | ---- | ---- |
| [keys](http://underscorejs.org/#keys) | [values](http://underscorejs.org/#values) | [pairs](http://underscorejs.org/#pairs) | [invert](http://underscorejs.org/#invert) 
| [functions](http://underscorejs.org/#object-functions) | [extend](http://underscorejs.org/#extend) | [pick](http://underscorejs.org/#pick) | [omit](http://underscorejs.org/#omit) 
| [defaults](http://underscorejs.org/#defaults) | [clone](http://underscorejs.org/#clone) | [tap](http://underscorejs.org/#tap) | [has](http://underscorejs.org/#has) 
| [isEqual](http://underscorejs.org/#isEqual) | [isEmpty](http://underscorejs.org/#isEmpty) | [isElement](http://underscorejs.org/#isElement) | [isArray](http://underscorejs.org/#isArray) 
| [isObject](http://underscorejs.org/#isObject) | [isArguments](http://underscorejs.org/#isArguments) | [isFunction](http://underscorejs.org/#isFunction) | [isString](http://underscorejs.org/#isString) 
| [isNumber](http://underscorejs.org/#isNumber) | [isFinite](http://underscorejs.org/#isFinite) | [isBoolean](http://underscorejs.org/#isBoolean) | [isDate](http://underscorejs.org/#isDate) 
| [isRegExp](http://underscorejs.org/#isRegExp) | [isNaN](http://underscorejs.org/#isNaN) | [isNull](http://underscorejs.org/#isNull) | [isUndefined](http://underscorejs.org/#isUndefined)

### *Utility*

|||||
| ---- | ---- | ---- | ---- |
| [noConflict](http://underscorejs.org/#noConflict) | [identity](http://underscorejs.org/#identity) | [times](http://underscorejs.org/#times) | [random](http://underscorejs.org/#random) 
| [mixin](http://underscorejs.org/#mixin) | [uniqueId](http://underscorejs.org/#uniqueId) | [escape](http://underscorejs.org/#escape) | [unescape](http://underscorejs.org/#unescape) 
| [result](http://underscorejs.org/#result) | [template](http://underscorejs.org/#template) | [chain](http://underscorejs.org/#chain) | [value](http://underscorejs.org/#value)

## 文档参考

1. [underscore 官方文档](http://underscorejs.org/)

