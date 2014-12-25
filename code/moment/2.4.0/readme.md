##使用说明

###简介
提供对时间进行：解析、验证、操作和格式化输出的函数库。

这里提供的 moment 模块，已经包含了 moment 的下列语言包：

- en
- zh-cn

###外链形式

```html
<script src="/module/moment/2.4.0/moment.js"></script>

<script>
    alert(moment().format('L'));
</script>

```

###模块加载形式

```html
<script>
    require(['module/moment/2.4.0/moment'], function(moment) {
        alert(moment().format('L'));
    });
</script>
```

##文档参考

[常用方法详细说明](docs:moment.md)

[官方文档](http://momentjs.com/docs/)

