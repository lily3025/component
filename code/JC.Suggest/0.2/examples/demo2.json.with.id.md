# json and id

<link href='{{path}}/res/default/style.css' rel='stylesheet' />
<style>
    #search-button {
        display: inline-block;
        width: 100px;
        height: 38px;
        _height: 40px;
        margin-left: 5px;
        outline: 0;
        border: 1px solid #3eaf0e;
        box-shadow: 0 1px 1px rgba(0,0,0,0.2);
        -webkit-box-shadow: 0 1px 1px rgba(0,0,0,0.2);
        -moz-box-shadow: 0 1px 1px rgba(0,0,0,0.2);
        background: url('http://p1.qhimg.com/d/_onebox/btn-98-114.png') no-repeat #3eaf0e;
        color: white;
        font: bold 16px arial,sans-serif;
        vertical-align: top;
        cursor: pointer;
    }
    #search-button.hover {
        border: 1px solid #4bbe11;
        background-position: 0 -38px;
    }
    #search-button.mousedown {
        border: 1px solid #4bbe11;
        background-position: 0 -76px;
    }

    dl.defdl > dt {
        font-weight: bold;
        margin: 20px 0;
    }

    .sug_input {
        width: 310px!important;
    }
</style>

<dl class="defdl">
    <dt>Suggest 功能演示</dt>
    <dd>
    <form action="http://www.so.com/s" target="search_frame" class="form1">
        <div class="sug_container">
            <input type="hidden" name="ie" value="utf-8">
            <input type="hidden" name="src" value="360sou_home">
            <div class="sug_wrapper" >
                <input type="text" name="q" 
                    class="sug_input" 
                    autocomplete="off" 
                    x-webkit-speech=""
                    sugwidth="495" 
                    suglayout="dl.js_sugLayout1"
                    sugurl="{{path}}/examples/data/json_data.php?callback={1}&encodein=utf-8&encodeout=utf-8&word={0}"
                    sugneedscripttag="true"
                    sugselectedcallback="sugselectedcallback1"
                    sugdatafilter="sugdatafilter"
                    sugIdSelector="(form input.js_kid"
                />
            </div>
            <input type="submit" id="search-button" value="搜索一下" onmouseover="this.className='hover'" onmousedown="this.className='mousedown'" onmouseout="this.className=''" class="">
            <dl class="sug_layout js_sugLayout1 test1" style="display:none;"></dl>
            <input type="text" value="" class="js_kid" />
        </div>
    </form>
    </dd>

    <dd>
    <hr />
    <form action="http://www.so.com/s" target="search_frame" class="form2">
        <div class="sug_container">
            <input type="hidden" name="ie" value="utf-8">
            <input type="hidden" name="src" value="360sou_home">
            <div class="sug_wrapper" >
                <input type="text" name="q" 
                    class="sug_input" 
                    autocomplete="off" 
                    x-webkit-speech=""
                    sugwidth="495" 
                    suglayout="//dl.sug_layout"
                    sugurl="{{path}}/examples/data/json_data.php?callback={1}&encodein=utf-8&encodeout=utf-8&word={0}"
                    sugneedscripttag="true"
                    sugselectedcallback="sugselectedcallback2"
                    sugIdSelector="(form input.js_kid"
                    value="aa"
                />
            </div>
            <input type="submit" id="search-button" value="搜索一下" onmouseover="this.className='hover'" onmousedown="this.className='mousedown'" onmouseout="this.className=''" class="">
            <dl class="sug_layout js_sugLayout2 test2" style="display:none;"></dl>
            <input type="text" value="14" class="js_kid" />
        </div>
    </form>
    </dd>
</dl>

<iframe src="about:blank" frameborder="1" height="400" width="100%" name="search_frame"></iframe>

<script>

    requirejs( [ 'module/JC.Suggest/0.2/Suggest' ], function( Suggest ){

        JC.debug = true;

        setTimeout( function(){
            //$('input.sug_input').first().focus();
        }, 500);
    });

    function sugselectedcallback1( _keyword ){
        var _ins = this;
        $('form.form1').submit();
    }

    function sugselectedcallback2( _keyword ){
        var _ins = this;
        $('form.form2').submit();
    }

    function sugdatacallback( _data ){ 
        _p._dataCallback( _data ); 
    } 

    function sugdatafilter( _data ){
        var _ins = this;
        JC.log( _data );
        alert( 1 );
        return _data;
    };

</script>
