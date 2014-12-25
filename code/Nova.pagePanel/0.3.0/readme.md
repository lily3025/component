## 简介

用于移动端的全屏浮层控件

### 依赖

nova框架

## 使用说明

### html结构

```html
<!-- page-panel -->
<style type="text/css">
.page-panel {
	position: fixed;
	z-index: 101;
	top: 0;
	left: 0;

	display: -webkit-box;
	display: -webkit-flex;
	display:         flex;
	flex-direction: column;

	width: 100%;
	height: 100%;

	background: white;

	-webkit-box-orient: vertical;
	-webkit-flex-direction: column;
}
</style>

<div class="page-panel" style="display:none;">
	内容
</div>
<!-- page-panel -->
```

### 外链形式

**注意：** 请使用Zepto1.1.2, 并引入Zepto.touch.js
```html
<script type="text/javascript" src="js/lib/zepto.js"></script>
<!-- 依赖的脚本 -->
...
<!-- 依赖的脚本 -->
<script src="{{src}}"></script>
```

### 模块加载形式

```html
<script type="text/javascript" src="js/lib/zepto.js"></script>
<script>
    require(['{{module}}'], function(PagePanel) {
        // ...
    });
</script>
```


### 快速使用

```html
<script type="text/javascript">
require(['{{module}}'], function(PagePanel) {
	var pagePanel = new PagePanel({
		element: $('.page-panel')
	});

	panel.show();
});
</script>
```

### Class说明

类名: PagePanel

组件对应的element会被插入到body元素下，在显示时隐藏兄弟节点。
组件同时会处理hash，若url里的hash与组件指定的hash一致时，组件会显示。
因会根据hash控制浮层显示隐藏，所以若在浮层显示或隐藏前后有处理，请使用组件的before/after方法（详见noveUI文档）。

## 配置

```js
var config = {
	siblings: undefined, // 自定义显示时需要隐藏的节点，默认选择所有兄弟节点
	hash: 'pagepanel', // 组件使用的hash，默认pagepanel
	template: '<div class="page-panel"></div>'
};
var pagePanel = new PagePanel(config);
```

## 方法

```js
pagePanel.show()		// 显示浮层
pagePanel.hide()		// 隐藏浮层
pagePanel.isShow()		// 返回浮层是否显示
```
