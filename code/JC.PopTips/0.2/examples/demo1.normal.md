# 常用案例

<link href='{{path}}/res/default/style.css' rel='stylesheet' />
<style> 
</style>

<script>
    window.JC = window.JC || { debug: true };

    requirejs( [ '{{module}}' ], function( PopTips ){
    }); 
</script>

<div>
	<span class="js_compPopTips" style="margin-top:50px; display:inline-block;"  
		content="test data...test data...test data...test data...test data..."  
		theme="green" 
		arrowposition="left"
		
		triggerType="hover"
		poptipsheight="80"
	>
		<span>右边显示</span>
	</span>
</div>

<div>
	<span class="js_compPopTips" style="margin-top:50px; display:inline-block;"  
        htmlContent="|script"
		theme="white" 
		arrowposition="right"
		
		triggerType="hover"
		poptipsheight="80"
	>
		<span>左边显示</span>
        <script type="text/template">
            test.............
            <br />ateatasweasdfa
            <br />asdfasd
        </script>
	</span>
</div>

<div>
	<span class="js_compPopTips" style="margin-top:50px; display:inline-block;"  
		content="test data...test data...test data...test data...test data..."  
		theme="blue" 
		arrowposition="bottom"
		
		triggerType="hover"
		poptipsheight="80"
	>
		<span>上方显示</span>
	</span>
</div>

<div>
	<span class="js_compPopTips" style="margin-top:50px; display:inline-block;"  
        htmlContent="|script"
		theme="yellow" 
		arrowposition="top"
		
		triggerType="hover"
		poptipsheight="80"
	>
		<span>下方显示</span>
        <script type="text/template">
            test.............
            <br />ateatasweasdfa
            <br />asdfasd
        </script>
	</span>
</div>



