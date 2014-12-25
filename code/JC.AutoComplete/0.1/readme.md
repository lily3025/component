## 使用说明

### 简介
    JC.AutoComplete 类chm索引提示 
    响应式初始化, 当光标焦点 foucs 到 文本框时, 会检查是否需要自动初始化 JC.AutoComplete 实例

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

    cacPopup = selector, optional
        显式指定用于显示数据列表的弹框, 如不指定, 载入数据时会自己生成 popup node

    cacPreventEnter = bool, default = false
        文本框按回车键时, 是否阻止默认行为, 防止提交表单

    cacLabelKey = string, default = data-label
        用于显示 label 的HTML属性

    cacIdKey = string, default= data-id
        用于显示 ID 的HTML属性

    cacIdSelector = selector
        用于保存 ID 值的 node

    cacIdVal = string, optional
        用于初始化的默认ID, 如果 cacIdVal 为空将尝试读取 cacIdSelector 的值

    cacStrictData = bool, default = false
        是否验证已填内容的合法性
        仅在 cacIdSelector 和 cacIdKey 显式声明时有效

    cacAjaxDataUrl = url
        获取 数据的 AJAX 接口
        数据格式
        [ { "id": "id value", "label": "label value" }, ... ]

    cacDataFilter = callback
        如果 数据接口获取的数据不是默认格式, 可以使用这个属性定义一个数据过滤函数, 把数据转换为合适的格式
        function cacDataFilter( _json ){
           if( _json.data && _json.data.length ){
               _json = _json.data;
           }
           $.each( _json, function( _ix, _item ){
               _item.length &&
                   ( _json[ _ix ] = { 'id': _item[0], 'label': _item[1] } )
                   ;
           });
           return _json;
        }

    cacBoxWidth = int
        定义 popup 的宽度, 如果没有显式定义, 将使用 selector 的宽度

    cacCasesensitive = bool, default = false
        是否区分英文大小写

    cacSubItemsSelector = selector string, default = "> li"
        popup 查找数据项的选择器语法

    cacNoDataText = string, default = "数据加载中, 请稍候..."
        加载数据时的默认提示文字

    cacValidCheckTimeout = int, default = 1
        定义 JC.Valid blur 时执行 check 的时间间隔, 主要为防止点击列表时已经 Valid.check 的问题

    cacFixHtmlEntity = bool
        是否将 HTML实体 转为 html

### Methods

    ajaxUpdate ( _url  _cb )
        使用 ajax 接口更新原始数据
        Parameters:
            _url String
            _cb Callback

    ajaxUpdate ( _selector  _url  _cb ) AutoCompleteInstance static
        使用 ajax 接口更新原始数据
        Parameters:
            _selector Selector
            _url Url string
            _cb Callback
        Returns:
            AutoCompleteInstance:

    clear ()
        清除 selector 和 idSelector 的默认值

    dataFilter ( _json ) Json static
        定义全局数据过滤函数
        Parameters:
            _json Json
        Returns:
            Json

    fixPosition ()
        校正数据列表的显示位置

    getInstance ( _selector ) AutoCompleteInstance static
        获取或设置 AutoComplete 的实例
        Parameters:
            _selector Selector
        Returns:
            AutoCompleteInstance

    hide ()
        隐藏数据列表

    idSelector () Selector
        获取 绑定的 id node
        Returns:
            Selector

    idVal () Id string
        获取 id 值
        Returns:
            Id string:

    init ( _selector ) Array of AutoCompleteInstance static
        初始化可识别的 AutoComplete 实例
        Parameters:
            _selector Selector
        Returns:
            Array of AutoCompleteInstance:

    popup () Selector
        获取数据列表 node
        Returns:
            Selector

    show ()
        显示数据列表

    update ( _json )
        更新原始数据
        Parameters:
            _json Json

    update ( _selector  _data ) AutoCompleteInstance static
        更新原始数据
        Parameters:
            _selector Selector
            _data Json
        Returns:
            AutoCompleteInstance

### Properties
    fixHtmlEntity Bool static
        是否将 HTML实体 转为 html
        Default: true

## API文档
1. [JC.AutoComplete 官方文档](http://360.75team.com/~qiushaowei/jc2/docs_api/classes/JC.AutoComplete.html)

