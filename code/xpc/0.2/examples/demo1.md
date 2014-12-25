# 双向通讯

跨域双向通讯的基本示例。

<iframe name="XPC_IFRAME" src="http://qgy18.imququ.com/file/xpc/child1.html"></iframe>

<a href="http://qgy18.imququ.com/file/xpc/child1.html" target="_blank">查看iframe内容</a>

<div>
	<input type="text" id="txt" size="20" /><input id="send" type="button" value="发给跨域iframe" />
</div>
		
<div id="output"></div>

<script>
$(function() {
	require(['{{module}}'], function(XPC) {
		var xpc = new XPC();

		//发送消息
		$('#send').click(function() {
			xpc.send($('#txt').val());
		});

		//接受消息
		$(xpc).on('message', function(e, data) {
			$('#output').html(data + '<br>' + $('#output').html());
		});
	});
});
</script>
