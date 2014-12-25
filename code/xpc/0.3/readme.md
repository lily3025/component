## 使用说明

XPC 利用 postMessage（现代浏览器和IE8+）和 window.navigator（IE6,7）两种方案，提供了跨域通讯方案。

### 外链形式

```html
<script src="{{src}}"></script>
```

### 模块加载形式

```html
<script>
    require(['{{module}}'], function(XPC) {
        var xpc = new XPC();
        xpc.addTarget('IFRAME_OTHER');
        xpc.send('hello world!');
    });
</script>
```

## 文档参考

### 准备工作

在 *父页面* 和 *子页面* 分别引入 xpc.js（XPC v0.3是无依赖的组件）。

### 获得 XPC 实例

在 *父页面*，这样获得 XPC 实例：

```js
var xpc = new XPC();
```

在要通讯的 *子页面* 里，如果引用该页面的iframe 的 name 不是默认的 `XPC_IFRAME`，那么需要指定：

```js
var xpc = new XPC('IFRAME_OTHER');
```

大多数情况下，我们推荐使用使用默认的iframe name `XPC_IFRAME`, 这样子页面里也可以直接

```js
var xpc = new XPC();
```

需要使用非默认name的场景，一般是一个主页面引用多个iframe需要针对不同的iframe发送不同的消息，为了区分iframe就需要使用不同的名字如DEMO实例所演示

### 发送消息

发送消息。message 可以是基本类型数据，或者是一个纯对象：


```js
xpc.send(message); // 向所有注册的iframe发送消息
```

```js
xpc.targets['iframename'].send('hello world'); // 针对指定名字的iframe发送消息
```

### 接收消息

接收消息（XPC 组件只接收通过 XPC 发送的消息）：

```js
xpc.on('message', function(e, message){
	console.log(message);
})
```

### 基本Api使用如下

## 页面只有一个iframe跨域的情况

```js
// 主页面
var xpc = new XPC();
xpc.send('hello world');  // 向所有的target发送消息
xpc.on('message', function(e) {
   console.log('接收到子iframe发送来的跨域消息'); 
});


// 对应的iframe页面
var xpc_child = new XPC();
xpc_child.send('hello world'); // 发送给主页面消息
xpc_child.on('message', function(e) {
   console.log('接收到父页面发送的跨域消息'); 
});
```
## 页面有多个iframe需要跨域通讯的情况

```js
// 主页面
var xpc = new XPC();
xpc.addTargets(['iframename']); // 以数组的形式添加多个需要通讯的iframe
xpc.send('hello world');  // 向所有的target发送消息
// xpc.targets['iframename'].send('hello world'); // 也可以针对某一个target iframe发送消息
xpc.on('message', function(e) {
   console.log('接收到子iframe发送来的跨域消息'); 
});


// 对应的iframe页面
var xpc_child = new XPC('iframename');
xpc_child.send('hello world'); // 发送给主页面消息
xpc_child.on('message', function(e) {
   console.log('接收到父页面发送的跨域消息'); 
});
```

## 示例

- [双向通讯示例](examples:demo1.md)
