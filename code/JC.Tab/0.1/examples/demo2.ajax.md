# ajax Tab

<link href='{{path}}/res/default/style.css' rel='stylesheet' />
<style>
    dl.def ul{ margin-left: 0; margin-bottom: 0; }
</style>

<script>
    window.JC = window.JC || { debug: true };

    requirejs( [ '{{module}}' ], function( Tab ){
        JC.Tab.ajaxCallback =
        function( _data, _label, _container ){
            _data && ( _data = $.parseJSON( _data ) );
            if( _data && _data.errorno === 0 ){
                _container.html( JC.f.printf( '<h2>JC.Tab.ajaxCallback</h2>{0}', _data.data ) );
                }else{
                Tab.isAjaxInited( _label, 0 );
                _container.html( '<h2>内容加载失败!</h2>' );
            }
        };
    });

    function tabactive( _evt, _container, _tabIns ){
        var _label = $(this);
        JC.log( 'tab ', _evt.type, _label.html(), new Date().getTime() );
        if( JC.Tab.isAjax( _label ) && ! JC.Tab.isAjaxInited( _label ) ){
            _container.html( '<h2>内容加载中...</h2>' );
        }
    }

    function tabchange( _container, _tabIns ){
        var _label = $(this);
        JC.log( 'tab change: ', _label.html(), new Date().getTime() );
    }

    function ajaxcallback( _data, _label, _container ){
        _data && ( _data = $.parseJSON( _data ) );
        if( _data && _data.errorno === 0 ){
            _container.html( JC.f.printf( '<h2>label attr ajaxcallback</h2>{0}', _data.data ) );
            }else{
            Tab.isAjaxInited( _label, 0 );
            _container.html( '<h2>内容加载失败!</h2>' );
        }
    };
</script>

<dl class="def">
    <dt>JC.Tab 示例 - 动态内容 - AJAX</dt>
    <dd>
    <div class="le-tabview js_autoTab" tablabels="|ul.js_tabLabel > li > a" tabcontainers="|div.js_tabContent > div" 
        tabactiveclass="active" tablabelparent="li" 
        tabactivecallback="tabactive" tabchangecallback="tabchange"
        >
        <ul class="le-tabs js_tabLabel">
            <li class="active"><a href="javascript:">电视剧</a></li>
            <li><a href="javascript:" tabajaxurl="{{path}}/examples/data/test.php" tabajaxmethod="post" 
                tabajaxdata="{a:1,b:2}" tabajaxcallback="ajaxcallback" >电影</a></li>
            <li><a href="javascript:" tabajaxurl="{{path}}/examples/data/test.php" tabajaxcallback="ajaxcallback" >综艺</a></li>
            <li><a href="javascript:" tabajaxurl="{{path}}/examples/data/test.php" >热点</a></li>
        </ul>
        <div class="views js_tabContent">
            <div class="view-item active">1. 集地议送能拿距还杨雷火，永鲜提只风超洋轻绿动视落清各只江执口。</div>
            <div class="view-item"></div>
            <div class="view-item"></div>
            <div class="view-item"></div>
        </div>
    </div>
    </dd>
</dl>

<dl class="def">
    <dt>JC.Tab 示例 - 动态内容 - AJAX - mouseover</dt>
    <dd>
    <div class="le-tabview js_autoTab" tablabels="|ul.js_tabLabel > li > a" tabcontainers="|div.js_tabContent > div" 
        tabactiveclass="active" tablabelparent="li" 
        tabactivecallback="tabactive" tabchangecallback="tabchange"
        tabactiveevent="mouseover"
        >
        <ul class="le-tabs js_tabLabel">
            <li class="active"><a href="javascript:">电视剧</a></li>
            <li><a href="javascript:" tabajaxurl="{{path}}/examples/data/test.php" tabajaxmethod="post" 
                tabajaxdata="{a:1,b:2}" tabajaxcallback="ajaxcallback" >电影</a></li>
            <li><a href="javascript:" tabajaxurl="{{path}}/examples/data/test.php" tabajaxcallback="ajaxcallback" >综艺</a></li>
            <li><a href="javascript:" tabajaxurl="{{path}}/examples/data/test.php" >热点</a></li>
        </ul>
        <div class="views js_tabContent">
            <div class="view-item active">1. 集地议送能拿距还杨雷火，永鲜提只风超洋轻绿动视落清各只江执口。</div>
            <div class="view-item"></div>
            <div class="view-item"></div>
            <div class="view-item"></div>
        </div>
    </div>
    </dd>
</dl>
