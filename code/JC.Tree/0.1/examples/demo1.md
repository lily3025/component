# 基本示例

<div style="position:fixed; right: 10px; top: 60px;">
    <dl>
        <dd>
        <button type="button" class="js_open_all">open all</button>
        <button type="button" class="js_close_all">close all</button>
        <button type="button" class="js_open_for" data_target="#open_to_val">open for</button>
        <input type="text" value="24" id="open_to_val" />
        <button type="button" class="js_close_for" data_target="#open_to_val">close for</button>
        </dd>
    </dl>
</div>
<dl>
    <dt>默认树 - Tree 示例</dt>
    <dd>
        <div id="tree_box" class="tree_container"></div>
    </dd>
</dl>
<dl>
    <dt>添加 a 链接 - Tree 示例</dt>
    <dd>
        <div id="tree_box1" class="tree_container"></div>
    </dd>
</dl>
<dl>
    <dt>添加 a 链接, evt.preventDefault - Tree 示例</dt>
    <dd>
        <div id="tree_box2" class="tree_container"></div>
    </dd>
</dl>

<link href='{{path}}/res/default/style.css' rel='stylesheet' />
<script>
    requirejs( [ '{{module}}' ], function( Tree ){
        var _queryNode = JC.f.getUrlParam( 'node' );

        var treeData = {
            data: {"24":[["25","\u4e8c\u7ec4\u4e00\u961f"],["26","\u4e8c\u7ec4\u4e8c\u961f"],["27","\u4e8c\u7ec4\u4e09\u961f"]],"23":[["24","\u9500\u552e\u4e8c\u7ec4"],["28","\u552e\u524d\u5ba1\u6838\u7ec4"]]},
		    root: ["23",'客户发展部']
		};
        var _tree = new JC.Tree( $('#tree_box'), treeData );
            _tree.init();
            _queryNode && _tree.open( _queryNode );
            _tree.on('change', function( _evt ){
                var _p = $(this);
                JC.log( 'tree click:', _p.html(), _p.attr('dataid'), _p.attr('dataname') );
            });


        var treeData = {
            data: {"24":[["25","\u4e8c\u7ec4\u4e00\u961f"],["26","\u4e8c\u7ec4\u4e8c\u961f"],["27","\u4e8c\u7ec4\u4e09\u961f"]],"23":[["28","\u9500\u552e\u4e8c\u7ec4"],["24","\u552e\u524d\u5ba1\u6838\u7ec4"]]},
		    root: ["23",'客户发展部']
		};
        var _tree = new JC.Tree( $('#tree_box1'), treeData );
            _tree.on('RenderLabel', function( _data ){
                var _node = $(this);
                _node.html( JC.f.printf( '<a href="?node={0}" dataid="{0}">{1}</a>', _data[0], _data[1] ) );
            });
            _tree.init();
            _queryNode && _tree.open( _queryNode );


        var treeData = {
            data: {"24":[["25","\u4e8c\u7ec4\u4e00\u961f"],["26","\u4e8c\u7ec4\u4e8c\u961f"],["27","\u4e8c\u7ec4\u4e09\u961f"]],"23":[["28","\u9500\u552e\u4e8c\u7ec4"],["24","\u552e\u524d\u5ba1\u6838\u7ec4"]]},
		    root: ["23",'客户发展部']
		};
        var _tree = new JC.Tree( $('#tree_box2'), treeData );
            _tree.on('RenderLabel', function( _data ){
                var _node = $(this);
                _node.html( JC.f.printf( '<a href="javascript:" dataid="{0}">{1}</a>', _data[0], _data[1] ) );
            });
            _tree.on('change', function( _evt ){
                var _p = $(this);
                JC.log( 'tree click:', _p.html(), _p.attr('dataid'), _p.attr('dataname') );
            });
            _tree.init();
            _queryNode && _tree.open( _queryNode );
    });

    $(document).delegate('button.js_open_all', 'click', function(){
        $('div.tree_container').each( function(){
            JC.Tree.getInstance( this ) && JC.Tree.getInstance(this).open();
        });
    });

    $(document).delegate('button.js_close_all', 'click', function(){
        $('div.tree_container').each( function(){
            JC.Tree.getInstance( this ) && JC.Tree.getInstance(this).close();
        });
    });

    $(document).delegate('button.js_open_for', 'click', function(){
    
        var _tgr = $(this).attr('data_target');
        if( !_tgr ) return;
        _tgr = $.trim( $( _tgr ).val() );

        $('div.tree_container').each( function(){
            JC.Tree.getInstance( this ) && JC.Tree.getInstance(this).open( _tgr );
        });
    });

    $(document).delegate('button.js_close_for', 'click', function(){
    
        var _tgr = $(this).attr('data_target');
        if( !_tgr ) return;
        _tgr = $.trim( $( _tgr ).val() );

        $('div.tree_container').each( function(){
            JC.Tree.getInstance( this ) && JC.Tree.getInstance(this).close( _tgr );
        });
    });
</script>
