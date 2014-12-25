define(['js/lib/marked', 'module/chart.js/0.2.0/chart', 'js/lib/highlight'], function(marked, Chart) {
	return function(url, callback) {
		(function($) {
			var xhr;
			if(/^md:/.test(url)){
				xhr = {
					success: function(cb){
						cb(url.slice(3));
					},
					error: function(){}
				};
			}else{
				xhr = $.get(url, {'_' : +new Date});
			}

			xhr.success(function(data) {
					marked.setOptions({
						gfm: true,
						highlight: function (code, lang, callback) {
							if(!lang) {
								callback(null, code);
								return;
							}

							if(lang.indexOf('chart:')==0){
								var chartType = lang.slice(6);

								//console.log(code, Chart);
								var data = new Function("return " + code)();
								var container = $('<canvas width="600" height="400"></canvas>');

								var ctx = container.get(0).getContext("2d");
								new Chart(ctx)[chartType](data);

								//window.Chart = Chart;

								setTimeout(function(){
									//console.log(container.get(0).toDataURL());
									callback(null, 
										'<img src="' + container.get(0).toDataURL() + '">');
								}, 500);

								return;
							}

							lang = lang.toLowerCase();

							switch(lang) {
								case 'js':
								case 'javascript':
									lang = 'javascript';
									break;
								case 'html':
									lang = 'xml';
									break;
							}

							//IE某些版本语法高亮会抛异常，try 下
							try {
								callback(null, hljs.highlight(lang, code).value);
							} catch(e) {
								callback(null, code);
							}
						},
						tables: true,
						breaks: false,
						pedantic: false,
						sanitize: false,
						smartLists: true,
						smartypants: false,
						langPrefix: 'lang-'
					});

					marked(data, function (err, content) {
						if (err) {
							alert('文档解析失败：' + err);
							return false;
						}

						//替换codemirror
						content = content.replace(/(<textarea[^>]*?mode=\"?(?:js|javascript|css|html|gfm)\"?[^>]*?>[\s\S]*?<\/textarea>)/img, '$1\n<script>(function(){var e=document.getElementsByTagName("textarea"),t=e[e.length-1];t&&require(["js/lib/codemirror.js"],function(){var e=$(t).attr("mode")||"htmlmixed";e=="html"&&(e="htmlmixed");e=="js"&&(e="javascript");var n=CodeMirror.fromTextArea(t,{lineNumbers:!0,styleActiveLine:!0,matchBrackets:!0,mode:e});t.editor=n;n.on("change",function(){n.save()})})})();</script>');
					
						//替换内部文档链接
						content = content.replace(/<a href="doc:(.*)">/img, '<a href="doc.html?doc=$1">');
						content = content.replace(/<a href="wiki:(.*)">/img, '<a href="doc.html?doc=wiki&page=$1">');

						callback(content);
					});
				});
			xhr.error(function() {
					alert('文档 ' + url + ' 不存在！请创建该文件！\n点击「确定」返回上一页！');
					history.back();
				});;
		})(jQuery);
	};
});