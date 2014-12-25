## 使用说明

### 简介

- JC.Tree 是一个树菜单组件
- 全局访问请使用 JC.Tree

### 组件依赖
    JC.common

### 外链形式

```html
<link href='{{path}}/res/default/style.css' rel='stylesheet' />

<script src="/module/JC.common/0.2/common.js"></script>
<script src="{{src}}"></script>
<script>
</script>
```

### 模块加载形式
```html
<link href='{{path}}/res/default/style.css' rel='stylesheet' />
<script>
    requirejs( [ '{{module}}' ], function( {{name}} ){
    });
</script>
```

## 构造函数
JC.Tree ( _selector  _data )
    Parameters:
        _selector Selector
        树要显示的选择器

    _data Object
        树菜单的数据
 
    Returns
        Tree Instance

## 数据格式
```html
{
    data: {
        //目录ID
        23: [
            [
            "28", //节点ID
            "销售二组" //节点名
            ],
            [
            "24",
            "售前审核组"
            ]
        ],
        24: [
            [
            "25",
            "二组一队"
            ],
            [
            "26",
            "二组二队"
            ],
            [
            "27",
            "二组三队"
            ]
        ]
    },
    //根节点
    root: [
        "23", //根节点ID
        "客户发展部" // 根节点名
    ]
}
```

## 使用实例
```html
<dl>
    <dt>添加 a 链接, evt.preventDefault - Tree 示例</dt>
    <dd>
        <div id="tree_box2" class="tree_container"></div>
    </dd>
</dl>
<link href='{{path}}/res/default/style.css' rel='stylesheet' />
<script>
    requirejs( [ '{{module}}' ], function( Tree ){
        var _queryNode = JC.f.getUrlParam( 'node' );

        var treeData = {
            data: {"24":[["25","\u4e8c\u7ec4\u4e00\u961f"],["26","\u4e8c\u7ec4\u4e8c\u961f"],["27","\u4e8c\u7ec4\u4e09\u961f"]],"23":[["28","\u9500\u552e\u4e8c\u7ec4"],["24","\u552e\u524d\u5ba1\u6838\u7ec4"]]},
		    root: ["23",'客户发展部']
		};
        var _tree = new JC.Tree( $('#tree_box2'), treeData );
            _tree.on('RenderLabel', function( _data ){
                var _node = $(this);
                _node.html( JC.f.printf( '<a href="javascript:" dataid="{0}">{1}</a>', _data[0], _data[1] ) );
            });
            _tree.on('change', function( _evt ){
                var _p = $(this);
                JC.log( 'tree click:', _p.html(), _p.attr('dataid'), _p.attr('dataname') );
            });
            _tree.init();
            _queryNode && _tree.open( _queryNode );
    });
```

## 文档参考

1. [JC.Tree 官方文档](http://360.75team.com/~qiushaowei/jc2/docs_api/classes/JC.Tree.html)

