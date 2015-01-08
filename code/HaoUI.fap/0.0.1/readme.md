## 简单介绍
实现引用的视频可以自动播放

## demo
<embed src="http://player.youku.com/player.php/Type/Folder/Fid/23321797/Ob/1/sid/XODY2ODkyODQ0/v.swf?VideoIDS=XODY2ODkyODQ0&isAutoPlay=true" quality="high" width="480" height="400" align="middle" allowScriptAccess="always" allowFullScreen="true" mode="transparent" type="application/x-shockwave-flash"></embed>

## 组件代码
```js
function autoFlashUrl(url) {
   var origin = url.match(/(tudou|youku|letv|yinyuetai|qq|ku6|sohu)/g).join('');
   switch(origin) {
      case 'youku':
        var obj = url.split('/');
        return url + '?VideoIDS=' + obj[obj.length-2] + '&isAutoPlay=true';
        break;
      case 'tudou':
        return url.split('/v.swf')[0] + '&autoPlay=true/v.swf';
        break;
      case 'letv':
        if (/autoplay=0/g.test(url)) {
          return url.replace('autoplay=0', 'autoplay=1');
        } else {
          return url + '&autoplay=1';
        }
        break;
      case 'qq':
        if (/auto=0/g.test(url)) {
          return url.replace('auto=0', 'auto=1');
        } else if (/auto=1/g.test(url)) {
          return url;
        } else {
          return url + '&autoplay=1';
        }
        break;
      case 'ku6':
        return url + '&auto=1';
        break;
      case 'sohu':
        if (/autoplay=false/g.test(url)) {
          return url.replace('autoplay=false', 'autoplay=true');
        } else {
          return url + '&autoplay=true';
        }
        break;
      case 'yinyuetai':
        return url.split('v_0.swf')[0] + 'a_0.swf';
        break;
      default:
        return url;
   }
}

```

## 使用示例
1. 调用：autoFlashUrl('http://static.video.qq.com/TPout.swf?vid=s0015zipbob');
2. 返回：http://static.video.qq.com/TPout.swf?vid=s0015zipbob&autoplay=1

## 代码详解
1. 支持优酷、土豆、乐视、腾讯、酷6、搜狐、音悦台七大主流视频网站的视频自动播放功能；
2. 传入参数url,返回对应的可以自动播放的url地址，其他视频网站的url返回传入的原始值。

## 特殊说明
爱奇艺自动播放功能目前还没有发现可以用url控制的方法，可以通过在引用视频的时候加入flashvars="isAutoPlay=true"来实现


