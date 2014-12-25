define([
    'js/lib/doT', 
    'js/util/loadmodules', 
    'js/util/showdoc', 
    'js/util/global'
], 
function(doT, loadModules, getDoc, global) {
    global();

    var str_modules = location.search.queryUrl('d'),
        modules = JSON.parse(str_modules);

    var funcDoc = doT.template($('#tplDoc').html());
    $('#module_list').html(funcDoc(modules));

    loadModules(function(data) {
        $('.doc-nav').on('click', 'a', function(e) {
            var el = $(this),
                module_name = el.data('name'),
                module_path = el.data('path'),
                module_ver  = el.data('ver');

            getDoc('module/' + module_path + '/readme.md', function(content) {
                var current_item,
                    module_group = '';

                (function() {
                    for(var group in data) {
                        var modules = data[group],
                            item;

                        for(var i = 0; i < modules.length; i++) {
                            if(modules[i].name == module_name) {
                                item = modules[i];
                                for(var j = 0; j < item.versions.length; j++) {
                                    if(module_ver == item.versions[j][0]) {
                                        current_item = item.versions[j];
                                        module_group = group;

                                        return;
                                    }
                                }
                            }
                        }
                    }
                })();

                if(!current_item) {
                    return false;
                }

                var module_output = current_item[3].data.output,
                    basePath = '/module',
                    path = basePath + '/' + module_path,
                    src = path + '/' + module_output,
                    module = src.replace(/^\/|\.js$/ig, ''),
                    baseQuery = 'name=' + module_name + '&path=' + module_path + '&ver=' + module_ver;

                content = content.replace(/<a href="(docs|examples):(.*)">/img, '<a href="detail.html?' + baseQuery + '&type=$1&file=$2">');
                content = content.replace(/<a href="file:(.*)">/img, '<a href="' + path.replace(/^\//, '') + '/' + '$1">');

                content = content.replace(/{{basePath}}/g, basePath);
                content = content.replace(/{{path}}/g, path);
                content = content.replace(/{{src}}/g, src);
                content = content.replace(/{{module}}/g, module);
                content = content.replace(/{{name}}/g, module_name.replace(/^\S*[\.\-]/, '').replace(/^[a-z]/, function(a) { return a.toUpperCase()}));
                
                content = content.replace(/<h3(.*<em>.*)<\/h3>/g, '<h3 class="api-name"$1</h3>'); //HACK: h3包含em的，默认为API方法

                content = content || '文档还没有！';
                content = '<h1>' + module_name + '（' + module_ver + '）<a href="detail.html?name=' + module_name + '&path=' + module_path + '&ver=' + module_ver +'" title="查看详情" target="_blank"><i class="icon-hand-right"></i></a></h1>' + content;

                $('.doc-content').html(content);
            });

            $('.doc-nav a').removeClass('current');

            el.addClass('current');

            return false;
        });

        $('.doc-nav a').first().click();
    });

    $('#btnDownload').click(function(e) {
        location.href = 'data/download.php?d=' + encodeURIComponent(str_modules);
        return false;
    });

    $('#txtDownload').val('curl ' + location.href.replace(/\/download.html.*$/i, '') + '/data/download.php?d=' + encodeURIComponent(str_modules) + ' -o _tmp.zip -L -s && unzip _tmp.zip && rm -f _tmp.zip');
    $('#txtDownload').click(function() {
        this.select();
    });
});