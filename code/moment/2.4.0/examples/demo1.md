# 基本用法

<div class="container">
	<div class="examples">
		<article>
			<h2>Formatting dates</h2>
			<div class="input">
				<pre lang="javascript">moment().format('MMMM Do YYYY, h:mm:ss a');
moment().format('dddd');
moment().format("MMM Do YY");
moment().format('YYYY [escaped] YYYY');
moment().format();</pre>
			</div>
			<div class="output">
				<pre id="js-format"></pre>
			</div>
		</article>
	</div>
	<div class="langs">
		<h2>Languages</h2>
		<div class="button active" data-lang="en">
			English
		</div>
		<div class="button " data-lang="zh-cn">
			Chinese
		</div>
	</div>
	<div class="examples">
		<article>
			<h2>Timeago</h2>
			<div class="input">
				<pre lang="javascript">moment("20111031", "YYYYMMDD").fromNow();
moment("20120620", "YYYYMMDD").fromNow();
moment().startOf('day').fromNow();
moment().endOf('day').fromNow();
moment().startOf('hour').fromNow();</pre>
			</div>
			<div class="output">
				<pre id="js-from-now"></pre>
			</div>
		</article>
		<article>
			<h2>Calendar Time</h2>
			<div class="input">
				<pre lang="javascript">moment().subtract('days', 10).calendar();
moment().subtract('days', 6).calendar();
moment().subtract('days', 3).calendar();
moment().subtract('days', 1).calendar();
moment().calendar();
moment().add('days', 1).calendar();
moment().add('days', 3).calendar();
moment().add('days', 10).calendar();</pre>
			</div>
			<div class="output">
				<pre id="js-calendar"></pre>
			</div>
		</article>
		<article>
			<h2>Internationalization</h2>
			<div class="input">
				<pre lang="javascript">moment().format('L');
moment().format('l');
moment().format('LL');
moment().format('ll');
moment().format('LLL');
moment().format('lll');
moment().format('LLLL');
moment().format('llll');</pre>
			</div>
			<div class="output">
				<pre id="js-lang"></pre>
			</div>
		</article>
	</div>
</div>

<script type="text/javascript">
	require(['{{module}}'], function(moment) {
		console.log(moment);
		var currentLang = 'en';

		/********************************************
			Formatting
		********************************************/

		function formatArray(array) {
			return array.join('<br/>');
		}

		function calendarHtml() {
			var arr = [];
			arr.push(moment().subtract('days', 10).calendar());
			arr.push(moment().subtract('days', 6).calendar());
			arr.push(moment().subtract('days', 3).calendar());
			arr.push(moment().subtract('days', 1).calendar());
			arr.push(moment().calendar());
			arr.push(moment().add('days', 1).calendar());
			arr.push(moment().add('days', 3).calendar());
			arr.push(moment().add('days', 10).calendar());
			return formatArray(arr);
		}

		function formatHtml() {
			var arr = [];
			arr.push(moment().format('MMMM Do YYYY, h:mm:ss a'));
			arr.push(moment().format('dddd'));
			arr.push(moment().format("MMM Do YY"));
			arr.push(moment().format('YYYY [escaped] YYYY'));
			arr.push(moment().format());
			return formatArray(arr);
		}

		function fromHtml() {
			var arr = [];
			arr.push(moment("20111031", "YYYYMMDD").fromNow());
			arr.push(moment("20120620", "YYYYMMDD").fromNow());
			arr.push(moment().startOf('day').fromNow());
			arr.push(moment().endOf('day').fromNow());
			arr.push(moment().startOf('hour').fromNow());
			return formatArray(arr);
		}

		function langHtml() {
			var arr = [];
			arr.push(moment().format('L'));
			arr.push(moment().format('l'));
			arr.push(moment().format('LL'));
			arr.push(moment().format('ll'));
			arr.push(moment().format('LLL'));
			arr.push(moment().format('lll'));
			arr.push(moment().format('LLLL'));
			arr.push(moment().format('llll'));
			return formatArray(arr);
		}

		/********************************************
			Update
		********************************************/

		function update(){
			moment.lang(currentLang);

			$('#js-format').html(formatHtml());
			$('#js-from-now').html(fromHtml());
			$('#js-calendar').html(calendarHtml());
			$('#js-lang').html(langHtml());

			var now = moment(),
				second = now.seconds() * 6,
				minute = now.minutes() * 6 + second / 60,
				hour = ((now.hours() % 12) / 12) * 360 + 90 + minute / 12;


			$('#hour').css("transform", "rotate(" + hour + "deg)");
			$('#minute').css("transform", "rotate(" + minute + "deg)");
			$('#second').css("transform", "rotate(" + second + "deg)");
		}

		function timedUpdate () {
			update();
			setTimeout(timedUpdate, 1000);
		}

		timedUpdate();

		$(document).on('click', '[data-lang]', function(){
			var dom = $(this);
			currentLang = dom.data('lang');
			$('[data-lang]').removeClass('active');
			dom.addClass('active');
			update();
		});
	});
</script>

<style type="text/css">
	pre,code,kbd,samp{font-family:Consolas, monaco, monospace}
	pre{border:1px solid #e3e3e3;border-radius:3px;color:#333;font-size:14px;white-space:pre;line-height:24px;background:#fff;font-weight:100;margin:0 0 20px;padding:5px 8px}
	pre .keyword,pre .type,pre .symbol,pre .cbracket,pre .date,pre .time,pre .file,pre .variable,pre .difflines,pre .selector,pre .literal,pre .property{font-weight:700}
	pre .title,pre .params{font-style:italic}
	pre .literal,pre .type{color:#A0B1E4}
	pre .value,pre .string{color:#ED7677}
	pre .number{color:#4baa8f}
	pre .regexp{color:#092}
	code{background:#fff;border-radius:3px;box-shadow:0 0 5px rgba(0,0,0,0.1);padding:1px 4px}
	pre code{background:#fff;border-radius:0;box-shadow:none;padding:0}
	.langs{margin-bottom:20px}
	.langs .button{display:inline-block;background:#fff;border-radius:3px;border:1px solid #999;cursor:pointer;margin:4px 2px;padding:5px 10px}
	.langs .button:hover{box-shadow:1px 0 5px rgba(0,0,0,0.2)}
	.langs .button.active{background:#333;color:#ccc;border-color:#000}
	.examples article{overflow:hidden}
	.examples article .input{float:left;width:370px}
	.examples article .input pre{border-radius:5px 0 0 5px}
	.examples article .output{margin-left:370px}
	.examples article .output pre{border-radius:0 5px 5px 0;color:#ccc;position:relative;border-left:0;background-color:#000}
	pre a,pre .comment{color:#666}
	.langs h2,.examples article h2{margin:0;padding:0 0 20px}
	@media screen and min-width 769px and max-width 1200px {
	.examples article pre{font-size:13px}
	}
	@media screen and min-width 481px and max-width 768px {
	.examples article{margin-right:0}
	.examples article pre{font-size:12px}
	.examples article .input{width:320px}
	.examples article .output{margin-left:320px}
	}
	@media screen and max-width 480px {
	.examples article{margin-right:0}
	.examples article .input{float:none;width:100%}
	.examples article .input pre{border-radius:5px;margin:0 0 10px}
	.examples article .output{margin-left:0}
	.examples article .output pre{border-left-width:1px;border-radius:5px}
	}
</style>