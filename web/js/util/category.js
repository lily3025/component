define(function() {
    var ret = [{
                'name' : 'lib',
                'title' : '公共库'
            } , {
                'name' : 'base',
                'title' : '基础模块'
            } , {
                'name' : 'util',
                'title' : '工具类模块'
            } , {
                'name' : 'jqplugin',
                'title' : 'JQ 插件'
            } , {
                'name' : 'jc',
                'title' : 'JC 组件'
            } , {
                'name' : 'nova',
                'title' : '移动端UI组件'
            } , {
                'name' : 'framework',
                'title' : '开发框架'
            } , {
                'name' : 'unknown',
                'title' : '未定义keywords'
            }
        ];

    //这货放最后
    ret.push({
                'name' : 'other',
                'title' : '其它'
            });

    return ret;
});
