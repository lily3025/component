/*======================================================================================
 * jQuery Dialog组件
 * 该组件包含三部分：弹出层、拖拽层、遮罩层。相互独立，可分别调用。
 * 支持深度定制，默认状态下IE系列只提供红色无阴影弹出层，其他浏览器提供带指示标志的有阴影的弹出层
 * 可通过$.Dialog.api()在控制台查看接口
 * Author：xinz
 * Time：2011-9-21
 * 未完成：改变大小
 *======================================================================================*/
 
/*
 * 拖拽层
 * options['handle']    必填，拖拽对象
 * options['target']    必填，调用拖拽的目标对象
 * return new Drag()    返回Drag对象的实例
 */
 
(function($){
    var Drag = function(options){
        if(!options.handle && !options.target){
            return false;
        }
        var drag = $.extend({},options),
			target = drag.target,
			handle = $(drag.handle),
			currentXY = {},dragXY = {},
			docWidth = $(document).width();
 
        handle[0].onselectstart = function(){return false;}
        handle.attr("unselectable", "on").css("MozUserSelect","none");
 
        var onMove = function(event){
            var move = {
                'top' : event.pageY - dragXY.top,
                'left' : event.pageX - dragXY.left
            },fix = 0;
			
			if(window.getSelection){
				window.getSelection().removeAllRanges();
			}else{
				document.selection.empty();
			}
 
            if(target){
				move.top = currentXY.top + move.top;
				move.left = currentXY.left + move.left;
				
				if(move.top < 0)move.top = 0;
				if(move.left < 0)move.left = 0;
								
				if(move.left+handle.width()>docWidth){
					fix = ($(window).height()<$(document).height())?20:5;
					move.left = docWidth-handle.width()-fix;
				}
				
                target._setPosition({
                    'top' : move.top,
                    'left' : move.left
                });
            }
        };
 
        var onDown = function(event){
            handle.css('cursor','move');
            currentXY = handle.offset();
            dragXY = {'top':event.pageY,'left':event.pageX};
            $(document).bind('mousemove',onMove).bind('mouseup',onUp);
			return false;
        };
 
        var onUp = function(event){
            handle.css('cursor','default');
            $(document).unbind('mousemove',onMove).unbind('mouseup',onUp);
        };
 
        var onOver = function(event){
            handle.css('cursor','move');
        };
 
        var onOut = function(event){
            handle.css('cursor','default');
        };
 
        //this.dragObj = drag;
        handle.bind('mouseover',onOver).bind('mouseout',onOut).bind('mousedown',onDown).bind('mouseup',onUp);
    };
    $.Drag = Drag;
 
})(jQuery);
 
/*
 * 遮罩层
 * options['target'] 必选，触发遮罩的目标对象
 * options['css'] 可选，遮罩的样式
 * options['evt'] 可选，遮罩绑定的事件
 * return new Shade() 返回Shade的实例，包含属性dom（遮罩元素的jQuery对象）
 */
(function($){
 
    var Shade = function(options){
        if(!options.target){
            return false;
        }
        var shade = $.extend({},options);
        this.dom = $('<div class="dialogShade"></div>').css(shade['css']);
        if(options['evt']){
            this.dom.bind(options['evt']);
        }
        $("body").prepend(this.dom);
    }
    $.Shade = Shade;
})(jQuery);
 
/*
 * 弹出层
 */
