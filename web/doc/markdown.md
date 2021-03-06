# Markdown 简明指南

---

## 什么是 Markdown

Markdown 是一种轻量级标记语言，创始人为约翰·格鲁伯（John Gruber）和亚伦·斯沃茨（Aaron Swartz）。它允许人们“使用易读易写的纯文本格式编写文档，然后转换成有效的XHTML(或者HTML)文档”。这种语言吸收了很多在电子邮件中已有的纯文本标记的特性。

简而言之，Markdown 至少有以下优点：

* 纯文本，所以兼容性极强，可以用所有文本编辑器打开。
* 让你专注于文字而不是排版。
* 格式转换方便，Markdown 的文本你可以轻松转换为 html、电子书等。
* Markdown 的标记语法有极好的可读性。

Markdown 语法比较灵活，本文只挑选最常用的写法来介绍。完整文档请前往 [Markdown 官网](http://daringfireball.net/projects/markdown/syntax)查看。

## 一、标题

在 Markdown 中，你只需要在文本前面加上 # 即可，同理、你还可以增加二级标题、三级标题、四级标题、五级标题和六级标题，总共六级，只需要增加  # 即可，标题字号相应降低。例如：

```
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
```

注：# 和「一级标题」之间建议保留一个字符的空格，这是最标准的 Markdown 写法。

上面的例子最终效果是这样的：

# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题

## 二、列表

列表格式也很常用，在 Markdown 中，你只需要在文字前面加上 - 就可以了，例如：

```
- 文本1
- 文本2
- 文本3
```

如果你希望有序列表，也可以在文字前面加上 1. 就可以了，例如：

```
1. 文本1
1. 文本2
1. 文本3
```

注：-、1.和文本之间要保留一个字符的空格。

上面的例子最终效果是这样的：

- 文本1
- 文本2
- 文本3

1. 文本1
1. 文本2
1. 文本3

## 三、链接和图片

在 Markdown 中，插入链接只需要使用 `[链接文本](链接地址 "链接title")` 这样的语法即可（title 可省略），例如：

```
[360导航](http://hao.360.cn "这是个链接")
```

在 Markdown 中，插入图片只需要使用 `![图片alt](图片链接地址 "图片title")` 这样的语法即可（title 可省略），例如：

```
![360导航](http://p1.qhimg.com/t01a21cb7d399f87a40.png)
```

注：插入图片的语法和链接的语法很像，只是前面多了一个 ！。

如果要给图片加链接，也很简单。把`链接`语法中的`链接文本`替换为图片语法就可以了。

```
[![360导航](http://p1.qhimg.com/t01a21cb7d399f87a40.png)](http://hao.360.cn "这是个链接")
```

上面的例子最终效果是这样的：

[360导航](http://hao.360.cn "这是个链接")
![360导航](http://p1.qhimg.com/t01a21cb7d399f87a40.png)
[![360导航](http://p1.qhimg.com/t01a21cb7d399f87a40.png)](http://hao.360.cn "这是个链接")

## 四、引用

在 Markdown 中，你只需要在你希望引用的文字前面加上 > 就好了，例如：

```
> 这是一段引用的文字哦。 
```

注：> 和文本之间要保留一个字符的空格。

上面的例子最终效果是这样的：

> 这是一段引用的文字哦。 

`>`也可以跟其它语法结合使用，例如：

```
> ### 标题2
> - 列表1
> - 列表2

```

解析后是这样的：

> ### 标题2
> - 列表1
> - 列表2

## 五、粗体、斜体和删除线

Markdown 的粗体和斜体也非常简单，用两个 `*` 包含一段文本就是粗体的语法，用一个 `*`包含一段文本就是斜体的语法。例如：

```
我们都是*程序员*，我们来自**奇舞团**。
```

解析是后这样的（一个和两个`*`分别被解析为：`em`和`strong`标签）：

我们都是*程序员*，我们来自**奇舞团**。

如果要给文字加上删除线，可以使用两个 `~`，例如：

```
只有~~IE才支持~~（firefox也支持了）mouseenter。
```

解析后是这样的（两个 `~` 被解析为 `del`标签）：

只有~~IE才支持~~（firefox也支持了）mouseenter。

## 六、代码

简单的代码，如参数、方法等关键字，可以使用 ` `` `定义，如：

```
`Cookie`类有`set`和`set`两个方法。
```

解析后是这样的：

`Cookie`类有`set`和`set`两个方法。

成段的代码，可以使用下面的方法定义，如：

	```
	<script>
		alert('hello world!');
	</script>
	```

另外，还可以用下面这种写法指定代码语言，目前支持 `html`，`js`，`css` 这几种。

	```html
	<script>
		alert('hello world!');
	</script>
	```

解析后是这样的：

```html
<script>
	alert('hello world!');
</script>
```

## 七、表格

这是一个表格的 Markdown 语法：

```
| 表头1 | 表头2 | 表头3 |
| ---- | ---- | ---- | 
| 1    | 2    | 3    |
| 1111 | 2222 | 3333 | 
```

显示效果为：

| 表头1 | 表头2 | 表头3 |
| ---- | ---- | ---- | 
| 1    | 2    | 3    |
| 1111 | 2222 | 3333 | 

如果要控制表格某一列的对齐方式，也很简单（请留意第二行的英文冒号）：

```
| 左对齐（默认） | 居中对齐 | 右对齐 |
| :----------  | :-----: | ----: | 
| 1            | 2       | 3     |
| 1111         | 2222    | 3333  | 
```

显示效果为：

| 左对齐（默认） | 居中对齐 | 右对齐 |
| :----------  | :-----: | ----: | 
| 1            | 2       | 3     |
| 1111         | 2222    | 3333  | 

表格当然也可以跟其它语法结合使用，如：

```
| 表头1 | 表头2 | 表头3 |
| ---- | ---- | ---: | 
| 1    | 2    | 3    |
| `code` | *我变斜了* | **我是加粗的** | 
```

显示效果为：

| 表头1 | 表头2 | 表头3 |
| ---- | ---- | ---: | 
| 1    | 2    | 3    |
| `code` | *我变斜了* | **我是加粗的** | 
