## Data-Api
Widget支持自动渲染，可以根据DOM上得data-api渲染相应的组件

当在`this.element`上设置属性data-api="on"时，widget会将所有data-attrname转为驼峰命名作为配置。  

Example: 
```html
<div class="tab" data-api="on" data-auto-play="true" data-interval="10000"></div>
<script>
    var tab = new Tab( {
        element: '.tab'
    });
</script>
```
等同于：
```html
<div class="tab"></div>
<script>
    var tab = new Tab({
        element: '.tab',
        autoPlay: true,
        interval: 10000
    });
</script>
```
