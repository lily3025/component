## 组件生命周期
Widget 有一套完整的生命周期，控制着组件从创建到销毁的整个过程。主要有 initialize，render，destroy 三个过程。

### Initialize
Widget 在实例化的时候会做一系列初始化操作，包括缓存实例，解析配置，初始化事件等。并最后调用子类的初始化方法`setup()`

### Render
将`this.element`插入到文档流中，默认插入到document.body，可以通过parentNode指定。  
Render 这一步操作从 Initialize 中独立出来，因为有些组件在实例化的时候不希望操作 DOM，如果希望实例化的时候处理可在 setup 里调用 `this.render()`。

### Destroy
组件销毁。将 widget 生成的 element 和事件都销毁。
