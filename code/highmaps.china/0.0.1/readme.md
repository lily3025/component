## 简单介绍

Highmaps 是 Highcharts 的新图表类型，专门用于显示地图类型的数据。

### 注意：

Highcharts 只能免费用于非商业产品（Free - Non-commercial），商业用途需要购买对应的许可。

## 使用说明

Highmaps 的详细配置选项可参考 http://www.highcharts.com/maps/demo

下面是一个简单例子，其中 data 中的 code 是不能修改的，name 和 value 都是可以随意修改的，name 是显示给用户看的，value 是数据。

如要修改 code，请连同 highmaps.china.js 中的 code 一并修改即可。

### 例子

```html
<script src="{{path}}/highmaps.js"></script>
<script src="{{src}}"></script>

<style type="text/css">
    #container {
        height: 500px;
        min-width: 310px;
        max-width: 800px;
        margin: 0 auto;
    }
</style>

<div id="container" style="max-width: 1000px"></div>

<script type="text/javascript">
    // 这是例子数据，可以改成自己的真实数据；也可由 AJAX 方式加载。
    var data = [
        {"code": "aomen", "name": "澳门", "value": 53},
        {"code": "xianggang", "name": "香港", "value": 117},
        {"code": "taiwan", "name": "台湾", "value": 15},
        {"code": "guangdong", "name": "广东", "value": 342},
        {"code": "guangxi", "name": "广西", "value": 181},
        {"code": "hainan", "name": "海南", "value": 15},
        {"code": "yunnan", "name": "云南", "value": 202},
        {"code": "fujian", "name": "福建", "value": 15},
        {"code": "jiangxi", "name": "江西", "value": 109},
        {"code": "hunan", "name": "湖南", "value": 597},
        {"code": "guizhou", "name": "贵州", "value": 3},
        {"code": "zhejiang", "name": "浙江", "value": 102},
        {"code": "anhui", "name": "安徽", "value": 110},
        {"code": "shanghai", "name": "上海", "value": 34},
        {"code": "jiangsu", "name": "江苏", "value": 1660},
        {"code": "hubei", "name": "湖北", "value": 1142},
        {"code": "xizang", "name": "西藏", "value": 636},
        {"code": "qinghai", "name": "青海", "value": 47},
        {"code": "gansu", "name": "甘肃", "value": 359},
        {"code": "xinjiang", "name": "新疆", "value": 15},
        {"code": "shanxi_shan", "name": "陕西", "value": 80},
        {"code": "henan", "name": "河南", "value": 1292},
        {"code": "shanxi_jin", "name": "山西", "value": 19},
        {"code": "shandong", "name": "山东", "value": 9},
        {"code": "hebei", "name": "河北", "value": 73},
        {"code": "tianjin", "name": "天津", "value": 4},
        {"code": "beijing", "name": "北京", "value": 23},
        {"code": "ningxia", "name": "宁夏", "value": 76},
        {"code": "neimenggu", "name": "内蒙古", "value": 69},
        {"code": "liaoning", "name": "辽宁", "value": 60},
        {"code": "jilin", "name": "吉林", "value": 326},
        {"code": "heilongjiang", "name": "黑龙江", "value": 80},
        {"code": "chongqing", "name": "重庆", "value": 41},
        {"code": "sichuan", "name": "四川", "value": 4}
    ];


    // 初始化
    $('#container').highcharts('Map', {

        title : {
            text : '访问量(数据纯属编造)'
        },

        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },

        colorAxis: {
            min: 1,
            max: 1000,
            type: 'logarithmic'
        },

        series : [{
            data : data,
            mapData: Highcharts.maps.china,
            joinBy: ['code'],
            name: '访问量',
            states: {
                hover: {
                    color: '#BADA55'
                }
            },
            tooltip: {
                valueSuffix: ' PV'
            }
        }]
    });
</script>
```