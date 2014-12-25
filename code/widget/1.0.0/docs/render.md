## Widget渲染

每个 WIDGET 只会对应一个 ELEMENT，会对他的 DOM 及事件进行操作。

ELEMENT 的生成有两种情况

1. 实例化的时候传入
2. 由 TEMPLATE 生成  

WIDGET 默认处理模板的方式是直接转换成 JQUERY 对象，但不能处理数据。
渲染后，可通过`THIS.ELEMENT`和`THIS.$ELEMENT`分别获得DOM ELEMENT和经过JQUERY包装的ELEMENT。

## _onRenderAttr

Widget使用了Attribute, 支持_onChangeAttr, 另外它还做了一层扩展。提供了_onRenderAttr机制。  

_onChangeAttr在属性初始化时不会触发，只会在属性改变时触发。而_onRenderAttr会在以下两种情况下触发：  
1. 属性改变时  
2. 在调用render方法时（插入到文档流之前），但属性值为null或undefined时则不会触发。

Widget为属性id, classNames, style定义了_onRender方法

```js
var tab = new Tab({
    id: 'myTab', 
    className: 'tab', 
    style: 'border: 1px'
});
```
在调用`render()`时，widget会实时根据id, className, style属性更改this.element的id, class和样式












