# 块状柱状图

<script>
    requirejs( [ '{{module}}' ], function( {{name}} ){
        JC.FCHART_PATH = '{{path}}';
    });
</script>

<dl class="defDl">
    <dt></dt>
    <dd>
        <div class="js_compFChart"
            chartScriptData="|script"
            chartWidth="600"
            chartHeight="300"
            >
            <script type="text/template">
                {
                    chart: {
                        type: 'zbar' 
                    }, 
                    title: {
                        text:'Chart Title'
                    },
                    subtitle: {
                        text: 'sub title'
                    }, 
                    xAxis: {
                        categories: [ "iphone", "samsung", "huawei", "mi", "meizu" ] 
                    }, 
                    yAxis: {
                        title: {
                            text: '(Vertical Title - 中文)'
                        }
                        , format: '{0}'
                    },
                    tooltip: {                  
                        "pointFormat": "{0}",
                        "headerFormat": "{0}"
                    },
                    series:[{
                        name: 'Phone'
                        , data: [ 27000, 23600, 16200, 14100, 8400 ]
                        , format: '{0}台 占{1}%'
                    }, {
                        name: 'Computer',
                        data: [19170, 32060, 13600, 7000, 14800 ]
                        , format: '{0}台 约占{1}%'
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
                        , duration: .75
                    }
                }
            </script>
        </div>
    </dd>
</dl>

<dl class="defDl">
    <dt></dt>
    <dd>
        <div class="js_compFChart"
            chartScriptData="|script"
            chartHeight="300"
            >
            <script type="text/template">
            {
                chart: {
                    type: 'zbar' 
                    , bgColor: 0xffffff
                }, 
                subtitle: {
                }, 
                xAxis: {
                    categories: [ "升级", "降级", "不变" ]
                }, 
                yAxis: {
                    format: '{0}'
                },
                tooltip: {                  
                    "pointFormat": "{0}",
                    "headerFormat": "{0}"
                },
                series:[{
                    name: '销售一部'
                    , data: [ 9, 20, 30 ]
                    , format: '{0}'
                }
                    , {
                        name: '销售二部'
                        , data: [ 10, 10, 10 ]
                        , format: '{0}'
                    }
                    , {
                        name: '销售三部'
                        , data: [ 5, 5, 30 ]
                        , format: '{0}'
                    }
                    , {
                        name: '销售四部'
                        , data: [ 8, 12, 32 ]
                        , format: '{0}'
                    }
                    , {
                        name: '销售五部'
                        , data: [ 7, 9, 12]
                        , format: '{0}'
                    }
                ],
                credits: {
                    enabled: false
                    , text: 'fchart.openjavascript.org'
                    , href: 'http://fchart.openjavascript.org/'
                },
                displayAllLabel: true,
                legend: {
                    enabled: true
                    , interval: 20
                    , direction: 'TOP_CENTER'
                },
                animation: {
                    enabled: true
                    , duration: .75
                },
                vline: {
                    enabled: false
                },
                plotOptions: {
                    line: {
                        dashStyle: 'ShortDash'
                    }
                },
                dataLabels: {
                    enabled: true
                }
            }
            </script>
        </div>
    </dd>
</dl>

<dl class="defDl">
    <dt></dt>
    <dd>
        <div class="js_compFChart"
            chartScriptData="|script"
            chartHeight="300"
            >
            <script type="text/template">
            {
                chart: {
                    type: 'zbar' 
                    , bgColor: 0xffffff
                }, 
                subtitle: {
                }, 
                xAxis: {
                    categories: [ "A级客户", "B级客户", "C级客户", "D级客户" ]
                }, 
                yAxis: {
                    format: '{0}'
                },
                tooltip: {                  
                    "pointFormat": "{0}",
                    "headerFormat": "{0}"
                },
                series:[{
                    name: '销售一部'
                    , data: [ 20, 30, 40, 50 ]
                    , format: '{0}'
                }
                    , {
                        name: '销售二部'
                        , data: [ 10, 20, 35, 50 ]
                        , format: '{0}'
                    }
                    , {
                        name: '销售三部'
                        , data: [ 5, 30, 20, 10 ]
                        , format: '{0}'
                    }
                    , {
                        name: '销售四部'
                        , data: [ 12, 32, 13, 23 ]
                        , format: '{0}'
                    }
                    , {
                        name: '销售五部'
                        , data: [ 9, 12, 31, 23]
                        , format: '{0}'
                    }
                ],
                credits: {
                    enabled: false
                    , text: 'fchart.openjavascript.org'
                    , href: 'http://fchart.openjavascript.org/'
                },
                displayAllLabel: true,
                legend: {
                    enabled: true
                },
                animation: {
                    enabled: true
                    , duration: .75
                }
            }
            </script>
        </div>
    </dd>
</dl>
