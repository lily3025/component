## 使用说明

### 简介

- JC.Calendar 是一个日期选择组件
- 全局访问请使用 JC.Calendar
- DOM 加载完毕后 , JC.Calendar会自动初始化页面可识别的 node, input[type=text][datatype=date], input[type=text][multidate]标签 
- 动态添加的内容, 如果有日历组件需求的话, 需要手动使用 JC.Calendar.init( selector ) 
- selector 可以是 新加载的容器, 也可以是新加载的所有input

### 组件依赖
    JC.common

### 外链形式

```html
<link href='{{path}}/res/default/style.css' rel='stylesheet' />

<script src="/module/JC.common/0.2/common.js"></script>
<script src="{{src}}"></script>
<script>
    //JC.Calendar.pickDate( 'input.whichItem' );
</script>
```

### 模块加载形式
```html
<link href='{{path}}/res/default/style.css' rel='stylesheet' />
<script>
    requirejs( [ '{{module}}' ], function( {{name}} ){
        //JC.Calendar.pickDate( 'input.whichItem' );
    });
</script>
```

###支持的日期类型, HTML属性:
    - 天: datatype="date"
    - 周: datetype="week"
    - 月: datatype="month"
    - 季: datatype="season"
    - 月天: datatype="monthday"

    - 与 datatype 功能相同的属性 multidate, multidate 不会触发 JC.Valid 的验证规则

###可用的html attribute, (input|button):(datatype|multidate)=(date|week|month|season)
    defaultdate = ISO Date
        默认显示日期, 如果 value 为空, 则尝试读取 defaultdate 属性

    datatype = string
        声明日历控件的类型:
            date: 日期日历
            week: 周日历
            month: 月日历
            season: 季日历
            monthday: 多选日期日历

    multidate = string
        与 datatype 一样, 这个是扩展属性, 避免表单验证带来的逻辑冲突

    calendarshow = function
        显示日历时的回调

    calendarhide = function
        隐藏日历时的回调

    calendarlayoutchange = function
        用户点击日历控件操作按钮后, 外观产生变化时触发的回调

    calendarupdate = function
        赋值后触发的回调
        参数:
            _startDate: 开始日期
            _endDate: 结束日期

    calendarclear = function
        清空日期触发的回调

    minvalue = ISO Date
        日期的最小时间, YYYY-MM-DD

    maxvalue = ISO Date
        日期的最大时间, YYYY-MM-DD

    currentcanselect = bool, default = true
        当前日期是否能选择

    multiselect = bool (目前支持 month: default=false, monthday: default = treu)
        是否为多选日历

    calendarupdatemultiselect = function
        多选日历赋值后触发的回调
        参数: _data:
            [{"start": Date,"end": Date}[, {"start": Date,"end": Date}... ] ]


## 使用实例
```html
    请选择日期（选一天）：<input size="32" type="text" datatype="date" />
    请选择日期（选一周）：<input size="32" type="text" multidate="week" />
    请选择日期（选一月）：<input size="32" type="text" multidate="month" />
    请选择日期（选一季）：<input size="32" type="text" multidate="season" />

    <link href='{{path}}/res/default/style.css' rel='stylesheet' />
    <script>
        require(['{{module}}'], function( Calendar ){
            //JC.Calendar.pickDate( 'input.whichItem' );
        });
    </script>
```

## 文档参考

1. [JC.Calendar 官方文档](http://360.75team.com/~qiushaowei/jc2/docs_api/classes/JC.Calendar.html)

