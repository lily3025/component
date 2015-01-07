## 简单介绍
### 简单单行省略
简单单行省略指一个*宽度确定*的元素包含一段文本，对文本进行单行显示，超出省略。

### 复杂单行省略
复杂单行指的是：元素_宽度确定_，包含若干子元素(子元素可能float)，对其中_一个_元素进行省略(不一定是最末尾的那个元素)。
例如如下HTML：
```html
<style type="text/css">
#sle-wrapper {
  width: 400px;
  border: 1px solid #ccc;
}
#sle-float {
    float: right;
}
</style>
<div id="sle-wrapper" class="hui-sle">
    <span id="sle-float">330米</span>
    <a id="sle-child" class="hui-sle-child">一二三四五六七八九十一二三四五六七八九十</a>
</div>
```

###预览
<style type="text/css">
&#035;sle-wrapper {
  width: 400px;
}
&#035;sle-float {
    float: right;
}
</style>
<div id="sle-wrapper" class="hui-sle"><span id="sle-float">330米</span><a id="sle-child" class="hui-sle-child">一二三四五六七八九十一二三四五六七八九十</a></div>

##技术详解
###组件代码
HaoUI组件CSS如下:
```css
.hui-sle {
  white-space: nowrap; /* 强制单行显示 */
  overflow: hidden; /* Must */
  text-overflow: ellipsis; /* Must */
}
/* 对IE6兼容，实际上是对此子元素指定宽，进行简单单行省略 */
.ie6 .hui-sle-child {
  display: inline;
  zoom: 1;
  text-overflow: ellipsis;
  overflow: hidden;
}
```

### 注意
必须宽度确定，如显示指定当前元素的宽度，或隐式由祖先元素限定了当前元素的宽度。

### 浏览器支持
IE >= 6 Chrome >= 4 FF >= 7 Safari >= 3.1 Opera >= 11
iOS Safari >= 3.2  Android Browser >= 2.1

## HaoUI类库使用示例
### 代码
### 预览

## 参考