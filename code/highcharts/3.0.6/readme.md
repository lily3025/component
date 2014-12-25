## 简单介绍
Highcharts是一个基于SVG、VML的JavaScript图表库。

Highcharts目前支持的图表类型有line、spline、area、areaspline、column、bar、 pie、scatter、angular gauges、arearange、areasplinerange、columnrange、bubble、box plot、error bars、funnel、waterfall 和polar chart。

### 注意：
Highcharts 只能免费用于非商业产品（Free - Non-commercial），商业用途需要购买对应的许可。


## 使用说明

### 外链形式

```html
<script src="{{src}}"></script>
```

```html
<div id="chartId"></div>
```

```js
// 图表配置项, 详细请参考: http://api.highcharts.com/
var option = {
	chart: {
		type: 'bar'
	},
	xAxis: {
		categories: ['Apples', 'Bananas', 'Oranges']
	},
	yAxis: {
		title: {
            text: 'Fruit eaten'
        }
	}, 
	series: [{
        name: 'Jane',
        data: [2, 1, 4]
    }, {
        name: 'John',
        data: [5, 7, 3]
    }]
};

// 方式一：常用
$('#chartId').highcharts(option);

// 方式二：构造函数，需要指定容器ID
option.chart.renderTo = 'chartId';
var chart = new Highcharts.Chart(option);
```

### 模块加载形式  

Highcharts 不是标准的 AMD 模块，不过仍然可以通过模块方式引入：  

```js
require(['{{module}}'], function(){
	// 使用
});

// 或者
require.config({
	paths: {
		highcharts: '{{module}}'
	}
});
require(['highcharts'], function(){
	// 使用
});
```

## 使用主题

### 外链使用

```html
<script src="{{src}}"></script>
<script src="{{path}}/themes/grid.js"></script>
```

### 模块加载形式

Highcharts的主题文件依赖highcharts.js，为了保证依赖关系，实现如下：

```js
// 定义依赖关系(推荐)
require.config({
	baseUrl: '{{path}}',
	paths: {
		highcharts: 'highcharts',
		grid: 'themes/grid'
	},
	shim: {
		grid: {
			deps: ['highcharts']
		}
	}
});
require(['highcharts', 'grid'], function(){
	// 使用
});

// 或者 嵌套require
```

### 自定义主题

定义一个`Highchart.theme`，并通过`Highcharts.setOptions(Highcharts.theme)`启用。


## 基本名词

标题(title)、副标题(subtitle)、图例(lengend)、数据系列(series)、X轴(xAxis)、Y轴(yAxis)、商标(credits)、提示(tooltip)等。

[![Highcharts官方API截图](http://p2.qhimg.com/t0173fe0ea48743b0c4.png)](http://www.highcharts.com/docs/chart-concepts/understanding-highcharts '')


## 兼容性

![Highcharts浏览器兼容性](http://p2.qhimg.com/t01b246d16511282964.jpg)

## 可用的基础库

![Highcharts可用的基础库](http://p0.qhimg.com/t012d153666bfc14720.jpg)

## 不同浏览器的实现原理

![Highcharts可用的基础库](http://p8.qhimg.com/t019bb0c9490df3d189.jpg)

## 详细文档请参考：  
1. [Highcharts官方文档](http://www.highcharts.com/docs 'Highcharts官方文档')  
1. [Highcharts官方API](http://api.highcharts.com/highcharts 'Highcharts官方API') 

[![Highcharts官方API截图](http://p3.qhimg.com/t010f9cd846a3539881.png)](http://api.highcharts.com/highcharts '')