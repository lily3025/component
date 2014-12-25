## 使用说明

### 简介

- DOM标签拖动选择
- 全局访问请使用 JC.DragSelect
- 页面只要引用本脚本, 默认会处理 div class="js_compDragSelect"

### 组件依赖
    JC.BaseMVC

### 外链形式

```html
<link href='{{path}}/res/default/style.css' rel='stylesheet' />
<link href='{{path}}/res/default/test.css' rel='stylesheet' />
<script src="{{basePath}}/JC.common/0.2/common.js"></script>
<script src="{{basePath}}/JC.BaseMVC/0.1/BaseMVC.js"></script>
<script src="{{src}}"></script>
```

### 模块加载形式
```html
<link href='{{path}}/res/default/style.css' rel='stylesheet' />
<link href='{{path}}/res/default/test.css' rel='stylesheet' />
<script>
    requirejs( [ '{{module}}' ], function( {{name}} ){
        JC.debug = true;
    });
</script>
```

## 可用的 HTML attribute

    cdsConfig = script selector
        拖动内容的配置

        <script type="text/template" class="js_cdsConfig">
        {
           "items": {                                      //响应选择动作的选择器列表
               "td.js_pos_canSelect": {                    //响应选择动作的选择器
                   "addClass": "js_pos_selected"           //选取到的内容 添加的 class
                   , "removeClass": "js_pos_canSelect"     //选取到的内容 清除的 class
                   , "callback":                           //选中内容后的回调
                       function( _items, _type, _ins ){
                           var _selector = this;
                           JC.log( 'callback, td.js_pos_canSelect:', _type, _items.length );
                       }
               }
               , "td.js_pos_selected": {
                   "addClass": "js_pos_canSelect"
                   , "removeClass": "js_pos_selected"
                   , "callback": 
                       function( _items, _type, _ins ){
                           var _selector = this;
                           JC.log( 'callback, td.js_pos_selected:', _type, _items.length );
                       }
               }
           }
           , "realtimeClass": "js_cdsRealtimeEffect"   //实时显示选取内容的 CSS 样式名
           , "callback":                               //选中内容的全局回调
               function( _items, _type, _ins ){
                   var _selector = this;
                   JC.log( 'js_compDragSelect callback', _items.length, JC.f.ts() );
               }
        }
        </script>

    cdsRealtimeEffect = bool, default = false
        是否实时显示选中内容的状态

    cdsRealtimeClass = CSS class name
        显示选中内容的 CSS 样式名

    cdsCallback = function
        选中内容的全局回调
        function cdsCallback( _items, _type, _ins ){
           var _selector = this;
           JC.log( 'js_compDragSelect callback', _items.length, JC.f.ts() );
        }

    cdsItemFilter = function
        选取内容时的过滤函数, 返回 false 将忽略 _item
        function cdsItemFilter( _item, _type, _itemData, _configData ){
           var _selector = this
               , _r = true
               //, _minDate = JC.f.pureDate( JC.f.dateDetect( 'now,1d' ) )
               //, _itemDate = JC.f.parseISODate( _item.data( 'date' ) )
               ;
           //_itemDate.getTime() < _minDate.getTime() && ( _r = false );
           return _r;
        }

    cdsRectMinWidth = int, default = 20
        响应选取时，最小拖动宽度

    cdsRectMinHeight= int, default = 20
        响应选取时，最小拖动高度

    cdsEnableTextSelectable = bool, default = false
        选取内容式，是否启用文本选取

## 使用实例
```html
<link href='{{path}}/res/default/style.css' rel='stylesheet' />
<link href='{{path}}/res/default/test.css' rel='stylesheet' />
<script>
    requirejs( [ '{{module}}' ], function( {{name}} ){
        JC.debug = true;

        function cdsCallback( _items, _type, _ins ){
            var _selector = this;
            JC.log( 'cdsCallback', _items.length, JC.f.ts() );
        }

        function cdsSelectCallback( _items, _type, _ins ){
            var _selector = this;
            JC.log( 'cdsSelectCallback', _items.length, JC.f.ts() );
        }

        function cdsUnselectCallback( _items, _type, _ins ){
            var _selector = this;
            JC.log( 'cdsUnselectCallback', _items.length, JC.f.ts() );
        }
    });
</script>
<dl class="defDl">
    <dt></dt>
    <dd>
        <div class="js_compDragSelect" 
            cdsConfig="/script.js_cdsConfig" 
            cdsRealtimeEffect="true" 
            cdsRealtimeClass="js_cdsRealtimeEffect" 
            cdsCallback="cdsCallback" 
            >
            <script type="text/template" class="js_cdsConfig">
                {
                    "items": {
                        "td.js_pos_canSelect": {
                            "addClass": "js_pos_selected"
                            , "removeClass": "js_pos_canSelect"
                            , "callback": cdsSelectCallback
                        }
                        , "td.js_pos_selected": {
                            "addClass": "js_pos_canSelect"
                            , "removeClass": "js_pos_selected"
                            , "callback": cdsUnselectCallback
                        }
                    }
                }
            </script>
            <table cellspacing='0' style="width:50%" class="unselectable" unselectable="on">
                <thead>
                    <tr>
                        <th>col 1</th>
                        <th>col 2</th>
                        <th>col 3</th>
                        <th>col 4</th>
                        <th>col 5</th>
                        <th>col 6</th>
                        <th>col 7</th>
                        <th>col 8</th>
                        <th>col 9</th>
                        <th>col 10</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="js_pos_canSelect">1</td>
                        <td class="js_pos_canSelect">2</td>
                        <td class="js_pos_canSelect">3</td>
                        <td class="js_pos_canSelect">4</td>
                        <td class="js_pos_canSelect">5</td>
                        <td class="js_pos_canSelect">6</td>
                        <td class="js_pos_canSelect">7</td>
                        <td class="js_pos_canSelect">8</td>
                        <td class="js_pos_canSelect">9</td>
                        <td class="js_pos_canSelect">10</td>
                    </tr>
                    <tr>
                        <td class="js_pos_canSelect">1</td>
                        <td class="js_pos_canSelect">2</td>
                        <td class="js_pos_canSelect">3</td>
                        <td class="js_pos_canSelect">4</td>
                        <td class="js_pos_canSelect">5</td>
                        <td class="js_pos_canSelect">6</td>
                        <td class="js_pos_canSelect">7</td>
                        <td class="js_pos_canSelect">8</td>
                        <td class="js_pos_canSelect">9</td>
                        <td class="js_pos_canSelect">10</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </dd>
</dl>
```

## 文档参考

1. [JC.DragSelect 官方文档](http://360.75team.com/~qiushaowei/jc2/docs_api/classes/JC.DragSelect.html)

