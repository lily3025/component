## 简单介绍
网页中的遮罩层，或者叫蒙层，有弹层的时候用的比较多

<p data-height="268" data-theme-id="11155" data-slug-hash="yygzMq" data-default-tab="result" data-user="lily3025" class='codepen'>See the Pen <a href='http://codepen.io/lily3025/pen/yygzMq/'>yygzMq</a> by lily (<a href='http://codepen.io/lily3025'>@lily3025</a>) on <a href='http://codepen.io'>CodePen</a>.</p> <script async src="//assets.codepen.io/assets/embed/ei.js"></script>
## 组件代码
```html
<div class="g-mask">
</div>
```
```css
.g-mask {
  position: fixed;
  _position: absolute;
  background: #000;
  filter: alpha(opacity=20);
  opacity: 0.2;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  overflow: hidden;
  zoom: 1;
}
body {
  height: 100%;
}
```
## 说明
兼容i6

