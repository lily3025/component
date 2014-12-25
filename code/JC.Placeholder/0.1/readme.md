## 使用说明

### 简介

- Placeholder 占位符提示功能
- 全局访问请使用 JC.Placeholder

### 组件依赖
    JC.BaseMVC

### 外链形式

```html
<link href='{{path}}/res/default/style.css' rel='stylesheet' />

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

## 使用实例
```html
<link href='{{path}}/0.1/res/default/style.css' rel='stylesheet' />
<script>

    requirejs( [ 'module/JC.Placeholder/0.1/Placeholder' ]
        , function(){
            JC.debug = true;
        }
    );
</script>
```

## Methods

    update ()
        更新 placeholder 状态

    update () static
        更新所有 placeholder 的状态

## 文档参考

1. [JC.Placeholder 官方文档](http://360.75team.com/~qiushaowei/jc2/docs_api/classes/JC.Placeholder.html)

