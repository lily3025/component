## 使用说明

jQuery 本身没有提供改变颜色的动画，而 css 中颜色值的表现形式又有很多种，使用不便。本插件可以处理各种形式的颜色字符串，并扩充了 jQuery 的 animate 方法。

### 外链形式

```html
<script src="{{src}}"></script>

<script>
    $('body').animate({'background-color' : 'red'});
</script>
```

### 模块加载形式

jQuery Color 不是标准的 AMD 模块。不过仍然可以这样引入：

```html
<script>
    require(['{{module}}'], function(_) {
        $('body').animate({'background-color' : 'red'});
    });
</script>
```

## 颜色动画

jQuery Color 插件通过扩充 jQuery 的 animate 方法，来提供改变颜色的动画，而使用上与常规动画没有任何区别（见上面的示例）。它支持这些属性：

- backgroundColor
- borderBottomColor
- borderLeftColor
- borderRightColor
- borderTopColor
- color
- columnRuleColor
- outlineColor
- textDecorationColor
- textEmphasisColor`

## 颜色处理 

jQuery Color 插件也提供了一些处理颜色的方法。要使用这些方法，首先需要获取 Color 对象，再调用 Color 对象上的相应方法。下面只介绍最常用的 rgba 模式。

### 获取 Color 对象

有这几种方法获取 Color 对象：

1) 从字符串解析，如：

```javascript
jQuery.Color( "#abcdef" );
jQuery.Color( "rgb(100,200,255)" );
jQuery.Color( "rgba(100,200,255,0.5)" );
jQuery.Color( "red" );
```

默认情况下，jQuery Color 只能识别以下颜色名，要支持更多颜色名可以 [引入这个文件](file:jquery.color.svg-names.js)：

`aqua`, `black`, `blue`, `fuchsia`, `gray`, `green`, `lime`, `maroon`, `navy`, `olive`, `purple`, `red`, `silver`, `teal`, `white`, `yellow`

2) 通过参数构造，如：

```javascript
jQuery.Color( 55, 55, 55, 0.5 );
jQuery.Color([ 55, 55, 55, 0.5 ]);
```

jQuery Color 还支持通过 object 的方法构造 Color 对象，但是有 [bug](https://github.com/jquery/jquery-color/issues/58)，**不要使用**。

3) 从元素 css 属性获取，如：

```javascript
jQuery.Color( $('body'), 'color' );
```
### Getters / Setters

Color 对象上常用的 Getter：

- red()
- green()
- blue()
- alpha()
- rgba()

Color 对象上常用的 Setter（Setter 返回都是 copy 后的新对象）：

- red( val )
- green( val )
- blue( val )
- alpha( val )
- rgba( red, green, blue, alpha )
- rgba([ red, green, blue, alpha ])

```javascript
var color = $.Color('red');
color.red(); //255
color.red(55);
color = color.red(55);
color.rgba(); //[55, 0, 0, 1]
```

### 其他方法

toRgbaString，将 Color 对象转为字符串，如果 alpha === 1，返回 `rgb(r, g, b)` 形式；否则返回 `rgba(r, g, b, a)` 形式，如：

```javascript
$.Color('red').toRgbaString(); //"rgb(255,0,0)"
$.Color(255, 55, 10, 0.4).toRgbaString(); //"rgba(255,55,10,0.4)"
```