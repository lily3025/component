/**
 * 感谢https://github.com/zeroclipboard/zeroclipboard提供的zeroclipboard功能
 * 然后是吐槽，作者把代码升级后，确实专业多了。不过引入的问题不少
 * 首先不支持ie6了，忍了，大势所趋
 * 然后，因为一个页面只存在一个zeroclipboard实例，注意，虽然它能实例化，可骨子里它是一个单
 * 例模式sigleton。如果同一个页面有很多元素都可以复制，并且内容不同时，痛苦吧，少年。
 * 当然可以用它提供的data-clipboard-text方法。总是不方便的
 */

/**
 * 按钮点击时，把文本写入剪贴板。抹平不同情况下的使用差异。
 * 基本使用方法：
 *      Copy2Clipboard.moviePath="ZeroClipboard.swf";
 *      var btn = W('.copy-btn');
 *      Copy2Clipboard(btn[0], {
            listeners:{
                'aftercopy': function(result){
                    if(result){
                        //alert("写入剪贴板成功")
                    }else{
                        //alert("写入剪贴板失败")
                    }
                }
            }
        });
 * 
 * 注意，有一个全局配置参数Copy2Clipboard.moviePath，它对应ZeroClipboard中的默认设置项
 * moviePath。如果不设zeroClipboard会默认设到当前路径。
 *
 * 如何设置要拷贝的内容文本呢？有三种方式：
 * 1. 在按钮上设置data-clipboard-text属性。（推荐）
 *      <button class="copy-btn" data-clipboard-text="copy me">拷贝文本</button>
 * 2. 在参数里带入。设置参数text
 *      Copy2Clipboard(btn[0], {text: 'copy me'});
 * 3. 设置监听dataRequested。这种方式可以实现每次点击时，动态修改要写入剪贴板的内容。
 *      Copy2Clipboard(btn[0], {
            listeners:{
                'dataRequested': function(){
                    if(...) return "copy me";
                    else return "other text";
                }
            }
        });
 * 潜规则：按钮的hover和active效果。普通的按钮，可能使用css(:hover和:active)实现hover和active的
 * 效果。但是在按钮上罩上flash之后，它就不生效了。幸好zeroClipboard默认会在鼠标移上按钮时
 * 增加zeroclipboard-is-hover类；鼠标按下时增加zeroclipboard-is-active类。那为了兼容所有情况，
 * 我们建议按钮的效果css这样写：
 *      .copy-btn:hover,
        .copy-btn.zeroclipboard-is-hover{
            
        }
        .copy-btn:active,
        .copy-btn.zeroclipboard-is-active{
            
        }
 * 注意，因为zeroclipboard不支持对不同btn增加不同的hover和active类，我们也不会支持。所以这是个
 * 潜规则。
 * @param [domNode] 要绑定的按钮
 * @param [Object] 可选。配置参数，有以下几个值：
 *      @option [string] text。可选。点击之后要复制的内容
 *      @option [Object] listeners。可选。支持的事件
 *          @listener dataRequested。如果没有设置data-clipboard-text，在写入剪贴板前，触发些事件
 *          @listener aftercopy。写入剪贴板成功或失败后。
 */
var Copy2Clipboard = (function(){
    var copyType,   //0,zeroclipboard; 1, window.clipboardData; 2, sorry, i can't
        zc,
        dataStore = {},
        seed = 0;
    function _id(){
        return 'ZeroClipboard-id-'+(++seed);
    }
    function _Copy2Clipboard(btns, opts){
        if(!Object.isArray(btns)){
            _Copy2Clipboard([btns], opts);
            return;
        }
        if(!copyType)
            init();

        for(var i=0,len=btns.length;i<len;i++){
            var btn = btns[i],
                id = btn.id;
            if(!id){
                id = _id();
                btn.id = id;
            }
            dataStore[id] = Object.mix({listeners:{}}, opts, true);
            
            //copyType = 2;
            if(copyType==_Copy2Clipboard.TYPE_ZERO){
                zc.glue(btn);
            }else if(copyType==_Copy2Clipboard.TYPE_IE){
                W(btn).on('click',ieListener);
            }else{
                W(btn).on('click',function(){
                    var opts = dataStore[this.id],
                        fun = opts.listeners['aftercopy'];
                    if(typeof fun == 'function'){
                        fun(false, this, opts);
                    }
                });
            }
        }
    }

    function init(){
        if (
            ZeroClipboard.detectFlashSupport()
            && (!Browser.ie || Browser.ie>=7)
        ){
            copyType = _Copy2Clipboard.TYPE_ZERO;
        }else if(window.clipboardData){
            copyType = _Copy2Clipboard.TYPE_IE;
        }else{
            copyType = _Copy2Clipboard.TYPE_NOT;
        }

        if(copyType==_Copy2Clipboard.TYPE_ZERO && !zc){
            var cfgs = {
                forceHandCursor: true,
                allowScriptAccess: "always",
                trustedOrigins: [window.location.protocol + "//" + window.location.host]
            };
            if(_Copy2Clipboard.moviePath)
                cfgs.moviePath = _Copy2Clipboard.moviePath;
            ZeroClipboard.setDefaults(cfgs);

            zc = new ZeroClipboard();

            zc.on('dataRequested', function(){
                var opts = dataStore[this.id],
                    fun = opts.listeners['dataRequested'],
                    text = opts.text;
                if(typeof fun == 'function'){
                    text = fun(this, opts);
                }
                zc.setText(text);
            });

            zc.on('complete', function(){
                var opts = dataStore[this.id],
                    fun = opts.listeners['aftercopy'];
                if(typeof fun == 'function')
                    fun(true, this, opts);
            });
        }

        _Copy2Clipboard.type = copyType;
    }

    function ieListener(){
        var text = W(this).attr('data-clipboard-text'),
            opts = dataStore[this.id];
        if(!text){
            text = opts.text || '';
            var fun = opts.listeners['dataRequested'];
            if(typeof fun == 'function'){
                text = fun(this, opts);
            }
        }
        var re = window.clipboardData.setData('Text', text);
        var fun = opts.listeners['aftercopy'];
        if(typeof fun == 'function'){
            fun(re, this, opts);
        }
    }
    _Copy2Clipboard.TYPE_ZERO = 'zero';
    _Copy2Clipboard.TYPE_IE = "ie";
    _Copy2Clipboard.TYPE_NOT = 'not support'
    return _Copy2Clipboard;
})();

