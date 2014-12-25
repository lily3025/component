ZeroClipboard 依赖 Flash 实现跨浏览器复制内容到剪贴板，“Zero” 意义为这个类库没有界面，界面需要由你来建立。

## Tips

官方的 `{{path}}/ZeroClipboard.js` 在 IE7、IE8 下有些问题，如下

> ie7、8对红色的按钮点击能正常拷贝，但右边的蓝色按钮不行。因为蓝色按钮使用ZeroClipboard绑定的是out-box，但鼠标移动到它的内部元素in-box时，在ie7、8下却触发了onmouseover事件。悲剧发生了，zeroclipboard在mouseover事件时，会把in-box设置全局的currentTarget，认为它就是我们绑定的按钮，以后所有的操作对它进行。

所以在这里引用的是 @刘朋科 修复版 `{{src}}` 具体修改在 60 至 78 行，修复版解决了 IE7，IE8 的问题，如果要兼容 IE6 请看 @刘朋科 封装的 [Copy2Clipboard](http://360.75team.com/~liupengke/zero/index-update.html)。

注意：封装的 `Copy2Clipboard` 只是判断在 IE 下调用 clipboardData 复制，非IE 环境则用 ZeroClipboard 来复制，所以在使用 Copy2Clipboard 时候同样需要引用 ZeroClipboard 的修复版。

## 基础使用

### *new ZeroClipboard([element], [options])*

实例化对象。`element` 参数可选，取值为 DOM 元素，实例化后，点击这个对象默认将这个对象的 `data-clipboard-text` 属性值复制到剪贴板。

`options` 参数可选，取值选项对象，属性 `moviePath` 取值为 swf 文件路径，可以是相对于页面的路径和绝对路径

**注意：需要服务器环境下使用**

### 外链形式

```html
// 引入
<script src="{{src}}"></script>

// 使用
<button id="copy-button" data-clipboard-text="这里定义要复制的文本！" title="点我">复制到剪切板</button>

<script>
var clip = new ZeroClipboard(document.getElementById("copy-button"), {
    moviePath: "{{path}}/ZeroClipboard.swf"
});
</script>
```

### 模块加载形式
```html
<button id="copy-button" data-clipboard-text="这里定义要复制的文本！" title="点我">复制到剪切板</button>

<script>
require(['{{module}}'], function(ZeroClipboard) {
	var clip = new ZeroClipboard(document.getElementById("copy-button"), {
        moviePath: "{{path}}/ZeroClipboard.swf"
    });
});
</script>
```

> 在下载使用模块加载时候程序会默认在 require 里加上模块名的参数，使之成为一个具名模块；所以在使用的时候会在具名模块的模块名中的路径来查找；
> 如果出现模块无法使用的情况，删掉模块名参数即可；
> 添加模块名是方便燕尾服在合并和 inline 的时候不会出现错误，能找到相应的模块。


### 事件回调函数

```javascript
clip.on("complete",function(client,args){
    /* args 包含以下属性
       flashVersion：当前 Flash 的版本号
       altKey：是否按住 Alt 键
       ctrlKey：是否按住 Ctrl 键
       shiftKey：是否按住 Shift 键
       text：复制的内容
    */
});
```

### [详细 API 文档查看](docs:zeroclipboard.md)
