# 示例1

<link href='{{path}}/res/default/style.css' rel='stylesheet' />
<link href='{{basePath}}/JC.Valid/0.2/res/default/style.css' rel='stylesheet' />
<script>
    requirejs( [ '{{module}}', '{{basePath}}/JC.Valid/0.2/Valid' ], function( Panel, Valid ){
        $(document).delegate( 'button.js_showPanel', 'click', function(){
            JC.hideAllPanel( 1 ); //destory all panel
            var _p = $(this)
                , _panel = new Panel( JC.f.scriptContent( '#js_scritpTpl') )
                ;
                _panel.find( 'form' ).on( 'submit', function( _evt ){
                    var _sp = $(this);
                    if( !Valid.check( _sp ) ){
                        _evt.preventDefault();
                        return false;
                    }
                    _sp.find('button[type=submit], input[type=submit]').prop( 'disabled', true );
                    setTimeout( function(){ _panel.close(); }, 50 );
                });

                _panel.on( 'confirm', function(){
                    return false;
                });

                _panel.show( _p );
        });

        $(document).delegate( 'button.js_showDialog', 'click', function(){
            JC.hideAllPanel(); //hide all panel
            var _p = $(this)
                , _panel = JC.Dialog( JC.f.scriptContent( '#js_scritpTpl') )
                ;
                _panel.find( 'form' ).on( 'submit', function( _evt ){
                    var _sp = $(this);
                    if( !Valid.check( _sp ) ){
                        _evt.preventDefault();
                        return false;
                    }
                    _sp.find('button[type=submit], input[type=submit]').prop( 'disabled', true );
                    setTimeout( function(){ _panel.close(); }, 50 );
                });

                _panel.on( 'confirm', function(){
                    return false;
                });

                _panel.show();
        });

    }); 
</script>

<button type="button" class="js_showPanel">showPanel</button> 
<button type="button" class="js_showDialog">showDialog</button> 

<script type="text/template" id="js_scritpTpl">
<div class="UPanel UPanelString" style="display:none; width: 600px;" >    
    <form action="./data/test.php" method="POST" >    
        <div class="UPContent">        
            <div class="hd">dom panel</div>        
            <div class="bd">            
                <dl>                
                    <dt><h2>form test</h2></dt>                
                    <dd>
                       <table>
                           <tr>
                               <td>文本框:</td> 
                               <td>
                                    <input type="text" name="txt1" value="" reqmsg="内容" />                
                               </td>
                           </tr>
                        </table>
                    </dd>
                </dl>            
                <div style="text-align:center" class="UButton">                
                    <button type="submit" eventtype="confirm">确定</button>                
                    <button type="button" eventtype="cancel">取消</button>            
                </div>        
            </div>        
            <div class="ft">test footer</div>        
            <span class="close" eventtype="close"></span>    
        </div>
        <!--end UPContent-->    
    </form>
</div>
</script>

