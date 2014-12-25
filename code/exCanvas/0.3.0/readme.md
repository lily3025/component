Firefox、Safari、Chrome和Opera等高级浏览器都已经支持了HTML5的`canvas`标签，你可以用它来实现2D绘图。而在中国用户众多的IE浏览器要到IE9才支持这一特性。为了让IE6-IE8浏览器也能使用`canvas`，Google的工程师开发了excanvas.js。

它使用了IE的`VML`特性来绘图，提供了和`canvas`相同的API。因此，只需要将excanvas.js引入，你的代码几乎不需要修改就可以在低版本IE中运行。

## 使用说明

在IE8及以下浏览器中引入excanvas.js：

```html
<!--[if lte IE 8]>
    <script src="{{src}}"></script>
<![endif]-->
```

如果你页面中的`canvas`标签是直接写在HTML中的，你不需要额外的操作就可以直接使用`canvas`的API了。如果你通过JavaScript创建`canvas`，则需要调用`G_vmlCanvasManager `对象的`initElement `方法：

```js
var el = document.createElement('canvas');
G_vmlCanvasManager.initElement(el);
var ctx = el.getContext('2d');
```


