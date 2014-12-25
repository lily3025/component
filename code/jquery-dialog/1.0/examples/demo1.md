# 弹出form表单示例

<style>
.ui{
	background-image: url(http://p6.qhimg.com/t0132eda55839f6f2f0.png);
	background-repeat: no-repeat;
	background-position: 0 0;
	display: inline-block;
}
.ui-icon-eidt {
	width: 14px;
	height: 14px;
	background-position: -92px 0;
	vertical-align:middle;
}
.ui-btn-confirm {
	width: 91px;
	height: 33px;
	background-position: -189px -190px;
}
.nlp-group-name{cursor:pointer;}
.nlp-group-name i{font-style: normal;margin-right:10px;}

.dialogTitle {
	font-size: 14px;
	color: #000;
	height: 34px;
	line-height: 34px;
	background-color: #D4D4D4;
	text-indent: 10px;
	top:-10px;
}
.dialogDragbar{position:relative;z-index:2;}

.editbox{margin: 15px 0 30px 15px;}
.editbox cite{visibility:hidden;}
.editbox .txt-input {
	width: 218px;
	height: 30px;
	border: 1px #CCC solid;
	margin-right: 10px;
	font-size: 14px;
	text-indent: 5px;
}
.editbox .txt-input, .editbox .ui-btn-confirm{	
	vertical-align:middle;
}
</style>

<label class="nlp-group-name">
标签一：<i>主持人</i><span class="ui ui-icon-eidt"></span>
</label>

<script>
require(['{{module}}'], function(dialog) {
	console.log(dialog);
	$('.nlp-group-name').bind('click', function(){
		dialog.open({
			title: "编辑标签",
			content: ['<div class="editbox">',
					  '<label>标签名称：</label>',
					  '<input type="hidden" value="0" name="tag_id">',
					  '<input type="text" value="主持人" name="tag_name" class="txt-input">',
					  '<a href="javascript:;" class="ui ui-btn-confirm ac-submit"><cite>确定</cite></a>',
					  '</div>'].join(''),
			target: this,
			draggable: 1,
			hasShade: !1,
			hasReferBtn : !1,
			autoCenter : true,
			css: {
				'width' : '500px',
				'border' : "1px #C8C8C8 solid",
				'padding' : "0px",
				'box-shadow' : '#ccc 1px 1px 1px'
			}
		}, function(d) {
			//todo 
		});
	});
});
</script>