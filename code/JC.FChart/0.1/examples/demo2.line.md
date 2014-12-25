# 曲线图

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
            chartHeight="300"
            >
            <script type="text/template">
                {
                    chart: {
                        type: 'line' 
                    }
                    , title: {
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
                    , floatLen: 6
                    , displayAllLabel: false
                    , animation: {
                        enabled: true
                        , duration: 1
                    }

                }
            </script>
        </div>
    </dd>
</dl>


<dl class="defDl">
    <dt>动画效果 - 折线</dt>
    <dd>
        <div class="js_compFChart"
            chartScriptData="|script"
            chartWidth="600"
            chartHeight="300"
            >
            <script type="text/template">
                {
                    chart: {
                        type: 'line' 
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
                    plotOptions: {
                        line: {
                            dashStyle: 'ShortDash'
                        }
                    },
                    animation: {
                        enabled: true
                        , duration: 1
                    }
                }
            </script>
        </div>
    </dd>
</dl>

<dl class="defDl">
    <dt>填充背景</dt>
    <dd>
        <div class="js_compFChart"
            chartScriptData="|script"
            chartWidth="600"
            chartHeight="300"
            >
            <script type="text/template">
                {
                    chart: {
                        type: 'line' 
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
                    plotOptions: {
                        area: {
                            fillColor: {}
                        }
                    },
                    animation: {
                        "enabled": true
                    }
                }
            </script>
        </div>
    </dd>   
</dl>

<dl class="defDl">
    <dt>填充背景 - 渐变</dt>
    <dd>
        <div class="js_compFChart"
            chartScriptData="/script"
            >
            <script type="text/template">
                {
                    chart: {
                        type: 'line' 
                    }
                    , title: {
                    },
                    subtitle: {
                    }, 
                    xAxis: {
                        categories: [ '111111', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '122222' ]
                    }, 
                    yAxis: {
                        title: {
                        }
                    },
                    series:[{
                        name: 'Temperature',
                        data: [10, 0, 3, 10, 20, 27, 28, 32, 30, 25, 15, 5]
                    }, {
                        name: 'Rainfall',
                        data: [20, 21, 20, 100, 200, 210, 220, 100, 20, 10, 20, 10]
                        , fillColor: { linearGradient: true }
                    }],
                    credits: {
                        enabled: false,
                        text: 'fchart.openjavascript.org',
                        href: 'http://fchart.openjavascript.org/'
                    },
                    animation: {
                        "enabled": true
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
            chartHeight="300"
            >
            <script type="text/template">

            {
                xAxis: {
                    categories: [ '学生', '公司职员', '公司管理者', '公务员', '事业单位', '个体经营', '自由职业', '产业\n服务员\n工人', '农业\n劳动者', '其他' ]
                    , wordwrap: true
                }, 
                yAxis: {
                    enabled: true
                },
                series:[{
                    name: '职业'
                    , data: [ 11, 14, 43, 12, 21, 8, 4, 6, 8, 5 ]
                }],
                //isPercent: true,
                displayAllLabel: true,
                legend: {
                    enabled: false
                }
                , dataLabels: {
                    enabled: true,
                    format: '{0}%'
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
                    , type: 'line'
                }
            }
            </script>
        </div>
    </dd>
</dl>

<dl>
    <dt>长折点</dt>
    <dd>
        <div class="js_compFChart"
            chartScriptData="/script"
            chartHeight="300"
            >
            <script type="text/template">
                {
                    chart: {
                        type: 'line' 
                    }
                    , title: {
                        text:'Chart Title'
                    },
                    subtitle: {
                    }, 
                    xAxis: {
                        categories: [ '111111', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '122222' ]
                    }, 
                    yAxis: {
                        title: {
                            text: '(Vertical Title - 中文)'
                        }
                    },
                    series:[{
                        name: 'Temperature',
                        data: [10, 0, 3, 10, 20, 27, 28, 32, 30, 25, 15, 5]
                    }, {
                        name: 'Rainfall',
                        data: [20, 21, 20, 100, 200, 210, 220, 100, 20, 10, 20, 10]
                    }],
                    credits: {
                        enabled: true,
                        text: 'fchart.openjavascript.org',
                        href: 'http://fchart.openjavascript.org/'
                    },
                    floatLen: 0,
                    plotOptions: {
                        line: {
                            dashStyle: 'LongDash'
                        }
                    }

                }
            </script>
        </div>
    </dd>

</dl>

<dl>
    <dt>复合折点</dt>
    <dd>
        <div class="js_compFChart"
            chartScriptData="/script"
            chartHeight="300"
            >
            <script type="text/template">
                {
                    chart: {
                        type: 'line' 
                    }
                    , title: {
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
                        , dashStyle: 'Dot'
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
                        , dashStyle: 'Dash'
                    }
                    ],
                    credits: {
                        enabled: true,
                        text: 'fchart.openjavascript.org',
                        href: 'http://fchart.openjavascript.org/'
                    }
                    , floatLen: 6
                    , displayAllLabel: false
                }
            </script>
        </div>
    </dd>
</dl>

<dl>
    <dt>toggle bg</dt>
    <dd>
        <div class="js_compFChart"
            chartScriptData="/script"
            chartHeight="300"
            >
            <script type="text/template">
            {
                "yAxis":
                {
                    "enabled": true
                }, 
                "tooltip":
                {
                    "pointFormat": "{0}", 
                    "headerFormat": "{0}", 
                    "enabled": true
                }, 
                "displayAllLabel": false, 
                "vline":
                {
                }, 
                "xAxis":
                {
                    "categories":
                    [
                        "20140916", 
                        "20140915", 
                        "20140914", 
                        "20140913",
                        "test1",
                        "test2",
                        "test3",
                        "test4"
                    ], 
                    "wordwrap": false, 
                    "tipsHeader":
                    [
                        "20140916", 
                        "20140915", 
                        "20140914", 
                        "20140913",
                        "test1",
                        "test2",
                        "test3",
                        "test4"
                    ]
                }, 
                "series":
                [
                    {
                        "name": "pv", 
                        "data":
                        [
                            1722, 
                            1694, 
                            2049, 
                            2138,
                            1000,
                            2000,
                            3000,
                            4000,
                        ]
                    }, 
                    {
                        "name": "uv", 
                        "data":
                        [
                            5, 
                            5, 
                            5, 
                            5,
                            1000,
                            2000,
                            3000,
                            0
                        ]
                    }

                ], 
                "hline":
                {
                }, 
                "toggleBg":
                {
                    "enabled": true
                }, 
                "legend":
                {
                    "enabled": false
                }, 
                "chart":
                {
                    "bgAlpha": 1, 
                    "bgColor": 16777215,
                    "type": "line"
                } 
            }
            </script>
        </div>
    </dd>
</dl>

<dl class="defDl">
    <dt>disable line point</dt>
    <dd>
        <div class="js_compFChart"
            chartHeight="300"
            chartScriptData="|script"
            >
            <script type="text/template">
            {
                chart: {
                    type: 'line' 
                    , bgColor: 0xffffff
                    , bgAlpha: 1
                }
                , title: {
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
                , floatLen: 6
                , displayAllLabel: false
                , vline: {
                    enabled: false
                }
                , hline: {
                    enabled: false
                }
                , point: {
                    enabled: false
                }
                , animation: {
                    enabled: true
                }
            }

            </script>
        </div>
    </dd>
</dl>

<dl class="defDl">
    <dt>group items</dt>
    <dd>
        <div class="js_compFChart"
            chartScriptData="|script"
            chartHeight="300"
            >
            <script type="text/template">
            {
                chart: {
                    type: 'line' 
                    , bgColor: 0xffffff
                    , bgAlpha: 1
                }
                , title: {
                    text:'Chart Title'
                },
                subtitle: {
                    text: 'subtitle' 
                },
                xAxis: {
                    categories: [ 
                        "01","02","03","04"
                        ,"01","02","03","04"
                        ,"01","02","03","04"
                    ]
                }, 
                yAxis: {
                },
                series:[{
                    name: '公司1',
                    point: {  },
                    data: [
                        0.018773,0.021724,0.022130,0.021296
                        ,0.022255,0.022128,0.020949,0.023862
                        ,0.026974,0.028055,0.024992,0.024721
                    ],
                    tipsData: [
                        "1.8773%","2.1724%","2.2130%","2.1296%"
                        ,"2.2255%","2.2128%","2.0949%","2.3862%"
                        ,"2.6974%","2.8055%","2.4992%","2.4721%"
                    ]
                }, {
                    name: '公司2',
                    dashStyle: 'ShortDash',
                    data: [
                        0.018069,0.018495,0.018264,0.017527
                        ,0.016857,0.017398,0.016539,0.017144
                        ,0.018039,0.018798,0.018521,0.019580
                    ],
                    tipsData: [
                        "1.8069%","1.8495%","1.8264%","1.7527%"
                        ,"1.6857%","1.7398%","1.6539%","1.7144%"
                        ,"1.8039%","1.8798%","1.8521%","1.9580%"
                    ]
                }
                ],
                tooltip: {
                    header: [
                        "2014Q1","2014Q2","2014Q3","2014Q4"
                        ,"2015Q1","2015Q2","2015Q3","2015Q4"
                        ,"2016Q1","2016Q2","2016Q3","2016Q4"
                    ]
                },
                group: {
                    enabled: true,
                    data: [
                        "2014","2014","2014","2014"
                        ,"2015","2015","2015","2015"
                        ,"2016","2016","2016","2016"
                    ],
                    background: {
                        colors: [
                            0xf2f2f2
                        ]
                        , lastColor: 0xdbeccc
                    },
                    label: {
                        style: {
                            
                        }
                    }
                },
                credits: {
                    enabled: true,
                    text: 'fchart.openjavascript.org',
                    href: 'http://fchart.openjavascript.org/'
                }
                , displayAllLabel: true
                , vline: {
                }
                , hline: {
                }
                , point: {
                }
                , animation: {
                    enabled: true
                }
            }
            </script>
        </div>
    </dd>
</dl>

<dl class="defDl">
    <dt>回调示例 - Click回调数据显示在控制台中，请在F12 Console中查看</dt>
    <dd>
        <div class="js_compFChart"
            chartScriptData="|script"
            chartHeight="300"
            >
            <script type="text/template">
                {
                    chart: {
                        type: 'line' 
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
                    plotOptions: {
                        line: {
                            dashStyle: 'ShortDash'
                        }
                    },
                    animation: {
                        enabled: true
                        , duration: 1
                    },
                    callback: {
                        itemClickCallback: 'itemClickCallback'
                        , groupClickCallback: 'groupClickCallback'
                    }
                }
            </script>
            <script type="text/javascript">
                function itemClickCallback( _data ) {
                    console.log( 'do itemClickCallback : ' );
                    console.log( _data );
                }

                function groupClickCallback( _data ) {
                    console.log( 'do groupClickCallback : ' );
                    console.log( _data );
                }
            </script>
        </div>
    </dd>
</dl>

<dl class="defDl">
    <dt>autoRate: deep, rateUp</dt>
    <dd>
        <div class="js_compFChart"
            chartScriptData="|script"
            chartHeight="300"
            >
            <script type="text/template">
            {
                "chart": {
                    "type": "line"
                },
                "yAxis": {
                    "autoRate": {
                        "enabled": true
                        , "deep": 1
                        , "rateUp": 2
                    }
                },
                "title": {
                    "text": "日趋势"
                },
                "xAxis": {
                    "categories": [
                        "2014-11-17",
                        "2014-11-18",
                        "2014-11-19",
                        "2014-11-20",
                        "2014-11-21",
                        "2014-11-22",
                        "2014-11-23",
                        "2014-11-24",
                        "2014-11-25",
                        "2014-11-26",
                        "2014-11-27",
                        "2014-11-28",
                        "2014-11-29",
                        "2014-11-30",
                        "2014-12-01",
                        "2014-12-02",
                        "2014-12-03",
                        "2014-12-04",
                        "2014-12-05",
                        "2014-12-06",
                        "2014-12-07",
                        "2014-12-08",
                        "2014-12-09",
                        "2014-12-10",
                        "2014-12-11",
                        "2014-12-12",
                        "2014-12-13",
                        "2014-12-14",
                        "2014-12-15",
                        "2014-12-16"
                    ]
                },
                "series": [
                    {
                        "name": "北汽",
                        "data": [
                            81018,
                            80207,
                            81411,
                            85313,
                            84018,
                            81892,
                            82004,
                            87625,
                            85015,
                            83327,
                            86120,
                            74182,
                            71184,
                            72038,
                            72711,
                            74956,
                            81987,
                            75229,
                            86195,
                            76900,
                            78624,
                            84466,
                            84498,
                            83873,
                            83656,
                            85722,
                            77151,
                            79772,
                            107068,
                            90566
                        ],
                        "style": {
                            "stroke": "#ff7100"
                        },
                        "pointStyle": {}
                    },
                    {
                        "name": "MG名爵",
                        "data": [
                            84039,
                            82828,
                            81567,
                            85531,
                            83544,
                            75332,
                            74107,
                            82759,
                            83733,
                            79110,
                            80264,
                            68606,
                            61461,
                            61599,
                            70562,
                            75320,
                            79559,
                            78800,
                            84268,
                            72327,
                            73675,
                            83763,
                            81138,
                            79073,
                            79821,
                            76209,
                            69474,
                            70292,
                            82381,
                            79333
                        ],
                        "style": {
                            "stroke": "#ff7100"
                        },
                        "pointStyle": {}
                    }
                ],
                "displayAllLabel": false,
                "legend": {
                    "enabled": true
                    , "direction": "TOP_RIGHT"
                },
                "animation": {
                    "enabled": true
                },
                "plotOptions": {
                    "area": {
                        "fillColor": {}
                    }
                },
                "colors": [
                    "0xbb9b3e",
                    "0x4673c0"
                ],
                "callback": {
                    "initedCallback": "initedCallback"
                }
            }
            </script>
            <script type="text/javascript">
                function itemClickCallback( _data ) {
                    console.log( 'do itemClickCallback : ' );
                    console.log( _data );
                }

                function groupClickCallback( _data ) {
                    console.log( 'do groupClickCallback : ' );
                    console.log( _data );
                }
            </script>
        </div>
    </dd>
</dl>
