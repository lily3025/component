### Event

---

提供自定义事件的添加，移除和触发功能,  Example: 

```js
var Cat = Base.extend({
    initialize: function() {
        this.on('getup', function() {
            console.log('Strech~~');
        });
    }, 
    getup: function() {
        this.trigger('getup');
    }, 
    destroy: function() {
        this.off('getup');
    }
});
``` 
#### function on(eventType, callback, [context])
给对象绑定事件回调函数。*chainable*    
`eventType`：事件名  
`callback`：回调函数  
`context`：回调函数的this值。若为空，则毁掉函数的this默认指向事件绑定对象

#### function off([eventType], [callback])
给对象移除事件回调函数。   *chainable*  
`eventType`：事件名  
`callback`：回调函数  
```js
// off支持以下三种写法

ins.off();            // 移除ins上的所有事件回调函数

ins.off('change')        // 移除ins上change事件的所有回调函数

ins.off('change', onChange)        // 移除ins上change事件的名为onChange的回调函数
```

#### function trigger([eventType], [Array args])
触发一个或多个事件（用空格分离)。  *chainable*  
`eventType`：事件名  
`args`：传给回调函数的额外参数
```js
ins.on('change', function(ev, curValue, preValue) {
    // ...
});

ins.trigger('change', [curValue, prevValue]);        // 触发change事件，传递curValue和prevValue作为额外参数

ins.trigger('change switch', [curValue, prevValue]);        // 触发change和switch事件
```
回调函数中的第一个参数`ev`包含以下信息：  
`ev.type`：事件名  
`ev.timeStamp`：事件触发时的时间戳  
`ev.target`：事件绑定对象
