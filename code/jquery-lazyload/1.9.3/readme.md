## 使用说明

### HTML
```html
<img class="lazy" data-original="img/example.jpg" width="640" height="480">
```
### 外链形式
```html
<script src="{{src}}"></script>
<script>
$(function() {
    $("img.lazy").lazyload();
});
</script>
```

### 模块加载形式

```html
<script>
    require(['module/jquery-color/2.1.2/jquery.color'], function(_) {
        $("img.lazy").lazyload();
    });
</script>
```

### 设置阈值

默认图片出现在屏幕上时才加载。 如果你想要提前加载图片，请使用 `threshold` 参数。 阈值设置为200,图片在距离出现还有200像素时加载。

```javascript
$("img.lazy").lazyload({
    threshold : 200
});
```
### 事件触发的加载

你可以使用jQuery事件，例如点击时加载图片：

```javascript
$("img.lazy").lazyload({
    event : "click"
});
```

以下代码等待页面完成加载5秒钟后加载剩下的图片：

```javascript
$(function() {
    $("img.lazy").lazyload({
        event : "sporty"
    });
});

$(window).bind("load", function() {
    var timeout = setTimeout(function() {
        $("img.lazy").trigger("sporty")
    }, 5000);
});
```

### 动画效果
默认的动画效果是`show()`。

```javascript
$("img.lazy").lazyload({
    effect : "fadeIn"
});
```

### 降级到不支持JavaScript的浏览器

```html
<img class="lazy" data-original="img/example.jpg"  width="640" heigh="480">
<noscript><img src="img/example.jpg" width="640" heigh="480"></noscript>
```

```css
.lazy {
    display: none;
}
```

```javascript
$("img.lazy").show().lazyload();
```

### 滚动容器内的图片
您还可以对滚动容器内的图片使用插件，如有滚动条的div。

```css
#container {
    height: 600px;
    overflow: scroll;
}
```

```javascript
$("img.lazy").lazyload({
     container: $("#container")
});
```

### 不固定的图片排列顺序

滚动页面时插件，循环载入未加载的图片。默认情况下，当发现第一张不在视窗内的图片时，循环停止。但是某些布局下这是不对的，比如瀑布流。你可以通过 `failure_limit` 参数控制加载行为。

```javascript
$("img.lazy").lazyload({
    failure_limit : 10
});
```

### 处理invisible的图片
有时候，图片在视窗里但没有 `:visible`。考虑到性能问题，插件默认忽略了 `.not(":visible")`的图片。如果你想加载这些图片，请设置 `skip_invisible` 参数为 `false`。

```javascript
$("img.lazy").lazyload({
    skip_invisible : false
});
```

