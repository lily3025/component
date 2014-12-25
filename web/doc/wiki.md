<!-- category start -->
<style>
	.side ul{
		margin-left: -20px;
		list-style: none;
	}
	.side .category li{
		line-height: 26px;
	}
	.row .main{
		margin-top: 36px;
	}
</style>

<div class="side col-3">
    <ul class="category left-fixed" id="category">
    	<li><a href="http://cdb.75team.com/_utils/document.html?wiki" target="_blank">新增页面</a></li>
    </ul>
</div>
<div class="main col-9">
	<div id="acm_content">
		正在玩命加载中。。。
	</div>
</div>

<script>
	require(['js/util/showdoc', 'js/util/conf'], function(getDoc, conf){

		var id = location.search.queryUrl('page') || 'index';

		$.get(conf.node_server + "/wiki/"+encodeURIComponent(id), 
			function(data){
				//console.log(data)
		    	getDoc('md:' + data.text, function(content) {
		    		$('#acm_content').html(content);
		    		//console.log(content);
		    	});	

		    	var category = [
		    		'<li><a href="' + conf.couch_server +'/_utils/document.html?wiki" target="_blank">+ New Page</a></li>'
		    	];

		    	category.push('<li><a href="' + conf.couch_server + '/_utils/document.html?wiki/'+id+'" target="_blank">&gt Edit</a></li>');

		    	if(data.category){
		    		for(var i = 0; i < data.category.length; i++){
		    			var cate = data.category[i];
		    			category.push('<li><a href="doc.html?doc=wiki&page='+cate+'">'+cate+'</a></li>');
		    		}
		    	}

		    	$('#category').html(category.join(''));
		    	
			},'json');
	});
</script>
