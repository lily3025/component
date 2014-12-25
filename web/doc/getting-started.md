# 5 分钟快速上手

---

Qiwoo 模块库提供了一个简单易用的获取模块的途径。这里花*5*分钟简单介绍下~

## 一、选择模块

进入 [Qiwoo 模块库](doc:home) 首页，首先会看到`基础模块`这个分类。我们可以根据实际情况选择 `jQuery` 或者 `Zepto` 做为基础库，以及是否使用 `RequireJS` 做为模块加载器。

其次是`工具类模块`、`UI 模块`等分类，提供了常见的工具类和 UI 模块。

在首页点击模块名，可以进入模块的详情页。

在首页和详情页，都可以选择要使用的模块。

1) 首页

鼠标移到首页各个模块上，有个「+」按钮，点击就可以把这个模块添加到 *稍后下载列表* 了。鼠标移动到页面顶栏右侧「打包下载」上，可以看到全部已选择的模块列表。如下图：

![首页](img/getting-started-0.png)

在首页上，可以方便的选取模块的最新版本，如果需要使用模块旧版本，请进入详情页。

2) 详情页

详情页左侧有模块的基本信息：名称、简介、官网、源码仓库以及内部维护人。这个维护人都是公司内的同学，如果有关于这个模块的疑问，可以与维护人联系。我们也会定期组织模块维护人对模块的设计、实现、使用心得进行分享。

详情页左侧，还有一个版本列表，默认会选中该模块的最新版本。如果有需要，也可以切换到其它版本。通常，我们都应该使用最新版，历史版本一般是用来解决模块依赖的。

详情页左侧最下方，有个大大的「我要用」按钮，点击就可以把这个模块添加到 *稍后下载列表* 了。鼠标移动到页面顶栏右侧「打包下载」上，可以看到全部已选择的模块列表，如下图：

![详情页](img/getting-started-1.png)

特别地，`other` 类别下的模块，需要到各自 wiki 页面查看文档，这里不提供下载。

## 二、打包下载

点击页面顶栏「打包下载」浮层中的「[打包下载](download.html?d=%5B%5B%22Cookie%22%2C%221.0.2%22%2C%22cookie%2F1.0.2%22%5D%2C%5B%22jQuery%22%2C%221.9.1%22%2C%22jquery%2F1.9.1%22%5D%2C%5B%22RequireJS%22%2C%222.1.8%22%2C%22require%2F2.1.8%22%5D%5D)」按钮，进入下载页面。

![下载浮层](img/getting-started-2.png)

下载页面左侧，显示了所有要用的模块列表。点击它们可以看到各自的使用文档。

![下载页](img/getting-started-3.png)

页面左侧有一个「点击下载所选模块」按钮，点击后会下载到 zip 压缩包，解压后会得到 `module` 文件夹。

页面左侧还有一个输入框，点击后会选择其中的内容，复制这些内容 ssh 到开发机并执行，可以直接在当前目录得到 `module` 文件夹（依赖 curl 和 unzip 两个命令），如：

```
curl http://www.qiwoo.org/qiwoo/web/data/download.php?d=%5B%5B%22Cookie%22%2C%221.0.2%22%2C%22cookie%2F1.0.2%22%5D%2C%5B%22jQuery%22%2C%221.9.1%22%2C%22jquery%2F1.9.1%22%5D%2C%5B%22RequireJS%22%2C%222.1.8%22%2C%22require%2F2.1.8%22%5D%5D -o _tmp.zip -L -s && unzip _tmp.zip && rm -f _tmp.zip
```

有两点需要注意：

1. 为了方便后续能自由合并，下载的模块会<span style="color:red">自动具名</span>，规则为： `module/<模块名>/<模块版本>/<output>`。
1. 下载的模块会<span style="color:red">自动包含</span>代码声明的所有依赖模块。

## 三、使用模块

把得到的 `module` 放在静态资源路径的根目录，再根据各个模块详情页的说明使用就可以了。我们以 `jQuery`、`RequireJS` 和 `Cookie` 为例：

### 1、基础库部分

[jQuery 详情页](detail.html?name=jQuery&path=jquery/1.9.1&ver=1.9.1) 和 [RequireJS 详情页](detail.html?name=RequireJS&path=require/2.1.8&ver=2.1.8) 分别给出了引用 jQuery 和 RequireJS 的形式，我们直接外链引入就可以了（燕尾服自动处理合并和上 CDN）：

```html
<script src="/module/jquery/1.9.1/jquery.js"></script>
<script src="/module/require/2.1.8/require.js"></script>
```

### 2、模块部分

[Cookie 详情页](detail.html?name=Cookie&path=cookie/1.0.2&ver=1.0.2) 提供了两种引用 Cookie 文件的方式，一种是传统的外链形式，另一种是基于 RequireJS 的模块加载形式，由于我们已经在页面引用了 RequireJS，我们使用后者。

通常，我们的 module 文件夹放在静态资源根目录，可以直接通过 http://example.com/module 访问到 module 目录，所以我们可以通过下面的代码把所有模块的根目录配置到 `/`：

```html
<script>
	require.config({
		paths : {
			baseUrl : '/',
			urlArgs : "r=" + (new Date()).getTime()
		}
	});
</script>
```

注：上面的 `urlArgs` 的作用是给每个用 requirejs 加载的资源加上时间戳，是为了防止开发环境服务器缓存导致文件更新不及时。由于线上代码会在分析依赖、合并依赖后外链直接引入，所以不受影响。 

然后，在任何页面都可以这样使用 Cookie 模块了：

```html
<script>
    require(['module/cookie/1.0.2/cookie'], function(Cookie) {
        var test = Cookie.get('test');
        alert(test);

        Cookie.set('test', '1');
    });
</script>
```

## 四、项目实践

对于新项目，我们推荐使用统一的项目结构，可以方便的使用 qiwoo 模块和进行模块化开发，燕尾服可以提供很好地支持。

<span style="font-size:18px;">[点这里查看详情](doc:practice.md)</span>

请有兴趣使用模块化开发的项目与「屈屈」联系，以便得到一对一的指导。

## 五、效率工具

[Sublime 插件](http://yunpan.cn/QDK3RVAVqtN4p) 支持Qiwoo相关的语法提示，逐步添加中。

将压缩包下载下来之后，windows环境下删除PyV8目录再启动Sublime，第一次使用需要从网上自动下载PvV8，可能会比较慢。

修改 Packages/Qiwoo/Qiwoo.sublime-settings 中的配置项 "project_root" 将它设置为你自己的项目路径
（如果你删掉这个 "project_root" 属性，那么插件也会自动根据sublime项目来找文件，但那样可能会比较慢，所以建议设置这个属性）

Qiwoo.sublime-settings 目前的配置

```json
{
	"project_root" : ["/Users/akira_cn/Workspace/projects/test"],
	"ignore_patterns" : ["/tests/"] 
}
```
