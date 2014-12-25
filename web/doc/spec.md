# 前端开发规范

--- 


## 项目和文件规范

### 项目

1. 项目框架使用QFrame + Smarty
1. 使用Smarty的模版继承功能
1. 前端JS框架使用jQuery, 版本为1.9.1

### 目录

1. 静态资源根目录文件夹名为 resource 或者 static
1. 下面存放 js/css/img/swf/module/other/html 等子文件夹
1. 不同类型的文件放在对应的子文件夹下，下载的第三方库放在module下， 具体见 [燕尾服目录结构](http://stc.qiwoo.org/introduce#regular)

### 文件

1. 项目编码只允许为gbk或者utf-8编码
1. 所有文件编码必须一致
1. 如果是utf-8编码，文件必须去除BOM头
1. 新项目推荐使用utf-8编码


## 编码规范

### 1、HTML

1. img标签的src不能为空
1. 引号是否正常闭合
1. 表单元素的id和name值不能为 id, name, type, form, method, action, length
1. 标签是否正常闭合

### 2、JS

1. 代码中的console.log 
1. 代码中的debugger

### 3、CSS

1. { 和 }数量是否相等
1. 是否包含.a.b这样的selector
1. 是否有一张背景图在同一个CSS文件里有多次使用

更多的一般性编码规范请见 [这里](http://add.corp.qihoo.net:8360/pages/viewpage.action?pageId=2294973)

## 性能规范

1. JS和CSS请求需要合并
1. JS和CSS需要压缩，非HTTPS站点的静态资源使用CDN（静床和图床）
1. 背景图片使用pngcrush和jpegtran进行无损压缩

## 安全规范

1. 富文本使用 [htmlpurifier](http://htmlpurifier.org/) 进行过滤 (百科，同城帮已经在使用)
1. 模版型XSS使用燕尾服里的XSS自动修复功能，或者参照 [这里的转义方式](http://add.corp.qihoo.net:8360/pages/viewpage.action?pageId=8044000)
1. 前端模版使用handlebars，默认对参数进行转义
1. 所有POST类的请求需要加token，防止CSRF
1. 网站根目录的crossdomain.xml只能设置\*.360.cn和\*.qhimg.com为白名单

## 第三方库使用规范

### 1、Flash文件上传组件Uploadify和SwfUpload

这2个Flash文件上传组件很多版本都有XSS漏洞，请参照(http://add.corp.qihoo.net/pages/viewpage.action?pageId=3607062) 使用。

### 2、Flash文本复制组件ZeroClipboard

默认的ZeroClipboard在IE7,8下有bug，且不兼容IE6。请使用[修复后的ZeroClipboard](http://www.qiwoo.org/qiwoo/web/detail.html?name=ZeroClipboard)

## 其他

### cookie使用规范

cookie使用规范细则待制定
