# 基本使用

<div style="font-size:22px;">
	<p>
		本页面已经注册了以下热键：ctrl+r/cmd+r/f5、ctrl+a/cmd+a，试试？
	</p>
	<p>
		<input style="width:90%;" value="在这里试试？不会触发热键！" />
	</p>
</div>

<a href="javascript:location.reload();">点这里刷新页面</a>

<script>
require(['{{module}}'], function(key) {
	key('ctrl+r, ⌘+r, f5', function(){ 
		alert('不要刷新页面！'); 
		return false;
	});

	key('ctrl+a, command+a', function() {
		alert('不能全选！');
		return false;
	});
});
</script>