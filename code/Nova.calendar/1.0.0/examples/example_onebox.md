# onebox使用的日历

<link rel="stylesheet" href="{{path}}/examples/calendar-onebox.css" />

<div class="section">
	<div id="calendar"></div>
</div>

<script type="text/javascript" src="js/lib/zepto.js"></script>
<script type="text/javascript">
	$ = Zepto;
	require(['{{module}}'], function(Calendar) {
		var calendar = new Calendar({
			element: '#calendar',
			swipeable: true
		});
	});
</script>