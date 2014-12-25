# 推荐采用的项目结构

采用模块化开发方式后，JavaScript 代码粒度会变小，很多时候一个 function 就是一个模块文件。为了控制线上 js 请求数，项目上线之前，必须进行合并操作。本文介绍如何在实际项目中使用 qiwoo 模块，如何规划项目 js 目录，最后如何与燕尾服集成，完成 js 模块合并压缩等功能。

## 代码目录结构

以下为燕尾服的[静态资源代码目录](http://stc.qiwoo.org/introduce#regular)：

```
js/         目录下只能存放 .js 文件
css/        目录下只能存放 .css 文件
img/        目录下可以存放 .jpeg, .jpg, .png, .gif, .bmp, .ico, .cur 文件
swf/        目录下只能存放 .swf 文件
html/       目录下只能存放 .html 文件
other/      目录下可以存放任何文件
module/     目录下存放公用的模块，每个模块下可以存放任何类型的文件。模块之间的资源不能相互引用
```

我们在进行项目开发时，需要遵守燕尾服规范来创建目录，以下是示例：

```
resource/
	js/
		lib/
			module_a.js
			module_b.js
			global.js
		page/
			common.js
			index.js
			detail.js
	module/
		cookie/
			1.0.2/
				cookie.js
		store/
			1.3.14/
				store.js
	css/
	...
	other/
tpl/
	index.tpl
	detail.tpl
```

`resource` 是所有静态文件的根目录，可以改成其他任意名字，但 `resource` 下 `js`、`module` 等目录名不能改变；`tpl` 是所有模板文件（smarty、php 模板，或者 html 文件）的根目录。

`module` 目录存放从 Qiwoo 平台下载到的模块。自己写的通用模块建议也按照[规范](doc.html?doc=develop#_%E6%A8%A1%E5%9D%97%E7%9A%84%E7%BB%93%E6%9E%84)整理好放在这个目录下，并提交给 Qiwoo 平台，造福更多人。

`js` 目录下，推荐新建两个目录：
1. `lib`：用来存放本项目的公用 JS（每个文件内容都是 define 定义的模块）；
1. `page`：用来存在本项目的页面 JS（每个文件内容都是 require 调用其他模块）；

注：`lib` 和 `page` 两个目录下，可以根据项目实际需要再建子目录；

## 页面 HTML 结构

推荐的页面结构如下：

```html
<!DOCTYPE html>
<html lang="zh-cn">
<head>
	<meta charset="UTF-8" />
	<title>示例页面</title>
	<!-- 基础库 -->
	<script src="http://s7.qhimg.com/static/8db6b82b8e7dae67/jquery,require,qw.core.js"></script>

	<!-- requirejs 配置 -->
	<script>
		require.config({
			baseUrl : '/resource',		//配置模块根路径到静态资源根目录。
            urlArgs : "r=" + (new Date()).getTime()		//避免开发环境缓存
		});
	</script>
</head>
<body>
	<div>页面内容...</div>
	<!-- 项目公用 JS -->
	<script src="/resource/js/page/common.js"></script>

	<!-- 页面业务 JS -->
	<script src="/resource/js/page/index.js"></script>
</body>
</html>
```

几点说明：

1. 页面 `head` 里引入基础库及 requirejs 库；
1. 配置 require 的 `baseUrl` 到静态资源根路径；
1. 页面底部外链引入项目公用 JS，如 `common.js`；
1. 页面底部外链引入页面业务 JS，如 `index.js`；
1. 使用外链，而<span style="color:red">不是</span> `data-main` 方式引入 js 文件；
1. 不要使用RequireJS里的shim等高级配置，这些会导致燕尾服合并时出问题。

### 项目公用 JS

项目公用 JS（如上面的 common.js），可以没有，也可以有多个，需要根据项目实际情况而定。common.js 的存在是为了合并项目里需要复用的模块，使得项目各页面之间可以更好地利用缓存：

1. 如果项目中各页面没有可以复用的模块，不需要 common.js；
1. 如果项目中不同页面可以复用的模块不完全相同，如项目分前后台，可以分成 common.js、common-front.js、common-admin.js，前台引入 common.js、common-front.js，后台引入 common.js、common-admin.js；

对于使用 QFrameSmarty 的项目，公用 JS 可以利用 Smarty 的模板继承机制，写在 base.tpl 里。

假设本例中，每个页面都要用到 module 目录下的 `cookie` 、 `store`，以及 js/lib 下的 `global` 模块。我们可以在 common.js 里这么写：

```js
require([
	'module/cookie/1.0.2/cookie', 
	'module/store/1.3.14/store',
	'js/lib/global'
], function(_, __, global) {
	global();
});
```

注：为了配合燕尾服分析模块依赖，项目任何地方使用模块时，都需要用完整路径（从 `baseUrl` 开始写），<span style="color:red">不要</span>给模块指定别名；

### 页面业务 JS

页面上的逻辑，需要写在 js/page 下的 JS 文件中。

假设首页需要用到 module 下的 `cookie`，以及 js/lib 下的 `module_a` 模块，还有自己的业务逻辑。可以在 js/page/index.js 里这么写：

```js
require(['module/cookie/1.0.2/cookie', 'js/lib/module_a'], function(Cookie, A) {
	//首页的业务逻辑
	var el = $('#xx');
	Cookie.set('xx', el.val());
	A();
});
```

或者：

```js
require(['module/cookie/1.0.2/cookie'], function(Cookie) {
	//首页的业务逻辑
	var el = $('#xx');
	Cookie.set('xx', el.val());
});

require('js/lib/module_a'], function(A) {
	//首页的业务逻辑
	A();
});
```

## 燕尾服编译

燕尾服编译时，与传统的 document.write 写法相比，需要多做的事情是：分析 js/page 中 JS 文件的模块依赖，用于合并。

为了避免重复合并，我们需要通过配置文件告诉燕尾服，哪个文件是公用 JS，是每个页面都会引入的。

### 一般场景

上面示例中，在进行 js/page 目录中业务 JS 合并时，需要排除 common.js 引入的 `cookie` 和 `store` 模块。

在燕尾服的配置中新增或修改如下配置，即可：

```php
'MODULE_COMBINE_OPTIONS' => array(
	'combine_path'  => 'js/',                 #告诉燕尾服哪个目录下的 JS 文件需要合并
	'common_module' => 'js/page/common.js',   #告诉燕尾服哪个文件是公用 JS
)
```

燕尾服处理完会发生如下变化：

1. js/page/common.js 会包含 `cookie` 和 `store` 两个模块及依赖，和 common.js 自身；
1. js/page/index.js 只会包含 `module_a` 模块及依赖，和 index.js 自身；
1. 页面对上面两个文件的外链引用，会替换为 CDN 地址；

### 复杂场景

下面来看一个更复杂的情况：项目分前后台，页面上存在多重 common 的情况。例如，目录结构如下：

```
resource/
	js/
		lib/
			module_a.js
			...
		page/
			common.js（全站公用 JS）
			front/
				common-front.js（前台公用 JS）
				index.js（前台业务 JS 之一）
				...
			admin/
				common-admin.js（后台公用 JS ）
				index.js（后台业务 JS 之一）
				...
	module/
	css/
	...
	other/
tpl/
	front/
		index.tpl
	admin/
		index.tpl
```

对于 tpl/front 或 tpl/admin 下的模板，会引入基础库、common.js、common-front.js 和对应业务 JS。如：

```html
<!DOCTYPE html>
<html lang="zh-cn">
<head>
	...
	<script src="http://.../jquery,require.js"></script>
	...
</head>
<body>
	...
	<script src="/resource/js/page/common.js"></script>
	<script src="/resource/js/page/front/common-front.js"></script>
	<script src="/resource/js/page/front/index.js"></script>
</body>
</html>
```

本例中，我们需要在燕尾服的配置中新增如下配置：

```php
'MODULE_COMBINE_OPTIONS' => array(
	'combine_path' => 'js/',  
	'common_module' => array(
		'js/page/front/'=> array(
			'js/page/common.js', 
			'js/page/front/common-front.js'
		),
		'js/page/admin/'=> array(
			'js/page/common.js', 
			'js/page/admin/common-admin.js'
		)
	)
)
```

如果模块间依赖关系是这样：

```
js/lib/common.js                依赖 A 模块（A 模块无依赖）
js/lib/front/common-front.js    依赖 A、B 模块
js/page/front/index.js          依赖 A、B、C 模块
```

燕尾服合并之后的结果是（需要逐级排除已知模块）：

```
js/lib/common.js                包含 A 模块 和 自身
js/lib/front/common-front.js    包含 B 模块 和 自身
js/page/front/index.js          包含 C 模块 和 自身
```

## 总结

这种目录规范，一方面大家可以方便地进行模块拆分和模块化开发；另一方面也可以借助燕尾服来完成模块合并，确保线上 JS 请求数不会变多。

请有兴趣使用本文这种目录结构的同学与「屈屈」联系，以便得到一对一的指导。
