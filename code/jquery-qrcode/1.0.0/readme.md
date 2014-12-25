## 使用说明

### 外链形式

```html
<script src="{{src}}"></script>

<script>
    $('#qrcode-div').qrcode(config); // 生成二维码
    var decoded = $('canvas').qrdecode(); // 读取二维码值
</script>
```

### 模块加载形式

```html
<script>
    require(['{{module}}'], function() {
        $('#qrcode-div').qrcode(config);
        var decoded = $('canvas').qrdecode();
    });
</script>
```

## 二维码相关知识简介

[二维码的生成细节和原理](http://coolshell.cn/articles/10590.html)

## 文档参考

### 生成二维码

**参数格式**

config 参数可以是一个对象或者字符串，字符串时会将字符串用默认参数生成二维码，为对象时候，参数如下：

* `text` _String_

    生成二维码的文字，默认值为 "75Team"；

* `render` _String_

    渲染方式，默认使用 Canvas 元素渲染；

* `bgColor` _String_

    背景色，格式如 "#ADFC23" 或 "#234", 默认值 "#FFF"；

* `moduleColor` _String_

    前景色，（即色块的颜色）如上，默认值 "#000"；

    注意：前景色要比背景色深，对比要大；

* `moduleSize` _Integer_

    色块大小，默认 5px；

* `mode` _Integer_

    编码方式，默认使用 8bits；

* `ECLevel` _Integer_

    纠错码等级，默认为 30%；

* `margin` _Integer_

    四周留白倍数，默认为色块大小的 4 倍（也是推荐大小）；

* `logo` _String_

    中间的 Logo，默认为空，不渲染 Logo；

* `error` _Function_

    报错函数，默认使用 alert 弹出，接收错误字符串的参数。

***

### QRCode 解码

需要支持 Canvas；

使用 `$('canvas').qrdecode()` 即可，返回读取到的二维码值，选择器取到的是绘有二维码的 canvas 元素 jQuery 对象。
