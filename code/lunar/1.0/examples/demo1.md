# 基本使用
----

<div id="info" style="font-size:24px;"></div>

<script>
require(['{{module}}'], function(lunar) {
	var now = new Date(),
		year = now.getFullYear(),
		month = now.getMonth(),
		date = now.getDate();

	var l = new lunar(now),
		info = [];

	info.push('现在是：');
	info.push('<br />');
	info.push(year, '年', month + 1, '月', date, '日', '&nbsp;');
	info.push('星期', l.cnDay);
	info.push('<br />');
	info.push('农历', l.lMonth, '月', l.lDate, '&nbsp;', l.term);
	info.push('<br />');
	info.push(l.gzYear, '年', l.gzMonth, '月', l.gzDate, '日', l.gzChrono, '时');
	info.push('<br />');
	info.push(l.animal, '年');
	info.push('<br />');

	var items = l.festival();
	if(items.length) {
		info.push('节日：');
		items.forEach(function(item) {
			info.push(item.desc, '&nbsp;');
		});
	}

	$('#info').html(info.join(''));
});
</script>