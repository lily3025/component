## 使用说明

基于 QWrap(将会支持 jQuery) 的组件化开发框架，主要关注组件路由、组件消息传递和组件异步加载等，其中要解决的核心问题是组件间的解耦。

### 外链形式

```html
<script src="http://s9.qhimg.com/lib/qwrap/115.js"></script>
<script src="{{src}}"></script>

<script>
// 创建应用程序
TF.Core.Application.create({
    baseUrl: "./",
});

// 定义名为 Home 的组件
TF.Component.Home = TF.Core.ComponentMgr.create({
    // 组件 DOM 准备完毕回调函数
    DomReady: function() {
        // 定义组件 Layout
        // 不同 Layout 可以让组件获取不同的能力
        this.sys.createNormalLayout({
            // 组件主模板的模板名
            'name': 'listing',
            // 定义组件主处理函数
            'fn': this.refresh
        });
    },

    // 系统消息 Route Before 处理函数
    // 表示在消息处理之前执行的操作
    componentRouteActionBefore: function(args) {
        // TODO
    },

    // 组件主处理函数
    refresh: function() {
        if (this.sys.isHidden()) {
            return;
        }
    }
});

// 创建路由，默认路由到名为 Home 的组件
TF.Core.Router.create('Home');

// 添加名为 Home 的组件到组件管理器中
TF.Core.ComponentMgr.add([{
    name: 'Home',
    appendRender: false,
    lazyRender: false,
    hide: false,
    renderTo: '#content'
}]);

// 等待 DOM Ready
TF.Ready = function(){
    // 启动应用程序
    TF.Core.Application.bootstrap();
};
</script>
```

## 文档参考

* [快速开始](https://github.com/CodeIgniter/Transformers/wiki/%E5%BF%AB%E9%80%9F%E5%BC%80%E5%A7%8B)
* [目录](https://github.com/CodeIgniter/Transformers/wiki/%E7%9B%AE%E5%BD%95)