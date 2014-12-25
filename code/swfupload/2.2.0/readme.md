## 使用说明

SWFupload 是一个多年无人维护的项目。官方提供的 swf 文件存在 XSS 漏洞，这里的版本已修复这个问题。

详见：[第三方flash上传组件XSS及相应修复](http://add.corp.qihoo.net/pages/viewpage.action?pageId=3607062)

### 外链形式

```html
<script src="{{src}}"></script>

<div id="swfu-placeholder">
	<!--占位符，执行下面的 js 后，这里将被替换成 swfupload 上传按钮-->
</div>
<div>
	<input type="button" id="swfu-upload" value="上传" />
</div>

<script>
var swfuOption = {
		//接收上传文件的 url
	    upload_url : "http://upload-url",
	    //swfupload.swf 地址	
	    flash_url : "{{path}}/swfupload2.2.fix.swf",
	    //上传按钮占位符的id
	    button_placeholder_id : "swfu-placeholder",
	    //用户可以选择的文件大小，有效的单位有B、KB、MB、GB，若无单位默认为KB
	    file_size_limit : "20480",
	    //按钮宽度
	    button_width: 200,
	    //按钮高度
	    button_height: 20,
	    //按钮文字
	    button_text: "点我选择文件"
	};

var swfu = new SWFUpload(swfuOption);

document.getElementById('swfu-upload').addEventListener('click', function(e) {
		swfu.startUpload();
	}, false);
</script>
```

### 模块加载形式

SWFUpload 不是标准的 AMD 模块。不过仍然可以这样引入：

```html
<script>
require(['{{module}}'], function(_) {
	var swfu = new SWFUpload(swfuOption);
	//...
});
</script>
```

## 文档参考

[请查看这里的 Demo 源码](http://demo.swfupload.org/v220/index.htm)
