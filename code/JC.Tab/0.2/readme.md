## 使用说明

### 简介
    Tab 选项卡 
    响应式初始化, 当鼠标移动到 Tab 时, Tab 会尝试自动初始化 class = ".js_autoTab" 的 HTML 标签 
    需要手动初始化, 请使用: var _ins = new JC.Tab( _tabSelector );

### 组件依赖
    JC.common

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

### Tab 容器的HTML属性

    tablabels
        声明 tab 标签的选择器语法

    tabcontainers
        声明 tab 容器的选择器语法

    tabactiveclass
        声明 tab当前标签的显示样式名, 默认为 cur

    tablabelparent
        声明 tab的当前显示样式是在父节点, 默认为 tab label 节点

    tabactivecallback
        当 tab label 被触发时的回调

    tabchangecallback
        当 tab label 变更时的回调

    tabQueryKey = url arg name
        从URL默认选中tab, value = tab index, index 从0开始

    tabTriggerDefault
        页面初始化完毕时，是否实例化，并初始化当前选中标签

### Label(标签) 容器的HTML属性(AJAX)

    tabajaxurl
        ajax 请求的 URL 地址

    tabajaxmethod
        ajax 请求的方法( get|post ), 默认 get

    tabajaxdata
        ajax 请求的 数据, json

    tabajaxcallback
        ajax 请求的回调

    tabIframeUrl
        iframe 显示的URL

### Methods
    active ( _label )
        把 _label 设置为活动状态
    Parameters:
        _label Selector

    getInstance ( _selector  _setter ) static
        获取或设置 Tab 容器的 Tab 实例属性
        Parameters:
            _selector Selector
            _setter JC.Tab
                    _setter 不为空是设置

    isAjax ( _label ) String | Undefined static
        判断一个 label 是否为 ajax
        Parameters:
            _label Selector
        Returns:
            String | Undefined

    isAjaxInited ( _label  _setter ) static
        判断一个 ajax label 是否已经初始化过 
        这个方法需要跟 Tab.isAjax 结合判断才更为准确
        Parameters:
            _label Selector
            _setter Bool
                如果 _setter 不为空, 则进行赋值

        Example:
           function tabactive( _evt, _container, _tabIns ){
               var _label = $(this);
               JC.log( 'tab ', _evt.type, _label.html(), new Date().getTime() );
               if( JC.Tab.isAjax( _label ) && ! JC.Tab.isAjaxInited( _label ) ){
                   _container.html( '<h2>内容加载中...</h2>' );
               }
           }

### Properties

    activeClass String static
        label 当前状态的样式
        Default: cur

    activeEvent String static
        label 的触发事件
        Default: click

    ajaxCallback Function static
        全局的 ajax 处理回调
        Default: null

        Example:
               $(document).ready( function(){
                   JC.Tab.ajaxCallback =
                       function( _data, _label, _container, _textStatus, _jqXHR ){
                           _data && ( _data = $.parseJSON( _data ) );
                           if( _data && _data.errorno === 0 ){
                               _container.html( JC.f.printf( '<h2>JC.Tab.ajaxCallback</h2>{0}', _data.data ) );
                           }else{
                               Tab.isAjaxInited( _label, 0 );
                               _container.html( '<h2>内容加载失败!</h2>' );
                           }
                       };
               });

    ajaxRandom Bool static
        ajax 请求是否添加随机参数 rnd, 以防止页面缓存的结果差异
        Default: true

    autoInit Bool static
        页面加载完毕后, 是否要添加自动初始化事件 
        自动初始化是 鼠标移动到 Tab 容器时去执行的, 不是页面加载完毕后就开始自动初始化
        Default: true


## API文档
1. [JC.Tab 官方文档](http://360.75team.com/~qiushaowei/jc2/docs_api/classes/JC.Tab.html)

