# JS算法

给小伙伴们提供一个练习JS和挑战算法的地方

---

<style>
.acm_title {
	margin-left: 20px;
}
.acm_solvelog {
	float: right;
	width: 180px;
	margin-right: 15%;
}
.low {
	color: red;
}
.high {
	color: green;
}
</style>

<!--[if lte IE 9]>
	<style>#acm_content {display:none;}</style>
	<div style="color:red;">本页面需要使用支持 <a href="http://caniuse.com/#search=cors">CORS</a>（Chrome、Firefox、IE10 等） 的浏览器访问。</div>
<![endif]-->

<div id="acm_content">
	正在玩命加载中。。。
</div>

<script>
	require(['js/util/conf'], function(conf){
		var firstLoad = true;
		$.get(conf.node_server + "/contest/100", 
			function(data){
				//console.log(data)
				if(firstLoad){
					$('#acm_content').html('');
					firstLoad = false;
				}
				var content = [$('#acm_content').html()];
				content.push('<h2>', data.title, '</h2>');
				content.push('<ul>');

				for(var id in data.problems){
					content.push('<li>', id)
					content.push(' <a class="acm_title" href="doc.html?doc=problems&id=', id, '">');

					content.push(data.problems[id], '</a>');

					var solvelog = data.solvelogs[id];
					var count = solvelog.error + solvelog.accepted;
					var percent = solvelog.accepted / count;
					if(!isNaN(percent)){ 
						var level = "low";
						if(percent > 0.7){
							level = "high";
						}
						percent = '正确率：<span class="' + level + '">' + Math.round(percent * 100) + '%</span>';
					}else{
						percent = '';
					}

					content.push('<a class="acm_solvelog" href="###">答题：' ,count,'次；',percent, '</a>');

					content.push('</li>')
				}
				content.push('</ul>');

				$('#acm_content').html(content.join(''));
			},'json').error(function(e) {$('#acm_content').html('加载失败（通常是跨域了，注意查看 Chrome 控制台错误信息）！');});
	});
</script>