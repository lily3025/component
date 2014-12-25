## 使用说明

### 简介

    - JC.Panel 是一个浮层组件, 提供多种弹框形式.

### 组件依赖
    JC.common

### 外链形式

```html
<link href='{{path}}/res/default/style.css' rel='stylesheet' />
<script src="{{basePath}}/JC.common/0.2/common.js"></script>
<script src="{{path}}/Panel.default.js"></script>
<script src="{{path}}/Panel.popup.js"></script>
<script src="{{path}}/Panel.Dialog.js"></script>
<script src="{{path}}/Panel.Dialog.popup.js"></script>
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

### 弹框类型
1. JC.Panel 
1. JC.alert
1. JC.confirm
1. JC.msgbox
1. JC.Dialog
1. JC.Dialog.alert
1. JC.Dialog.confirm
1. JC.Dialog.msgbox


### 调用参数

#### JC.Panel

    JC.Panel ( _selector  _headers  _bodys  _footers )
        Parameters:
            _selector Selector | String
                自定义弹框模板, 如果 _selector不能解析为 HTML, 将视为@param _headers

            _headers String
                定义模板的 header 文字, 如果 _selector 不能解析为HTML, 视视为@param _bodys

            _bodys String
                定义模板的 body 文字, 如果 _selector 不能解析为HTML, 视视为@param _footers

            _footers String
                定义模板的 footer 文字

        Returns:
            JC.Panel

#### JC.Dialog

    JC.Dialog ( _selector  _headers  _bodys  _footers ) static
        Parameters:
            _selector Selector | String
                自定义弹框模板, 如果 _selector不能解析为 HTML, 将视为@param _headers

            _headers String
                定义模板的 header 文字, 如果 _selector 不能解析为HTML, 视视为@param _bodys

            _bodys String
                定义模板的 body 文字, 如果 _selector 不能解析为HTML, 视视为@param _footers

            _footers String
                定义模板的 footer 文字

        Returns:
            JC.Panel
                

### 可用的 HTML 属性
```html
Panel Layout 可用的 html attribute
    panelclickclose = bool
        点击 Panel 外时, 是否关闭 panel

    panelautoclose = bool

    Panel 是否自动关闭, 默认关闭时间间隔 = 2000 ms

    panelautoclosems = int, default = 2000 ms
        自动关闭 Panel 的时间间隔

[a | button] 可用的 html attribute, 用于自动生成弹框
    paneltype = string, require
        弹框类型: alert, confirm, msgbox, panel 
                    dialog.alert, dialog.confirm, dialog.msgbox, dialog

    panelmsg = string
        要显示的内容

    panelmsgBox = script selector
        要显示的脚本模板, 如果需要显示大量 HTML, 应该使用这个属性

    panelstatus = int, default = 0
        弹框状态: 0: 成功, 1: 失败, 2: 警告 
                类型不为 panel, dialog 时生效

    panelcallback = function
        点击确定按钮的回调, window 变量域
            function( _evtName, _panelIns ){
               var _btn = $(this);
            }

    panelcancelcallback = function
        点击取消按钮的回调, window 变量域
            function( _evtName, _panelIns ){
               var _btn = $(this);
            }

    panelclosecallback = function
        弹框关闭时的回调, window 变量域
            function( _evtName, _panelIns ){
               var _btn = $(this);
            }

    panelbutton = int, default = 0
        要显示的按钮, 0: 无, 1: 确定, 2: 确定, 取消 
        类型为 panel, dialog 时生效

    panelheader = string
        panel header 的显示内容 
        类型为 panel, dialog 时生效

    panelheaderBox = script selector
        panel header 的显示内容 
        要显示的脚本模板, 如果需要显示大量 HTML, 应该使用这个属性 
        类型为 panel, dialog 时生效

    panelfooterbox = script selector
        panel footer 的显示内容 
        要显示的脚本模板, 如果需要显示大量 HTML, 应该使用这个属性 
        类型为 panel, dialog 时生效

    panelhideclose = bool, default = false
        是否隐藏关闭按钮 
        类型为 panel, dialog 时生效
```

## 使用实例
```html
<link href='{{path}}/res/default/style.css' rel='stylesheet' />
<script>
    requirejs( [ '{{module}}', '{{basePath}}/JC.Valid/0.2/Valid' ], function( Panel ){
        $(document).delegate( 'button.js_showPanel', 'click', function(){
            JC.hideAllPanel( 1 ); //destory all panel
            var _p = $(this)
                , _panel = new Panel( scriptContent( '#js_scritpTpl') )
                ;
                _panel.show( _p );
        });

        $(document).delegate( 'button.js_showDialog', 'click', function(){
            JC.hideAllPanel( 1 ); //destory all panel
            var _p = $(this)
                , _panel = JC.Dialog( scriptContent( '#js_scritpTpl') )
                ;
                _panel.show();
        });

    }); 
</script>

<button type="button" class="js_showPanel">showPanel</button> 
<button type="button" class="js_showDialog">showDialog</button> 

<script type="text/template" id="js_scritpTpl">
<div class="UPanel UPanelString" style="display:none; width: 600px;" >    
    <form action="./data/test.php" method="POST" >    
        <div class="UPContent">        
            <div class="hd">dom panel</div>        
            <div class="bd">            
                <dl>                
                    <dt><h2>form test</h2></dt>                
                    <dd>
                       <table>
                           <tr>
                               <td>文本框:</td> 
                               <td>
                                    <input type="text" name="txt1" value="" reqmsg="内容" />                
                               </td>
                           </tr>
                        </table>
                    </dd>
                </dl>            
                <div style="text-align:center" class="UButton">                
                    <button type="submit" eventtype="confirm">确定</button>                
                    <button type="button" eventtype="cancel">取消</button>            
                </div>        
            </div>        
            <div class="ft">test footer</div>        
            <span class="close" eventtype="close"></span>    
        </div>
        <!--end UPContent-->    
    </form>
</div>
</script>

```

## 文档参考

1. [JC.Panel 官方文档](http://360.75team.com/~qiushaowei/jc2/docs_api/classes/JC.Panel.html)

