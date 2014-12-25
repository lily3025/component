## 使用说明

### 外链形式

```html
<script src="{{src}}"></script>

<script>
    var l = new lunar(new Date(1986, 9, 26));
</script>
```

### 模块加载形式

```html
<script>
    require(['{{module}}'], function(lunar) {
        var l = new lunar(new Date(1986, 9, 26));
    });
</script>
```

## 文档参考

### 构造

```js
var l = new lunar(new Date(1986, 9, 26));
```

lunar 接受一个类型为 Date 的构造参数，返回对应的 `农历对象`。注意：Date 第二个参数（公历的月份）的范围是[0 - 11]，也就是说从 <span style="color:red">0</span> 开始。

### 属性

`农历对象` 拥有这些属性：

| 属性名 | 属性值示例 | 类型 | 说明 |
|------ |-------|-----|-----|
| animal		| "虎" 		| 字符串	| 生肖 `[鼠、牛、虎、兔、龙、蛇、马、羊、猴、鸡、狗、猪]` |
| cnDay			| "日" 		| 字符串	| 星期几 `[一、二、三、四、五、六、日]` |
| gzChrono		| "子"		| 字符串	| 干支时 `[子、丑、寅、卯、辰、巳、午、未、申、酉、戌、亥]` |
| gzDate		| "癸卯"		| 字符串	| 干支日 `[甲子、...、癸亥]` |
| gzMonth		| "戊戌"		| 字符串	| 干支月 `[甲子、...、癸亥]` |
| gzYear		| "丙寅"		| 字符串	| 干支年 `[甲子、...、癸亥]` |
| isBigMonth 	| false		| 布尔值	| 大小月 `[true：大、false：小]` |
| isLeap		| undefined	| true / undefined | 是否闰月|
| julianDay		| 2446729.5 | 数值	| [儒略日](http://baike.so.com/doc/6432578.html)|
| lDate			| "廿三" 	| 字符串	| 农历日 |
| lMonth		| "九" 		| 字符串	| 农历月 |
| lNextMonth	| "十" 		| 字符串	| 下月	|
| term			| "" 		| 字符串	| 节气 `[冬至、小寒、大寒、立春、雨水、惊蛰、春分、清明、谷雨、立夏、小满、芒种、夏至、小暑、大暑、立秋、处暑、白露、秋分、寒露、霜降、立冬、小雪、大雪]` |

### 方法

`农历对象` 只有一个方法：festival，用来返回当天节日列表。

```html
<script>
var l = new lunar(new Date(2014, 0, 30));
l.festival();

//[{desc: "除夕", type: "v"}]
</script>
```