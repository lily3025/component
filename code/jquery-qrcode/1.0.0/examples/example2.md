# 二维码解码

<style type="text/css">
.hide {
    display: none;
}
</style>
<p><label>选择二维码图片：</label><input type="file" name="files[]" id="decode-file"/></p>
<div><canvas id="decode-canvas"></canvas></div>
<p><button id="decode-btn">DeCode</button></p>
<p id="decode-text" class="hide">解码值为：<span></span></p>

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
    },
    canvas = $('#decode-canvas')[0],
    ctx = canvas.getContext('2d'),
    img = new Image();

    // 二维码加载
    $('#decode-file').on('change', function(e) {
        var canvas = $('#decode-canvas')[0],
            ctx = canvas.getContext('2d'),

            file = e.target.files[0],
            reader = new FileReader();

        reader.onload = ( function(e) {
            var img = new Image();
            img.onload = function() {
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.drawImage(img,0,0);
            };
            img.src = e.target.result;
        });

        reader.readAsDataURL(file);
    });

    $('#decode-btn').on('click', function () {
        $('#decode-text').show().find('span').html($('#decode-canvas').qrdecode());
    });

    img.onload = function() {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img,0,0);
    };

    img.src = '{{path}}/examples/qrcode.png';
});
</script>
