## 简介

用于移动端的一个全屏选择城市的控件

### 依赖

iscroll、handlebars

nova框架、suggest、elevator、scrollTips、pagePanel

## 使用说明

### html结构

```html
<!-- cityPanel -->
<link rel="stylesheet" type="text/css" href="{{path}}/examples/cityPanel.css">

<div class="city-panel page-panel" style="display:none;">
	<div class="input-wrap">
		<div class="input-box">
			<form class="input-form">
				<input type="text" placeholer="请输入城市名称"/>
			</form>
			<button type="button" style="display:none;">取消</button>
		</div>
	</div>
	<div class="city-wrap">
		<div class="item-wrap">
			<div class="item-location list-item">
				<div class="city-curr">当前城市：<span class="cp-location sugg-item-cont"></span></div>
				<button type="button" class="panel-cancel">取消</button>
			</div>
			<div class="item-data">
				<div class="item-scroller">
					<div class="item-hot">
						
					</div>
					<div class="item-list">
						
					</div>
				</div>
				<ul class="item-elevator"></ul>
				<div class="item-tip"></div>
			</div>
		</div>
		<div class="suggest-wrap">
			<div class="sugg-list"></div>
		</div>
	</div>
	<script type="text/x-handlebars-template" class="item-template">
		{{#each list}}
			<dl>
				<dt class="list-item" data-key="{{@key}}">{{@key}}</dt>
				{{#each this}}
					<dd class="list-item sugg-item sugg-item-cont">{{this.name}}</dd>
				{{/each}}
			</dl>
		{{/each}}
	</script>
	<script type="text/x-handlebars-template" class="sugg-template">
		<ul>
			{{#each list}}
				<li class="list-item sugg-item">
					<div class="sugg-item-cont">{{this.name}}</div>
					<div class="sugg-item-copy"></div>
				</li>
			{{/each}}
		</ul>
	</script>
</div>
<!-- cityPanel -->
```

### 外链形式

**注意：** 请使用Zepto1.1.2, 并引入Zepto.touch.js
```html
<script type="text/javascript" src="js/lib/zepto.js"></script>
<script id="cityListJs" type="text/javascript" src="http://s6.qhimg.com/!b5ea8e7a/m-city-v1.js"></script>
<!-- 依赖的脚本 -->
...
<!-- 依赖的脚本 -->
<script src="{{src}}"></script>
```

### 模块加载形式

```html
<script type="text/javascript" src="js/lib/zepto.js"></script>
<script id="cityListJs" type="text/javascript" src="http://s6.qhimg.com/!b5ea8e7a/m-city-v1.js"></script>
<script>
    require(['{{module}}'], function(Suggest) {
        // ...
    });
</script>
```


### 快速使用

```html
<script type="text/javascript">
function init(){

	// 城市数据的处理，后续会进一步整合优化
	var list = window.list = {};

	!window.cityList && alert('cityList 未成功加载');

	$.each(window.cityList, function(index, item){
		var tmpGroup = item.nameEn ? item.nameEn.charAt(0).toUpperCase() : '#';
		
		if (!(list[tmpGroup] instanceof Array)) {
			list[tmpGroup] = [];
		}
		
		list[tmpGroup].push(item);
	});
	// 城市数据的处理


	cityPanel.init(list);

	$('#test').on('focus', function(){
		cityPanel.show(this.value);
	});
	cityPanel.onselect = function(e){
		$('#test').val(e.value);
	};
}

require(['{{module}}'], function(cityPanel) {
	init();
});
</script>
```

## 接口

`cityPanel` 是单例对象

**init** 初始化对象。参数：城市列表数据

**show** 显示城市选择控件。

**hide** 隐藏城市选择控件。

**refresh** 刷新城市选择控件。在控件尺寸发生变化时需调用。

**onselect** 选中城市时触发的函数。出入参数：city。city.value 即选中的城市。