## 使用说明

### 简介
    PopTips 带箭头的气泡提示框功能
    页面只要引用本文件, 默认会自动初始化span|em|a|b为class="js_compPoptips"的提示气泡

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

### 可用的 HTML attribute

    content = string
        声明气泡提示的内容，如果需要提示html内容那么用htmlContent属性
        如果没有设置则去查找title属性，如果title也没有设置，
        则将触发元素的text作为提示内容。

    htmlContent
        声明气泡提示的内容支持脚本模板
        如果有设置该属性那么会优先选用htmlContent提供的内容

    theme = yellow | blue | white | green, 查看
        气泡主题，提供黄色、蓝色、白色、绿色四种样式，默认为 yellow.
        yellow：黄色
        blue：蓝色
        white：白色
        green：绿色

    triggerType = hover | click
        触发方式: 支持hover和click
        默认为hover

    arrowPosition = left | right | top | bottom
        声明箭头的方向，默认值为left
        left:箭头向左（提示框在触发元素的右边）如果右边空间不够，提示框自动显示在左边，如果左边空间不够，提示框显示在上方，如果上方空间，提示框显示到下方
        right:箭头向右（提示框在触发元素的左边）如果左边空间不够，提示框自动显示在右边，如果右边空间不够，提示框显示在上方，如果上方空间，提示框显示到下方
        top:箭头向上（提示框在触发元素的下边）如果下边不够，提示框自动显示到上边
        bottom:箭头向下（提示框在触发元素的上边）如果上边不够，提示框自动显示到下边

    arrowPositionOffset = left | right | top , 查看
        声明箭头在提示框的位置，默认居中
        如果arrowPosition = left | right, arrowPositionOffset可以设置为top
        如果arrowPosition = top | bottom, arrowPositionOffset可以设置为left | right

    offsetXY = num,num
        声明提示框相对于当前位置的偏移位置(x 坐标，y 坐标)，默认值为0
        x < 0，往左偏移，x > 0 往右偏移 
        y < 0, 往上偏移，y > 0 往下偏移 
        两个数值以逗号分隔，如果只写一个值表示 y 坐标为0。

    popTipsWidth = num
        声明提示框的宽度，默认自适应

    popTipsHeight = num
        声明提示框的高度，默认自适应

    beforeShowCallback = function
        气泡显示前, 触发的回调, window 变量域
        function beforeShowCallback( _selector ){
           var _ins = this;
           JC.log( 'beforeShowCallback', new Date().getTime() );
        }

    afterHideCallback = function
        气泡隐藏后, 触发的回调, window 变量域
        function afterHideCallback( _selector ){
           var _ins = this;
           JC.log( 'afterHideCallback', new Date().getTime() );
        }

### Methods
    getInstance ( _selector ) PopTipsInstance static
        获取或设置 PopTips 的实例
        Parameters:
            _selector Selector
        Returns:
            PopTipsInstance:

    init ( _selector ) Array of PopTipsInstance static
        初始化可识别的 PopTips 实例
        Parameters:
            _selector Selector
        Returns:
            Array of PopTipsInstance:

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

    update ()
        更新 PopTips 状态

## API文档
1. [JC.PopTips 官方文档](http://360.75team.com/~qiushaowei/jc2/docs_api/classes/JC.PopTips.html)

