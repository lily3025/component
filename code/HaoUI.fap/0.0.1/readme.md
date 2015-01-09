## 简单介绍
网页中视频的引用，可以设置自动播放功能

## 视频demo
<embed src="http://player.youku.com/player.php/Type/Folder/Fid/23321797/Ob/1/sid/XODY2ODkyODQ0/v.swf" quality="high" width="480" height="400" align="middle" allowScriptAccess="always" allowFullScreen="true" mode="transparent" type="application/x-shockwave-flash"></embed>

## 自动播放视频demo
<embed src="http://player.youku.com/player.php/Type/Folder/Fid/23321797/Ob/1/sid/XODY2ODkyODQ0/v.swf?VideoIDS=XODY2ODkyODQ0&isAutoPlay=true" quality="high" width="480" height="400" align="middle" allowScriptAccess="always" allowFullScreen="true" mode="transparent" type="application/x-shockwave-flash"></embed>

## 组件代码
```js
function embedFlash(obj) {
   var origin, html,
       url = obj.url,
       height = obj.height ? obj.height : '400',
       width = obj.width ? obj.width : '480',
       allowFullScreen = obj.allowFullScreen ? obj.allowFullScreen : 'true',
       isQiyi;
       if (obj.autoPlay) {
          origin = obj.url.match(/(tudou|youku|letv|yinyuetai|qq|ku6|sohu|qiyi)/g).join('');
          switch(origin) {
            case 'youku':
              var obj = obj.url.split('/');
              url = obj.url + '?VideoIDS=' + obj[obj.length-2] + '&isAutoPlay=true';
              break;
            case 'tudou':
              url = obj.url.split('/v.swf')[0] + '&autoPlay=true/v.swf';
              break;
            case 'letv':
              if (/autoplay=0/g.test(obj.url)) {
                url = obj.url.replace('autoplay=0', 'autoplay=1');
              } else {
                url = obj.url + '&autoplay=1';
              }
              break;
            case 'qq':
              if (/auto=0/g.test(obj.url)) {
                url = obj.url.replace('auto=0', 'auto=1');
              } else if (/auto=1/g.test(obj.url)) {
                url = obj.url;
              } else {
                url = obj.url + '&autoplay=1';
              }
              break;
            case 'ku6':
              url = obj.url + '&auto=1';
              break;
            case 'sohu':
              if (/autoplay=false/g.test(obj.url)) {
                url = obj.url.replace('autoplay=false', 'autoplay=true');
              } else {
                url = obj.url + '&autoplay=true';
              }
              break;
            case 'yinyuetai':
              url = obj.url.split('v_0.swf')[0] + 'a_0.swf';
              break;
            case 'qiyi':
              url = obj.url;
              isQiyi = true;
              break;
            default:
              url = obj.url;
         }
       }

      return '<embed src="'+ url +'" quality="high" width="' + width + '" height="' + height + '" align="middle" allowScriptAccess="always" allowFullScreen="' + allowFullScreen + '" mode="transparent"'+ (isQiyi ? 'flashvars="isAutoPlay=true"' : '') +' type="application/x-shockwave-flash"></embed>';
}

```
## 参数说明
1. 传入一个对象，对象包含的参数：url（必选），autoPlay（可选），width（可选），height（可选），allowFullScreen（可选）
2. url为可播放的flash地址
3. autoPlay为可自动播放的开关，默认是关
4. width为视频显示的宽度，默认是400px
5. height为视频显示的高度，默认是400px
6. allowFullScreen是否允许全屏，默认是允许

## 使用示例
1. embedFlash({url: 'http://www.yinyuetai.com/video/player/295869/v_0.swf', autoPlay: true});
2. 返回可嵌入flash的html代码

## 代码详解
1. 支持优酷、土豆、乐视、爱奇艺、腾讯、酷6、搜狐、音悦台八大主流视频网站的视频自动播放功能；
2. 支持自动播放功能

