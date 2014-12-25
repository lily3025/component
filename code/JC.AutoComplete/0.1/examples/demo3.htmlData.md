# html 数据

<div class="ui-sug-mod">
    <input name="ac" type="text" class="js_compAutoComplete ui-sug-ipt" value="" 
        autocomplete="off" 

        cacPopup="/ul.js_compAutoCompleteBox"

        cacLabelKey="data-label"
        cacIdKey="data-id"
        cacBoxWidth="400"

        cacPreventEnter="true" 
        />
    <div style="height:200px"></div>
    <ul class="AC_box js_compAutoCompleteBox" style="display:none;">
        <li data-id="0" data-label="真心英雄联盟">真心英雄联盟</li>
        <li data-id="1" data-label="英雄联盟">英雄联盟</li>
        <li data-id="01" data-label="英雄联盟">英雄联盟</li>
        <li data-id="2" data-label="移动网上营业厅">移动网上营业厅</li>
        <li data-id="3" data-label="音悦台">音悦台</li>
        <li data-id="4" data-label="英语在线翻译">英语在线翻译</li>
        <li data-id="5" data-label="易迅网">易迅网</li>
        <li data-id="6" data-label="一号店">一号店</li>
        <li data-id="7" data-label="英雄联盟">英雄联盟一号店</li>
        <li data-id="8" data-label="一朵晴天">一朵晴天</li>
        <li data-id="9" data-label="yy语音">yy语音</li>
        <li data-id="10" data-label="yy直播">yy直播</li>
        <li data-id="11" data-label="yy频道设计">yy频道设计</li>
        <li data-id="12" data-label="yy网页版">yy网页版</li>
        <li data-id="13" data-label="youku">youku</li>
        <li data-id="14" data-label="yeah">yeah</li>
        <li data-id="15" data-label="yahoo">yahoo</li>
        <li data-id="09" data-label="YY语音">YY语音</li>
        <li data-id="010" data-label="YY直播">YY直播</li>
        <li data-id="011" data-label="YY频道设计">YY频道设计</li>
        <li data-id="012" data-label="YY网页版">YY网页版</li>
        <li data-id="013" data-label="YOUKU">YOUKU</Li>
        <li data-id="014" data-label="YEAH">YEAH</LI>
    </ul>
</div>

<link href='{{path}}/res/default/style.css' rel='stylesheet' />
<style>
    .ui-sug-mod input{ height: 26px; outline: 0; text-indent: 3px; }
    .ui-sug-mod ul{ margin-left: 0!important; }

    .ui-sug-ipt{ 
        max-height: 300px; 
        border: 1px solid #ccc;  
        padding: 0;
        width: 400px!important; 
        overflow-y: auto; 
    }
</style>

<script>
    window.JC = window.JC || { debug: true };

    requirejs( [ '{{module}}' ], function( AutoComplete ){
    }); 
</script>


