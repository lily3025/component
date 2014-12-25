# 全屏浮层

<style type="text/css">
.page-panel {
	position: fixed;
	z-index: 101;
	top: 0;
	left: 0;

	display: -webkit-box;
	display: -webkit-flex;
	display:         flex;
	flex-direction: column;

	width: 100%;
	height: 100%;

	background: white;

	-webkit-box-orient: vertical;
	-webkit-flex-direction: column;
}
</style>

<input type="text" id="t1"><button id="showBtn">显示浮层</button>
<div class="page-panel" style="display:none;">
	<input type="text" id="t2"><button id="hideBtn">关闭浮层</button>
	控件会处理hash
</div>
<script type="text/javascript" src="js/lib/zepto.js"></script>
<script type="text/javascript">
$ = Zepto;
require(['{{module}}'], function(PagePanel) {
	var $input1 = $('#t1');
	var $input2 = $('#t2');
	var $cancel = $('#hideBtn');
	var $show = $('#showBtn');

	var panel = function(){
		var pagePanel = new PagePanel({
			element: $('.page-panel'),
			hash: 'test'
		});
		var inputVal = '';

		var panel = {
			show: function(val){
				inputVal = val || '';
				pagePanel.show();
			},
			hide: function(){
				pagePanel.hide();
			}
		};

		pagePanel.after('show', function(e){
			$input2.val(inputVal);
		});
		pagePanel.after('hide', function(e){
			$input2.val('');
		});

		$cancel.on('click', function(e){
			panel.hide();
		});

		return panel;
	}();

	$show.click(function(e){
		panel.show($input1.val());
	});
	
});
</script>