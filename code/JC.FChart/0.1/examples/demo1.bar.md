# 柱状图

<script>
    requirejs( [ '{{module}}' ], function( {{name}} ){
        JC.FCHART_PATH = '{{path}}';
    });
</script>

<dl class="defDl">
    <dt>动画效果</dt>
    <dd>
        <div class="js_compFChart"
            chartScriptData="|script"
            chartWidth="600"
            chartHeight="400"
            >
            <script type="text/template">
                {
                    chart: {
                        type: 'bar' 
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
    <dt>默认展示</dt>
    <dd>
        <div class="js_compFChart"
            chartScriptData="|script"
            chartHeight="400"
            >
            <script type="text/template">
                {
                    chart: {
                        type: 'bar' 
                    }, 
                    title: {
                        text:'Chart Title'
                    },
                    subtitle: {
                        text: 'sub title'
                    }, 
                    xAxis: {
                        categories: [ "2014-01-24","2014-01-25","2014-01-26","2014-01-27"
                            ,"2014-01-28","2014-01-29","2014-01-30","2014-01-31","2014-02-01"
                            ,"2014-02-02","2014-02-03","2014-02-04","2014-02-05","2014-02-06"
                            ,"2014-02-07","2014-02-08","2014-02-09","2014-02-10","2014-02-11"
                            ,"2014-02-12","2014-02-13","2014-02-14","2014-02-15","2014-02-16"
                            ,"2014-02-17","2014-02-18","2014-02-19","2014-02-20","2014-02-21"
                            ,"2014-02-22","2014-02-23","2014-02-24" ]
                        , wordwrap: false
                    }, 
                    yAxis: {
                    },
                    series:[{
                        name: '公司1',
                        data: [0.018773,0.021724,0.022130,0.021296,0.022255,0.022128,0.020949
                            ,0.023862,0.026974,0.028055,0.024992,0.024721,0.025100,0.021803
                            ,0.019327,0.020149,0.020714,0.017774,0.017844,0.018313,0.018225
                            ,0.017863,0.019568,0.019308,0.017606,0.017649,0.016645,0.016310
                            ,0.014451,0.017606,0.018455,0]
                    }, {
                        name: '公司2',
                        data: [0.018069,0.018495,0.018264,0.017527,0.016857,0.017398,0.016539
                            ,0.017144,0.018039,0.018798,0.018521,0.019580,0.019071,0.019078
                            ,0.017415,0.018997,0.018585,0.018417,0.018958,0.019772,0.018243
                            ,0.018742,0.020183,0.022000,0.020125,0.020549,0.019577,0.017468
                            ,0.015819,0.017709,0.018943,0]
                    }, {
                        name: '公司3',
                        data: [0.017261,0.018625,0.019226,0.018777,0.019406,0.019887,0.022632
                            ,0.020445,0.019140,0.020957,0.021089,0.020967,0.021576,0.021357
                            ,0.020665,0.019415,0.018805,0.016842,0.016483,0.016688,0.016102
                            ,0.015717,0.016570,0.017390,0.016249,0.016616,0.016699,0.016514
                            ,0.016597,0.016476,0.016742,0]
                    }
                    ],
                    credits: {
                        enabled: true,
                        text: 'fchart.openjavascript.org',
                        href: 'http://fchart.openjavascript.org/'
                    }
                    , displayAllLabel: false
                }

            </script>
        </div>
    </dd>
</dl>

<dl class="defDl">
    <dt>hover 效果</dt>
    <dd>
        <div class="js_compFChart"
            chartScriptData="|script"
            chartHeight="400"
            >
            <script type="text/template">
                {
                    chart: {
                        type: 'bar' 
                        , bgColor: 0xffffff
                        , bgAlpha: 1
                    }, 
                    xAxis: {
                        categories: [ '网页游戏', '游戏平台', '桌面游戏', '手机游戏', '个体经营', '小游戏', '网页游戏', '游戏平台', '桌面游戏', '手机游戏' ]
                    }
                    , yAxis: {
                        enabled: false
                    }
                    , series:[{
                        name: '全体覆盖率'
                        , data: [26, 36, 46, 56, 77, 76, 86, 72, 62, 52]
                    }, {
                        name: '样式覆盖率',
                        data: [81, 71, 61, 51, 41, 31, 21, 11, 29, 39]
                    }]
                    , tooltip: {		
                        "headerFormat": "{0}%"			
                        , "pointFormat": "{0}%"
                        , enabled: true
                        , "serial": [
                            {
                                "name": "总体"
                                , "data": [ 
                                    1000, 2000, 3000, 4000, 5000, 6000
                                    , 1000, 2000, 3000, 4000, 5000
                                ]
                            }
                        ]
                        , "afterSerial": [
                            {
                                "name": "区分度"
                                , "data": [ 
                                    1.04, 1.05, 1.06, 1.07, 1.08, 1.09
                                    , 2.01, 2.02, 2.03, 2.04, 2.05
                                ]
                            }
                        ]
                    }
                    /*isPercent: true,*/
                    , displayAllLabel: true
                    , legend: {
                        enabled: false
                    }
                    , dataLabels: {
                        enabled: true
                        , format: '{0}%'
                    }
                    , vline: {
                        enabled: false
                    }
                    , hline: {
                        enabled: false
                    }
                    , colors: [
                        0x00ABEF
                        , 0x9DADB3
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
                    , hoverBg: {
                        enabled: true		
                        , style: {
                            borderColor: 0xB4B4B4
                            , borderWidth: 2
                            , bgColor: 0xF0F0F0
                        }										
                    }
                }
            </script>
        </div>
    </dd>
</dl>

<dl class="defDl">
    <dt>背景效果</dt>
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
                        , enabled: false
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
                        , type: 'bar' 
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


<dl class="defDl">
    <dt>tips 样式2</dt>
    <dd>
        <div class="js_compFChart"
            chartScriptData="|script"
            chartHeight="400"
            >
            <script type="text/template">
                {
                    chart: {
                        type: "bar"
                        , bgColor: 0xffffff
                        , bgAlpha: 1
                    }
                    , xAxis: {
                        categories: [ '网页游戏', '游戏平台', '桌面游戏', '手机游戏', '个体经营', '小游戏', '网页游戏', '游戏平台', '桌面游戏', '手机游戏' ]
                    }
                    , yAxis: {					
                        enabled: false	
                    }
                    , series:[{
                        name: '全体覆盖率'
                        , data: [26, 36, 46, 56, 77, 76, 86, 72, 62, 52]
                    }, {
                        name: '样式覆盖率',
                        data: [81, 71, 61, 51, 41, 31, 21, 11, 29, 39]
                    }]
                    , tooltip: {		
                        "headerFormat": "{0}"			
                        , "pointFormat": "{0}%"
                        //, enabled: false
                        , afterSerial: [
                            {
                                name: '区分度',
                                data: [81, 71, 61, 51, 41, 31, 21, 11, 29, 39]
                            }
                        ]
                        
                        , headerYSpace: 6
                        , itemYSpace: 6
                        , valueLabelXSpace: 0
                        
                        , headerStyle: {
                            font: "Microsoft YaHei"
                            , size: 14
                            , color: 0x777777
                        }
                        , labelStyle: {
                            font: "Microsoft YaHei"
                            , size: 12
                            , color: 0xaaaaaa
                        }
                        , valueStyle: {
                            font: "Microsoft YaHei"
                            , size: 12
                            , color: 0x5dc068
                        }
                        
                        , headerIcon: {
                            enabled: true
                            , style: {
                                color: 0x5DC068
                            }
                        }
                        
                    }
                    , displayAllLabel: true
                    , legend: {
                        enabled: false
                    }
                    , dataLabels: {
                        enabled: true
                        , format: '{0}%'
                    }
                    , vline: {
                        enabled: false
                    }
                    , hline: {
                        enabled: false
                    }
                    , colors: [
                        0x00ABEF
                        , 0x9DADB3
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
                    , hoverBg: {
                        enabled: true		
                        , style: {
                            borderColor: 0xB4B4B4
                            , borderWidth: 2
                            , bgColor: 0xF0F0F0
                        }										
                    }
                }
            </script>
        </div>
    </dd>

</dl>

<dl class="defDl">
    <dt>简洁样式</dt>
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
                    , type: 'bar'
                }
            }
            </script>
        </div>
    </dd>
</dl>
