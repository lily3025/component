## 使用说明

### 简介

- AJAX 树菜单组件
- 全局访问请使用 JC.AjaxTree

### 组件依赖
    JC.BaseMVC
    json2

### 外链形式

```html
<link href='{{path}}/res/default/style.css' rel='stylesheet' />

<script src="{{basePath}}/JC.plugins/JSON/2/JSON.js"></script>
<script src="{{basePath}}/JC.common/0.2/common.js"></script>
<script src="{{basePath}}/JC.BaseMVC/0.1/BaseMVC.js"></script>
<script src="{{src}}"></script>
```

### 模块加载形式
```html
<link href='{{path}}/res/default/style.css' rel='stylesheet' />
<script>
    requirejs( [ '{{module}}' ], function( {{name}} ){
    });
</script>
```

## html 属性

    data-defaultOpenRoot = bool, default = true
        如果没有默认选中节点， 是否展开根节点

    data-cajScriptData = script selector
        从脚本模板解释数据

    data-cajData = object name of window
        从window变量获取数据

    data-cajUrl = url
        从 url 加载数据

    data-rootId = node id, default = ''
        指定根节点ID

    data-urlArgName = string, default = 'tree_node'
        书节点的URL参数名

    data-typeIndex = int, default = 0
        数据节点中 节点类型 所在的索引位置

    data-idIndex = int, default = 1
        数据节点中 节点id 所在的索引位置

    data-nameIndex = int, default = 2
        数据节点中 节点name 所在的索引位置

## 数据格式
```html
{
    //根节点
    root: [
              "folder"  //节点类型
              , "0"     //根节点ID
              , "root"  // 根节点名
      ]

    //数据接口
    , url: "data/treedata.php?id={0}"

    //子节点数据
    , data: 
        {
            "0": [
                    ["folder","01","非异步节点01"],
                    ["folder","02","非异步节点02"],
                    ["folder","03","异步节点"],
                    ["file","04","叶末节点"]
                ],
            "01": [
                    ["folder","0101","folder0101"],
                    ["file","0102","file0102"],
                    ["file","0103","file0103"]
                ],
            "02": [
                    ["file","0201","file0201"],
                    ["file","0202","file0202"]
                ],
            "0101": [
                    ["file","010101","file010101"],
                    ["file","010102","file010102"]
                ]

        }
}
```

## 使用实例
```html
<div class="js_compAjaxTree" data-cajScriptData="|script">
    <script type="text/template">
        {
            root: ["folder","0",'root']
            , url: "data/treedata.php?id={0}"
            , data: 
                {
                    "0": [
                            ["folder","01","非异步节点01"],
                            ["folder","02","非异步节点02"],
                            ["folder","03","异步节点"],
                            ["file","04","叶末节点"]
                        ],
                    "01": [
                            ["folder","0101","folder0101"],
                            ["file","0102","file0102"],
                            ["file","0103","file0103"]
                        ],
                    "02": [
                            ["file","0201","file0201"],
                            ["file","0202","file0202"]
                        ],
                    "0101": [
                            ["file","010101","file010101"],
                            ["file","010102","file010102"]
                        ]

                }
        }
    </script>
</div>
```

## 文档参考

1. [JC.{{name}} 官方文档](http://360.75team.com/~qiushaowei/jc2/docs_api/classes/JC.{{name}}.html)

