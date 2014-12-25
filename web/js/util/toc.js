define([
    'js/lib/toc', 
    'module/jquery-color/2.1.2/jquery.color'
], function(Toc, __) {
    return (function($) {
    	function focus(el) {
            if(!el.size()) {
                return false;
            }

            el.css('background-color', '#FEE9CC').stop().animate({'background-color' : '#f5f5f5'}, 2000);
            
            $('html, body').stop().animate({
                    scrollTop: el.offset().top - 80
                }, 200);
    	};

    	function generateToc(scope) {
    		$('.toc_container').remove();

            var toc = new Toc({
                    scope: scope,
                    selector : 'h1, h2, h3, h4'
                }).render();

            toc = $('<div class="toc-container"><div><i class="icon-list"></i> 目录：</div></div>').append(toc);

            $('body').prepend(toc);

            $('body').on('click', '.toc-container a', function(e) {
                var el = $(this),
                    name = el.attr('href').replace(/.*#/mg, '');

                focus($('#' + name.replace(/#/g, '')));
                
                try {
                	history.replaceState(null, top.document.title, '#_' + encodeURIComponent(name));
                } catch(e) {
                	location.hash = '_' + encodeURIComponent(name);
            	}

                return false;
            });


            setTimeout(function() {
                var hash = location.hash.replace('#_', '');
                try {
                    hash = decodeURIComponent(hash);
                }catch(e) {}

                if(hash) {
                    focus($('#' + hash));
                }
            }, 180);

            //内容太少，不显示 TOC
            if($('.toc-container li').size() < 2) {
            	$('.toc-container').hide();
                return false;
            }

            $(window).resize(function() {
                var right,
                    winWidth = $(window).width();

                if(winWidth <= 1250 && winWidth > 1150) {
                    right = (winWidth - $('.content-wrap').width() - $('.toc-container').width() - 10) / 2;
                    $('.content-wrap').css('margin-left', right);
                    $('#meta').css('position', 'absolute');
                    setTimeout(function() {
                        $('#meta').css('position', 'fixed');
                    }, 0);
                } else {
                    right = (winWidth - $('.content-wrap').width()) / 2 - $('.toc-container').width() - 10;
                    $('.content-wrap').css('margin-left', 'auto');
                }

                $('.toc-container').css('right', right);

                //非IE，或者IE8+
                if(!$.Browser.ie || $.Browser.ie > 7) {
                    if($(window).height() - 100 < $('.toc-container').height()) {
                        $('.toc-container').css('position', 'absolute');
                    } else {
                        $('.toc-container').css('position', 'fixed');
                    }
                }
            });

            $(window).resize();
    	};

    	return generateToc;
    })(jQuery);
});