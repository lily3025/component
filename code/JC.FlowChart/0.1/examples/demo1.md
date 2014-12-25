# 基本示例

<link href='{{path}}/res/default/style.css' rel='stylesheet' />
<link href='{{basePath}}/JC.PopTips/0.2/res/default/style.css' rel='stylesheet' />
<style>
    .js_compFlowChart .js_cfcItemStatus_0{
        color: #41e2e6; 
        background: white;
    }

    .js_compFlowChart .js_cfcItemStatus_1{
        color: #c3e2a4;
        background: white;
    }

    .js_compFlowChart .js_cfcItemStatus_2{
        color: #ff06b3;
        background: white;
    }
</style>
<script>
    requirejs( [ '{{module}}' ], function( {{name}} ){
    });
</script>

<dl class="defdl">
    <dt>JC.FlowChart - 示例</dt>
    <dd>
        <div>
            <div class="js_cfcItemStatus_block">
                <label><button type="button" class="js_cfcItemStatus_0">&nbsp;</button>状态0</label>
                <label><button type="button" class="js_cfcItemStatus_1">&nbsp;</button>状态1</label>
                <label><button type="button" class="js_cfcItemStatus_2">&nbsp;</button>状态2</label>
                <label><button type="button" class="js_cfcItemStatus_3">&nbsp;</button>状态3</label>
                <label><button type="button" class="js_cfcItemStatus_4">&nbsp;</button>状态4</label>
                <br/><label><button type="button" class="js_cfcItemStatus_5">&nbsp;</button>状态5</label>
                <label><button type="button" class="js_cfcItemStatus_6">&nbsp;</button>状态6</label>
                <label><button type="button" class="js_cfcItemStatus_7">&nbsp;</button>状态7</label>
                <label><button type="button" class="js_cfcItemStatus_8">&nbsp;</button>状态8</label>
                <label><button type="button" class="js_cfcItemStatus_9">&nbsp;</button>状态9</label>
                <label><button type="button" class="js_cfcItemStatus_10">&nbsp;</button>状态10</label>
            </div>
        </div>
        <h2>before text</h2>
        <div class="js_compFlowChart" data-FlowChart="|script">
            <script type="text/template">
                {
                    colors: {
                        line: {
                             'stroke': '#dbb8fd', 'stroke-width': 2
                        }
                        , icon: {
                            'stroke': '#dbb8fd', 'stroke-width': 2, 'fill': '#dbb8fd'
                        }
                    }
                    , chart: {
                        name: '提交'
                        , id: 1
                        , nodes: [
                                {
                                    name: '资质审核'
                                    , id: 2
                                    , status: 1
                                    , tipsHtml: 'username 1'
                                    , nodes: [
                                        {
                                            name: '服务审核'
                                            , id: 3
                                            , targetNode: 5
                                            , status: 2
                                            , tipsHtml: 'username 2'
                                        }
                                        , {
                                            name: '渠道管理层'
                                            , id: 4
                                            , status: 2
                                            , tipsHtml: 'username 3'
                                        }
                                    ]
                                }
                                , {
                                    name: '资质审核1'
                                    , id: 6
                                    , status: 1
                                    , tipsHtml: 'username 4'
                                    , nodes: [
                                        {
                                            name: '服务审核1'
                                            , id: 7
                                            , targetNode: 9
                                            , status: 2
                                            , tipsHtml: 'username 5'
                                        }
                                        , {
                                            name: '渠道管理层1'
                                            , id: 8
                                            , targetNode: 9
                                            , status: 0
                                        }
                                    ]
                                }
                                , {
                                    name: '资质审核2'
                                    , id: 10
                                    , status: 1
                                    , tipsHtml: 'username 7'
                                    , nodes: [
                                        {
                                            name: '服务审核2'
                                            , id: 11
                                            , status: 2
                                            , tipsHtml: 'username 8'
                                            , nodes: [
                                                {
                                                    name: '管理层2'
                                                    , id: 12
                                                    , targetNode: 5
                                                    , status: 0
                                                }
                                            ]
                                        }
                                    ]
                                }
                                , {
                                    name: '资质审核3'
                                    , id: 15
                                    , status: 1
                                    , tipsHtml: 'username 10'
                                }
                        ]
                        , targetNodes: {
                            '5': {
                                name: '管理层'
                            }
                            , '9': {
                                name: '管理层1'
                                , targetNode: 5
                            }
                        }
                    }
                }
            </script>
        </div>
        <h2>after text</h2>
    </dd>
</dl>
