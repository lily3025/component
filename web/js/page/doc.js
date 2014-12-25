define([
    'js/util/showdoc', 
    'js/util/global',
    'js/util/toc'
], 
function(getDoc, global, generateToc) {
    global();

    var doc = location.search.queryUrl('doc'),
        id = location.search.queryUrl('id');

    if (!doc || doc == 'home') {
        location.href = 'index.html';
        return false;
    }
    
    if (!/\.md$/i.test(doc)) {
        doc += '.md';
    }

    /* * * DON'T EDIT THIS * * */
    window.duoshuoQuery = {short_name : "qiwoo"};
    $('.ds-thread').attr('data-thread-key', doc + (id ? '-' + id : ''));

    (function() {
        var ds = document.createElement('script');
        ds.type = 'text/javascript';ds.async = true;
        ds.src = 'http://static.duoshuo.com/embed.js';
        ds.charset = 'UTF-8';
        (document.getElementsByTagName('head')[0] 
        || document.getElementsByTagName('body')[0]).appendChild(ds);
    })();
    /* * * DISQUS END * * */

	getDoc('doc/' + doc, function(content) {
		$('#out').html(content);

        generateToc($('#out')[0]);
	});
});