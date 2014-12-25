<style> h1 {font: 32px 'Helvetica Neue', Helvetica, Arial;}</style>
#QUC JS SDK 文档

###概述
QUC, Qihoo User Center, 即360通行证帐号。
JS SDK 从前端提供了登录、注册、退出、获取用户信息、设置用户名等众多接口，方便360旗下网站进行ID化相关的开发工作。

###理念
以下理念贯穿了V5版的整个开发过程：
`杜绝潜规则`、`快速上手`、`简单易用`但又`配置丰富`、`易于定制`

### 基本功能

1. 弹层的方式登录和注册   例如 baike.so.com dev.360.cn
1. 自定义样式的登录注册   例如 i.360.cn，yunpan.360.cn
1. 检测用户登录状态,取得基本资料
1. 快速登录: 检测客户端已登录账号,快速登录
1. 跨站自动登录
1. 补全用户信息 例如：bbs.360safe.com，网络测速
1. 绑定手机号
1. 设置登录邮箱
1. 设置用户名
1. 设置密保邮箱
1. 设置、修改昵称
1. ...

###地址
- 线上版：
`http://js.passport.qihucdn.com/{version} [/{module}] [/{file}].js`
- 开发版：
`http://jssdk.passport.corp.qihoo.net/{version} [/{module}] [/{file}].js`

*开发版代码未压缩，且提供了错误提示、环境检测等功能，仅能在公司内网访问*
*推荐使用开发版进行开发，完成后只需**修改域名**就可快速替换为线上版本*

{version} 为版本号
{module} [可选, 默认为full] 为加载的模块，暂时只提供全量包(full)
{file} [可选, 默认为combo] 为加载的文件，为js时只加载js文件，为css时只加载css文件，为combo时加载两者

地址示例：

加载全量包
http://js.passport.qihucdn.com/5.0.2.js

加载全量包css
http://js.passport.qihucdn.com/5.0.2/full/css.js

加载全量包js
http://js.passport.qihucdn.com/5.0.2/full/js.js

###依赖
jQuery 1.8及以上版本

###已经接入的业务
[360百科](http://baike.so.com/)、[360移动开放平台](http://dev.360.cn)、[游戏海报](http://tg.wan.360.cn/22/110570107.html)、[360会员专题页](http://vip.360.cn/huodong/postcard.html)、[论坛专题](http://bbs.360safe.com/cms/beautycontest.html)、[安全服务中心](http://fuwu.360.cn)、[反诈骗联盟](http://fanzhapian.360.cn)、[360网站监控](http://jk.cloud.360.cn)、[360商家自助营销平台](http://dianhua.360.cn/)、[360云媒体](http://cmedia.360.cn )、[网盟推广]( http://youqian.360.cn/drvMgr/index?open_qcwp)、[360安全播报](http://bobao.360.cn/)

###升级日志
- 5.0.2Beta
统一邮箱激活策略，设置邮箱接口增加回调功能
增加和邮箱相关的状态方法
增加浮层标题自定义配置
引入插件系统
bug 修复
- 5.0.1Alpha
第一版

###联系我们
前端组件相关问题：[孟之杰](mailto:mengzhijie@360.cn?subject=QUC%20JS%20SDK咨询&cc=maoshuai@360.cn) [毛帅](mailto:maoshuai@360.cn?subject=QUC%20JS%20SDK咨询&cc=mengzhijie@360.cn)
后端部署问题：[于富龙](mailto:yufulong@360.cn?subject=QUC%20JS%20SDK咨询&cc=mengzhijie@360.cn&cc=maoshuai@360.cn)
产品相关问题：[董菁菁](mailto:dongjignjing@360.cn?subject=QUC%20JS%20SDK咨询&cc=mengzhijie@360.cn&cc=maoshuai@360.cn)

[请点击这里查看详细使用说明及功能示例](http://jssdk.passport.corp.qihoo.net/doc/#index.md)