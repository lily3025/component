define([
    'js/lib/doT', 
    'js/util/loadmodules', 
    'js/util/showdoc', 
    'js/util/global', 
    'js/util/cart',
    'js/util/toc'
], 
function(doT, loadModules, getDoc, global, cart, generateToc) {
    var urlQuery = location.search.queryUrl(),
        module_name = urlQuery.name,
        module_ver  = urlQuery.ver,
        module_path = urlQuery.path,
        current_type = urlQuery.type || 'docs',
        current_file = urlQuery.file;

    /* * * DON'T EDIT THIS * * */
    window.duoshuoQuery = {short_name : "qiwoo"};
    $('.ds-thread').attr('data-thread-key', [module_name, module_ver, module_path, current_type, current_file].join('_'));

    (function() {
        var ds = document.createElement('script');
        ds.type = 'text/javascript';ds.async = true;
        ds.src = 'http://static.duoshuo.com/embed.js';
        ds.charset = 'UTF-8';
        (document.getElementsByTagName('head')[0] 
        || document.getElementsByTagName('body')[0]).appendChild(ds);
    })();
    /* * * DISQUS END * * */

    if(!module_name) {
        alert('模块不存在！');
        return false;
    }

    global();

    loadModules(function(data) {
        var current_item = {},
            module_group = '';

        (function() {
            for(var group in data) {
                var modules = data[group],
                    item;

                for(var i = 0; i < modules.length; i++) {
                    if(modules[i].name == module_name) {
                        item = modules[i];

                        //如果没指定版本或者路径，强制使用第一个版本（第一个一定是最新的）
                        if(!module_ver || !module_path) {
                            module_ver = item.versions[0][0];
                            module_path = item.versions[0][1];
                        }

                        for(var j = 0; j < item.versions.length; j++) {
                            if(module_ver == item.versions[j][0]) {
                                current_item = item;
                                
                                current_item.ver = j;
                                current_item.item = item.versions[j];

                                module_path = item.versions[j][1];
                                module_group = group;

                                return;
                            }
                        }
                    }
                }
            }
        })();

        if(!current_item.item) {
            alert('模块不存在！');
            return false;
        }

        current_item.group = module_group;
        current_item.current_type = current_type;
        current_item.current_file = current_file;

        var module_output = current_item.item[3].data.output;

        (function($) {
            //meta信息
            var xhr = $.get('data/detail.php?path=' + module_path, null, null, 'json');
            xhr.success(function(extra) {
                //文档示例等信息
                current_item.extra = extra;

                //模块基本信息
                var funcMeta = doT.template($('#tplMeta').html());
                $('#meta').html(funcMeta(current_item));

                //添加到购物车按钮状态改变
                $(cart).on('change', function(e, data) {
                    if(!cart.inCart(module_name, module_ver)) {
                        $('.remove-from-cart').toggleClass('add-to-cart remove-from-cart');
                    } else {
                        $('.add-to-cart').toggleClass('add-to-cart remove-from-cart');
                    }
                });

                $(cart).trigger('change', {items : cart.getItems()});

                $(".navigation li[data-type='" + current_type + "']").addClass('current');

                var getContent = function() {
                    var doc;
                    if(current_file) {
                        doc = 'module/' + module_path + '/' + current_type + '/' + current_file;
                    } else {
                        doc = 'module/' + module_path + '/readme.md';
                    }

                    getDoc(doc, function(content) {
                        var basePath, path, src, module, baseQuery;

                        baseQuery = 'name=' + module_name + '&path=' + module_path + '&ver=' + module_ver;

                        //由于 web 系统中的 module 文件夹是放在 web 目录下，并不在根路径，所以 example 时需要 replace 成相对路径。
                        if(current_type == 'examples') {
                            basePath = 'module';
                        } else {
                            basePath = '/module';
                        }

                        path = basePath + '/' + module_path;
                        src = path + '/' + module_output;
                        module = src.replace(/^\/|\.js$/ig, '');

                        content = content.replace(/<a href="(docs|examples):(.*)">/img, '<a href="detail.html?' + baseQuery + '&type=$1&file=$2">');
                        content = content.replace(/<a href="file:(.*)">/img, '<a href="' + path.replace(/^\//, '') + '/' + '$1">');

                        content = content.replace(/{{basePath}}/g, basePath);
                        content = content.replace(/{{path}}/g, path);
                        content = content.replace(/{{module}}/g, module);
                        content = content.replace(/{{src}}/g, src);
                        content = content.replace(/{{name}}/g, module_name.replace(/^\S*[\.\-]/, '').replace(/^[a-z]/, function(a) { return a.toUpperCase()}));
                        
                        content = content.replace(/<h3(.*<em>.*)<\/h3>/g, 
                                '<h3 class="api-name"$1</h3>'); //HACK: h3包含em的，默认为API方法 

                        if(current_type == 'examples') {
                            content = '<p><a class="link-view-source" href="#"><i class="icon-external-link"></i> 查看源代码</a></p>' + content;
                        }
                        
                        $('#readme').html(content || '文档还没有！');

                        generateToc($('#readme')[0]);
                    });

                    return false;
                };

                var getContentSource = function() {
                    var win = window.open('', 'viewvode', '');
                    win.focus();

                    if(!win) {
                        alert('啊呀呀~弹出窗口被阻挡了~');
                    }

                    var doc = 'data/source.php?file=' + module_path + '/examples/' + current_file,
                        basePath = '/module',
                        path = basePath + '/' + module_path,
                        src = path + '/' + module_output,
                        module = src.replace(/^\/|\.js$/ig, '');

                    getDoc(doc, function(content) {
                        content = content.replace(/{{basePath}}/g, basePath);
                        content = content.replace(/{{path}}/g, path);
                        content = content.replace(/{{src}}/g, src);
                        content = content.replace(/{{module}}/g, module);
                        content = content.replace(/{{name}}/g, module_name.replace(/^\S*[\.\-]/, '').replace(/^[a-z]/, function(a) { return a.toUpperCase()}));

                        content = '<link rel="stylesheet" href="css/highlightjs/solarized.css"><div style="font-size:14px;line-height:21px;">' + content + '</div>';

                        win.document.open();
                        win.document.write(content);
                        win.document.close();
                    });

                    return false;
                };

                $('#readme').on('click', 'a.link-view-source', getContentSource);

                getContent();
            });


            $(window).resize(function() {
                //非IE，或者IE8+
                if(!$.Browser.ie || $.Browser.ie > 7) {
                    if($(window).height() - 80 < $('#meta').height()) {
                        $('#meta').css('position', 'absolute');
                    } else {
                        $('#meta').css('position', 'fixed');
                    }
                }
            });

            $(window).resize();
        })(jQuery);
    });
});
