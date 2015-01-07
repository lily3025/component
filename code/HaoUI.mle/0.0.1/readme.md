## 简单介绍
多行省略目前(2014-12-23)只有Webkit内核支持，不支持的降级到为不显示...

## 组件代码
```css
display: block; /* 兼容不支持 -webkit-box 的浏览器 */
display: -webkit-box; /* 条件1 */
-webkit-box-orient: vertical; /* 条件2 */
overflow: hidden; /* 条件3 */
/* 条件4: 显示的行数，_如果有更多内容_在最后一行末尾显示...
但文本高度其实没变，所以还需要条件3 */
-webkit-line-clamp: 4;

line-height: 25px; /* 通常会明确设置行高，便于控制 */
max-height: 100px; /* 关键：最大可见高度，行数 * 行高 + padding等，也可以是 height */
```

## HaoUI类库使用示例
### 代码
```css
.poem {
    line-height: 25px;
    height: 100px;
    border: 1px solid #ccc;
    padding: 5px;
    /* -webkit-line-clamp: 8; */ /* 超出4行的需自定义 */
}
```
```html
<article class="hui-mle hui-mle4 poem">
春江潮水连海平，海上明月共潮生。
滟滟随波千万里，何处春江无月明。
江流宛转绕芳甸，月照花林皆似霰。
空里流霜不觉飞，汀上白沙看不见。
江天一色无纤尘，皎皎空中孤月轮。
江畔何人初见月，江月何年初照人？
人生代代无穷已，江月年年望相似。
不知江月待何人，但见长江送流水。
白云一片去悠悠，青枫浦上不胜愁。
谁家今夜扁舟子，何处相思明月楼？
可怜楼上月徘徊，应照离人妆镜台。
玉户帘中卷不去，捣衣砧上拂还来。
此时相望不相闻，愿逐月华流照君。
鸿雁长飞光不度，鱼龙潜跃水成文。
昨夜闲潭梦落花，可怜春半不还家。
江水流春去欲尽，江潭落月复西斜。
斜月沉沉藏海雾，碣石潇湘无限路。
不知乘月几人归，落月摇情满江树。
</article>
```

### 预览
<style type="text/css">
.hui-mle {
    display: block; /* 兼容不支持 -webkit-box 的浏览器 */
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
}
.hui-mle2 {
    -webkit-line-clamp: 2;
}
.hui-mle3 {
    -webkit-line-clamp: 3;
}
.hui-mle4 {
    -webkit-line-clamp: 4;
} /* 注意不能有空行，否则会被</p><p>分开 */
.poem {
    line-height: 25px;
    height: 100px;
    border: 1px solid #ccc;
    padding: 5px;
    /* -webkit-line-clamp: 8; */ /* 超出4行的需自定义 */
}
</style>
<article class="hui-mle hui-mle4 poem">
春江潮水连海平，海上明月共潮生。<br>
滟滟随波千万里，何处春江无月明。<br>
江流宛转绕芳甸，月照花林皆似霰。<br>
空里流霜不觉飞，汀上白沙看不见。<br>
江天一色无纤尘，皎皎空中孤月轮。<br>
江畔何人初见月，江月何年初照人？<br>
人生代代无穷已，江月年年望相似。<br>
不知江月待何人，但见长江送流水。<br>
白云一片去悠悠，青枫浦上不胜愁。<br>
谁家今夜扁舟子，何处相思明月楼？<br>
可怜楼上月徘徊，应照离人妆镜台。<br>
玉户帘中卷不去，捣衣砧上拂还来。<br>
此时相望不相闻，愿逐月华流照君。<br>
鸿雁长飞光不度，鱼龙潜跃水成文。<br>
昨夜闲潭梦落花，可怜春半不还家。<br>
江水流春去欲尽，江潭落月复西斜。<br>
斜月沉沉藏海雾，碣石潇湘无限路。<br>
不知乘月几人归，落月摇情满江树。
</article>

## 参考