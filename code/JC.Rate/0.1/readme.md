## 使用说明

### 简介

- 星形评分组件
- 全局访问请使用 JC.Rate
- 面只要引用本脚本, 默认会处理 [ span | label ] class="js_compRate"

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

## html 属性

    totalnum = int, default = 5
        显示分数所用的总星星数量

    maxscore = int, default = 5
        最大分数上限，支持浮点数

    minscore = int, default = 5
        最小分数下限，支持浮点数

    score = int, default = 0
        默认分数

    half = boolean, default = false
        星星是否支持显示半颗星

    cancel = boolean, default = false
        是否需要清零按钮

    hints = string, default = '较差,一般,不错,很好,非常棒'
        鼠标hover时，显示的title，以分号隔开

    hiddenName = string, default = 'score'
        隐藏域控件的 name

## 使用实例
```html
<link href='{{path}}/res/default/style.css' rel='stylesheet' />

<div class="star-wrap">
    <h2>Default:</h2>
    <span class="js_compRate" ></span>
    <h2>Score:</h2>
    <span class="js_compRate" totalnum="7" score="3" maxscore="7" style="display:inline"></span> text after 
    <h2>Half Star:</h2>
    <span class="js_compRate css_test" totalnum="10" score="13" maxscore="21" minScore="0" half="true"></span>
    <h2>Cancel:</h2>
    <span class="js_compRate" score="3" cancel="true"></span>
    <h2>ReadOnly:</h2>
    <span class="js_compRate" score="3" readonly="true"></span>
    <h2>Title:</h2>
    <span class="js_compRate" score="3" hints="1分,2分,3分,4分,5分"></span>
    <h2>Click Callback:</h2>
    <span class="js_compRate js_rateClickedEvent" score="3" rateClicked="rateClicked">
        <input id="score-input" ReadOnly type="text" />
    </span>
    <h2>Inited Callback:</h2>
    <span class="js_compRate js_rateInitedEvent" score="3" readonly="true" hints="1分,2分,3分,4分,5分">
        <input id="score-input2" ReadOnly type="text" />
    </span>
</div>

<script>
    JC.debug = true;

    requirejs( [ '{{src}}' ], function(){
    });

    $( document ).delegate( 'span.js_rateInitedEvent', 'rateInited', function( _evt, _rateIns ){
        var _selector = $( this );
        JC.log( 'rateInited event' );
        $( '#score-input2' ).val( _selector.children( 'input[ name = "score" ]' ).attr( 'value' ) + '分' );
    });

    $( document ).delegate( 'span.js_rateClickedEvent', 'rateClicked', function( _evt, _target, _rateIns ) {
        var star = _target;
        JC.log( 'rate clicked' );
        if( star.hasClass( 'rate-score' ) ){
            $( '#score-input' ).val( star.attr( 'title' ) );
        }
    } );

</script>
```

## 文档参考

1. [JC.{{name}} 官方文档](http://360.75team.com/~qiushaowei/jc2/docs_api/classes/JC.{{name}}.html)

