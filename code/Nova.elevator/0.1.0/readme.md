## 简介

用于移动端的电梯导航控件

### 依赖

nova框架

## 使用说明

### html结构

```html
<style type="text/css">
	#elevator {
		position: absolute;
		right: 10px;
		top: 50%;
		-webkit-transform: translateY(-50%);
		display: flex;
		flex-direction: column;
		font-size: 20px;
		line-height: 1;
	}
	#elevator li {
		flex: 0 1 1em;
		background: blue;
		width: 2em;
		text-align: center;
		color: white;
		border: 1px solid black;
	}
</style>

<div class="list-wrap">
	<div class="list-scroller"></div>
</div>
<ul id="elevator"></ul>
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
    require(['{{module}}'], function(Elevator) {
        // ...
    });
</script>
```


### 快速使用

```html
<script type="text/javascript">
require(['{{module}}'], function(Elevator) {
	var elevator = new Elevator({
		element: '#elevator',
		selecters: {
			target: 'dt'
		},
		targetContainer: targetContainer
	});
	elevator.on('jump', function(e, data){
		// do something;
	});
	elevator.refresh();
});
</script>
```

### Class说明

类名: Elevator

组件根据指定的target对象生成导航电梯。
当点击（tap）导航元素的时候，触发jump事件，事件返回对应的index。

## 配置

```js
var config = {
	direction: 'Y', // 导航元素排列的方向（展示的方向由样式控制）
	classNames: {
		item: 'elevator-item' // 导航元素的类名
	},
	selecters: {
		target: '.elevator-target' // target对象的选择器
	},
	targetContainer: document // target对象的容器
};
var elevator = new Elevator(config);
```

## 方法

```js
elevator.refresh()		// 当target对象发生变化时调用，以便重新生成导航。初始时需调用一次。

```
