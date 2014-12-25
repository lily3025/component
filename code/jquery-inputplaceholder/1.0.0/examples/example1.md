# 为输入框添加空白占位文字

<style type="text/css">
#email{ border:1px solid #ddd; padding:3px; height:16px; width:180px; }
#email:focus{ border-color:#000; }
</style>

<div>
    <label for="email">电子邮箱：</label><input type="text" id="email" />
</div>            

    
<div>
    <input type="button" id="btn1" value="禁用" /> &nbsp;
    <input type="button" id="btn2" value="启用" />
</div>    


<script>
    require(['{{module}}'], function() {
        $(function(){
            var ip = new $.ui.InputPlaceholder( '#email', {
                text : '请输入邮箱'
            });
            
            $( '#btn1' ).on( 'click', function(){
                ip.disable();
            });
            
            $( '#btn2' ).on( 'click', function(){
                ip.enable();
            });    
        });
    });
</script>
