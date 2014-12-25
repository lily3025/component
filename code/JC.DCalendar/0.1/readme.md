## 使用说明

### 简介
    DCalendar
    双日历日期选择组件，默认显示两个月的日期面板，
    通过参数的设置可以显示2到12个月的月份日期面板

### 组件依赖
    JC.BaseMVC

### 外链形式

```html
<script src="{{basePath}}/JC.BaseMVC/0.1/BaseMVC.js"></script>
<script src="{{src}}"></script>
```

### 模块加载形式
```html
<script>
    requirejs( [ '{{module}}' ], function( {{name}} ){
        //...
    }); 
</script>
```

### 可用的 HTML attribute

    datatype = string 必填项
        声明日历控件的类型： 
        ddate: 日期日历 
        drange: 日期范围日历( 成对出现 )

    minvalue = ISO Date
        日期的最小时间, YYYY-MM-DD

    maxvalue = ISO Date
        日期的最大时间, YYYY-MM-DD

    monthnum = int, default = 2
        要显示的月份数量, 取值范围2 - 12

    showtype = string, default = float
        声明月份日历面板之间的显示方式:
        float: 水平显示
        block: 垂直显示

    currentcanselect = bool, default = true
        当前日期是否能选择

    calendarshow = function
        显示日历显示后的回调
        function calendarShow( selector ) {
           var ins = this;
           JC.log( "calendarshow", new Date().getTime(), selector.val() );
        }

    calendarhide = function
        隐藏日历后的回调
        function calendarhide( selector ) {
           JC.log( "calendarhide", $(selector).val(), new Date().getTime() );
        }

    calendarclear = function
        清空选中日期后的回调
        function calendarclear( selector ) {
           JC.log( "calendarclear", $(selector).val(), new Date().getTime() );
        }

    updatedate = function
        选中日期后回调
        function updatedate( selector ) {
           JC.log( "updatedate", $(selector).val(), new Date().getTime() );
        }

    updatemonth = function
        选中月份后回调
        function updatemonth( selector ) {
           JC.log( "updatedatemonth", $(selector).val(), new Date().getTime() );
        }

    updateyear = function
        选中年份后回调
        function updateyear( selector ) {
           JC.log( "updatedateyear", $(selector).val(), new Date().getTime() );
        }

    beforeupdateyear = function
        更新年份前的回调，即年份日历面板出来时
        function beforeupdateyear( selector ) {
           JC.log( "beforeupdateyear", $(selector).val(), new Date().getTime() );
        }

    beforeupdatemonth = function
        更新月份前的回调，即月份日历面板出来时
        function beforeupdateymonth( selector ) {
           JC.log( "beforeupdateymonth", $(selector).val(), new Date().getTime() );
        }

    beforeupdatemont = function
        更新月份前的回调，即月份日历面板出来时
        function beforeupdateymonth( selector ) {
           JC.log( "beforeupdateymonth", $(selector).val(), new Date().getTime() );
        }

    updateprevpageyear = function
        点击上一页年份时的回调
        function updatprevtpageyear( selector ) {
           JC.log( "updateprevpageyear", $(selector).val(), new Date().getTime() );
        }

    updatenextpageyear = function
        点击下一页年份时的回调
        function updatenextpageyear( selector ) {
           JC.log( "updatenextpageyear", $(selector).val(), new Date().getTime() );
        }

    updateprevyear = function
        点击上一年时的回调，月份日历面板点击上一页
        function updatprevyear( selector ) {
           JC.log( "updateprevyear", $(selector).val(), new Date().getTime() );
        }

    updatenextyear = function
        点击下一年时的回调，月份日历面板点击下一页
        function updatenextyear( selector ) {
           JC.log( "updatenextyear", $(selector).val(), new Date().getTime() );
        }

    updateprevmonth = function
        点击上一月时的回调，日期日历面板点击上一页
        function updatprevmonth( selector ) {
           JC.log( "updateprevmonth", $(selector).val(), new Date().getTime() );
        }

    updatenextmonth = function
        点击下一月时的回调，日期日历面板点击下一页
        function updatenextmonth( selector ) {
           JC.log( "updatenextmonth", $(selector).val(), new Date().getTime() );
        }
    
### Methods

    pickDate ( _selector )
        弹出日期选择框
        Parameters:
            _selector Selector 需要显示日期选择框的标签

    getInstance ( _selector ) DCalendarInstance static
        获取或设置 DCalendar 的实例
        Parameters:
            _selector Selector
        Returns:
            DCalendarInstance

    init ( _selector  _onlyStatus ) 
        初始化可识别的 DCalendar 实例
        Parameters:
            _selector Selector
            _onlyStatus Bool, default = false
        Returns:
            Array of DCalendarInstance:

    on ( _evtName  _cb ) 
        使用 jquery on 绑定事件
        Parameters:
            _evtName String
            _cb Function
        Returns:
            BaseMVCInstance

    selector () 
        获取 显示 BaseMVC 的触发源选择器, 比如 a 标签
        Returns:
            selector

    trigger ( _evtName ) 
        使用 jquery trigger 触发绑定事件
        Parameters:
            _evtName String
        Returns:
            BaseMVCInstance

    update ()
        更新 DCalendar 状态 
        resize scorll时触发


## API文档
1. [JC.DCalendar 官方文档](http://360.75team.com/~qiushaowei/jc2/docs_api/classes/JC.DCalendar.html)

