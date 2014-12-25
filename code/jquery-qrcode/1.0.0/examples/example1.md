# 二维码编码

<style type="text/css">
textarea {
    width: 400px;
    height: 180px;
}

#logo-canvas {
    position: absolute;
    top: 360px;
    left: 300px;
    width: 200px;
    height: 200px;
}
</style>
<p>输入文本：</p>
<div><textarea id="encode-text"></textarea></div>
<p>纠错等级：<select id="encode-eclevel">
    <option value="1">Level L (7%)</option>
    <option value="0">Level M (15%)</option>
    <option value="3">Level Q (25%)</option>
    <option value="2" selected>Level H (30%)</option>
</select> 编码方式：<select id="encode-mode">
    <option value="4" selected>8bit</option>
    <option value="2">Alphanumeric</option>
    <option value="1">Numeric</option>
</select></p>
<p>色块大小：<input id="encode-msize" type="number" min="2", max="10" value="5">留白大小：<input id="encode-margin" type="number" min="2", max="10" value="4"></p>
<p>前景色：<input type="color" value="#000000" id="encode-mcolor"> 背景色：<input type="color" value="#FFFFFF" id="encode-bgcolor"></p>
<p>Logo 和 LogoUrl 选填一个</p>
<p><label>Logo：</label><input type="file" name="files[]" id="encode-logo"/></p>
<p><label>LogoUrl：</label><input type="url" id="encode-logourl"/><button id="encode-logobtn">加载Logo</button></p>
<div><canvas id="logo-canvas"></canvas></div>
<p>渲染方式：<select id="encode-render">
    <option value="canvas" selected>Canvas</option>
    <option value="table">Table</option>
</select></p>
<p><button id="encode-btn">EnCode</button></p>
<div id="encode-canvas"></div>
<script>
require(['{{module}}'], function() {
    var renderLogo = function (canvas, url) {
        var img = new Image(),
            ctx = canvas.getContext('2d'),
            canvasSize = 200;

        if (!url) {
            ctx.fillStyle = 'rgb(255, 255, 255)';
            ctx.fillRect(0, 0, canvasSize, canvasSize);
            return;
        }
        img.onload = function() {
            var imgSize, zoom,
                imgW = img.width, imgH = img.height;
            canvas.width = canvasSize;
            canvas.height = canvasSize;

            ctx.fillStyle = 'rgb(255, 255, 255)';
            ctx.fillRect(0, 0, canvasSize, canvasSize);

            imgSize = Math.max(imgW, imgH);

            if (imgSize > canvasSize) {
                zoom = canvasSize / imgSize;
                imgW = imgW * zoom;
                imgH = imgH * zoom;
            }
            ctx.drawImage(img, (canvasSize - imgW) / 2, (canvasSize - imgH) / 2, imgW, imgH);
        };
        img.src = url;
    }

    // Logo 加载
    $('#encode-logo').on('change', function(e) {
        var canvas = $('#logo-canvas')[0],
            file = e.target.files[0],
            reader = new FileReader();

        reader.onload = ( function(e) {
            $(canvas).data('logo', e.target.result);
            renderLogo(canvas, e.target.result);
        });

        reader.readAsDataURL(file);
    });

    // Logo 加载（Url 方式）
    $('#encode-logobtn').on('click', function(e) {
        var imgUrl = $('#encode-logourl').val(),
            canvas = $('#logo-canvas')[0];
        $(canvas).data('logo', imgUrl);
        renderLogo(canvas, imgUrl);
    });

    // 生成二维码
    $('#encode-btn').on('click', function () {
        var config = {};

        config.text = $('#encode-text').val();
        config.render = $('#encode-render').val();
        config.bgColor = $('#encode-bgcolor').val();
        config.moduleColor = $('#encode-mcolor').val();
        config.moduleSize = $('#encode-msize').val();
        config.mode = Number($('#encode-mode').val());
        config.ECLevel = Number($('#encode-eclevel').val());
        config.margin = Number($('#encode-margin').val());
        config.logo = $('#logo-canvas').data('logo');

        if (!config.text) {
            alert("请输入文本");
            return;
        }

        $('#encode-canvas').qrcode(config);
    });
});
</script>
