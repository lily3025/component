## 使用说明

### 外链形式

```html
<script src="{{src}}"></script>

<script>
    $.ui.InputPlaceholder( target, options? )
</script>
```

### 模块加载形式

```html
<script>
    require(['{{module}}'], function() {
        $.ui.InputPlaceholder( target, options? )
    });
</script>
```

## 文档参考

**构造器参数**

* `target` _String, Element, jQuery Object_

    [必需] target 可以是选择器字符串、DOM 元素，也可以是 jQuery Object。仅对第一个匹配元素进行绑定。

* `options` _Object_

    [可选] 多选形式的可配置参数。

***

**可配置形式的参数的详细说明**

* `focusColor` _String_

   默认值为`#999`，占位文字获取焦点时的的字体颜色。

* `blurColor` _String_

   默认值为`#333`，占位文字失去焦点时的的字体颜色。

* `text` _String_

   默认值为`null`，占位文字的内容。

***

**实例方法**

* `destroy`

    销毁实例。

* `disable`

    禁用实例。

* `enable`

    启用实例。

***
