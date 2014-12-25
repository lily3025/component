## 使用说明

### 简介
    响应式 Drag and Drop 功能 
    对 [ div | button ].js_compDrag 生效

### 组件依赖
    JC.common
    JC.BaseMVC

### 外链形式

```html
<script src="{{basePath}}/JC.common/0.2/common.js"></script>
<script src="{{basePath}}/JC.BaseMVC/0.1/BaseMVC.js"></script>
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

### 通用 HTML attribute

    dragTarget = selector, default = self
        要拖动的 selector, 可以通过该属性指定拖动的父节点

    dragIn = selector, default = window
        可拖动的范围

    disableDrag = bool, default = false
        是否禁止拖动, 会执行实例初始化

    ignoreDrog = bool, default = false
        是否忽略拖动, 不会执行实例初始化

    dragInitedCb = function, window 变量域
        实例初始化后调用的回调
            function dragInitedCb( _selector, _dragTarget ){
               var _ins = this;
               JC.log( 'dragInitedCb', new Date().getTime() );
            }

    dragBeforeCb = function, window 变量域
        拖动之前调用的回调, 如果返回 false, 将停止拖动操作
            function dragBeforeCb( _dragTarget, _selector ){
               var _ins = this;
               JC.log( 'dragBeforeCb', new Date().getTime() );
               //return false;
            }

    dragAfterCb = function, window 变量域
        拖动完成之后的回调
            function dragAfterCb( _dragTarget, _selector ){
               var _ins = this;
               JC.log( 'dragAfterCb', new Date().getTime() );
            }

    dragBeginCb = function, window 变量域
    拖动开始时的回调
    function dragBeginCb( _selector, _dragTarget, _movingSelector ){
       var _ins = this;
       JC.log( 'dragBeginCb', new Date().getTime() );
    }
    dragMovingCb = function, window 变量域
        拖动移动时的回
            function dragMovingCb( _selector, _dragTarget, _movingSelector, _x, _y, _evt ){
               var _ins = this;
               JC.log( 'dragMovingCb', new Date().getTime() );
            }

    dragDoneCb = function, window 变量域
        拖动完成时的回调
            function dragDoneCb( _selector, _dragTarget ){
               var _ins = this;
               JC.log( 'dragDoneCb', new Date().getTime() );
            }

### drop HTML attribute

    dropFor = selector
        指定可拖放的 selector

    dropSwap = bool, default = false
        是否交换拖曳的位置 
        为真, 交换 selector 的位置 
        不为真, 将 append 到目标 selector

    disableDrop = bool, default = false
        是否禁止 拖放功能, 这个属性应当写在 dropFor 的 selector 里

    dropDoneCb = function, window 变量域
        拖放完成时的回调, 如果返回 false, 将停止拖放操
        function dropDoneCb( _dragTarget, _dropTarget ){
           var _initSelector = this;
           JC.log( 'dropDoneCb', new Date().getTime() );
           //return false;
        }

    dropDoneAfterCb = function, window 变量域
        拖放完成后的回调
        function dropDoneAfterCb( _dragTarget, _dropTarget ){
           var _initSelector = this;
           JC.log( 'dropDoneAfterCb', new Date().getTime() );
        }

### Methods

    cleanDragData () static
        清除拖动的相关数据

    defaultMouseMove ( _evt ) static
        拖动时, 默认的 mousemove 函数
        Parameters:
            _evt Evt

    defaultMouseUp ( _evt ) static
        拖动时, 默认的 mouseup 函数
        Parameters:
            _evt Evt

    defaultScroll ( _evt ) static
        拖动时, 默认的 scroll 函数
        Parameters:
            _evt Evt

    draggingItem ( _setter ) Selector | Null static
        设置当前的拖动 selector
        Parameters:
            _setter Selector | Null
        Returns:
            Selector | Null

    dragIn () Selector | Window
        获取可拖动范围的 [ 节点 | window ]
        Returns:
            Selector | Window:

    dragInfo ( _ins  _evt ) Json | Null static
        设置/获取 拖动时所需的数据
        Parameters:
            _ins DragInstance
            _evt Event
        Returns:
            Json | Null

    dragMovingTarget () 
        获取拖动时移动的节点, drag 使用 dragTarget, drop clone dragTarget
        Returns:
            selector

    dragTarget () 
        获取拖动的源节点
        Returns:
            selector

    init ( _selector ) Array of DragInstance static
        初始化可识别的 Drag 实例
        Parameters:
            _selector Selector
        Returns:
            Array of DragInstance

    on ( _evtName  _cb ) 
        使用 jquery on 绑定事件
        Parameters:
            _evtName String
            _cb Function

    selector () 
        获取 显示 BaseMVC 的触发源选择器, 比如 a 标签
        Returns:
            selector

    trigger ( _evtName ) 
        使用 jquery trigger 触发绑定事件
        Parameters:
            _evtName String

### Events

    JCDragAfter 
        拖动完成之后触发的事件

    JCDragBefore 
        拖动开始前触发的事件

    JCDragBegin 
        拖动开始时触发的事件

    JCDragDone 
        拖动完成时触发的事件

    JCDraggingMoving 
        拖动移动时触发的事件

    JCDragInited 
        实例初始化后触发的事件

    JCDropDone 
        拖放完成时触发的事件

    JCDropDoneAfter 
        拖放完成后触发的事件

    JCTriggerDrag 
        手动触发拖动事件

## API文档
1. [JC.Drag 官方文档](http://360.75team.com/~qiushaowei/jc2/docs_api/classes/JC.Drag.html)

