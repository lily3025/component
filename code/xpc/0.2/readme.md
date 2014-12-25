## 使用说明

XPC 利用 postMessage（现代浏览器）和 window.name（IE早期）两种方案，提供了跨域通讯方案。

### 外链形式

```html
<script src="{{src}}"></script>
```

### 模块加载形式

```html
<script>
    require(['{{module}}'], function(XPC) {
        var xpc = new XPC();
        xpc.send('hello world!');
    });
</script>
```

## 文档参考

### 准备工作

在 *父页面* 和 *子页面* 分别引入 xpc.js（XPC 依赖于 jQuery 和 JSON）。

### 获得 XPC 实例

在 *父页面*，这样获得 XPC 实例：

```js
var xpc = new XPC();
```

如果要通讯的 iframe 的 name 不是默认的 `XPC_IFRAME`，那么需要指定：

```js
var xpc = new XPC({'iframeName' : 'THIS_IS_A_XPC_IFRAME'});
```

在 *子页面*，通常这样获得 XPC 实例：

```js
var xpc = new XPC();
```

### 发送消息

发送消息。message 可以是基本类型数据，或者是一个纯对象：

```js
xpc.send(message);
```

### 接收消息

接收消息（XPC 组件只接收通过 XPC 发送的消息）：

```js
$(xpc).on('message', function(e, message){
	console.log(message);
})
```

## 示例

- [双向通讯示例](examples:demo1.md)
- [快速通讯示例](examples:demo2.md)
