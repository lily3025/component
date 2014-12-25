# 动画算子示例

<style>
	dt{font-weight:bold;padding:3px}
	dd{background:#F0F7F9;margin:0}
	.container{height:30px;position:relative}
	.move{background:#6B90DA;height:30px;width:30px;position:absolute;left:100px;cursor:pointer;}
</style>

点击蓝色方块开始播放，或者 <input class="play" type="button" value="全部播放">

<dl>
	<dt>1. easeNone（匀速）</dt>
	<dd><div class="container"><div class="move"></div></div></dd>
	<dt>2. easeIn（加速）</dt>
	<dd><div class="container"><div class="move"></div></div></dd>
	<dt>3. easeOut（减速）</dt>
	<dd><div class="container"><div class="move"></div></div></dd>
	<dt>4. easeBoth（加速开始减速结束）</dt>
	<dd><div class="container"><div class="move"></div></div></dd>
	<dt>5. easeInStrong（加速·强化）</dt>
	<dd><div class="container"><div class="move"></div></div></dd>
	<dt>6. easeOutStrong（减速·强化）</dt>
	<dd><div class="container"><div class="move"></div></div></dd>
	<dt>7. easeBothStrong（加速开始减速结束·强化）</dt>
	<dd><div class="container"><div class="move"></div></div></dd>
	<dt>8. elasticIn（弹性开始）</dt>
	<dd><div class="container"><div class="move"></div></div></dd>
	<dt>9. elasticOut（弹性结束）</dt>
	<dd><div class="container"><div class="move"></div></div></dd>
	<dt>10. elasticBoth（弹性开始弹性结束）</dt>
	<dd><div class="container"><div class="move"></div></div></dd>
	<dt>11. backIn（退后开始）</dt>
	<dd><div class="container"><div class="move"></div></div></dd>
	<dt>12. backOut（越界结束）</dt>
	<dd><div class="container"><div class="move"></div></div></dd>
	<dt>13. backBoth（退后开始越界结束）</dt>
	<dd><div class="container"><div class="move"></div></div></dd>
	<dt>14. bounceIn（跳动开始）</dt>
	<dd><div class="container"><div class="move"></div></div></dd>
	<dt>15. bounceOut（跳动结束）</dt>
	<dd><div class="container"><div class="move"></div></div></dd>
	<dt>16. bounceBoth（跳动开始跳动结束）</dt>
	<dd><div class="container"><div class="move"></div></div></dd>
</dl>

点击蓝色方块开始播放，或者 <input class="play" type="button" value="全部播放">

<script>
require(['{{module}}'],function(Easing) {
	var easings = [		//算子列表
		"easeNone",
		"easeIn",
		"easeOut",
		"easeBoth",
		"easeInStrong",
		"easeOutStrong",
		"easeBothStrong",
		"elasticIn",
		"elasticOut",
		"elasticBoth",
		"backIn",
		"backOut",
		"backBoth",
		"bounceIn",
		"bounceOut",
		"bounceBoth"
	];

	$(".move").each(function(i) {
		var el = $(this);
		el.click(function(e){
			el.animate({'left' : '+500'}, 2000, easings[i], function() {
				setTimeout(function() {
					el.css('left', '100px');
				}, 500);
			});
		});
	});

	$('input.play').click(function(e) {
		$('.move').click();
		return false;
	});
});
</script>