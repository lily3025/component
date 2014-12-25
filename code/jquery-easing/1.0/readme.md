## 使用说明

本模块为 JavaScript 动画提供算子。

动画算子是一个函数，用来把动画进度转换为另外一个值。算子本身与动画无关，大部分动画实现都提供了自定义算子功能，如 jQuery 的 animate 方法：

```javascript
animate( properties [, duration ] [, easing ] [, complete ] )
```

如果检测到 jQuery 的存在，会把动画函数扩充到 $.easing 上，同时做为一个 AMD 模块返回，方便用于其它动画库。


### 外链形式

```html
<script src="{{src}}"></script>

<script>
    $('#test').animate({'left' : '+500px'}, 1000, 'easeIn');
</script>
```

### 模块加载形式

```html
<script>
    require(['{{module}}'], function(_) {
		$('#test').animate({'left' : '+500px'}, 1000, 'easeIn');
    });
</script>
```

## 算子列表

| 算子名 | 说明 |
| --- | --- |
| easeNone | 匀速  |
| easeIn | 加速 |
| easeOut | 减速 |
| easeBoth | 加速开始减速结束 |
| easeInStrong | 加速·强化 |
| easeOutStrong | 减速·强化 |
| easeBothStrong | 加速开始减速结束·强化 |
| elasticIn | 弹性开始 |
| elasticOut | 弹性结束 |
| elasticBoth | 弹性开始弹性结束 |
| backIn | 退后开始 |
| backOut | 越界结束 |
| backBoth | 退后开始越界结束 |
| bounceIn | 跳动开始 |
| bounceOut | 跳动结束 |
| bounceBoth | 跳动开始跳动结束 |

具体效果，请查看：

- [示例一](examples:demo1.md)

## 推荐阅读

- [JavaScript动画漫谈](http://www.imququ.com/post/js-animation.html)
