## 使用说明

### 简介

    - MVC 抽象类 ( 仅供扩展用, 这个类不能实例化)
    - 新的 JC 组件 和 Biz(业务)组件 全部继承自 JC.BaseMVC
    - 旧的 JC/Biz 组件将会逐渐升级为继承自 JC.BaseMVC

### 组件依赖
    JC.common

### 外链形式

```html
<script src="{{basePath}}/JC.common/0.2/common.js"></script>
<script src="{{src}}"></script>
```

### 模块加载形式
```html
<script>
    requirejs( [ '{{module}}' ], function( {{name}} ){
        //...
    }); 
</script>
```

### Method

    build ( _outClass ) static
        复制 BaseMVC 的所有方法到 _outClass
        Parameters:
            _outClass Class

    buildClass ( _inClass  _outClass ) static
        复制 _inClass 的所有方法到 _outClass
        Parameters:
            _inClass Class
            _outClass Class

    buildModel ( _outClass ) static
        为 _outClass 生成一个通用 Model 类
        Parameters:
            _outClass Class

    buildView ( _outClass ) static
        为 _outClass 生成一个通用 View 类
        Parameters:
            _outClass Class

    getInstance ( _selector  _staticClass  _classInstance ) static
        获取或设置组件实例
        Parameters:
            _selector Selector
            _staticClass Class
            _classInstance ClassInstance
        Returns:
            ClassInstance | null:

    on ( _evtName  _cb ) 
        使用 jquery on 绑定事件
        Parameters:
            _evtName String
            _cb Function
        Returns:
            BaseMVCInstance

    selector () 
        获取 显示 BaseMVC 的触发源选择器, 比如 a 标签
        Returns:
            selector

    trigger ( _evtName ) 
        使用 jquery trigger 触发绑定事件
        Parameters:
            _evtName String
        Returns:
            BaseMVCInstance

### Properties
    autoInit Bool static
        是否自动初始化
        Default: true

## API文档
1. [JC.BaseMVC 官方文档](http://360.75team.com/~qiushaowei/jc2/docs_api/classes/JC.BaseMVC.html)

