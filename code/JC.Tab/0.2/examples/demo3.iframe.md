# iframe Tab

<link href='{{path}}/res/default/style.css' rel='stylesheet' />
<style type='text/css'>
    .cclear{zoom:1;}
    .cclear:after{content:".";display:block;visibility:hidden;height:0;clear:both;}

    .error{ color: red; }
    input.error, select.error, textarea.error{ 
        background-color: #fce1e1;
        border: 1px solid #da9797;
        box-shadow: 0 none;
    }
    input[type=text], input[type=password]{ width: 200px; }

    dl.def > dd{
        margin: 10px 0;
    }

    dl.def > dd > button {
    }

    iframe.view-item{
        width: 97%; 
        margin: 0;
        padding: 0;
    }
</style>
<script>
    requirejs( [ 'module/JC.Tab/0.2/Tab' ], function( Tab ){
        JC.debug = true;
        JC.f.httpRequire();
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
</script>

<dl class="def">
    <dt>JC.Tab 示例 - 动态内容 - iframe</dt>
    <dd>
    <div class="le-tabview js_autoTab" 
        tabLabels="|ul.js_tabLabel > li > a" 
        tabContainers="|div.js_tabContent > iframe" 
        tabActiveClass="active" 
        tabLabelParent="li" 
        tabActiveCallback="tabactive" 
        tabChangeCallback="tabchange"
        tabQueryKey="tab1"
        tabTriggerDefault="true"
        >
        <ul class="le-tabs js_tabLabel">
            <li class="active"><a href="javascript:" tabIframeUrl="{{path}}/examples/data/test.php">电视剧</a></li>
            <li><a href="javascript:" tabIframeUrl="{{path}}/examples/data/test.php" >电影</a></li>
            <li><a href="javascript:" tabIframeUrl="{{path}}/examples/data/test.php"  >综艺</a></li>
            <li><a href="javascript:" tabIframeUrl="{{path}}/examples/data/test.php" >热点</a></li>
        </ul>
        <div class="views js_tabContent">
            <iframe class="view-item active" frameborder="0"></iframe>
            <iframe class="view-item " frameborder="0"></iframe>
            <iframe class="view-item " frameborder="0"></iframe>
            <iframe class="view-item " frameborder="0"></iframe>
        </div>
    </div>
    </dd>
</dl>

<dl class="def">
    <dt>JC.Tab 示例 - 动态内容 - iframe - mouseover</dt>
    <dd>
    <div class="le-tabview js_autoTab" 
        tabLabels="|ul.js_tabLabel > li > a" 
        tabContainers="|div.js_tabContent > iframe" 
        tabActiveClass="active" 
        tabLabelParent="li" 
        tabActiveCallback="tabactive" 
        tabChangeCallback="tabchange"
        tabTriggerDefault="true"
        tabQueryKey="tab2"
        tabactiveevent="mouseover"
        >
        <ul class="le-tabs js_tabLabel">
            <li class="active"><a href="javascript:" tabIframeUrl="{{path}}/examples/data/test.php">电视剧</a></li>
            <li><a href="javascript:" tabIframeUrl="{{path}}/examples/data/test.php" >电影</a></li>
            <li><a href="javascript:" tabIframeUrl="{{path}}/examples/data/test.php"  >综艺</a></li>
            <li><a href="javascript:" tabIframeUrl="{{path}}/examples/data/test.php" >热点</a></li>
        </ul>
        <div class="views js_tabContent">
            <iframe class="view-item active" frameborder="0"></iframe>
            <iframe class="view-item " frameborder="0"></iframe>
            <iframe class="view-item " frameborder="0"></iframe>
            <iframe class="view-item " frameborder="0"></iframe>
        </div>
    </div>
    </dd>
</dl>
