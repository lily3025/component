# 双向通讯

跨域双向通讯的基本示例。

<div class="container">
    <div class="row featurette">
        <div class="col-md-5">
            <p>
                <iframe name="XPC_IFRAME1" src="http://bcs.duapp.com/xpc-domain/xpcIframe1.html?sign=MBO:A8cdd3a284851538baf8a4f57d463da8:8vkqPtXXMU4ZVp4DdT5a5ztzAG0%3D&response-content-disposition=filename*=utf8''xpcIframe1.html&response-cache-control=private" style="margin-right:40px" width="400" height="300" ></iframe>
                <iframe name="XPC_IFRAME2" src="http://bcs.duapp.com/xpc-domain/xpcIframe2.html?sign=MBO:A8cdd3a284851538baf8a4f57d463da8:Couc19M%2F6lCaWnoMZr%2FTLXgiiqE%3D&response-content-disposition=filename*=utf8''xpcIframe2.html&response-cache-control=private" width="400" height="300"></iframe>
            </p>
            <form class="form-inline" role="form" onsubmit="return false;">
                <div class="well well-sm">
                	本页面当前域名： <span id="domain-url"></span>
                </div>              
                <div class="form-group">
                    <label for="message" class="sr-only">消息体：</label>
                    <input type="text" class="form-control"  id="message" placeholder="输入将要发送的消息">
                </div>
                <input type="button" value="发送到所有" class="btn btn-default" id="sendButton">
                <input type="button" value="发送到A页面" class="btn btn-default" id="sendIframe1">
                <input type="button" value="发送到B页面" class="btn btn-default" id="sendIframe2">
                <div class="panel panel-danger">
                    <div class="panel-heading">
                        <h3 class="panel-title">主窗口接受的消息列表</h3>
                    </div>
                    <div id="xpc-output" class="panel-body"></div>          
                </div>
            </form>    
        </div>
    </div>    
</div>

<script>
var $id = function(id) {
    return document.getElementById(id);
}   
$(function() {
	require(['{{module}}'], function(XPC) {
		var xpc = new XPC();
		xpc.addTarget(['XPC_IFRAME1', 'XPC_IFRAME2']);

		xpc.on('message', function(data) {
		        var p = document.createElement('p');
		        var text = document.createTextNode(data.msg);
		        p.appendChild(text);
		        $id('xpc-output').appendChild(p);
		});

		$id('sendButton').onclick = function() {
		    var message = $id('message').value;
		    message = '来自主页面的消息 : ' + message;
		    xpc.send(message);
		};

		$id('sendIframe1').onclick = function() {
		    var message = $id('message').value;
		    message = '来自主页面的消息 : ' + message;
		    xpc.targets['XPC_IFRAME1'].send(message);
		};

		$id('sendIframe2').onclick = function() {
		    var message = $id('message').value;
		    message = '来自主页面的消息 : ' + message;
		    xpc.targets['XPC_IFRAME2'].send(message);
		};
	});

	$id('domain-url').innerHTML = location.protocol + '//' + location.host;
});
</script>

<style>
.container { margin-top: 50px; }
.container .row div.panel { margin-top: 10px; }
.container .row div.panel .panel-title { font-size: 12px; }
.container .row div.panel .panel-body { font-size: 12px; }
.btn-default { font-size: 12px; }
</style>