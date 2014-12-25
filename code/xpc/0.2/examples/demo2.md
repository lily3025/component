# 快速通讯

多 iframe 快速通讯示例。

<iframe name="XPC_IFRAME" src="http://qgy18.imququ.com/file/xpc/child2.html" style="float:left;margin-right:10px;"></iframe>

<iframe name="THIS_IS_A_XPC_IFRAME" src="http://qgy18.imququ.com/file/xpc/child2.html"></iframe>

<a href="http://qgy18.imququ.com/file/xpc/child2.html" target="_blank">查看iframe内容</a>

<div>
	<input style="display:none;" type="button" id="btn" value="开始" />
</div>

<div id="s1"></div>

<div id="s2"></div>
<script>
$(function() {
	require(['{{module}}'], function(XPC) {
		var xpc1 = new XPC(),
			xpc2 = new XPC({'iframeName' : 'THIS_IS_A_XPC_IFRAME'});
		
		var count1 = 0,
			count2 = 0;

		var timer1 = null,
			timer2 = null;

		$('#btn').show().click(function(e) {
			if(timer1 || timer2) {
				clearInterval(timer1);
				clearInterval(timer2);
				timer1 = null;
				timer2 = null;

				$(this).val('开始');
			} else {
				timer1 = setInterval(function() {
					count1++;
					$('#s1').html('给第一个iframe发送消息数：' + count1);

					xpc1.send('e.data :' + count1);
				}, 10);

				timer2 = setInterval(function() {
					count2++;
					$('#s2').html('给第二个iframe发送消息数：' + count2);

					xpc2.send('e.data :' + count2);
				}, 30);

				$(this).val('暂停');
			}

			return false;
		});
	});
});
</script>