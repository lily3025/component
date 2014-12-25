# 基础使用

<style>
	textarea { width:350px;height:160px;}
	.tip {color:red;display:none;}
</style>

<textarea id="content">这是一段文字哦，一段文字哦！</textarea>

<a id="copy-button" data-clipboard-target="content" title="点我">复制文本框内容到剪切板</a>

<span class="tip">复制成功！</span>

<script>
require(['{{module}}'], function(ZeroClipboard) {

    var clip = new ZeroClipboard(document.getElementById("copy-button"), {
        	moviePath: "{{path}}/ZeroClipboard.swf"
    	});

    clip.on('mouseover', function(e) {
    		this.style.color = 'red';
    	});

    clip.on('mouseout', function(e) {
    		this.style.color = '';
    	});

    clip.on('complete', function(e) {
    		$('.tip').fadeIn().delay(1000).fadeOut();
    	});
});
</script>