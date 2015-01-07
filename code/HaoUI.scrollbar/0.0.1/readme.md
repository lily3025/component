## 简单介绍
自定义滚动条样式，可以显示出想要的滚动条样式

## demo（附有编辑预览功能）
<p data-height="268" data-theme-id="11155" data-slug-hash="RNodRM" data-default-tab="result" data-user="lily3025" class='codepen'>See the Pen <a href='http://codepen.io/lily3025/pen/RNodRM/'>RNodRM</a> by lily (<a href='http://codepen.io/lily3025'>@lily3025</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

## 组件代码
```css
@bw: 10px;   /*滚动条宽度*/
@radius: 20px;  /*滚动条的圆角*/
@bar-color: #f5f5f5; /*滚动条的颜色*/
@thumb-color: #ccc;  /*拖拽块的颜色*/
@hover-bar-color: #f5f5f5;  /*hover后滚动条颜色*/
@hover-thumb-color: #ccc;  /*hover后拖拽块颜色*/
@bar-color-hover: #eee;  /*拖拽块hover滚动条颜色*/
@thumb-color-hover: #999;  /*拖拽块hover拖拽块颜色*/

.class-myself {
    height:200px;
    width: 690px;
    font-size: 15px;
}
.smart-scrollbar {
    overflow-y: auto;
}
.smart-scrollbar::-webkit-scrollbar {
    background: @bar-color;
    border-radius: @radius;
    padding-right: 10px;
    width: @bw;
}
/* 默认拖拽块，background和wrapper一致，实现默认拖拽块不可见 */
.smart-scrollbar::-webkit-scrollbar-thumb {
    background: @thumb-color;
    border-radius: @radius;
}
/* hover后滚动条浅色 */
.smart-scrollbar:hover::-webkit-scrollbar {
    background: @hover-bar-color;
}
/* hover后拖拽块浅色 */
.smart-scrollbar:hover::-webkit-scrollbar-thumb {
    background: @hover-thumb-color;
}
/* 滚动条hover深色 */
.smart-scrollbar::-webkit-scrollbar:hover {
    background: #eee;
}
/* 拖拽块hover深色 */
.smart-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #999;
}

```
##代码详解
1. css的代码用less实现，主要是为了使用者能更灵活得使用此功能，共八个变量，不修改这些变量则显示默认的效果，如果要自定义效果，可以用这八个变量实现；
2. 开发者可选择性地使用less代码或编译后的css代码，点击‘效果预览’中的LESS tab，可以看到右下角有个VIEW COMPILED按钮，点击此按钮可以查看LESS编译后的css代码；
3. 点击‘效果预览’中的edit on codepen可以到codepen中实时编辑代码并进行预览；
4. smart-scrollbar是滚动条的样式实现，class-myself是使用者自己定义的样式，这里只是一个示例；
5. 目前只支持高级浏览器，其他浏览器会显示默认的滚动条样式。