(function($){
 	
	if(!$.browser){
		$.browser = {
			mozilla : /firefox/.test(navigator.userAgent.toLowerCase()),
			webkit : /webkit/.test(navigator.userAgent.toLowerCase()),
			opera : /opera/.test(navigator.userAgent.toLowerCase()),
			msie : /msie/.test(navigator.userAgent.toLowerCase())
		}
		if($.browser.msie){
			$.browser.version = parseInt(navigator.userAgent.toLowerCase().match(/msie[^;]+/).replace('msie',''),10);	
		}
	}
	
    var Dialog = function(options){
 
        this.defaultConfig = Dialog.setDefaultConfig(); //默认配置
        this.userConfig = options;                      //用户配置
        this.doneConfig = this._setDoneConfig();        //通过默认配置和用户配置的对比，完成配置
 
        Dialog.queue.push(this);
        this._show();
    };
	
    //原型方法: 被当做对象的属性使用
    Dialog.prototype = {
        constructor : Dialog,
        '_buildDialogDom' : function(){
            //会影响DOM结构的属性
            var hasTitle = this.doneConfig['hasTitle'] && this.doneConfig['title'],
                hasContent = this.doneConfig['hasContent'] && this.doneConfig['content'],
                hasFoot = this.doneConfig['hasFoot'] && this.doneConfig['foot'],
                hasReferBtn = this.doneConfig['hasReferBtn'],
                hasCloseBtn = this.doneConfig['hasCloseBtn'],
                draggable = this.doneConfig['draggable'],
                hasShade = this.doneConfig['hasShade'];
 
            var titleContainer = "", contentContainer = "",
                referBtnContainer = "", closeBtnContainer = "", dragBar = "",
                contentContainer = "", footContainer = "";
 
            if(hasTitle){
                titleContainer = '<div class="dialogTitle">'+ this.doneConfig['title'] +'</div>';
            }
 
            //console.log(hasReferBtn);
 
            if(hasReferBtn){
                referBtnContainer = '<div class="dialogReferBtn">'+ this.doneConfig['ReferBtn'] +'</div>';
            }
 
            if(hasCloseBtn){
                closeBtnContainer = '<div class="dialogCloseBtn"><a href="#">'+ this.doneConfig['CloseBtn'] +'</a></div>';
            }
 
            if(hasFoot){
                footContainer = '<div class="dialogFoot">'+ this.doneConfig['foot'] +'</div>';
            }
 
            if(draggable){
                dragBar = '<div class="dialogDragbar"></div>';
            }
 
            contentContainer = '<div class="dialogContent">'+ this.doneConfig['content'] +'</div>';
 
            return $('<div class="dialogWindow">'+ referBtnContainer + closeBtnContainer + dragBar + titleContainer + contentContainer + footContainer +'</div>');
        },
        '_setSkin' : function(){
            var hasShadow = this.doneConfig['hasShadow'],
                hasReferBtn = this.doneConfig['hasReferBtn'],
                hasCloseBtn = this.doneConfig['hasCloseBtn'],
                hasTitle = this.doneConfig['hasTitle'],
                hasContent = this.doneConfig['hasContent'],
                hasFoot = this.doneConfig['hasFoot'],
                draggable = this.doneConfig['draggable'],
                hasShade = this.doneConfig['hasShade'],
                autoCenter = this.doneConfig['autoCenter'];
 
            this._setWindowStyle();
 
            if(hasShadow){
                this._setShadowStyle();
            }
 
            if(hasReferBtn){
                this._setReferBtnStyle();
            }
 
            if(hasCloseBtn){
                this._setCloseBtnStyle();
            }
 
            if(hasTitle){
                this._setTitleStyle();
            }
 
            if(hasContent){
                this._setContentStyle();
            }
 
            if(hasFoot){
                this._setFootStyle();
            }
 
            if(draggable){
                this._setDragBarStyle();
            }
 
            if(autoCenter){
                this._setCenter();
            }
        },
        '_setWindowStyle' : function(){
            var _css = $.extend({}, {
                'border' : '2px #DDD solid',
                'padding' : '10px',
                'background' : '#FFFFFF',
                'position' : 'absolute',
                'width' : '50%',
                'margin' : '0px auto',
                'z-index' : 10000
            }, this.doneConfig['css']);
 
            this.initDom.css(_css);
        },
        '_setShadowStyle' : function(){
            var shadowCSS = {'box-shadow' : '0px 0px 5px #000'};
            if(this.doneConfig['css'] && this.doneConfig['css']['box-shadow']){
                shadowCSS = this.doneConfig['css']['box-shadow'];
            }
            this.initDom.css(shadowCSS);
        },
        '_setReferBtnStyle' : function(css){
            var color = this.initDom.css('border-color');
            var _css = {
                    'background' : '#FFFFFF',
                    'color' : color,
                    'display' : 'inline-block',
                    'font-size' : '60px',
                    'height' : '26px',
                    'left' : '-34px',
                    'text-indent' : '-10px',
                    'line-height' : '20px',
                    'position' : 'absolute',
                    'text-shadow' : '-2px 0px 2px '+color,
                    'top' : '10px',
                    'vertical-align' : 'top'
            };
            this.initDom.find(".dialogReferBtn").css($.extend({},_css,css));
        },
        '_setCloseBtnStyle' : function(css){
            var _css = {
                    'position': 'absolute',
                    'right' : '10px',
                    'top' : '10px',
                    'display' : 'inline-block',
                    'cursor' : 'pointer',
                    'z-index' : '5'
            };
 
            var a_css = {
                'width' : '15px',
                'height' : '15px',
                'overflow' : 'hidden',
                'color' : '#999999',
                'font-size' : '20px',
                'font-family' : 'Microsoft YaHei',
                'text-decoration' : 'none',
                'display' : 'block'
            };
 			
            if($.browser.msie && $.browser.version <= 6){
                a_css = $.extend({},a_css,{
                    'line-height' : '18px',
                    'font-size' : '16px'
                });
            }else if($.browser.msie && $.browser.version < 9){
                a_css = $.extend({},a_css,{
                    'line-height' : '16px'
                });
            }else if($.browser.opera){
                a_css = $.extend({},a_css,{
                    'font-size' : '16px'
                });
            }else{
                a_css = $.extend({},a_css,{
                    'line-height' : '12px'
                });
            }
 
            this.initDom.find(".dialogCloseBtn").css(_css);
            this.initDom.find(".dialogCloseBtn>a").css($.extend({},a_css,css));
 
        },
        '_setTitleStyle' : function(css){
            var _css = {
                'position' : 'relative'
            };
 
            this.initDom.find(".dialogTitle").css($.extend({},_css,css));
        },
        '_setContentStyle' : function(css){
            var _css = {
                'position' : 'relative'
            };
 
            this.initDom.find(".dialogContent").css($.extend({},_css,css));
        },
        '_setFootStyle' : function(css){
            var _css = {
                'position' : 'relative',
                'width' : '98%'
            };
            this.initDom.find(".dialogFoot").css($.extend({},_css,css));
        },
        '_setDragBarStyle' : function(css){
            var _css = {
                'width' : '100%',
                'height' : '10px'
            };
            this.initDom.css('padding-top','0px').find(".dialogDragbar").css($.extend({},_css,css));
        },
        '_setShadeStyle' : function(css){
            this.shadeCSS = css;
        },
        '_getShadeStyle' : function(){
            var _css = {
                'width' : '100%',
                'height' : $(document).height(),
                'background' : '#000000',
                'position' : 'absolute',
                'top' : '0px',
                'left' : '0px',
                'opacity' : 0.1
            };
            //fix ie8bug
            if($.browser.msie && $.browser.version == 8){
                if($(document).height() - 4 == $(window).height()){
                    _css.height = $(window).height();
                }
            }
            return $.extend({},_css,this.shadeCSS);
        },
        '_updateTitle' : function(strTitle){
            this.doneConfig['title'] = strTitle;
            this._refreshInitDom('Title');
        },
        '_updateContent' : function(strContent){
            //console.log(strContent);
            this.doneConfig['content'] = strContent;
            this._refreshInitDom('Content');
        },
        '_updateFoot' : function(strFoot){
            this.doneConfig['foot'] = strFoot;
            this._refreshInitDom('Foot');
        },
        '_refreshInitDom' : function(name){
            this.initDom.find(".dialog"+name).html(this.doneConfig[name.toLowerCase()]);
        },
        '_bindAction' : function(){
            var dialog = this;
            dialog.initDom.find(".dialogCloseBtn>a").bind({
                'click' : function(){
                    dialog._close.call(dialog);
					return false;
                }
            });
 
 
            if(this.doneConfig['draggable']){
                dialog.dargObj = new $.Drag({
                    'handle' : dialog.initDom.find(".dialogDragbar"),
                    'target' : dialog
                });
            }
 
            if(this.doneConfig['hasShade']){
                dialog.shade = new $.Shade({
                    'target' : dialog,
                    'css' : dialog._getShadeStyle()
                });
                $(window).bind("resize", function(){
                    dialog.shade.dom.css(dialog._getShadeStyle());
                });
            }
 
            if(this.doneConfig['autoCenter']){
                window.onload = window.onresize = function(){
                    dialog._setCenter();
                }
            }
 
            if(this.doneConfig['escable'] && Dialog.queue.length > 0){
                $(window).keydown(function(event){
                    dialog.escEvent = event;
                    if(event.keyCode == 27){
                        dialog._close.call(dialog);
                    }
                });
            }
 
        },
		'_beforeClose' : null, //关闭前置检查
        '_close' : function(){
			var isOk = true;
			
			if(typeof this.beforeClose == 'function'){
				isOk = this.beforeClose();
			}
			
			if(!isOk) return false;
			
			this.initDom.remove();
			if(this.shade){
				this.shade.dom.remove();
			}
 
			for(var i=0,j=$.Dialog.queue.length;i<j;i++){
				if($.Dialog.queue[i] == this){
					$.Dialog.queue.splice(i,1);
					if(this.escEvent){
						$(window).unbind(this.escEvent);
					}
				}
			}
        },
        '_setCenter' : function(){
            var self = this,
                dialogDiv = self.initDom;
 
            self._setPosition({
                'top' : Math.max(document.body.scrollTop, document.documentElement.scrollTop) + Math.round($(window).height() - dialogDiv.height())/2 + 'px',
                'left' : Math.max(document.body.scrollLeft, document.documentElement.scrollLeft) + Math.round($(window).width() - dialogDiv.width())/2 + 'px'
            });
        },
        '_setPosition' : function(xy){
            this.initDom.css({
                'top' : xy.top,
                'left' : xy.left
            });
        },
        '_setDoneConfig' : function(){
            if($.browser.msie){
                this.userConfig['hasShadow'] = false;
                this.userConfig['hasReferBtn'] = false;
            }
            if($.browser.msie && this.userConfig['ReferBtn'] != null){
                this.userConfig['hasReferBtn'] = true;
            }
            return $.extend({},this.defaultConfig,this.userConfig)
        },
        '_show' : function(){
            this.initDom = this._buildDialogDom();  //初始化DOM
            $("body").prepend(this.initDom);
            this._setSkin();                            //初始Dialog的样式
            this._bindAction();                     //初始化动作
 
        }
    }
 
    //扩展方法：被当做函数使用
    $.extend(Dialog,{
        'open' : function(options,fn){
            if(options['target'] == null){
                //console.log("options['target'] null");
                return false;
            }
 
            var dialog = Dialog.searchQueue(options['target']) || new Dialog(options);
            if(typeof fn == 'function'){
                fn(dialog);
            }
            return dialog;
        },
        'api' : function(){
            console.dir($.Dialog.prototype);
        },
        'setDefaultConfig' : function(){
            return {
                'content' : null,                   //初始内容,必填参数
                'target' : null,                    //触发弹窗的目标元素,必填参数
                'title' : null,                     //初始标题
                'foot' : null,                      //初始页尾
                'width' : 600,                      //初始宽度
                'height' : null,                    //初始高度[自适应]
                'min-width' : 300,                  //初始最小宽度
                'min-height' : 400,                 //初始最小高度
                'top' : null,                       //初始top
                'left' : null,                      //初始left
                'css' : null,                       //自定义CSS
                'closeTitle' : null,                //初始关闭按钮悬浮文字
                'draggable' : false,                //是否可以拖拽
                'resizeable' : false,               //是否可以拖拽改变大小
                'autoCenter' : false,               //是否自动居中，当窗口大小变化时
                'escable' : true,                   //是否可以通过ESC键关闭窗口
                'scrollable' : true,                //是否可以滚动窗口，当弹出Dialog后
                'hasFixed'  : true,                 //是否用fixed定位窗口
                'hasTitle' : true,                  //是否需要标题
                'hasContent' : true,                //是否需要内容
                'hasFoot' : true,                   //是否需要页尾信息
                'hasCloseBtn' : true,               //是否需要关闭按钮
                'hasReferBtn' : true,               //是否需要指示按钮
                'hasShadow' : true,                 //是否需要投影
                'hasShade' : false,                 //是否需要遮罩层
                'CloseBtn' : unescape("%D7"),       //关闭按钮[×]
                'ReferBtn' : unescape("%uFF1C")     //指示按钮[＜]
            };
        }
    });
 
    Dialog.queue = [];      //dialog队列
    Dialog.searchQueue = function(key){
        if(Dialog.queue.length <= 0){
            return null;
        }
        for(var i=0,j=Dialog.queue.length;i<j;i++){
            if(Dialog.queue[i].doneConfig['target'] == key){
                return Dialog.queue[i];
            }
        }
    }
    $.Dialog = Dialog;	 
})(jQuery);

//添加AMD加载方式
(function(root, factory){
    if(typeof exports === 'object') {
        module.exports = factory();
    } else if(typeof define === 'function' && define.amd) {
        define([], factory);
    } else {
        root['Dialog'] = factory();
    }
})(this, function(){
    /* 模块的具体实现代码 */
    return $.Dialog;
});
