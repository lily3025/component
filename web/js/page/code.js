define(['js/lib/highlight'], function() {
    var urlQuery = location.search.queryUrl(),
        module_name = urlQuery.name,
        module_ver  = urlQuery.ver,
        module_path = urlQuery.path;

    var xhr = $.get('data/getdeps.php' + location.search, null, null, 'json');

    xhr.success(function(list) {
		var html = [];
    	list.forEach(function(item) {
	    	html.push('<li>');
	    	html.push('<a target="_blank" href="module/', item, '">', item, '</a>');
	    	html.push("</li>");
	    });

	    $('#list').html(html.join(''));

	    $('#list a').eq(0).trigger('click');
    });

    $('#list').on('click', 'a', function() {
    	$('#main .content').html('加载中...');

    	$('#list a').removeClass('current');
    	$(this).addClass('current');

    	var url = $(this).attr('href').trim();

  	    var xhr = $.get(url, null, null, 'text');

    	xhr.success(function(code) {
	    	var html = [];
	    	html.push('<a target="_blank" href="', url, '">新窗口打开本文件&nbsp;<i class="icon-external-link"></i></a>&nbsp;&nbsp;（注意：Qiwoo.org 是内网地址，请勿直接引用本站资源，请使用<a target="_blank" href="http://inn.io/"> inn.io </a>发布为 CDN 地址）');

	    	try {
	    		html.push('<pre>', hljs.highlight('javascript', code).value, '</pre>');
	    	} catch(e) {
	    		html.push('<pre>', code, '</pre>');
	    	}

	    	$('#main .content').html(html.join(''));
	    });

	    return false;
    });

    $('#back').attr('href', 'detail.html' + location.search);
});