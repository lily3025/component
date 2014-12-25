# all data from api

<link href='{{path}}/res/default/style.css' rel='stylesheet' />
<script>
    requirejs( [ '{{module}}' ], function( {{name}} ){
    });
</script>

<dl>
    <dt>默认树 - AjaxTree 示例 - 异步加载</dt>
    <dd>
        <div class="js_compAjaxTree js_tree2" 
            data-cajUrl="{{path}}/examples/data/treedata.php?id={0}"
            data-rootId="1436"
            data-urlArgName="node" 
            data-typeIndex="0" 
            data-idIndex="1" 
            data-nameIndex="2" 
            >
            <script>
                $( document ).delegate( 'div.js_tree2', 'renderItem', function( _evt, _item, _data ){
                    _item.html( JC.f.printf( '<a href="?node={0}" data-id="{0}">{1}</a>', _data[1], _data[2] ) );
                });

                $( document ).delegate( 'div.js_compAjaxTree', 'change', function( _evt, _item, _data, _box ){
                    //JC.dir( _item[0], _data, _box[0] );
                    JC.log( _data );
                });

            </script>
        </div>
    </dd>
</dl>

<dl>
    <dt>默认树 - AjaxTree 示例 - 异步加载</dt>
    <dd>
        <div class="js_compAjaxTree js_tree2" 
            data-cajData="CRM_TREE_DATA" 
            data-rootId="634"
            data-urlArgName="node" 
            data-typeIndex="0" 
            data-idIndex="1" 
            data-nameIndex="2" 
            >
            <script>
                window.CRM_TREE_DATA = { 
                    url: "{{path}}/examples/data/treedata.php?id={0}"
                };

                $( document ).delegate( 'div.js_tree2', 'renderItem', function( _evt, _item, _data ){
                    _item.html( JC.f.printf( '<a href="?node={0}" data-id="{0}">{1}</a>', _data[1], _data[2] ) );
                });

                $( document ).delegate( 'div.js_compAjaxTree', 'change', function( _evt, _item, _data, _box ){
                    //JC.dir( _item[0], _data, _box[0] );
                    JC.log( _data );
                });

            </script>
        </div>
    </dd>
</dl>
<dl>
    <dt>默认树 - AjaxTree 示例 - 异步加载</dt>
    <dd>
        <div class="js_compAjaxTree js_tree2" 
            data-cajUrl="{{path}}/examples/data/treedata.php?id={0}"
            data-rootId="634"
            data-urlArgName="node" 
            data-typeIndex="0" 
            data-idIndex="1" 
            data-nameIndex="2" 
            >
            <script>
                $( document ).delegate( 'div.js_tree2', 'renderItem', function( _evt, _item, _data ){
                    _item.html( JC.f.printf( '<a href="?node={0}" data-id="{0}">{1}</a>', _data[1], _data[2] ) );
                });

                $( document ).delegate( 'div.js_compAjaxTree', 'change', function( _evt, _item, _data, _box ){
                    //JC.dir( _item[0], _data, _box[0] );
                    JC.log( _data );
                });

            </script>
        </div>
    </dd>
</dl>

