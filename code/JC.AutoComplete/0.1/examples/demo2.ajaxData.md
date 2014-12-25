# ajax 数据

<div class="ui-sug-mod">
    <input name="ac" type="text" class="ui-sug-ipt js_compAutoComplete" value="" 
        autocomplete="off" 

        cacPopup="/ul.js_compAutoCompleteBox"
        cacLabelKey="data-label"
        cacIdKey="data-id"
        cacIdSelector="/input.js_bindItem"
        cacStrictData="true"
        cacAjaxDataUrl="{{basePath}}/JC.AutoSelect/0.2/examples/data/shengshi.php"
        cacDataFilter="cacDataFilter"

        cacPreventEnter="true" 
        />
    &nbsp;cacIdSelector: <input type="text" class="js_bindItem" value="" />
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
</script>


