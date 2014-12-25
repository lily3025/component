## 使用说明

### 简介

- JC 流程图( 一对多关系, 多对一关系 )
- 全局访问请使用 JC.FlowChart
- 页面只要引用本脚本, 默认会处理 div class="js_compFlowChart"

### 组件依赖
    RaphaelJS
    JC.BaseMVC
    JC.PopTips

### 外链形式

```html
<link href='{{path}}/res/default/style.css' rel='stylesheet' />
<link href='{{basePath}}/JC.PopTips/0.2/res/default/style.css' rel='stylesheet' />

<script src="{{basePath}}/JC.plugins/Raphael/latest/raphael.js"></script>
<script src="{{basePath}}/JC.common/0.2/common.js"></script>
<script src="{{basePath}}/JC.BaseMVC/0.1/BaseMVC.js"></script>
<script src="{{basePath}}/JC.PopTips/0.2/PopTips.js"></script>
<script src="{{src}}"></script>
```

### 模块加载形式
```html
<link href='{{path}}/res/default/style.css' rel='stylesheet' />
<link href='{{basePath}}/JC.PopTips/0.2/res/default/style.css' rel='stylesheet' />

<script>
    requirejs( [ '{{module}}' ], function( {{name}} ){
    });
</script>
```

## html 属性

data-FlowChart = script json data
    流程图数据

    数据说明
        数据按节点关系分为两大类: 一对多, 多对一

        一对多数据
            一对多数据存放于字段: nodes, nodes 数据类型为数组
            nodes 字段位于数据节点里

        多对一数据
            多对一数据存放于字段: targetNodes, targetNodes 数据类型为对象
            targetNodes 字段为全局节点

    数据字段说明
        图表数据 - chart 字段

        name = string
            节点名

        id = string
            节点唯一标识符

        nodes = array
            一对多数据的子节点, 该字段位于父节点里面

        targetNodes = object
            多对一数据的子节点, 该字段为全局字段, 节点位置 chart.targetNodes

        status = string, default = 0
            节点状态 
            根据 status 显示为不同的样式 
            默认有0 ~ 10, 共11 种状态 
            由status 产生的 css class: js_cfcItemStatus_N, js_cfcItemTips_N ( N 代表 status )

        tipsHtml = string
            鼠标划过节点时, 显示的tips内容, 支持html内容

    线条与图标颜色 - colors 字段
        line = raphael object, default: { 'stroke': '#E1E1E1', 'stroke-width': 2 }
            背景线颜色

        icon = raphael object, default: { 'stroke': '#E1E1E1', 'stroke-width': 2, 'fill': '#F2F2F2' }
            图标颜色

    如果要自定义节点颜色 或者 tips 颜色, 请使用 css 定义: js_cfcItemStatus_N, js_cfcItemTips_N ( N 代表 status )

## 数据格式
```html
{
   chart: {
       name: '提交'
       , id: 1
       , nodes: [
               {
                   name: '资质审核'
                   , id: 2
                   , status: 1
                   , tipsHtml: 'username 1'
                   , nodes: [
                       {
                           name: '服务审核'
                           , id: 3
                           , targetNode: 5
                           , status: 2
                           , tipsHtml: 'username 2'
                       }
                       , {
                           name: '渠道管理层'
                           , id: 4
                           , status: 3
                           , tipsHtml: 'username 3'
                       }
                   ]
               }
               , {
                   name: '资质审核1'
                   , id: 6
                   , status: 4
                   , tipsHtml: 'username 4'
                   , nodes: [
                       {
                           name: '服务审核1'
                           , id: 7
                           , targetNode: 9
                           , status: 5
                           , tipsHtml: 'username 5'
                       }
                       , {
                           name: '渠道管理层1'
                           , id: 8
                           , targetNode: 9
                           , status: 6
                           , tipsHtml: 'username 6'
                       }
                   ]
               }
               , {
                   name: '资质审核2'
                   , id: 10
                   , status: 7
                   , tipsHtml: 'username 7'
                   , nodes: [
                       {
                           name: '服务审核2'
                           , id: 11
                           , status: 8
                           , tipsHtml: 'username 8'
                           , nodes: [
                               {
                                   name: '管理层2'
                                   , id: 12
                                   , targetNode: 5
                                   , status: 9
                                   , tipsHtml: 'username 9'
                               }
                           ]
                       }
                   ]
               }
               , {
                   name: '资质审核3'
                   , id: 15
                   , status: 10
                   , tipsHtml: 'username 10'
               }
       ]
       , targetNodes: {
           '5': {
               name: '管理层'
           }
           , '9': {
               name: '管理层1'
               , targetNode: 5
           }
       }
   }
}```

## 使用实例
```html
<div class="js_compFlowChart" data-FlowChart="|script">
   <script type="text/template">
       {
           chart: {
               name: '提交'
               , id: 1
               , nodes: [
                       {
                           name: '资质审核'
                           , id: 2
                           , status: 1
                           , tipsHtml: 'username 1'
                           , nodes: [
                               {
                                   name: '服务审核'
                                   , id: 3
                                   , targetNode: 5
                                   , status: 2
                                   , tipsHtml: 'username 2'
                               }
                               , {
                                   name: '渠道管理层'
                                   , id: 4
                                   , status: 3
                                   , tipsHtml: 'username 3'
                               }
                           ]
                       }
                       , {
                           name: '资质审核1'
                           , id: 6
                           , status: 4
                           , tipsHtml: 'username 4'
                           , nodes: [
                               {
                                   name: '服务审核1'
                                   , id: 7
                                   , targetNode: 9
                                   , status: 5
                                   , tipsHtml: 'username 5'
                               }
                               , {
                                   name: '渠道管理层1'
                                   , id: 8
                                   , targetNode: 9
                                   , status: 6
                                   , tipsHtml: 'username 6'
                               }
                           ]
                       }
                       , {
                           name: '资质审核2'
                           , id: 10
                           , status: 7
                           , tipsHtml: 'username 7'
                           , nodes: [
                               {
                                   name: '服务审核2'
                                   , id: 11
                                   , status: 8
                                   , tipsHtml: 'username 8'
                                   , nodes: [
                                       {
                                           name: '管理层2'
                                           , id: 12
                                           , targetNode: 5
                                           , status: 9
                                           , tipsHtml: 'username 9'
                                       }
                                   ]
                               }
                           ]
                       }
                       , {
                           name: '资质审核3'
                           , id: 15
                           , status: 10
                           , tipsHtml: 'username 10'
                       }
               ]
               , targetNodes: {
                   '5': {
                       name: '管理层'
                   }
                   , '9': {
                       name: '管理层1'
                       , targetNode: 5
                   }
               }
           }
       }
   </script>
</div>```

## 文档参考

1. [JC.FlowChart 官方文档](http://360.75team.com/~qiushaowei/jc2/docs_api/classes/JC.FlowChart.html)

