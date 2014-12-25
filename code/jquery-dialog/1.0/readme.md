## 使用说明

本模块为 jquery浮层组件。

 * 该组件包含三部分：弹出层、拖拽层、遮罩层。
 * 支持深度定制，默认状态下IE系列只提供红色无阴影弹出层，其他浏览器提供带指示标志的有阴影的弹出层


### 外链形式

```html
<script src="{{src}}"></script>

<script>
    $.Dialog.open({
		title: "浮层标题",
		content: "浮层正文",
		target: this,
		draggable: !1,
		hasShade: !1,
		hasReferBtn : !1,
		autoCenter : true,
		css: {
			'width' : '500px',
			'border' : "1px #C8C8C8 solid",
			'padding' : "0px",
			'box-shadow' : '#ccc 1px 1px 1px'
		}
	}, function(d) {
		//todo 
	});
</script>
```

### 模块加载形式

```html
<script>
    require(['{{module}}'], function(dialog) {
		dialog.open({
			title: "浮层标题",
			content: "浮层正文",
			target: this,
			draggable: !1,
			hasShade: !1,
			hasReferBtn : !1,
			autoCenter : true,
			css: {
				'width' : '500px',
				'border' : "1px #C8C8C8 solid",
				'padding' : "0px",
				'box-shadow' : '#ccc 1px 1px 1px'
			}
		}, function(d) {
			//todo 
		});
    });
</script>
```

## 可用的初始化属性说明

| 属性名 | 值类型 | 说明 |
| --- | --- |
|content | string | 初始内容 |
|target  | element | 触发弹窗的目标元素,必填参数 |
|title | string | 初始浮层标题内容 |
|foot | string | 初始浮层底部内容 |
|top | css | 初始top |
|left | css | 初始left |
|css | json | 自定义CSS |
|closeTitle| string | 初始关闭按钮悬浮文字 |
|draggable | bolean | 是否可以拖拽 |
|resizeable | bolean | 是否可以拖拽改变大小 |
|autoCenter | bolean | 是否自动居中，当窗口大小变化时 |
|escable | bolean | 是否可以通过ESC键关闭窗口 |
|hasTitle | bolean | 是否需要标题 |
|hasFoot | bolean | 是否需要页尾信息 |
|hasCloseBtn | bolean | 是否需要关闭按钮 |
|hasReferBtn | bolean | 是否需要指示按钮(指向目标位置的箭头等) |
|hasShadow | bolean | 是否需要阴影效果 |
|hasShade | bolean | 是否需要遮罩层 |
|CloseBtn | string | 关闭按钮图形，默认[×](unescape("%D7")) |
|ReferBtn | string | 指示按钮图形，默认[＜](unescape("%uFF1C")) |


## API说明
可通过$.Dialog.api()在控制台查看接口，可通过实例调用

具体效果，请查看：

- [示例一](examples:demo1.md)


