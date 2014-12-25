## 使用说明

### 外链形式

```html
<script src="{{src}}"></script>

<script>
    key('a', function(){ alert('you pressed a!') });
</script>
```

### 模块加载形式

```html
<script>
    require(['{{module}}'], function(key) {
        key('a', function(){ alert('you pressed a!') });
    });
</script>
```

## 文档参考

### 定义快捷键

使用 `key` 方法定义快捷键：

```js
// define short of 'a'
key('a', function(){ alert('you pressed a!') });

// returning false stops the event and prevents default browser events
key('ctrl+r', function(){ alert('stopped reload!'); return false });

// multiple shortcuts that do the same thing
key('⌘+r, ctrl+r', function(){ });
```

定义快捷键时可以使用 `修饰键`，多个快捷键用 `,` 分隔。

可用的 `修饰键` 如下：

| 字符 | 说明 |
| --- | --- |
|`⇧`  `shift` | shift 键，上档转换 |
|`⌥`  `alt`  `option` | alt 键，功能替换（Mac 下一般叫 option 键） |
|`⌃`  `ctrl`  `control` | window 下的控制键 |
|`⌘`  `command` | Mac 下的控制键，类似于 windows 的 ctrl 键 |

注：`⇧` `⌥` `⌃` `⌘` 在 windows 下可能会显示为方块，故<span style="color:red">不推荐使用</span>。

需要特别说明的是，windows 下的很多 ctrl 组合快捷键，在 Mac 下都要用 command 键。例如复制（win: ctrl + c, mac: command + c）等。

另外，对于键盘上的其它键可以直接使用字符或者 keyCode，keymaster 还给很多按键定义了名称，这样我们不用再记它们的 keyCode 了：

`backspace`  `tab`  `clear`  `enter`  `return`  `esc`  `escape`  `space`  `left`  `up`  `right`  `down`  `del`  `delete`  `home`  `end`  `pageup`  `pagedown`  `f1 - f19`

例如我们要给页面绑定 `shift+delete` 快捷键，这样写就 OK 了：

```js
key('shift+delete', function(){ alert('你真的要删除吗？');return false; });
```

### 修饰键检测

任何时候，都可以使用 key 对象来检测某个修饰符是否按下。如以下代码可以检测用户点击页面时，是否同时按下了 shift 键：

```js
document.body.onclick = function() {
	alert(key.shift);
	//也可以用：
	alert(key['⇧']);
}

```

### 其它键检测

任何时候，都可以使用 key 对象的 isPressed 方法检测其它键是否按下，参数可以使用按键名称或 keyCode，如：

```js
if(key.isPressed("M")) alert('你按下了 M');
//也可以用 keyCode
if(key.isPressed(77)) alert('你按下了 M');
```

`key.getPressedKeyCodes()` 方法返回一个数组，包含那一时刻按下的所有键值（keyCode）。

### 作用域

定义快捷键时，也可以用第二个参数指定这个快捷键的作用域，如果不指定作用域是默认的 `all`，如：

```javascript
key('o, enter', 'issues', function(){ /* do something */ });
key('o, enter', 'files', function(){ /* do something else */ });

key.setScope('issues');
```

使用 setScope 可以设置当前使用哪个作用域，如果不设置，则使用默认的 `all` 作用域。

只有 `当前` 以及 `all` 作用域的快捷键可以被触发。例如上面的代码里，只有 scope 等于 `all` 和 `issues` 的快捷键可以触发。

### 过滤器

过滤器是用来限制在某些元素上触发快捷键时，不执行回调函数。keymaster 内置了一个 filter，如下：

```js
key.filter = function(event){
	var tagName = (event.target || event.srcElement).tagName;
	key.setScope(/^(INPUT|TEXTAREA|SELECT)$/.test(tagName) ? 'input' : 'other');
	return true;
}
```

也就是说，默认情况下，在 input/textarea/select 这些表单元素里触发的快捷键不会执行之前定义的回调。可以通过覆盖 key.filter 函数来改变策略。它接受 event 参数，需要返回 bool 值。