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

	#elevator {
		position: absolute;
		right: 10px;
		top: 50%;
		-webkit-transform: translateY(-50%);
		display: flex;
		flex-direction: column;
		font-size: 20px;
		line-height: 1;
	}
	#elevator li {
		flex: 0 1 1em;
		background: blue;
		width: 2em;
		text-align: center;
		color: white;
		border: 1px solid black;
	}
</style>

<div id="panel">
	index:<span id="log"></span>
	<div class="list-wrap">
		<div class="list-scroller"></div>
	</div>
	<ul id="elevator"></ul>
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
require(['{{module}}','module/iscroll/5.1.1/iscroll','module/handlebars/1.0.0/handlebars'], function(Elevator, IScroll, _) {
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


	// 使用elevator
	var myScroll = new IScroll($('.list-wrap')[0], {hScrollbar:false,vScrollbar:false});

	var elevator = new Elevator({
		element: '#elevator',
		selecters: {
			target: 'dt'
		},
		targetContainer: myScroll.wrapper
	});
	elevator.on('jump', function(e, data){
		console.log(data);
		myScroll.scrollToElement($(myScroll.scroller).find('dt').get(data.index),0);
		$('#log').text(data.index);
	});
	elevator.refresh();
});
</script>