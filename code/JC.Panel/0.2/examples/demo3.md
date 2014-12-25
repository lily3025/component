# Dialog 示例
<dl class="def">
    <dt>JC.Panel 示例</dt>
    <dd>
        <button type="button" class="js_panel">默认JC.Dialog</button>
    </dd>
    <dd>
        <dl>
            <dt>manual</dt>
            <dd>
                <button type="button" class="js_panel_alert" >JC.Dialog.alert(msg)</button>
                <button type="button" class="js_panel_confirm" >JC.Dialog.confirm(msg)</button>
                <button type="button" class="js_panel_msgbox" >JC.Dialog.msgbox(msg)</button>
            </dd>
        </dl>
    </dd>
    <dd>
        <dl>
            <dt>html attr, paneltype = Dialog.alert</dt>
            <dd>
                 <button type="button" 
                    paneltype="Dialog.alert" 
                    panelcallback="userCallback" 
                    panelstatus="0" 
                    panelmsg="msg1"
                    panelclickclose="true"
                    >success</button>
                <button type="button" 
                    paneltype="Dialog.alert" 
                    panelcallback="userCallback1" 
                    panelstatus="1" 
                    panelmsg="msg2msg2msg2msg2msg2msg2msg2msg2msg2msg2msg2"
                    >error</button>
                <button type="button" 
                    paneltype="Dialog.alert" 
                    panelcallback="userCallback2" 
                    panelstatus="2" 
                    panelmsg="msgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgms
                    gmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsg"
                    >alert</button>
                <span>
                    <button type="button" 
                        paneltype="Dialog.alert" 
                        panelcallback="userCallback2" 
                        panelmsgbox="/script"
                        panelstatus="2"
                        >Dialog.alert with script template</button>
                    <script type="text/template">
                        <a href="javascript:;">test</a>
                        , <a href="javascript:;">test</a>
                        <a href="javascript:;">test</a>
                        <a href="javascript:;">test</a>
                        <a href="javascript:;">test</a>
                        <a href="javascript:;">test</a>
                        <a href="javascript:;">test</a>
                        <a href="javascript:;">test</a>
                        <a href="javascript:;">test</a>
                        <a href="javascript:;">test</a>
                        <a href="javascript:;">test</a>
                        <a href="javascript:;">test</a>
                        <a href="javascript:;">test</a>
                        <a href="javascript:;">test</a>
                    </script>
                </span>
            </dd>
        </dl>
    </dd>
    <dd>
        <dl>
            <dt>html attr, paneltype = Dialog.confirm</dt>
            <dd>
               <button type="button" 
                    paneltype="Dialog.confirm" 
                    panelcallback="userCallback" 
                    paneltype="0" 
                    panelmsg="msg1"
                    panelclickclose="true"
                    >success</button>
                <button type="button" 
                    paneltype="Dialog.confirm" 
                    panelcallback="userCallback1" 
                    panelstatus="1" 
                    panelmsg="msg2msg2msg2msg2msg2msg2msg2msg2msg2msg2msg2"
                    >error</button>
                <button type="button" 
                    paneltype="Dialog.confirm" 
                    panelcallback="userCallback2" 
                    panelstatus="2" 
                    panelmsg="msgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgms
                    gmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsg"
                    >alert</button>
                <span>
                    <button type="button" 
                        paneltype="Dialog.confirm" 
                        panelcallback="userCallback2" 
                        panelmsgbox="/script"
                        panelstatus="2"
                        >Dialog.confirm with script template</button>
                    <script type="text/template">
                        <a href="javascript:;">test</a>
                        , <a href="javascript:;">test</a>
                        <a href="javascript:;">test</a>
                        <a href="javascript:;">test</a>
                        <a href="javascript:;">test</a>
                        <a href="javascript:;">test</a>
                        <a href="javascript:;">test</a>
                        <a href="javascript:;">test</a>
                        <a href="javascript:;">test</a>
                        <a href="javascript:;">test</a>
                        <a href="javascript:;">test</a>
                        <a href="javascript:;">test</a>
                        <a href="javascript:;">test</a>
                        <a href="javascript:;">test</a>
                    </script>
                </span>
            </dd>
        </dl>
    </dd>
    <dd>
        <dl>
            <dt>html attr, paneltype = Dialog.msgbox</dt>
            <dd>
                <button type="button" 
                    paneltype="Dialog.msgbox" 
                    panelcallback="userCallback" 
                    panelstatus="0" 
                    panelmsg="msg1"
                    panelclickclose="true"
                    >success</button>
                <button type="button" 
                    paneltype="Dialog.msgbox" 
                    panelcallback="userCallback1" 
                    panelstatus="1" 
                    panelmsg="msg2msg2msg2msg2msg2msg2msg2msg2msg2msg2msg2"
                    >error</button>
                <button type="button" 
                    paneltype="Dialog.msgbox" 
                    panelcallback="userCallback2" 
                    panelstatus="2" 
                    panelmsg="msgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgms
                    gmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsg"
                    >alert</button>
                <span>
                    <button type="button" 
                        paneltype="Dialog.msgbox" 
                        panelcallback="userCallback2" 
                        panelmsgbox="/script"
                        panelstatus="2"
                        >Dialog.msgbox with script template</button>
                    <script type="text/template">
                        <a href="javascript:;">test</a>
                        , <a href="javascript:;">test</a>
                        <a href="javascript:;">test</a>
                        <a href="javascript:;">test</a>
                        <a href="javascript:;">test</a>
                        <a href="javascript:;">test</a>
                        <a href="javascript:;">test</a>
                        <a href="javascript:;">test</a>
                        <a href="javascript:;">test</a>
                        <a href="javascript:;">test</a>
                        <a href="javascript:;">test</a>
                        <a href="javascript:;">test</a>
                        <a href="javascript:;">test</a>
                        <a href="javascript:;">test</a>
                    </script>
                </span>
            </dd>
        </dl>
    </dd>
    <dd>
        <dl>
            <dt>html attr, paneltype = Dialog</dt>
            <dd>
                <button type="button" 
                    paneltype="dialog" 
                    panelcallback="userCallback" 
                    panelstatus="0" 
                    panelmsg="msg1"
                    panelheader="test dialog~"
                    panelfooter="test dialog footer~"
                    >panelheader + panelfooter</button>

                <button type="button" 
                    paneltype="dialog" 
                    panelcallback="userCallback" 
                    panelstatus="0" 
                    panelmsg="msg1msg1msg1msg1msg1msg1msg1msg1msg1msg1msg1msg1msg1msg1msg1msg1msg1msg1msg1msg1msg1msg1msg1msg1msg1ms
                    g1msg1msg1msg1msg1msg1msg1msg1msg1msg1msg1msg1msg1msg1msg1msg1msg1msg1msg1msg1msg1msg1msg1msg1msg1msg1"
                    panelhideclose="true"
                    panelbutton="1"
                    >panelbutton = 1, panelhideclose = true</button>

                <button type="button" 
                    paneltype="dialog" 
                    panelcallback="userCallback" 
                    panelstatus="0" 
                    panelmsg="mmsg1msg1msg1msg1msg1msg1msg1msg1msg1msg1sg1"
                    panelbutton="2"
                    >panelbutton = 2</button>

                <span>
                    <button type="button" 
                        paneltype="dialog" 
                        panelcallback="userCallback2" 
                        panelmsgbox="/script"
                        panelstatus="2"
                        >Dialog with script template</button>
                    <script type="text/template">
                        <a href="javascript:;">test</a>
                        <a href="javascript:;">test</a>
                        <a href="javascript:;">test</a>
                        <a href="javascript:;">test</a>
                        <a href="javascript:;">test</a>
                        <a href="javascript:;">test</a>
                        <a href="javascript:;">test</a>
                        <a href="javascript:;">test</a>
                        <a href="javascript:;">test</a>
                        <a href="javascript:;">test</a>
                        <a href="javascript:;">test</a>
                        <a href="javascript:;">test</a>
                        <a href="javascript:;">test</a>
                        <a href="javascript:;">test</a>
                    </script>
                </span>
            </dd>
        </dl>
    </dd>

