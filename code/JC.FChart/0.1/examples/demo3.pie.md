# 饼图

<script>
    requirejs( [ '{{module}}' ], function( {{name}} ){
        JC.FCHART_PATH = '{{path}}';
    });
</script>

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
                        type: 'pie' 
                    }, 
                    title: {
                        text:'浏览器使用份额'
                    },
                    subtitle: {
                        text: 'for PC'
                    }, 
                    series:[{
                        name: 'Browser share',
                        data: [
                            ['Firefox',   45.0],
                            ['IE',       26.8],
                            {
                                name: 'Chrome',
                                y: 12.8,
                                selected: true
                            },
                            ['Safari',    8.5],
                            ['Opera',     6.2],
                            ['Others',   50]
                        ]
                    }]
                    , legend: {
                        enabled: true
                    }
                }
            </script>
        </div>
    </dd>
</dl>

<dl class="defDl">
    <dt>label 重叠</dt>
    <dd>
        <div class="js_compFChart"
            chartDataVar="PieData"
            chartWidth="600"
            chartHeight="500"
            >
            <script>
                window.PieData = {
                    chart: {
                        type: 'pie'
                    },
                    title: {
                        text:'浏览器使用份额'
                    },
                    subtitle: {
                        text: 'for PC'
                    }, 
                    legend: {
                        enabled: false
                    },
                    series:[{
                        name: 'Browser share',
                        data: [
                            ['Opera',     6.2]
                            , ['Others 13',   0.7]
                            , ['Others 14',   0.7]
                            , ['Others 15',   0.7]
                            , ['Others 16',   0.7]
                            , ['Others 17',   0.7]
                            , ['Others 18',   0.7]
                            , ['Firefox',   5.0]
                            , ['Others 19',   0.7]
                            , ['Others 20',   0.7]
                            , ['Others 21',   0.7]
                            , ['Others 22',   0.7]
                            , ['Others 23',   0.7]
                            , ['Others 24',   0.7]
                            , ['IE',       5.8]
                            , ['Others 1',   0.7]
                            , ['Others 2',   0.7]
                            , ['Others 3',   0.7]
                            , ['Others 4',   0.7]
                            , ['Others 5',   0.7]
                            , ['Others 6',   0.7]
                            , {
                                name: 'Chrome',
                                y: 8.8,
                                selected: true
                            }
                            , ['Safari',    8.5]
                            , ['Others 7',   0.7]
                            , ['Others 8',   0.7]
                            , ['Others 9',   0.7]
                            , ['Others 10',   0.7]
                            , ['Others 11',   0.7]
                            , ['Others 12',   0.7]
                        ]
                    }]
                };

            </script>      
        </div>
    </dd>
</dl>

<dl>
    <dt>偏移90度</dt>
    <dd>
        <div class="js_compFChart"
            chartScriptData="/script"
            chartWidth="600"
            chartHeight="500"
            >
            <script type="text/template">
                {
                    chart: {
                        type: 'pie' 
                    }, 
                    title: {
                        text:'浏览器使用份额'
                    },
                    subtitle: {
                        text: 'for PC'
                    }, 
                    series:[{
                        name: 'Browser share',
                        data: [
                            ['Firefox',   45.0],
                            ['IE',       26.8],
                            {
                                name: 'Chrome',
                                y: 12.8,
                                selected: true
                            },
                            ['Safari',    8.5],
                            ['Opera',     6.2],
                            ['Others',   0.7]
                        ]
                    }]
                    ,offsetAngle: 0
                    , plotOptions: {
                        pie: {
                            dataLabels: {
                                enabled: false
                            }
                        }
                    }
                    , legend: {
                        enabled: false
                    }
                }
            </script>
        </div>
    </dd>
</dl>
