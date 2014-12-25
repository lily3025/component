## 使用说明

### 外链形式

```html
<script src="{{src}}"></script>

<script>
    $.ui.Waterfall( target, options? )
</script>
```

### 模块加载形式

```html
<script>
    require(['{{module}}'], function() {
        $.ui.Waterfall( target, _options?_ )
    });
</script>
```

## 文档参考

**构造器参数**

* `target` _String, Element, jQuery Object_

    [必需] target 可以是选择器字符串、DOM 元素，也可以是 jQuery Object，仅对第一个匹配元素进行拖拽绑定。

* `options` _Object_

    [可选] 多选形式的可配置参数。

***

**可配置形式的参数的详细说明**

* `colWidth` _Number_

    默认值为`252`，瀑布流的列宽(包含列的padding，列之间不要使用margin)。

* `container` _String|Element|jQuery Object_

    默认值为`window`，布局容器，默认为当前页面的 window，该容器可以是一个普通的div元素，也可以是不垮域的 iframe 的 window。

* `create` _Function_

    默认值为`null`，创建单元格的函数，函数的返回值就是单元格的 HTML 字符串，该 HTML 字符串须包括在一个 li 的标签中，该函数接受一个 Object 类型的参数，该对象中就保存了创建该单元格所需要的数据。

* `reservedWidth` _Number_

    默认值为`20`，布局容器中需要预留的宽度，通常用于瀑布流左右两侧与布局容器之间的最小间距。

* `init` _Function_

    默认值为`null`，瀑布流初始化时执行的回调函数，在瀑布流还未创建单元格时触发，该函数接受一个 Number 类型的参数，就是瀑布流的在布局容器中的实际宽度，该函数也可以是一个 Promise 实例。

* `load` _Function_

    默认值为`null`，瀑布流用于加载数据的函数，该函数接受接受两种返回值，如果是纯数组的返回值，则返回的就是数据本身，或者也可以返回一个 Promise 实例，该实例在运行完成后会返回数据。
    
* `maxCols` _Number_

    默认值为`null`，固定瀑布流的最大列数，如果和 minCols 的值相等，那么不会有 resize 窗口时的自适应效果，未传该参数则不限制最大列数。
    
* `maxHeight` _Number_

    默认值为`800`，单元格的最大高度，大于该高度将对图片进行裁切。
    
* `minCols` _Number_

    默认值为`2`，固定瀑布流的最小列数，如果和 maxCols 的值相等，那么不会有 resize 窗口时的自适应效果，默认最小列数为 2 列。
    
* `spaceY` _Number_

    默认值为`14`，瀑布流的纵向间距，如果瀑布流的内容高度是固定的，可以使用该参数，比如需要在图片下方添加文字区域，而文字区域又是定高度的，那么该高度也需要包括在内，如果文字区域是自适应高度的，瀑布流组件会另外再计算，无需传参，自适应会牺牲一点计算的性能。  

* `specialPosition` _String_

    默认值为`null`，该参数的值可以是 'left'，也可以是 'right'，瀑布流初始化时添加在瀑布流第一行的最左列或最右列的特殊元素的方位值。 

* `serialize` _Function_

    默认值为一个函数，默认的函数就是接受一个参数，该函数的返回值就是参数。该函数用于格式化获取到的数据，确保传递给瀑布流组件是固定格式的数据。

***

**实例方法**

* `on`

    对拖拽实例绑定事件，该方法接受2个参数，第一个参数是事件类型，第二个参数是事件处理器，返回实例便于链式调用。

* `un`

    卸载拖拽实例的事件。该方法接受1个事件类型的参数。返回实例便于链式调用。

* `reload`

    将瀑布流中原有的单元格都清除掉，重新加载数据并创建新的单元格。
    
* `loadEnd`

    通知瀑布流组件所有的数据都加载好，加载已经结束了。    

***

**支持的事件类型**

* `createbefore`

    创建组之前执行的事件。

    * `event.extraData` 用于创建该组的数据。
    
* `createafter`

    创建组之后执行的事件。

    * `event.extraData` 用于创建该组的数据。  

* `resize`

    瀑布流组件 resize 时执行的事件。

    * `event.width` 瀑布流的实际宽度。 
    
***

**数据格式说明**

瀑布流组件真正需要依赖的数据格式只有 height (高度)这个字段，其他字段如图片的 width (宽度)和图片的 src (地址)，这些都可以自定义其字段名。

**瀑布流组件需要依赖的样式**
```css
.wf_group{ *zoom:1; font-size:12px; line-height:1.5; }
.wf_group:after{ content: "."; display:block; clear:both; visibility:hidden; line-height:0; height:0; }
.wf_group .wf_col{ float:left; /*width:238px; padding:0 7px; 配合 colWidth 使用 */ }
.wf_group .wf_col li{ /*width:238px; margin-bottom:14px; 配合 colWidth 和 spaceY 一起使用 */ }
```

***