</dl>

<link href='{{path}}/res/default/style.css' rel='stylesheet' />
<script>
    requirejs( [ '{{module}}' ], function( Panel ){
    }); 

    var count = 1;
    var btnstr = [
        '<div style="text-align:center" class="UButton">'
        , '<button type="button" eventtype="confirm">确定</button>'
        , '<button type="button" eventtype="cancel">取消</button>\n'
        , '</div>'
    ].join('');

    $(document).delegate( 'button.js_panel', 'click', function(_evt){
        tmpPanel = JC.Dialog( '默认Dialog' + count, 'body ' + count + btnstr, 'footer ' + count);
        count++;
    });

    $(document).delegate( 'button.js_panel_alert', 'click', function(_evt){
        tmpPanel = JC.Dialog.alert( 'user manual JC.Dialog.alert ' + count, 1 );
        tmpPanel.on('confirm', function( _evt, _panel ){ 
            JC.log('another uaer callback'); 
        });

        count++;
    });

    $(document).delegate( 'button.js_panel_confirm', 'click', function(_evt){
        tmpPanel = JC.Dialog.confirm( 'user manual JC.Dialog.confirm ' + count, 2 );
        tmpPanel.on('confirm', function( _evt, _panel ){ 
            JC.log('another uaer callback'); 
        });

        count++;
    });

    $(document).delegate( 'button.js_panel_msgbox', 'click', function(_evt){
        tmpPanel = JC.Dialog.msgbox( 'user manual JC.Dialog.msgbox ' + count, 0 );
        tmpPanel.on('confirm', function( _evt, _panel ){ 
            JC.log('another uaer callback'); 
        });
        count++;
    });


    function userCallback( _evt, _panel ){
        JC.log( 'userCallback ' + (count++) );
    }

    function userCallback1( _evt, _panel ){
        JC.log( 'userCallback1 ' + (count++) );
    }

    function userCallback2( _evt, _panel ){
        JC.log( 'userCallback2 ' + (count++) );
    }

</script>

