# 基础操作

<div>
	<button id="test">点击我控制动画</button>
	<div id="test2">我是会动滴~~~</div>
</div>

<script>
	require(['{{module}}'], function(Twitter){
		var sender = new Twitter($("#test")),
			receiver = new Twitter($("#test2"));

		$("#test").on("click",function(){
				sender.tweet("button#test_clicked",{dur:300});
				$(this).attr("disabled", true);
			}
		);

		sender.receive("div#test2_animend",function(){
			$("#test").attr("disabled",false);
		});

		receiver.receive("button#test_clicked",function(evt){
			var data = evt.data;
			$("#test2").fadeToggle(data.dur, function(){
				receiver.tweet("div#test2_animend");
			});
		});

		//忽略这段代码~
		if(!!window.firstRun) {
			location.reload();
		} else {
			window.firstRun = 'aha~';
		}
	});
</script>