# lazyload

<style>
	.lazy{width:24%;}
</style>

<script>
	require(['{{module}}'], function(_){
		var start = 1 + Math.ceil(20 * Math.random());
		var $wrap = $('<div></div>');
		$.get('http://api.mse.hao.360.cn/index/showlist?start='+start+'&limit=100&otag=4bd537',function(data){
			data.records.forEach(function(item){
				if(item.images[0]){
					$wrap.append('<img class="lazy" data-original="'+item.images[0]+'">');
				}
			});
			$('#readme').append($wrap);
			$('img.lazy').lazyload({effect:'fadeIn'});
		},'jsonp');
	});
</script>