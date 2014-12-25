## 使用说明

### 简介
    JC.ImageCutter 图片裁切组件  
    借助 PHP GD 库进行图片裁切(不仅限于PHP GD)
    页面只要引用本脚本, 默认会处理 div class="js_compImageCutter"

### 组件依赖
    JC.common
    JC.BaseMVC

### 外链形式

```html
<script src="{{basePath}}/JC.common/0.2/common.js"></script>
<script src="{{basePath}}/JC.BaseMVC/0.1/BaseMVC.js"></script>
<script src="{{src}}"></script>
```

### 模块加载形式
```html
<script>
    requirejs( [ '{{module}}' ], function( {{name}} ){
        //...
    }); 
</script>
```

### 可用的 HTML attribute

    imageUrl = url string
        图片URL

    defaultCoordinate = string
        设置默认选择范围, 有以下三种模式 
            sidelength 
            x, y 
            x, y, sidelength

    coordinateSelector = selector
        保存当前坐标值的 node 
        坐标值分别为: [ x, y, rectWidth, rectHeight, imgWidth, imgHeight ]

    imageUrlSelector = selector
        保存当前图片URL的 node

    previewSelector = selector
        用于显示预览的 node, 支持多个预览, node 宽高并须为正方形

    minRectSidelength = int, default = 50
        裁切块的最小边长

    minImageSidelength = int, default = 50
        图片的最小边长

    maxImageSidelength = int
        图片的最大边长

    cicInitedCb = function
        组件初始化后的回调, window变量域
        function cicInitedCb(){
           var _ins = this, _selector = _ins.selector();
           JC.log( 'cicInitedCb', new Date().getTime() );
        }

    cicImageInitedCb = function
        图片初始化完成时的回调, window变量域
        function cicImageInitedCb( _sizeObj, _img ){
           var _ins = this, _selector = _ins.selector();
           JC.log( 'cicImageInitedCb', new Date().getTime() );
        }

    cicCoordinateUpdateCb = function
        更新裁切坐标后的回调, window变量域 
        _corAr = Array = [ x, y, rectWidth, rectHeight, imgWidth, imgHeight ]
        function cicCoordinateUpdateCb( _corAr, _imgUrl ){
           var _p = this, _selector = _p.selector();
           JC.log( 'cicCoordinateUpdateCb', _corAr, _imgUrl, new Date().getTime() );
        }

    cicDragDoneCb = function
        拖动完成后的回调, window变量域 
        与 cicCoordinateUpdateCb 的差别是: cicDragDoneCb 初始化不会触发
        function cicDragDoneCb( _sizeObj ){
           var _ins = this, _selector = _ins.selector();
           JC.log( 'cicDragDoneCb', new Date().getTime() );
        }

    cicErrorCb = function
        发生错误时的回调, window变量域 
        所有错误类型都会触发这个回调
        function cicErrorCb( _errType, _args ){
           var _ins = this, _selector = _ins.selector();
           JC.log( 'cicErrorCb', _errType, new Date().getTime() );
        }

    cicLoadErrorCb = function
        图片加载错误时的回调, window变量域
        function cicLoadErrorCb( _imgUrl ){
           var _ins = this, _selector = _ins.selector();
           JC.log( 'cicLoadErrorCb',_imgUrl, new Date().getTime() );
        }

    cicSizeErrorCb = function
        图片尺寸不符合设置要求时的回调, window变量域
        function cicSizeErrorCb( _width, _height, _imgUrl, _isMax ){
           var _ins = this, _selector = _ins.selector();
           JC.log( 'cicSizeErrorCb', _width, _height, _imgUrl, _isMax, new Date().getTime() );
        }

    cicPreviewSizeErrorCb = function
        图片缩放后尺寸不符合设置要求时的回调, window变量域
        function cicPreviewSizeErrorCb( _width, _height, _imgUrl, _newSize ){
           var _ins = this, _selector = _ins.selector();
           JC.log( 'cicPreviewSizeErrorCb', _width, _height, _imgUrl, _newSize, new Date().getTime() );
        }

### Methods

    clean ()
        清除拖动的所有内容

    cleanInfo () static
        清除拖动信息

    cleanStatus ()
        清除拖动状态

    dragInfo ( _p  _evt  _size _srcSelector ) static
        获取 拖动 的相关信息
        Parameters:
            _p              ImageCutterInstance
            _evt            Event
            _size           Object
            _srcSelector    Selector

    init ( _selector ) Array of ImageCutterInstance static
        初始化可识别的 ImageCutter 实例
        Parameters:
            _selector Selector
        Returns:
            Array of ImageCutterInstance:

    moveDown ()
        向下移动, 移动步长为 ImageCutter.moveStep 定义的步长

    moveLeft ()
        向左移动, 移动步长为 ImageCutter.moveStep 定义的步长

    moveRight ()
        向右移动, 移动步长为 ImageCutter.moveStep 定义的步长

    moveUp ()
        向上移动, 移动步长为 ImageCutter.moveStep 定义的步长

    on ( _evtName  _cb ) 
        使用 jquery on 绑定事件
        Parameters:
            _evtName String
            _cb Function
        Returns:
            BaseMVCInstance

    selector () 
        获取 显示 BaseMVC 的触发源选择器, 比如 a 标签
        Returns:
            selector

    trigger ( _evtName ) 
        使用 jquery trigger 触发绑定事件
        Parameters:
            _evtName String
        Returns:
            BaseMVCInstance

    update ( _imgUrl )
        更新图片
        Parameters:
            _imgUrl String

    updatePosition ( _size )
        更新拖动位置
        Parameters:
            _size Object

### Properties

maxImageSidelength Int static
    图片的最大边长

minImageSidelength Int static
    图片的最小边长
        Default: 50

minRectSidelength Int static
    裁切范围的最小边长
        Default: 50

moveStep Int static
    上下左右方向键移动的步长
        Default: 1

### Events
    CICDragDone 
        拖动完成时触发的事件

    CICError 
        发生错误时触发的事件

    CICImageLoad 
        图片加载完毕时触发的事件

    CICImageLoadError 
        图片加载失败时触发的事件

    CICInitPreview 
        始化预览时触发的事件

    CICPreviewError 
        图片缩放后大小不符合要求时触发的事件

    CICSizeError 
        图片大小不符合要求时触发的事件

    CICUpdateCoordinate 
        更新坐标值时触发的事件

    CICUpdateDragger 
        更新拖动块时触发的事件

    CICUpdatePreview 
        更新预览时触发的事件

    ImageCutterInited 
        初始化实例时触发的事件

## API文档
1. [JC.ImageCutter 官方文档](http://360.75team.com/~qiushaowei/jc2/docs_api/classes/JC.ImageCutter.html)

