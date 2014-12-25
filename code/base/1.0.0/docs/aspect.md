### Aspect
使用Aspect，允许你在制定方法执行的前后插入特定函数。

#### function before(methodName, callback, [context])
在`ins[methodName]`方法执行前，先执行`callback`函数  
`methodName`：方法名   
`callback`：回调函数  
`context`：若传入，则回调函数的`this`指向`context`

```js
var Person = Base.extend({
    initialize: function() {
        this.before('sleep', function(ev) {
            console.log('Take a shower');
        });
    }, 
    sleep: function() {
        // ....
    }
});
```

##### `callback`中可通过return false来阻止原来函数的执行。  


#### function after(methodName, callback, [context])
在`ins[methodName]`方法执行后，再执行`callback`函数
`methodName`：方法名   
`callback`：回调函数  
`context`：若传入，则回调函数的`this`指向`context`

```js
var Person = Base.extend({
    initialize: function() {
        this.after('shower', function(ev) {
            console.log('Go to bed');
        });
    }, 
    shower: function() {
        // ....
    }
});
```
##### 注意：
`before`和`after`是按注册的先后顺序执行的，先注册先执行。

##### _beforeMethod
继承时若有传入的`_beforeMethod`方法，则会自动绑定到method执行前。Example: 
```js
var Person = Base.extend({
    sleep: function() {
        // ....
    },
    _beforesleep: function() {
        console.log('Take a shower');
    }
});
// 等同于
var Person = Base.extend({
    initialize: function() {
        this.before('sleep', function(ev) {
            console.log('Take a shower');
        });
    }, 
    sleep: function() {
        // ....
    }
});
```

##### beforeMethod

创建实例时，也可传入beforeMethod方法
```js
var Person = Base.extend({
    sleep: function() {
        // ....
    }
});

var p = new Person({
    beforeSleep: function() { 
        console.log('Take a shower'); 
    }
});
```
