# 开发指南

---

Qiwoo 目前是一个面向公司内部完全开放的项目，欢迎小伙伴们共同来建设~

## 获取代码

目前代码托管在公司内部的 Git 仓库上，需要先获得相应权限。git 仓库通过 ssh pubkey 来管理，将你的 pubkey 发给 [ququ](mailto:quguangyu@360.cn) 或 [LC](mailto:liangchao@360.cn) 协助开通（正在寻找简便的权限控制方式），[Windows 下获取 pubkey 方法](http://add.corp.qihoo.net/pages/viewpage.action?pageId=8769349)。
<span style="color:red">注：</span>Mac等使用命令行生成key的时候直接使用ssh-keygen一路回车即可，不要加入任何参数，会导致算法不一致

然后，通过以下地址获取全部代码：

```
git@10.16.57.39:pub/fe/qiwoo.git
```

<span style="color:red">注：</span>push 到上述仓库的代码，一分钟内会自动同步到 http://qiwoo.org/qiwoo/ 。

## 项目结构

目前，整个 Qiwoo 项目分为两部分：`code` 和 `web`，分别对应 `模块仓库` 和 `Web 平台` 。

后续开发的一系列工具可以放在与之平行的新目录。

### 1、模块仓库

模块仓库，顾名思义就是用来存放所有模块的。

### 2、Web 平台

Web 平台，就是你现在所看到的系统。它提供了一套简单的 Web 界面，用于查找并获取模块代码，并提供 Qiwoo 项目有关文档。

## 如何参与

根据自身实际情况，你可以自由选择以下一项或多项任务来参与 Qiwoo 项目：

1. 参与 Web 平台开发；
1. 参与 Web 平台文档编写；
1. 调研开源模块，提交到模块仓库，编写文档，并负责维护；
1. 开发新模块，提交到模块仓库，编写文档，并负责维护；
1. 外围工具开发；
1. 在项目中使用；
1. ... ...

## 搭建本地开发环境

### Node 环境（荐）

<span style="color:red">之杰提供，强烈推荐</span>

1. 安装 [node](http://nodejs.org/) 环境；
1. 进入 qiwoo 项目中的 web 目录，并运行 node run.js；
1. do anything you want to...

*如果不希望自动打开浏览器可以去修改同目录下config.js*

### PHP 环境
1. 安装 php + server(apache,nginx...) 环境；
1. 把 \web\module 软链 到 \code 或者在 server配置 中添加 alias；
1. 定位到qiwoo所在URL；
1. do anything you want to...

## 如何来维护模块

当大家看到感兴趣的模块，可以进行认领，当认领人确定认领任务之后需要做一下几件事情：

1. 按照约定的目录结构去进行模块整合；
1. 需要对模块写一份更容易让团队使用和理解的README，并让模块支持AMD加载；
1. 需要维护几个精致example，让大家看到最佳实践，以及该模块的优势；
1. 需要对代码进行阅读消化，然后和大家一起分享讲解（代码的实现，模块架构的设计原理等）；
1. 优化和加工该模块；

##模块的结构

	cookie							模块目录名称
		-- 1.0.1	            	当前模块的版本号
			-- cookie.js
			-- examples				使用实例
				-- assets			实例中需要用的img等资源文件存放此文件夹
					-- test.png
				-- index.md
				-- dialog.md
			-- docs					存放更具体的说明文档或者有用的说明文章
				-- cookie.md
				-- xx.md
			-- tests				单元测试目录
				-- cookie-spec.js
			-- package.json         模块的元信息配置文件（必须）
			-- readme.md 			模块的总体说明及简易的说明（必须）
		-- 1.0.2
			-- cookie.js
			-- ...

注：模块内所有文本文件编码统一使用 `utf-8`。

### 规范：package.json

package.json主要遵循 [Packages 1.0](http://wiki.commonjs.org/wiki/Packages/1.0) 规范
，以 Cookie 的 package.json 为例：

```js
{
    "name": "Cookie",  //必须，模块名
    "version": "1.0.2",  //必须，模块版本
    "keywords" : ["util"],  //必须，模块关键字，web 系统会获取第一个关键字作为分类
    "repository": {  //可选，源地址
        "url": "https://github.com/aralejs/cookie",
        "type": "git"
    },
    "homepage": "https://github.com/aralejs/cookie",  //可选，项目主页
    "maintainers": ["ququ <quguangyu@360.cn>"],  //必须，内部维护人
    "description": "提供 Cookie 操作方法。",  //必须，简单描述
    "output": "cookie.js"   //必须，模块对外提供的 js 文件名
}
```

### 规范：文档和示例

模块根目录下的 readme.md，以及 examples 和 docs 目录下的文件，都可以使用 Markdown 语法。特别的，有以下几个特殊变量可以使用，系统会自动转换：

- `{{name}}`：表示当前模块名，默认会去掉命名空间并将第一个字符转为大写（'JC.Calendar' => 'Calendar'，'Nova.suggest' => 'Suggest'）；
- `{{basePath}}`：指向 /module（即代码仓库根目录），一般用于拼接其它模块资源 url；
- `{{path}}`：指向模块目录；
- `{{src}}` ：指向模块提供的 js 文件（也就是模块目录 + package.json 中 output 字段配置的值）；
- `{{module}}`：指向模块提供的 js 文件（以模块加载的形式）；

examples 和 docs 下的 markdown 文件，需要定义一个标题（建议 h1），作为生成列表时的标题。

模块目录下的 markdown 文件，都可以用下面的语法来引用同模块其他文件：

```
[文档一](docs:doc1.md) 引用模块 docs 目录下的 doc1.md
[示例二](examples:example2.md) 引用模块 examples 目录下的 example2.md
[文件三](file:jquery.color.js) 引用模块根目录下的 jquery.color.js
```

### 规范：单元测试

模块根目录下的 tests 目录用来存放单元测试的 case，文件名必须以 `-spec.js` 结尾，可以分多个文件来写。

单元测试框架使用的是 [mocha](http://visionmedia.github.io/mocha/)，断言库用的是 [expect.js](https://github.com/LearnBoost/expect.js/)，另外还使用了 [blanket](http://blanketjs.org/) 做主 js 文件的覆盖率测试（仅支持现代浏览器）。

单元测试代码具体写法可以参考已有的例子，可以用 `{{module}}` 引用当前模块：

```javascript
define(['{{module}}'], function(Cookie) {
	describe('Cookie Test2', function() {
		describe('remove', function() {
			it('should remove a cookie from the machine.', function() {
				Cookie.set('_sea_test_21', 'xx');
				Cookie.remove('_sea_test_21');
				expect(Cookie.get('_sea_test_21')).to.equal(undefined);
			});
		});
	});
});
```

### 模块创建工具

LC 提供，如何获取并使用请 [点这里查看](http://asciinema.org/a/6274)。

## 如何来开发模块

要开发一个符合 AMD 规范的模块，推荐采用以下书写方式：

```js
(function(root, factory) {
    if(typeof exports === 'object') {
        module.exports = factory();
    } else if(typeof define === 'function' && define.amd) {
        define([], factory);
		/*
		说明：
		1. 不要给模块具名；
		2. 可以定义依赖，但是必须使用这种完整路径：
		define(['module/MODULE_B/1.0/b'], factory);
		*/
    } else {
    	/* 没有加载器时，导出到 root（浏览器中，root 即 window） 下 */
        root['MODULE_A'] = factory();
    }
})(this, function() {
	/* 模块的具体实现代码 */
    function MODULE_A(name, options) { /* ... */ }
    MODULE_A.prototype.send = function(msg) { /* ... */ };

    return MODULE_A;
});
```

对于模块具体的实现代码没有硬性规定。以下是几点通用要求：

1. <span style="color:red">不要</span>给模块具名：
1. 使用 `module/<模块名>/<模块版本>/<output>` 这种完整路径定义依赖（打包下载时，会自动包含依赖模块）；
1. <span style="color:red">不要</span>通过 `var a = require('a')` 这种方式定义依赖；
1. 没有加载器时，把模块导出到全局 window 下；

## 有用的资源

- [Markdown 简明教程](doc:markdown.md)
- Markdown工具在windows下可以使用[MarkdownPad2](http://www.markdownpad.com/) Mac下可以使用[Mou](http://mouapp.com/) [在线编辑](doc:editor.md)
- [Git 教程](http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000)
- [Pro Git](http://git.oschina.net/progit/index.html)
- Git客户端，windows可以用[tortoisegit](https://code.google.com/p/tortoisegit/)，mac下可以使用[sourceTree](http://www.sourcetreeapp.com/)
- [Window Git 环境（msysGit + TortoiseGit）搭建](http://add.corp.qihoo.net/pages/viewpage.action?pageId=8769349)
