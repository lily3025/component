# 带验证案例

<link href='{{path}}/res/default/style.css' rel='stylesheet' />
<link href='{{basePath}}/JC.Valid/0.2/res/default/style.css' rel='stylesheet' />
<style> 
    body{
        padding: 0;
        margin: 0;
    }

    input{
        zoom: 1;
        width: 218px;
        height: 14px;
        padding: 7px 32px 7px 4px;
        border: 1px solid #b9bcbe;
        overflow: hidden;
        padding: 8px 32px 5px 4px\9;
        border-radius: 3px;
        line-height: 1;
        height: 14px;
        overflow: hidden;
        outline: 0;
    }
    
    dd{
        padding-bottom: 20px;
    }
</style>

<script>
    window.JC = window.JC || { debug: true };

    requirejs( [ '{{module}}', '{{basePath}}/JC.Valid/0.2/Valid.js' ], function( DCalendar, Valid ){
    }); 

</script>

<dl>
    <dd>
        <input type="text" class="calendar" value="" 
        datatype="ddate" 
        reqmsg="日期" 
        />
    </dd>

    <dd>
        <input type="text" class="calendar" value="asdfas" 
        datatype="ddate" 
        reqmsg="日期" 
        errmsg="请填写正确的日期" 
        />
    </dd>

    <dd>
        <input type="text" class="calendar" value="2013-12-25" 
        datatype="ddate" 
        reqmsg="日期" 
        />
    </dd>

    <dd>
        <input type="text" class="calendar" value="" 
        datatype="drange" 
        reqmsg="日期" 
        errmsg="请填写正确的日期范围"
        />
        <input type="text" class="calendar" value="" 
        datatype="drange" 
        reqmsg="日期" 
        errmsg="请填写正确的日期范围"
        />
        <em class="error"></em>
    </dd>
</dl>
