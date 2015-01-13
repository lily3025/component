## 简单介绍
网页中视频的引用，可以设置自动播放功能

## 视频demo
<embed src="http://player.youku.com/player.php/Type/Folder/Fid/23321797/Ob/1/sid/XODY2ODkyODQ0/v.swf" quality="high" width="480" height="400" align="middle" allowScriptAccess="always" allowFullScreen="true" mode="transparent" type="application/x-shockwave-flash"></embed>

## 自动播放视频demo
<embed src="http://player.youku.com/player.php/Type/Folder/Fid/23321797/Ob/1/sid/XODY2ODkyODQ0/v.swf?VideoIDS=XODY2ODkyODQ0&isAutoPlay=true" quality="high" width="480" height="400" align="middle" allowScriptAccess="always" allowFullScreen="true" mode="transparent" type="application/x-shockwave-flash"></embed>

## 组件代码
```js
function EmbedFlash(obj) {
    this.id = obj.id;
    this.url = obj.url;
    this.height = obj.height ? obj.height : '400';
    this.width = obj.width ? obj.width : '480';
    this.allowFullScreen = obj.allowFullScreen ? obj.allowFullScreen : 'true';
    this.origin = '';
    this.isQiyi = false;
    this.autoPlay = obj.autoPlay;
    this.init();
}

EmbedFlash.prototype = {
    init: function() {
       var html, obj,
           reg = /(tudou|youku|letv|yinyuetai|qq|ku6|sohu|qiyi)/g;
       if (this.autoPlay) {
          this.origin = this.url.match(reg).join('');
          switch(this.origin) {
            case 'youku':
              obj = this.url.split('/');
              this.url = this.url + '?VideoIDS=' +
                         obj[obj.length-2] + '&isAutoPlay=true';
              break;
            case 'tudou':
              this.url = this.url.split('/v.swf')[0] + '&autoPlay=true/v.swf';
              break;
            case 'letv':
              if (/autoplay=0/g.test(this.url)) {
                this.url = this.url.replace('autoplay=0', 'autoplay=1');
              } else {
                this.url = this.url + '&autoplay=1';
              }
              break;
            case 'qq':
              if (/auto=0/g.test(this.url)) {
                this.url =this.url.replace('auto=0', 'auto=1');
              } else if (/auto=1/g.test(this.url)) {
                this.url = this.url;
              } else {
                this.url = this.url + '&autoplay=1';
              }
              break;
            case 'ku6':
              this.url = this.url + '&auto=1';
              break;
            case 'sohu':
              if (/autoplay=false/g.test(this.url)) {
                this.url = this.url.replace('autoplay=false', 'autoplay=true');
              } else {
                this.url = this.url + '&autoplay=true';
              }
              break;
            case 'yinyuetai':
              this.url = this.url.split('v_0.swf')[0] + 'a_0.swf';
              break;
            case 'qiyi':
              this.url = this.url;
              this.isQiyi = true;
              break;
            default:
              this.url = this.url;
         }
      }

      html = '<embed src="'+ this.url +'" quality="high" width="' + this.width +
             '" height="' + this.height +
             '" align="middle" allowScriptAccess="always" allowFullScreen="' +
             this.allowFullScreen + '" mode="transparent"'+
             (this.isQiyi ? 'flashvars="isAutoPlay=true"' : '') +
             ' type="application/x-shockwave-flash"></embed>';
      document.getElementById(this.id).innerHTML = html;
    }
};

```
## 参数说明
1. 传入一个对象，对象包含的参数：id(必选)，url（必选），autoPlay（可选），width（可选），height（可选），allowFullScreen（可选）
2. id要显示的视频位置元素id
3. url为可播放的flash地址
4. autoPlay为可自动播放的开关，默认是关
5. width为视频显示的宽度，默认是400px
6. height为视频显示的高度，默认是400px
7. allowFullScreen是否允许全屏，默认是允许

## 使用示例
new EmbedFlash({
    id: 'video',
    url: 'http://player.youku.com/player.php/Type/Folder/Fid/23321797/Ob/1/sid/XODY2ODkyODQ0/v.swf',
    autoPlay: true
});

## 代码详解
1. 支持优酷、土豆、乐视、爱奇艺、腾讯、酷6、搜狐、音悦台八大主流视频网站的视频自动播放功能；
2. 支持自动播放功能

