define(['js/lib/doT', 'js/util/cart'], function(doT, cart) {
	return function() {
		//还原滚动条位置（for：可恶的 Chrome，详见：https://www.imququ.com/post/chrome-scrollbar-freeze.html）
		setTimeout(function(){window.scrollTo(0, 1);window.scrollTo(0, 0)}, 150);

		//加载顶部通栏
		$.get('tpl/nav.html', function(html) {
        		$('.navbar').html(doT.template(html)());
        	});

        //加载购物车
        cart.init();

        var funcCart;
        $(cart).on('change', function(e, data) {
        	if(!funcCart) {
            	$.get('tpl/cart.html', function(html) {
            		funcCart = doT.template(html);
            		$('#cart').html(funcCart(data.items));

                    //IE6 下不支持css hover
                    if(!$.support.leadingWhitespace) {
                        setTimeout(function() {
                            $('.dropdown').hover(function() {
                                $('.dropdown .toggle').css('background', '#333');
                                $('.dropdown .menu').show();
                            }, function() {
                                $('.dropdown .toggle').css('background', '');
                                $('.dropdown .menu').hide();
                            });
                        }, 50);
                    }
            	});
        	} else {
            	$('#cart').html(funcCart(data.items));
        	}
        });

        $(cart).trigger('change', {items : cart.getItems()});
	};
});