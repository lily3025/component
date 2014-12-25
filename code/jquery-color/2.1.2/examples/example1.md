# 颜色动画

<div id="clickme" style="width:200px;height:120px;line-height:120px;text-align:center;font-size:24px;cursor:pointer;">
	<i class="icon-html5"></i> 点我吧
</div>

```javascript
$('body')
	.stop()
	.animate({'background-color' : 'red'}, 2000)
	.animate({'background-color' : 'green'}, 2000)
	.animate({'background-color' : 'blue'}, 2000)
	.animate({'background-color' : color}, 2000);
```

<script>
    require(['{{module}}'], function(_) {
    	//body 原始颜色
    	var color = $.Color($('body'), 'background-color');

    	$('#clickme').click(function() {
			$('body')
				.stop()
				.animate({'background-color' : 'red'}, 2000)
				.animate({'background-color' : 'green'}, 2000)
				.animate({'background-color' : 'blue'}, 2000)
				.animate({'background-color' : color}, 2000);
    	});
    });
</script>
