## 简单介绍
点击回到顶部功能，只需简单调用，兼容ie6

## 调用方法
```css
<script src="http://s0.qhimg.com/!53c02bd9/go-top.js"></script>
<script>
/* <![CDATA[ */
(new GoTop()).init({
  pageWidth   :1000,
  nodeId      :'go-top',
  nodeWidth   :50,
  distanceToBottom  :125,
  hideRegionHeight  :800,
  text      :'回到顶部'
});
/* ]]> */
</script>
```

## 使用详解
参数均为可选，都有对应的默认值，可以通过传参设置回到顶部按钮的样式
1. pageWidth：页面宽度
2. nodeId：Go Top 节点的 ID
3. nodeWidth： Go Top 节点宽度
4. distanceToBottom： Go Top 节点上边到页面底部的距离
5. distanceToPage： Go Top 节点左边到页面右边的距离
6. hideRegionHeight： 隐藏节点区域的高度 (该区域从页面顶部开始)
7. text： Go Top 的文本内容
