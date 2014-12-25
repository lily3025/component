# template 函数参考
underscore 提供了一个简易的模板函数，但足够满足各种日常需求，使用也非常简便。

## template

说到底只有两种使用方法：
```js
<%= 变量君 %>
<%- 变量君他哥 %>
<% 语句君 %>
```

### **<% %>**

让我们先来调戏`语句君`，举个栗子
```js
_('<% if (true) { %>\
    <p>你可以这样</p>\
<% } %>').template({});

_('<% for (var i=0;i<1; i++) { %>\
	<p>也可以这样</p>\
<% } %>').template({});

_('<% console.log("还可以这样") %>').template({});

_('<% alert("甚至这样..");alert("别急，还没完~") %>').template({});
```
总之，你在<script></script>里写的东西通通可以塞进<% %>里面去
`Attention~ 看!<%%>和语句君不是在一起的，中间还有个空格，虽然把他们贴在一起也不会产生神马后果，但是老师说距离产生美！`

桥都马得！你难道木有发现上面的template()中多了点什么？那个`{}`参数是来打酱油的？
> {}: 老虎不发威，你是要把我当hello kitty么！！**数据对象**不上场，要模板有毛用！！

*此处略去出场音乐30秒....*

```js
_('<% if (nationality == "China") { %>\
<p>你好!</p>\
<% } else if (nationality == "Korean") { %>\
<p>안녕하세요!</p>\
<% } else { %>\
<p>Hello!</p>\
<% } %>').template({ nationality : 'China' });
```

### **<%= %>**

坏了，`变量君`已经等急了，他说要陪你好好玩玩。。

```js
_('大家好，我叫 <%= name %>，其实我不叫 <%= name %>，我的座右铭是“<%= word.replace(" possible", " impossible") %>”').template({ name: '变量君', word: 'Nothing is possible'});
```

> 我要承认错误，我欺骗了你，其实`变量君`真的不叫`变量君`

```js
_('<%= "其实你可以这样" %>').template({});

_('<%= "你可以这样".replace("可以", "还可以")%>').template({});

_('<%= _(data).values().join("，") %>').template({data: {one:"甚至这样",two:"这样",three:"还有这样.."}});

_('<%= "其实你还可以尝试一下这样" + obj %>').template({obj: {}});
```

***一切可以显示的东西***数字、字符串、balabala都可以塞进<%= %>他们会原样的显示出来

### **<%- %>**

变量君还有一个哥哥，他哥比他多一个技能，`编码html字符`，一般需要对付怪兽`XSS`的时候就把他哥哥请出来。

```js
_.template("<i><%- value %></i>"， {value: '<script>'});
// => <i>&lt;script&gt;</i>
```

### **example**

一大个儿栗子
```js
_('<% for (var i=0; i<length; i++) {\
	if (people[i].who == "I") { %>\
<p><%= people[i].who %> am a <%= _.escape(people[i].describe) %> <%= people[i].sex == "M" ? "boy" : "girl" %>.</p>\n\
<% } else { %>\
<p>They said that, <%= people[i].who.toLowerCase() %> are a <%= _.escape(people[i].describe) %> <%= people[i].sex == "M" ? "boy" : "girl" %>.</p>\
<% }\
 }%>').template({
	length: 2,
	people: [
		{ who: 'I', describe: 'good', sex: 'M'},
		{ who: 'You', describe: 'bad', sex: 'F'},
	]
});
```

### compail

> template名言：用模板不像谈恋爱，关系可以不是一对一的！

上面那一筐栗子，每个模板都只娶了一组数据，但在这个年代，一个，怎么够。。。
于是：
```js
var MrTemplate = _('I am Mr.Template, I have a <%= friend %>.').template();
console.log(MrTemplate({friend: 'girfriend'}));
console.log(MrTemplate({friend: 'boyfriend'}));
```

*一句话总结，_(模板).template()，在`template()`里面塞入数据，得到的是渲染后的`字符串`，不塞数据，得到的是一个`渲染方法`*

### setting

>问：如果看*<% %>*和*<%= %>*不顺眼怎么办？

>答：休了她，换一个！

```js
_.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g
};
// 新欢是 {{ }}
```

最后多句嘴，下面两种写法是.等.价.的
```js
_(x).template(y);

_.template(x, y);
```
