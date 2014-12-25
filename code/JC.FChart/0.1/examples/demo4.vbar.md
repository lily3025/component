# 横向柱状图

<script>
    requirejs( [ '{{module}}' ], function( {{name}} ){
        JC.FCHART_PATH = '{{path}}';
    });
</script>

<dl class="defDl">
    <dt>动画效果</dt>
    <dd>
        <div class="js_compFChart"
            chartScriptData="/script"
            chartHeight="500"
            >
            <script type="text/template">
            {
                chart: {
                    type: 'vbar' 
                }, 
                title: {
                    text:'Chart Title'
                },
                subtitle: {
                    text: 'sub title'
                }, 
                xAxis: {
                    categories: [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12' ]
                }, 
                yAxis: {
                    title: {
                        text: '(Vertical Title - 中文)'
                    }
                },
                series:[{
                    name: 'Temperature'
                    , data: [-50, 0, 3, -20, -20, 27, 28, 32, 30, 25, 15, -58]
                    , style: { 'stroke': '#ff7100' } 
                    , pointStyle: {}
                }, {
                    name: 'Rainfall',
                    data: [20, 21, 20, 100, 200, 210, 220, 100, 20, 10, 20, 10]
                }],
                credits: {
                    enabled: true
                    , text: 'fchart.openjavascript.org'
                    , href: 'http://fchart.openjavascript.org/'
                },
                displayAllLabel: true,
                legend: {
                    enabled: true
                },
                animation: {
                    enabled: true
                    , duration: .5
                }
            }
            </script>
        </div>
    </dd>
</dl>


<dl class="defDl">
    <dt>默认效果</dt>
    <dd>
        <div class="js_compFChart"
            chartScriptData="/script"
            chartWidth="600"
            chartHeight="500"
            >
            <script type="text/template">
                {
                    chart: {
                        type: 'vbar' 
                    }, 
                    title: {
                        text:'Chart Title'
                    },
                    subtitle: {
                        text: 'sub title'
                    }, 
                    xAxis: {
                        categories: [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12' ]
                    }, 
                    yAxis: {
                        title: {
                            text: '(Vertical Title - 中文)'
                        }
                    },
                    series:[{
                        name: 'Temperature'
                        , data: [-50, 0, 3, -20, -20, 27, 28, 32, 30, 25, 15, -58]
                        , style: { 'stroke': '#ff7100' } 
                        , pointStyle: {}
                    }, {
                        name: 'Rainfall',
                        data: [20, 21, 20, 100, 200, 210, 220, 100, 20, 10, 20, 10]
                    }],
                    credits: {
                        enabled: true
                        , text: 'fchart.openjavascript.org'
                        , href: 'http://fchart.openjavascript.org/'
                    },
                    displayAllLabel: true,
                    legend: {
                        enabled: true
                    }
                }
            </script>
        </div>
    </dd>
</dl>


<dl class="defDl">
    <dt>简洁</dt>
    <dd>
        <div class="js_compFChart"
            chartScriptData="|script"
            chartHeight="400"
            >
            <script type="text/template">

            {
                xAxis: {
                    categories: [ '学生', '公司职员', '公司管理者', '公务员', '事业单位', '个体经营', '自由职业', '产业\n服务员\n工人', '农业\n劳动者', '其他' ]
                    , wordwrap: true
                } 
                , yAxis: {
                    enabled: true,
                    format: '{0}%'
                }
                , series:[{
                    name: '职业'
                    , data: [ 11, 14, 43, 12, 21, 8, 4, 6, 8, 5 ]
                }]
                , rateLabel: {
                    enabled: false
                }
                , displayAllLabel: true
                , legend: {
                    enabled: false
                }
                , vline: {
                    enabled: false
                }
                , hline: {
                    enabled: false
                }
                , tooltip: {
                    enabled: false
                }
                , colors: [
                    0x00ABEF
                    , 0x9DADB3
                    , 0x09c100
                    , 0x0c76c4 				
                    , 0xff0619
                ]
                , maxItem: {
                    style: { color: 0x5DC979, size: 18 }
                }
                , chart: {
                    bgColor: 0xffffff
                    , bgAlpha: 1
                    , type: 'vbar'
                }
            }
            </script>
        </div>
    </dd>
</dl>

<dl class="defDl">
    <dt>背景</dt>
    <dd>
        <div class="js_compFChart"
            chartScriptData="|script"
            chartHeight="400"
            >
            <script type="text/template">
                
                {
                    
                    xAxis: {
                        categories: [ 
                            '网页游戏1\n游戏', '网页游戏2\n游戏', '网页游戏3\n游戏', '网页游戏4\n游戏', '网页游戏5\n游戏'
                            , '网页游戏6\n游戏', '网页游戏7\n游戏', '网页游戏8\n游戏', '网页游戏9\n游戏', '网页游戏9\n游戏'
                        ]
                    }
                    , yAxis: {
                        format: '{0}'
                        , enabled: true
                    }
                    , series:[{
                        name: '最大区分度 - 兴趣'
                        , data: [
                            0.98, 1.99, 1.01, 1.02, 1.05
                            , 1.98, 2.99, 0.001, 3.02, 3.05
                        ]
                    }]
                    , tooltip: {		
                        enabled: false
                        , "headerFormat": "{0}"			
                        , "pointFormat": "{0}"
                        
                    }
                    /*isPercent: true,*/
                    , displayAllLabel: true
                    , legend: {
                        enabled: false
                    }
                    , dataLabels: {
                        enabled: true
                        , format: '{0}'
                    }
                    , vline: {
                        enabled: false
                    }
                    , hline: {
                        enabled: false
                    }
                    , colors: [
                        0x03ACEF
                        , 0x5DC979
                        , 0x09c100
                        , 0x0c76c4 				
                        , 0xff0619
                        
                        , 0xFFBF00			
                        , 0xff7100	
                        , 0xff06b3
                        
                        , 0x41e2e6			
                        , 0xc3e2a4	
                        , 0xffb2bc
                        
                        , 0xdbb8fd
                    ]    				
                    , chart: {
                        bgColor: 0xffffff
                        , bgAlpha: 1
                        , type: 'vbar' 
                        /*, graphicHeight: 220*/
                    }
                    , itemBg: {
                        enabled: true		
                        , style: {
                            borderColor: 0xB4B4B4
                            , borderWidth: 0
                            , bgColor: 0xF0F0F0
                        }										
                    }
                }

            </script>
        </div>
    </dd>
</dl>
