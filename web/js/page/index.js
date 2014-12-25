define([
    'js/lib/doT', 
    'js/util/loadmodules', 
    'js/util/category', 
    'js/util/global',
    'js/util/cart'
], 
function(doT, loadModules, category, global, cart) {
    loadModules(function(data) {
        global();

        /* * * DON'T EDIT THIS * * */
        window.duoshuoQuery = {short_name : "qiwoo"};
        $('.ds-thread').attr('data-thread-key', 'qiwoo_web_index');

        (function() {
            var ds = document.createElement('script');
            ds.type = 'text/javascript';ds.async = true;
            ds.src = 'http://static.duoshuo.com/embed.js';
            ds.charset = 'UTF-8';
            (document.getElementsByTagName('head')[0] 
            || document.getElementsByTagName('body')[0]).appendChild(ds);
        })();
        /* * * DISQUS END * * */

        //加载组件列表
        var funcList = doT.template($('#module_list script').html());
        $('#module_list').html(funcList({'category' : category, 'data' : data}));

        //显示组件目录
        var templateFun = doT.template($('#category script').html());
        $('#category').html(templateFun({'category' : category, 'data' : data}));

        //组件列表交互
        var isScrolling = false;
        $('#category').on('click', 'a', function(e) {
            var el = $(this),
                name = el.attr('href').replace(/.*#/mg, '');

            var content = $('#' + name.replace(/#/g, ''));

            if(!content) {
                return false;
            }
            
            isScrolling = true;
            location.hash = '_' + name; 
            
            $('html, body').stop().animate({
                    scrollTop: content.offset().top - 60
                }, 250, function() { 
                    isScrolling = false;
                });

            $('#category li').removeClass('active');
            el.parent('li').addClass('active');

            return false;
        });

	    //添加到购物车按钮状态改变
	    $(cart).on('change', function(e, data) {

            var inCart = data.items.map(function(i) {
                    return '.cart-btn[data-name="'+i[0]+'"][data-ver="'+i[1]+'"]';
                }).join();

		    $('.cart-btn')
                .not(inCart)
                .removeClass('remove-from-cart')
                .addClass('add-to-cart')
                .end()
                .filter(inCart)
                .removeClass('add-to-cart')
                .addClass('remove-from-cart');

	    }).trigger('change', {items: cart.getItems()});

        $(document).scroll(function(e) {
            if(isScrolling) {
                return;
            }

            var scrollTop = $('body').prop('scrollTop') || $('html').prop('scrollTop'),
                hiddens = [];
                
            $('#module_list .modules').each(function(i) {
                var el = $(this),
                    bottom = el.offset().top + el.height();

                if(bottom < scrollTop + 40) {
                    hiddens.push(i);
                }
            });

            if($(window).height() + scrollTop + 40 < $('body').height()) {
                var i = hiddens.length ? Math.max.apply(null, hiddens) + 1 : 0;
                if(i >= $('#category li').size()) {
                    $('#category li').removeClass('active').last().addClass('active');
                } else {
                    $('#category li').removeClass('active').eq(i).addClass('active');
                }
            } else {
                $('#category li').removeClass('active').last().addClass('active');
            }
        });

        setTimeout(function() {
            var hash = location.hash.replace('#', '');
            if(hash) {
                $('#category a[data-cate="'+hash+'"]').trigger('click');
            }
        }, 180);
    });
});