# demo

<style type="text/css">
	.doc-content {
		position: relative;
	}
	#panel dl {
		margin: 0;
	}
	#panel dt {
		background: red;
	}
	#panel dd {
		background: green;
	}
	#panel {
		background: white;
		position: relative;
		width: 500px;
		height: 300px;
		overflow: scroll;
	}

	.list-wrap {
		height: 250px;
		overflow: hidden;
	}

	#tip {
		font-family: Microsoft Yahei;
		font-size: 34px;
		line-height: 50px;

		position: absolute;
		z-index: 1;
		top: 10px;
		right: 50px;

		width: 50px;

		text-align: center;

		color: white;
		background: #5cb642;
	}
</style>

<div id="panel">
	index:<span id="log"></span>
	<div class="list-wrap">
		<div class="list-scroller"></div>
	</div>
	<div id="tip"></div>
</div>
<script type="text/x-handlebars-template" id="template">
	{{#each list}}
		<dl>
			<dt id="t{{i}}" data-key="{{k}}">{{k}}</dt>
			{{#each this.items}}
				<dd class="sugg-item sugg-item-cont">{{this}}</dd>
			{{/each}}
		</dl>
	{{/each}}
</script>

<script type="text/javascript" src="js/lib/zepto.js"></script>
<script type="text/javascript">
$ = Zepto;
require(['module/handlebars/1.0.0/handlebars','module/iscroll/5.1.1/iscroll','{{module}}'], function(_, IScroll, ScrollTips) {
	// 处理demo内容
	var list = [
		{
			k:'a'
		},
		{
			k:'b'
		},
		{
			k:'c'
		},
		{
			k:'d'
		},
		{
			k:'e'
		},
		{
			k:'f'
		},
		{
			k:'g'
		},
		{
			k:'h'
		},
		{
			k:'i'
		}
	];
	
	list = list.map(function(item, index){
		item.items = [];
		item.i = index;
		for(var i=0;i<10;i++){
			item.items.push(item.k+i);
		}
		return item;
	});

	var template = function() {
		var template = Handlebars.compile($('#template').html());
		return function(data){
			var html = template(data);
			return html;
		}
	}();

	var html = template({list:list});
	$('.list-scroller').html(html);


	// scrollTip
	var myScroll = new IScroll($('.list-wrap')[0], {
		probeType: 3,
		hScrollbar:false,
		vScrollbar:false
	});
	var targetList = $(myScroll.scroller).find('dt');
	var scrollActive = false;
	var tipEl = $('#tip');
	var timer;

	function showTip(){
		clearTimeout(timer);
		tipEl.show();
	}
	function hideTip(){
		timer = setTimeout(function(){
			tipEl.hide();
		}, 200);
	}

	window.scrollTip = new ScrollTips({
		element: tipEl,
		itemScroll: myScroll,
		selecters: {
			target: 'dt'
		}
	});
	scrollTip.on('change', function(e, data){
		this.$element.text(targetList.get(data.index).innerHTML);
	}).on('posStart', function(e){
		showTip();
	}).on('posEnd', function(e){
		hideTip();
	});

	scrollTip.refresh();
});
</script>