# onebox城市选择

**请模拟touch事件使用**

<div id="main">
	<div class="r-results">
		<div class="res-list mohe-cards" id="mohe-m-xxx" style="height:2000px;">
			<div class="mohe-card" style="margin-top: 200px;">
				<input id="test" type="text" value="" style="width:96%;height:50px;padding:0 2%;">
			</div>
		</div>
	</div>
</div>

<!-- cityPanel -->
<link rel="stylesheet" type="text/css" href="{{path}}/examples/cityPanel.css">

<div class="city-panel page-panel" style="display:none;">
	<div class="input-wrap">
		<div class="input-box">
			<form class="input-form">
				<input type="text" placeholer="请输入城市名称"/>
			</form>
			<button type="button" style="display:none;">取消</button>
		</div>
	</div>
	<div class="city-wrap">
		<div class="item-wrap">
			<div class="item-location list-item">
				<div class="city-curr">当前城市：<span class="cp-location sugg-item-cont"></span></div>
				<button type="button" class="panel-cancel">取消</button>
			</div>
			<div class="item-data">
				<div class="item-scroller">
					<div class="item-hot">
						
					</div>
					<div class="item-list">
						
					</div>
				</div>
				<ul class="item-elevator"></ul>
				<div class="item-tip"></div>
			</div>
		</div>
		<div class="suggest-wrap">
			<div class="sugg-list"></div>
		</div>
	</div>
	<script type="text/x-handlebars-template" class="item-template">
		{{#each list}}
			<dl>
				<dt class="list-item" data-key="{{@key}}">{{@key}}</dt>
				{{#each this}}
					<dd class="list-item sugg-item sugg-item-cont">{{this.name}}</dd>
				{{/each}}
			</dl>
		{{/each}}
	</script>
	<script type="text/x-handlebars-template" class="sugg-template">
		<ul>
			{{#each list}}
				<li class="list-item sugg-item">
					<div class="sugg-item-cont">{{this.name}}</div>
					<div class="sugg-item-copy"></div>
				</li>
			{{/each}}
		</ul>
	</script>
</div>
<!-- cityPanel -->

<script type="text/javascript" src="js/lib/zepto.js"></script>
<script id="cityListJs" type="text/javascript" src="http://s6.qhimg.com/!b5ea8e7a/m-city-v1.js"></script>
<script type="text/javascript">
$ = Zepto;

function init(){

	var list = window.list = {};

	!window.cityList && alert('cityList 未成功加载');

	$.each(window.cityList, function(index, item){
		var tmpGroup = item.nameEn ? item.nameEn.charAt(0).toUpperCase() : '#';
		
		if (!(list[tmpGroup] instanceof Array)) {
			list[tmpGroup] = [];
		}
		
		list[tmpGroup].push(item);
	});


	cityPanel.init(list);

	$('#test').on('focus', function(){
		cityPanel.show(this.value);
	});
	cityPanel.onselect = function(e){
		$('#test').val(e.value);
	};
}

setTimeout(function(){
	require(['{{module}}'], function(cityPanel) {
		window.cityPanel = cityPanel;
		if(!window.cityList){
			$('#cityListJs').ready(function(){
				init();
			});
		} else {
			init();
		}
		
	});
}, 100);

</script>