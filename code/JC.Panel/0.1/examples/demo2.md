# Panel 示例
<dl class="def">
    <dt>JC.Panel 示例</dt>
    <dd>
        <button type="button" class="js_panel">默认JC.Panel</button>
    </dd>
    <dd>
        <dl>
            <dt>manual</dt>
            <dd>
                <button type="button" class="js_panel_alert" >JC.alert(msg)</button>
                <button type="button" class="js_panel_confirm" >JC.confirm(msg)</button>
                <button type="button" class="js_panel_msgbox" >JC.msgbox(msg)</button>
            </dd>
        </dl>
    </dd>
    <dd>
        <dl>
            <dt>html attr, paneltype = alert</dt>
            <dd>
                <button type="button" 
                    paneltype="alert" 
                    panelcallback="userCallback" 
                    panelstatus="0" 
                    panelmsg="msg1"
                    >success</button>

                <button type="button" 
                    paneltype="alert" 
                    panelcallback="userCallback1" 
                    panelstatus="1" 
                    panelmsg="msg2msg2msg2msg2msg2msg2msg2msg2msg2msg2msg2"
                    >error</button>

                <button type="button" 
                    paneltype="alert" 
                    panelcallback="userCallback2" 
                    panelstatus="2" 
                    panelmsg="msgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgms
                    msgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgms"
                    >alert</button>
                <span>
                    <button type="button" 
                        paneltype="alert" 
                        panelcallback="userCallback2" 
                        panelmsgbox="/script"
                        panelstatus="2"
                        >alert with script template</button>
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
            <dt>html attr, paneltype = confirm</dt>
            <dd>
                <button type="button" 
                    paneltype="confirm" 
                    panelcallback="userCallback" 
                    paneltype="0" 
                    panelmsg="msg1"
                    >success</button>
                <button type="button" 
                    paneltype="confirm" 
                    panelcallback="userCallback1" 
                    panelstatus="1" 
                    panelmsg="msg2msg2msg2msg2msg2msg2msg2msg2msg2msg2msg2"
                    >error</button>
                <button type="button" 
                    paneltype="confirm" 
                    panelcallback="userCallback2" 
                    panelstatus="2" 
                    panelmsg="msgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgm
                    sgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsg"
                    >alert</button>
                <span>
                    <button type="button" 
                        paneltype="confirm" 
                        panelcallback="userCallback2" 
                        panelmsgbox="/script"
                        panelstatus="2"
                        >confirm with script template</button>
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
            <dt>html attr, paneltype = msgbox</dt>
            <dd>
                <button type="button" 
                    paneltype="msgbox" 
                    panelcallback="userCallback" 
                    panelstatus="0" 
                    panelmsg="msg1"
                    >success</button>
                <button type="button" 
                    paneltype="msgbox" 
                    panelcallback="userCallback1" 
                    panelstatus="1" 
                    panelmsg="msg2msg2msg2msg2msg2msg2msg2msg2msg2msg2msg2"
                    >error</button>
                <button type="button" 
                    paneltype="msgbox" 
                    panelcallback="userCallback2" 
                    panelstatus="2" 
                    panelmsg="msgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgms
                    gmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsgmsg"
                    >alert</button>
                <span>
                    <button type="button" 
                        paneltype="msgbox" 
                        panelcallback="userCallback2" 
                        panelmsgbox="/script"
                        panelstatus="2"
                        >msgbox with script template</button>
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
            <dt>html attr, paneltype = Panel</dt>
            <dd>
                <button type="button" 
                    paneltype="panel" 
                    panelcallback="userCallback" 
                    panelstatus="0" 
                    panelmsg="msg1"
                    panelheader="test panel~"
                    panelfooter="test footer~"
                    >panelheader + panelfooter</button>

                <button type="button" 
                    paneltype="panel" 
                    panelcallback="userCallback" 
                    panelstatus="0" 
                    panelmsg="msg1msg1msg1msg1msg1msg1msg1msg1msg1msg1msg1msg1msg1msg1msg1msg1msg1msg1msg1msg1msg1msg1msg1msg1msg1ms
                    g1msg1msg1msg1msg1msg1msg1msg1msg1msg1msg1msg1msg1msg1msg1msg1msg1msg1msg1msg1msg1msg1msg1msg1msg1msg1"
                    panelhideclose="true"
                    panelbutton="1"
                    >panelbutton = 1, panelhideclose = true</button>

                <button type="button" 
                    paneltype="panel" 
                    panelcallback="userCallback" 
                    panelstatus="0" 
                    panelmsg="mmsg1msg1msg1msg1msg1msg1msg1msg1msg1msg1sg1"
                    panelbutton="2"
                    >panelbutton = 2</button>

                <span>
                    <button type="button" 
                        paneltype="panel" 
                        panelcallback="userCallback2" 
                        panelmsgbox="/script"
                        panelstatus="2"
                        >panel with script template</button>
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
        tmpPanel = new JC.Panel( '默认panel ' + count, 'body ' + count + btnstr, 'footer ' + count);
        tmpPanel.show( this );
        count++;
    });

    $(document).delegate( 'button.js_panel_alert', 'click', function(_evt){
        tmpPanel = JC.alert( 'user manual JC.alert ' + count, this, 1 );
        tmpPanel.on('confirm', function( _evt, _panelIns ){ 
            var _btn = $(this);
            JC.log( _btn.prop( 'nodeName' ), 'another uaer callback' ); 
        });

        count++;
    });

    $(document).delegate( 'button.js_panel_confirm', 'click', function(_evt){
        tmpPanel = JC.confirm( 'user manual JC.confirm ' + count, this, 2 );
        tmpPanel.on('confirm', function( _evt, _panelIns ){ 
            var _btn = $(this);
            JC.log('another uaer callback'); 
        });

        count++;
    });

    $(document).delegate( 'button.js_panel_msgbox', 'click', function(_evt){
        tmpPanel = JC.msgbox( 'user manual JC.msgbox ' + count, this, 0 );
        tmpPanel.on('confirm', function( _evt, _panelIns ){ 
            var _btn = $(this);
            JC.log('another uaer callback'); 
        });

        count++;
    });

    function userCallback( _evt, _panel ){
        JC.log( 'userCallback ' + (count++) );
        JC.log( '_panel.triggerSelector(): ' + (_panel.triggerSelector() ? _panel.triggerSelector().html() : '') );
    }

    function userCallback1( _evt, _panel ){
        JC.log( 'userCallback1 ' + (count++) );
        JC.log( '_panel.triggerSelector(): ' + (_panel.triggerSelector() ? _panel.triggerSelector().html() : '') );
    }

    function userCallback2( _evt, _panel ){
        JC.log( 'userCallback2 ' + (count++) );
        JC.log( '_panel.triggerSelector(): ' + (_panel.triggerSelector() ? _panel.triggerSelector().html() : '') );
    }

    function hideAllPanel(){
        JC.hideAllPanel();
        $('div.UPanelString').remove();
    }

</script>


