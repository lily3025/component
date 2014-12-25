# 使用说明

## 外链形式

**注意：** 请使用Zepto1.1.2
```html
<link rel="stylesheet" href="{{path}}/suggest.css">

<script src="zepto.js"></script>
<script src="/module/widget/1.0.0/widget.combo.js"></script>
<script src="{{path}}/calendar.js"></script>
```

## 模块加载形式

```html
<script>
    require(['{{module}}'], function(Calendar) {
        // ...
    });
</script>
```


## 快速使用

### Demo
```html
<!-- HTML 结构 -->
<div class="section">
    <div id="calendar"></div>
</div>

<!-- Javascript -->
<script type="text/javascript">
var calendar = new Calendar({
    element: '#calendar',
    swipeable: true
});
</script>
```

##文档参考

[详细说明](docs:document.md)