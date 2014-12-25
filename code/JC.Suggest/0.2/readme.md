## 使用说明

### 简介

- JC.Suggest 是一个输入提示组件
- 使用响应式初始化, 当文本框 focus的时候, 会去初始化可识别的 Suggest 功能

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
    	//...
    });
</script>
```
### 调用参数
    JC.Suggest ( _selector )
        Parameters:
            _selector Selector | String

        Returns:
            Suggest Instance

### input[type=text]可用的 HTML attribute
    sugwidth: int
        显示列表的宽度

    suglayout: selector
        显示列表的容器

    sugdatacallback: string
        请求 JSONP 数据的回调名 
        注意: 是字符串, 不是函数, 并且确保 window 下没有同名函数

    suginitedcallback: string
        初始化完毕后的回调名称

    sugurl: string
        数据请求 URL API 
        例: http://sug.so.360.cn/suggest/word?callback={1}&encodein=utf-8&encodeout=utf-8&word={0} 
        {0}=关键词, {1}=回调名称

    sugqueryinterval: int, default = 300
        设置用户输入内容时, 响应的间隔, 避免不必要的请求

    sugneedscripttag: bool, default=true
        是否需要 自动添加 script 标签 

        Sugggest 设计为支持三种数据格式: JSONP, AJAX, static data 
            目前只支持 JSONP 数据

    sugselectedcallback: function
        用户鼠标点击选择关键词后的回调

    sugdatafilter: function
        数据过滤回调

    sugsubtagname: string, default = dd
        显式定义 suggest 列表的子标签名

    suglayouttpl: string
        显式定义 suggest 列表显示模板

    sugautoposition: bool, default = false
        式声明是否要自动识别显示位置

    sugoffsetleft: int, default = 0
        声明显示时, x轴的偏移像素

    sugoffsettop: int, default = 0
        声明显示时, y轴的偏移像素

    sugoffsetwidth: int, default = 0
        首次初始化时, layout的偏移宽度

    sugplaceholder: selector
        声明自动定位时, 显示位置的占位符标签

    sugprevententer: bool, default = false
        回车时, 是否阻止默认事件, 为真将阻止表单提交事件

    sugIdSelector = selector
        保存 id 的选择器( 只有关键词为 json格式的时候才会生效, { id: 'string', name: 'string' } )

## 使用实例
```html
<form action="http://www.so.com/s" target="search_frame" class="form1">
    <div class="sug_container">
        <input type="hidden" name="ie" value="utf-8">
        <input type="hidden" name="src" value="360sou_home">
        <div class="sug_wrapper" style="width: 310px!important" >
            <input type="text" name="q" 
                class="sug_input" style="width: 300px!important"
                autocomplete="off" 
                x-webkit-speech=""
                sugurl="http://sug.so.360.cn/suggest/word?callback={1}&encodein=utf-8&encodeout=utf-8&word={0}"
                sugneedscripttag="true"
                sugselectedcallback="sugselectedcallback1"
                sugplaceholder="//div.sug_wrapper"
                sugoffsetleft="0"
                sugoffsettop="3"
                sugoffsetwidth="2"
            />
        </div>
        <input type="submit" id="search-button" value="搜索一下" onmouseover="this.className='hover'" onmousedown="this.className='mousedown'" onmouseout="this.className=''" class="">
    </div>
</form>

<link href='{{path}}/res/default/style.css' rel='stylesheet' />

<script>
function sugselectedcallback1(keyword) {
    window.console && window.console.log( 'your keyword~ ' + keyword );
}

requirejs(['{{module}}'], function( Suggest ){ 

});
</script>

<style>
	body{margin:20px 40px}
	#search-button{display:inline-block;width:100px;height:38px;_height:40px;margin-left:5px;outline:0;border:1px solid #3eaf0e;box-shadow:0 1px 1px rgba(0,0,0,0.2);-webkit-box-shadow:0 1px 1px rgba(0,0,0,0.2);-moz-box-shadow:0 1px 1px rgba(0,0,0,0.2);background:url(http://p1.qhimg.com/d/_onebox/btn-98-114.png) no-repeat #3eaf0e;color:#FFF;font:bold 16px arial,sans-serif;vertical-align:top;cursor:pointer}
	#search-button.hover{border:1px solid #4bbe11;background-position:0 -38px}
	#search-button.mousedown{border:1px solid #4bbe11;background-position:0 -76px}
	.sug_container{position:static!important}
	dl.defdl > dt{font-weight:700;margin:20px 0}
</style>
```

## 文档参考

1. [JC.Suggest 官方文档](http://360.75team.com/~qiushaowei/jc2/docs_api/classes/JC.Suggest.html)

