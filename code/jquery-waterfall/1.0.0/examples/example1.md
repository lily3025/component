# 创建一个等宽瀑布流图片列表

<style type="text/css">
/* @module waterfall_style */

.wf_group{ *zoom:1; font-size:12px; line-height:1.5; }
.wf_group:after{ content: ".";display: block;clear: both;visibility: hidden;line-height: 0;height: 0; }
.wf_group .wf_col{ float:left; width:238px; padding:0 7px; margin: 0; }
.wf_group .wf_col li{ width:238px; margin-bottom:14px; *margin-bottom:10px; overflow:hidden; box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.3); border-radius:2px; }
.wf_group .wf_col img{ vertical-align: bottom; }
</style>

<div id="wfContainer" style="width:800px;">
    <div id="waterfall" style="margin:0 auto;"></div>  
</div>


<script>
window.initData = [{
    "imgurl": "{{path}}\/examples\/images\/t0115bd4cbaac093e33.jpg",
    "width": 238,
    "height": 312
}, {
    "imgurl": "{{path}}\/examples\/images\/t013f78633d3a859815.jpg",
    "width": 238,
    "height": 352
}, {
    "imgurl": "{{path}}\/examples\/images\/t0114de5c390e356d60.jpg",
    "width": 238,
    "height": 337
}, {
    "imgurl": "{{path}}\/examples\/images\/t01b4b08c4b07ab97b4.jpg",
    "width": 238,
    "height": 325
}, {
    "imgurl": "{{path}}\/examples\/images\/t014102a0cb0b24e3ba.jpg",
    "width": 238,
    "height": 298
}, {
    "imgurl": "{{path}}\/examples\/images\/t01f5d3e0af5af464bb.jpg",
    "width": 238,
    "height": 371
}, {
    "imgurl": "{{path}}\/examples\/images\/t01f915b5e5c7f89054.jpg",
    "width": 238,
    "height": 336
}, {
    "imgurl": "{{path}}\/examples\/images\/t01828c9eb5c0d0cb8d.jpg",
    "width": 238,
    "height": 319
}, {
    "imgurl": "{{path}}\/examples\/images\/t0132cf10b35011409d.jpg",
    "width": 238,
    "height": 336
}, {
    "imgurl": "{{path}}\/examples\/images\/t013c7c860db8fe3dec.jpg",
    "width": 238,
    "height": 336
}, {
    "imgurl": "{{path}}\/examples\/images\/t017c3a24a727353733.jpg",
    "width": 238,
    "height": 313
}, {
    "imgurl": "{{path}}\/examples\/images\/t0168596061da7f114c.jpg",
    "width": 238,
    "height": 352
}, {
    "imgurl": "{{path}}\/examples\/images\/t01dd7f9a9c9cde0523.jpg",
    "width": 238,
    "height": 354
}, {
    "imgurl": "{{path}}\/examples\/images\/t01bf65d25ed7f70d40.jpg",
    "width": 238,
    "height": 315
}, {
    "imgurl": "{{path}}\/examples\/images\/t01fe8efb25c0843340.jpg",
    "width": 238,
    "height": 281
}, {
    "imgurl": "{{path}}\/examples\/images\/t01fbae001e81e76a59.jpg",
    "width": 238,
    "height": 368
}, {
    "imgurl": "{{path}}\/examples\/images\/t01216ae57f04a4cdc0.jpg",
    "width": 238,
    "height": 347
}, {
    "imgurl": "{{path}}\/examples\/images\/t018dfe7cf25d41d0da.jpg",
    "width": 238,
    "height": 309
}, {
    "imgurl": "{{path}}\/examples\/images\/t01e44dc41c565abc8a.jpg",
    "width": 238,
    "height": 343
}, {
    "imgurl": "{{path}}\/examples\/images\/t014d0a27ef31ba83a8.jpg",
    "width": 238,
    "height": 337
}, {
    "imgurl": "{{path}}\/examples\/images\/t014105ee276dc3d531.jpg",
    "width": 238,
    "height": 337
}, {
    "imgurl": "{{path}}\/examples\/images\/t019db8590d426a567d.jpg",
    "width": 238,
    "height": 317
}, {
    "imgurl": "{{path}}\/examples\/images\/t0155350f2d63eddf4f.jpg",
    "width": 238,
    "height": 238
}, {
    "imgurl": "{{path}}\/examples\/images\/t01148b3b07028b6e7a.jpg",
    "width": 238,
    "height": 336
}, {
    "imgurl": "{{path}}\/examples\/images\/t010919adfcb15752ae.jpg",
    "width": 238,
    "height": 337
}, {
    "imgurl": "{{path}}\/examples\/images\/t01c27382235eb375de.jpg",
    "width": 238,
    "height": 358
}, {
    "imgurl": "{{path}}\/examples\/images\/t01af55cb8da8db4f8f.jpg",
    "width": 238,
    "height": 336
}, {
    "imgurl": "{{path}}\/examples\/images\/t0153459f746c81c424.jpg",
    "width": 238,
    "height": 661
}, {
    "imgurl": "{{path}}\/examples\/images\/t014dc1c1a2d1b3acb3.jpg",
    "width": 238,
    "height": 309
}, {
    "imgurl": "{{path}}\/examples\/images\/t01622c50716f572a7c.jpg",
    "width": 238,
    "height": 2899
}];


require(['{{module}}'], function() {
	var loadData = function(){
			return window.initData;
		},
		
		createCell = function( data ){
			return '<li' + ( data.height > 800 ? ' style="height:800px;"' : '' ) + '>' +
				'<img src="' + data.imgurl + '" width="' + data.width + '" height="' + data.height + '" alt="" />' +
			'</li>';
		},

		waterfall = new $.ui.Waterfall( '#waterfall', {
			load : loadData,
			create : createCell,
			colWidth : 252,
            container : '#wfContainer'
		});
		
    waterfall.on( 'createafter', function(){
		this.loadEnd();
	});
});
</script>
