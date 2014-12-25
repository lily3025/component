## 使用说明

### 外链形式

```html
<script src="{{src}}"></script>

<script>
    alert(typeof Chart);
</script>
```

### 模块加载形式

```html
<script>
    require(['{{module}}'], function(Chart) {
        alert(typeof Chart);
    });
</script>
```

## 文档参考

[完整文档请参考这里](http://www.chartjs.org/docs/)
