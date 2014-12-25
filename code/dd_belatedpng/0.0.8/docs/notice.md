## 使用DD_belatedPNG的一些注意事项

#### 问题1*：为什么在iframe页面里使用了DD_belatedPNG后，页面显示空白？*

办法：找到以下代码：

```javascript
if (el.currentStyle.position == 'static') {
	el.style.position = 'relative'
}
```
改成：
```javascript
if (el.currentStyle.position == 'static') {
	if(el.nodeName.toLowerCase()!='html'){
		el.style.position = 'relative'
	}
}
```
从代码上可以看出来，是因为没有排除html节点，所以整个页面飘了。
<p style="color:red">注意：修改后有可能会引起别的问题！</p>

#### 问题2*：为什么在有些页面里使用了DD_belatedPNG后，图片显示不全，只显示一部分？*

办法：找到以下代码：

```javascript
el.vml.image.fill.type = 'tile';
```
改成：
```javascript
el.vml.image.fill.type = 'frame';
```

原因：比如有些图片（png格式），原来是100px×100px的，你想用样式或者标签的属性来缩放它到50px长宽，那么这个图片在IE6中不会被缩放，而是被剪切，只显示图片左上角的50px长宽，其它部分隐藏，而且也不是必现的，好像跟加载图片速度有关系，慢的话容易出现。据说这个BUG在新版中被解决，但是我试过了，确实解决了，但是又引起了别的问题，就是在经常切换div结构的时候，别切换的div有可能会样式错乱。所以修改或升级还是需要谨慎。

#### 问题3*：为什么在页面里使用了DD_belatedPNG后，我的图片延迟加载（比如取_src的值，赋值给src）的功能失效？或者类似的动态修改图片属性失败的问题？又或者我在图片上的一些点击事件等都失效？*

- 首先说明一下为什么动态修改图片属性会失效(png图片)

因为一开始页面初始化之后，所有png图片都被fix了一遍，即DD_belatedPNG会对已经fix之后的图片设置一个私有属性，具体就是VML的一些相关知识了吧，反正你不能再对他进行一些设置src属性的一些操作了，包括点击事件。

但是如果你的图片一开始是gif或别的，就没事，不会受到影响，还可以继续设置src属性。

- 图片延迟加载失效的分析

这样图片延迟加载失效，很好理解了。图片延迟加载的原理就是，一开始图片的src值是一个空白图片，比如他是一个gif图片，当然如果一开始的空白图片也是png，那就彻底悲催了，后续也无法被再次设置src。他初始化会对这个空白图片fix，然后你后来再重新设置src，可以被设置成功，但是你会发现，重新设置后的png图片还是有灰色背景，没有被再次正确fix，这是因为他认为你已经被fix了，有了他自己的私有属性，不能再次fix。

解决办法：

知道了原因，就能找到解决办法了，既然不能识别已经被fix的，那么我可以再次innerHTML一个图片出来不就可以了么？一个全新的图片！注意：你不能拿原来的图片用，或者通过clone原始的图片，生成一个新图片，那样也是不行的，因为你还不能去掉被fix后的私有属性。

以下是实现的方法：
```javascript
var replaceImg = (function(){
	var div = document.createElement('div');
	return function (oldImg, newImgHtml){
		div.innerHTML = newImgHtml;
		oldImg.parentNode.insertBefore(div.firstChild, oldImg);
		oldImg.removeNode(true);
	}
}());
var nextImg = dom.getElementsByTagName('img')[0];
replaceImg(nextImg,"<img src='"+nextImg.getAttribute('_src')+"'/>");
```
可以看出，确实是重新弄一个图片出来，这样DD_belatedPNG就可以识别了。