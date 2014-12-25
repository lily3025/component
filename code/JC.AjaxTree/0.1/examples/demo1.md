# 基本示例

<link href='{{path}}/res/default/style.css' rel='stylesheet' />
<script>
    requirejs( [ '{{module}}' ], function( {{name}} ){
    });
</script>


<dl>
    <dt>默认树 - AjaxTree 示例 - [同步&&异步]加载</dt>
    <dd>
        <div class="js_compAjaxTree" data-cajScriptData="|script">
            <script type="text/template">
                {
                    root: ["folder","0",'root']
                    , url: "{{path}}/examples/data/treedata.php?id={0}"
                    , data: 
                        {
                            "0": [
                                    ["folder","01","非异步节点01"],
                                    ["folder","02","非异步节点02"],
                                    ["folder","03","异步节点"],
                                    ["file","04","叶末节点"]
                                ],
                            "01": [
                                    ["folder","0101","folder0101"],
                                    ["file","0102","file0102"],
                                    ["file","0103","file0103"]
                                ],
                            "02": [
                                    ["file","0201","file0201"],
                                    ["file","0202","file0202"]
                                ],
                            "0101": [
                                    ["file","010101","file010101"],
                                    ["file","010102","file010102"]
                                ]

                        }
                }
            </script>
        </div>
    </dd>
</dl>

<dl>
    <dt>添加 a 链接 - AjaxTree 示例 - 同步加载</dt>
    <dd>
    <div class="js_compAjaxTree js_tree2" data-cajData="TREE_2" data-urlArgName="node">
        <script>
            window.TREE_2 = {
                root: [ 'folder', "23",'客户发展部']
                , data: 
                    {
                        "24":
                        [
                            [
                                'file',
                                "25", 
                                "二组一队"
                            ], 
                            [
                                'file',
                                "26", 
                                "二组二队"
                            ], 
                            [
                                'file',
                                "27", 
                                "二组三队"
                            ]
                        ], 
                        "23":
                        [
                            [
                                'file',
                                "28", 
                                "销售二组"
                            ], 
                            [
                                'folder', 
                                "24", 
                                "售前审核组"
                            ]
                        ]
                    }
            };           

            $( document ).delegate( 'div.js_tree2', 'renderItem', function( _evt, _item, _data ){
                _item.html( JC.f.printf( '<a href="?node={0}" data-id="{0}">{1}</a>', _data[1], _data[2] ) );
            });

        </script>
    </div>
    </dd>
</dl>
<dl>
    <dt>添加 a 链接, evt.preventDefault - AjaxTree 示例 - 同步加载</dt>
    <dd>
    <div class="js_compAjaxTree js_tree3" data-cajData="TREE_3" data-urlArgName="node">
        <script>
            window.TREE_3 = {
                root: [ 'folder', "23",'客户发展部']
                , data: 
                    {
                        "24":
                        [
                            [
                                'file',
                                "25", 
                                "二组一队"
                            ], 
                            [
                                'file',
                                "26", 
                                "二组二队"
                            ], 
                            [
                                'file',
                                "27", 
                                "二组三队"
                            ]
                        ], 
                        "23":
                        [
                            [
                                'file',
                                "28", 
                                "销售二组"
                            ], 
                            [
                                'folder',
                                "24", 
                                "售前审核组"
                            ]
                        ]
                    }
            };           

            $( document ).delegate( 'div.js_tree3', 'renderItem', function( _evt, _item, _data ){
                _item.html( JC.f.printf( '<a href="javascript:;" data-id="{0}">{1}</a>', _data[1], _data[2] ) );
            });

            $( document ).delegate( 'div.js_tree3', 'change', function( _evt, _item, _data, _box ){
                //JC.dir( _item[0], _data, _box[0] );
                //JC.log( 'tree3:', _data );
            });
        </script>
    </div>
    </dd>
</dl>
