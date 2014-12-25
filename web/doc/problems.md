# 传说中的题目~~

---
<link rel=stylesheet href="css/codemirror.css">

<div id="acm_content">
	正在玩命加载中。。。
</div>

---

<div>解题结果：<span id="acm_result">未提交</span></div>
<br/>
<style>
	#acm_solve { width:350px;height:160px;}
</style>
<div>
	<textarea id="acm_solve" mode="js"></textarea>
	<br/>
	<button id="acm_submit">提交代码</button>
</div>
<script>
	require(['js/util/showdoc', 'js/util/conf', 'js/util/toc', 'js/lib/codemirror.js'], function(getDoc, conf, generateToc){

		var id = location.search.queryUrl('id') || 1001;

		$.get(conf.node_server + "/problem/"+id, 
			function(data){
				//console.log(data)
		    	getDoc('md:' + data.description, function(content) {
		    		$('#acm_content').html(content);
					generateToc($('#acm_content')[0]);
		    		//console.log(content);
		    	});	
			},'json');

		$('#acm_submit').click(function(){

			var code = $('#acm_solve').val();
			//console.log(code);

			if(code){
				$('#acm_result').html('提交中').css('color', 'blue');
				$.post(conf.node_server + "/submit", 
					{
						id: id, 
					  	code: code 
					}, function(data){
						//console.log(data)
						var result = data.result;
						$('#acm_result').html(result)
							.css('color', result == 'accepted'?'green':'red');
					},'json');
			}
		});
	});
</script>
