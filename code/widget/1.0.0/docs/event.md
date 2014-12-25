
## 事件代理

使用Widget提供的事件代理有如下好处： 
 
1. 所有事件都代理到`this.element`上。这样若DOM内容有修改，无需重新绑定。  
2. 回调函数的`this`指向组件实例  
3. 支持以配置形式声明事件代理  

### 事件代理API

#### function delegateEvents([element], events, handler)

`element`：事件代理的对象，为空时，默认代理到this.element上  
`events`：事件类型和Selector，如'click .btn'  
`handler`：回调函数。可传入Function或实例上的方法名  

Example: 
```js
// 将this.clickHandler代理到ele上
this.delegateEvents(ele, 'click .btn', 'clickHandler');

// element为空时，默认代理到this.element上
this.delegateEvents('click .btn', 'clickHandler');

// 支持以对象形式传入
this.delegateEvents({ 'click .btn': 'clickHandler'});
```

#### function undelegateEvents([element], eventKey)

`element`：事件代理的对象，为空时，默认为this.element
`eventKey`：事件类型和Selector，如'click .btn'  

Example: 
```js
// 解除element上关于eventKey的代理
this.undelegateEvents(ele, eventKey);

// element为空时，默认解除this.element上的对应代理
this.undelegateEvents(eventKey);

// eventKey为空时，解除所有事件代理
this.undelegateEvents();
```

### 在attrs中声明代理事件
```js
var MyWidget = Widget.extend({
    attrs: {
        events: {
            "dblclick": "open",
            "click .icon.doc": "select",
            "mouseover .date": "showTooltip"
        }
    },
    open: function() {
        ...
    },
    select: function() {
        ...
    },
    ...
});
```

#### events中支持{{attrName}}表达式
```js
var MyWidget = Widget.extend({
    attrs: {
        events: {
            "click {{selectors.nextControl}}": "next"
        },
        selectors: {
            nextControl: '.next-control'
        }
    },
    next: function() {
        ...
    }
    ...
});
```

#### events可在实例化组件式作为配置传入
```js
var widget = new MyWidget({
    events: {
        'click .control': function() {
            ...
        }
    }
});
```
