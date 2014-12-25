## 简介

移动端基于iscroll的滚动tips控件

### 依赖

nova框架,iscroll

## 使用说明

### html结构

```html
<!-- page-panel -->
<div class="list-wrap">
	<div class="list-scroller"></div>
</div>
<div id="tip"></div>
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
require(['module/iscroll/5.1.1/iscroll','{{module}}'], function(IScroll, ScrollTips) {
	var myScroll = new IScroll($('.list-wrap')[0], {
		probeType: 3,
		hScrollbar:false,
		vScrollbar:false
	});

	var scrollTip = new ScrollTips({
		element: '#tip',
		itemScroll: myScroll,
		selecters: {
			target: 'dt'
		}
	});
	scrollTip.on('change', function(e, data){
		// do something;
	}).on('posStart', function(e){
		// do something;
	}).on('posEnd', function(e){
		// do something;
	});

	scrollTip.refresh();
});
</script>
```

### Class说明

类名: scrollTip

组件根据指定的target对象生成锚点列表。
当iscroll滚动时，判断当前的锚点是否变化，来触发change事件。事件返回对应的index。

## 配置

```js
var config = {
	direction: 'Y', // 导航元素排列的方向（展示的方向由样式控制）
	itemScroll: null, // iscroll对象
	selecters: {
		target: '.scrolltips-target' // 锚点定位元素的选择器
	}
};
```

## 方法

```js
refresh()		// iscroll对象的内容发生变化时调用，以便重新处理锚点。初始时需调用一次。

```