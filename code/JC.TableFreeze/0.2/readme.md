## 使用说明

### 简介
    TableFreeze 表格固定指定列功能 
    页面只要引用本脚本, 默认会自动初始化div为class="js_compTableFreeze"下的表格
    目前不支持带有tfooter的表格。如果表格带有tfooter，tfooter部分的内容会被清空

### 组件依赖
    JC.common
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
        //...
    }); 
</script>
```

### 可用的 HTML attribute

    freezeType = string
        声明表格列冻结的类型：
        prev：左边的列固定，其他滚动
        next：右边的列固定，其他滚动
        both：两边的列固定，其他滚动

    freezeCol = string
        声明表格要冻结的列数:
        为0：全部滚动，不冻结
        为列表数目：全部冻结， 不滚动
        为num,num：freezeType为both时，第一个数字表示前面冻结的列数
        第二个数字表示后面冻结的列数。
        当两个数字加起来等于列数时，表示全部冻结，不会出现有滚动的列。

    scrollWidth = num
        声明表格滚动部分的宽度，默认120%

    needHoverClass = true|false
        声明表格行是否需要鼠标hover高亮效果:
        默认值为true

    alternateClass = string
        声明表格索引值为奇数行的背景色的className: （表格行隔行换色）
        如果为空则不指定隔行背景色
 
    beforeCreateTableCallback = function
        表格创建前, 触发的回调, window 变量域
        function beforeCreateTableCallback( _selector ){
           var _ins = this;
           JC.log( 'beforeCreateTableCallback', new Date().getTime() );
        }

    afterCreateTableCallback = function
        表格创建后, 触发的回调, window 变量域
        function afterCreateTableCallback( _selector ){
           var _ins = this;
           JC.log( 'afterCreateTableCallback', new Date().getTime() );
        }

### Methods

    fixHeight ()
        resize时更新 TableFreeze 状态

    getInstance ( _selector ) TableFreezeInstance static
        获取或设置 TableFreeze 的实例
        Parameters:
            _selector Selector
        Returns:
            TableFreezeInstance

    init ( _selector ) Array of TableFreezeInstance static
        初始化可识别的 TableFreeze 实例
        Parameters:
            _selector Selector
        Returns:
            Array of TableFreezeInstance

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
        更新 TableFreeze 状态


## API文档
1. [JC.TableFreeze 官方文档](http://360.75team.com/~qiushaowei/jc2/docs_api/classes/JC.TableFreeze.html)

