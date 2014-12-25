# 基本示例

<h2>只显示提示, 阻止回车提交</h2>
<form>
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
                sugselectedcallback="sugselectedcallbackShow"
                sugplaceholder="//div.sug_wrapper"
                sugoffsetleft="0"
                sugoffsettop="3"
                sugoffsetwidth="2"
                sugprevententer="true"
            />
        </div>
    </div>
</form>

<h2>选择提示后进行表单查询</h2>
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
    var _ins = this;
    $('form.form1').submit();
}

function sugselectedcallbackShow( _keycode ){
    var _ins = this;
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
