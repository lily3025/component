# 相关例子

<style type="text/css">
	.cont .item{width: 475px; height: 350px;margin: 10px; border: 1px solid #ddd;}
</style>

<div class="cont">
	<div class="item" id="barCont"></div>
	<div class="item" id="pieCont"></div>
	<div class="item" id="lineCont"></div>
	<div class="item" id="columnCont"></div>
</div>

<script type="text/javascript">
	require.config({
		baseUrl: '{{path}}',
		paths: {
			highcharts: 'highcharts',
			grid: 'themes/grid'
		},
		shim: {
			grid: {
				deps: ['highcharts']
			}
		}
	});

	// highchart不是标准的AMD规范
	require(['highcharts', 'grid'], function(){
		// 条形图
		$('#barCont').highcharts({
			chart: {
				type: 'bar'
			},
			xAxis: {
				categories: ['Apples', 'Bananas', 'Oranges']
			},
			yAxis: {
				title: {
	                text: 'Fruit eaten'
	            }
			}, 
			series: [{
	            name: 'Jane',
	            data: [2, 1, 4]
	        }, {
	            name: 'John',
	            data: [5, 7, 3]
	        }],
			credits: {
				enabled: true,
				text: 'qiwoo',
				href: 'http://www.qiwoo.org/qiwoo/web/index.html'
			}
		});
		// 饼图
		var pie = new Highcharts.Chart({
			chart: {
				type: 'pie',
				renderTo: 'pieCont'	// container id
			}, 
			title: {
				text:'浏览器使用份额'
			},
			series:[{
				name: 'Browser share',
				innerSize: '40%', 
	            data: [
	                ['Firefox',   45.0],
	                ['IE',       26.8],
	                {
	                    name: 'Chrome',
	                    y: 12.8,
	                    sliced: true,
	                    selected: true
	                },
	                ['Safari',    8.5],
	                ['Opera',     6.2],
	                ['Others',   0.7]
	            ]
			}]
		});
		// 折线图
		var line = new Highcharts.Chart({
			chart: {
				type: 'line',
				renderTo: 'lineCont'	// container id
			}, 
			title: {
				text:'北京每月平均温度和降水'
			},
			subtitle: {
				text: '北京气象局'
			}, 
			xAxis: {
				categories: Highcharts.getOptions().lang.shortMonths
			}, 
			yAxis: {
				title: {
	                text: '平均温度'
	            }
			},
			series:[{
				name: 'Temperature',
	            data: [-10, 0, 3, 10, 20, 27, 28, 32, 30, 25, 15, -5]
			}, {
				name: 'Rainfall',
	            data: [20, 21, 20, 100, 200, 210, 220, 100, 20, 10, 20, 10]
			}]
		});
		// 柱状图
		var column = new Highcharts.Chart({
			chart: {
				type: 'column',
				renderTo: 'columnCont'	// container id
			}, 
			title: {
				text:'北京每月平均温度和降水'
			},
			subtitle: {
				text: '北京气象局'
			}, 
			xAxis: {
				categories: Highcharts.getOptions().lang.shortMonths
			}, 
			yAxis: {
				title: {
	                text: '平均温度'
	            }
			},
			series:[{
				name: 'Temperature',
	            data: [-10, 0, 3, 10, 20, 27, 28, 32, 30, 25, 15, -5]
			}, {
				name: 'Rainfall',
	            data: [20, 21, 20, 100, 200, 210, 220, 100, 20, 10, 20, 10]
			}]
		});
	});
</script>