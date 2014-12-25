## 使用说明

### 外链形式

```html
<script src="{{src}}"></script>

<script>
    var sender = new Twitter();
    sender.tweet('message', data);
</script>
```

### 模块加载形式

```html
<script>
    require(['{{module}}'], function(Twitter) {
        var sender = new Twitter;
        sender.tweet('message', data);
    });
</script>
```

### 后续待更新

支持异步消息缓存和超时

支持XPC
