## 使用说明

### 简介

- flash 图表组件
- 全局访问请使用 JC.FChart

### 组件依赖
    JC.BaseMVC
    SWFObject
    JSON2
    jquery.mousewheel

### 外链形式

```html
<script src="{{basePath}}/JC.plugins/JSON/2/JSON.js"></script>
<script src="{{basePath}}/JC.plugins/swfobject/2.3/SWFObject.js"></script>
<script src="{{basePath}}/JC.plugins/jquery.mousewheel/3.1.12/jquery.mousewheel.js"></script>
<script src="{{basePath}}/JC.common/0.2/common.js"></script>
<script src="{{basePath}}/JC.BaseMVC/0.1/BaseMVC.js"></script>
<script src="{{src}}"></script>
```

### 模块加载形式
```html
<script>
    requirejs( [ '{{module}}' ], function( {{name}} ){
        JC.FCHART_PATH = '{{path}}';
    });
</script>
```

## html 属性

    chartScriptData = script tpl selector
        图表的脚本模板数据
        
    chartDataVar = json object name
        图表的json数据名, window变量域

    chartWidth = number, default = 100%
        图表的宽度

    chartHeight = number, default = 400
        图表的高度

    chartScroll = bool, default = true
        图表是否响应鼠标滚动

## 数据格式

1. [曲线图、环状图、管状图](http://fchart.openjavascript.org/docs_api/classes/JC.FChartCircleData.html)
1. [曲线图、柱状图](http://fchart.openjavascript.org/docs_api/classes/JC.FChartNormalData.html)
1. [highchart data api](http://api.highcharts.com/highcharts)


## 文档参考

1. [JC.{{name}} 官方文档](http://360.75team.com/~qiushaowei/fchart/docs_api/classes/JC.{{name}}.html)

