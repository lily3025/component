## 使用说明

### 外链形式

```html
<!--[if IE 6]>
<script src="{{src}}"></script>
<script>
	DD_belatedPNG.fix('.need_to_fixed');
</script>
<![endif]-->
```

### 模块加载形式

请通过条件注释针对 IE6 外链本文件，不推荐使用模块加载。

## 文档参考

### fix *DD_belatedPNG.fix(CSS selector)*

处理指定 CSS selector 命中元素的 PNG 透明问题。

### fixPng *DD_belatedPNG.fixPng(HTMLDomElement)*

处理指定元素的 PNG 透明问题。

### [使用DD_belatedPNG的一些注意事项](docs:notice.md)