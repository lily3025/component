# 常用案例

<link href='{{path}}/res/default/style.css' rel='stylesheet' />
<style> 
        body{
            padding: 0;
            margin: 0;
        }

        input{
            zoom: 1;
            width: 218px;
            height: 14px;
            padding: 7px 32px 7px 4px;
            border: 1px solid #b9bcbe;
            overflow: hidden;
            
            padding: 8px 32px 5px 4px\9;
            border-radius: 3px;
            
            line-height: 1;
            height: 14px;
            overflow: hidden;
            outline: 0;
        }
        
        dd{
            padding-bottom: 20px;
        }
    </style>

<script>
    window.JC = window.JC || { debug: true };

    requirejs( [ '{{module}}' ], function( DCalendar ){
    }); 

    function calendarShow( selector ) {
            var ins = this;
            JC.log( "calendarshow", new Date().getTime(), selector.val() );
        }

        function updatedate( selector ) {
            var selector = $( selector );
            JC.log( "updatedate", selector.val() );
        }

        function calendarhide( selector ) {
            JC.log( "calendarhide", $(selector).val(), new Date().getTime() );
        }

        function updatemonth( selector ) {
            var ins = this;

            JC.log("updatemonth", new Date().getTime() );
        }

        function updateyear( selector ) {
            var ins = this;

            JC.log("updateyear", new Date().getTime() );
        }

        function updateprevmonth( selector ) {
            var ins = this;

            JC.log("updateprevmonth", new Date().getTime() );
        }

        function updatenextmonth( selector ) {
            var ins = this;
            
            JC.log("updatenextmonth", new Date().getTime() );
        }

        function updateprevyear( selector ) {
            var ins = this;

            JC.log("updateprevyear", new Date().getTime() );
        }

        function updatenextyear( selector ) {
            var ins = this;
            
            JC.log("updatenextyear", new Date().getTime() );
        }


        function beforeupdatemonth( selector ) {
            var ins = this;
            
            JC.log("beforeupdatemonth", new Date().getTime() );
        }

        function beforeupdateyear( selector ) {
            var ins = this;
            
            JC.log("beforeupdateyear", new Date().getTime() );
        }

        function updatenextpageyear() {
            var ins = this;
            
            JC.log("updatenextpageyear", new Date().getTime() );
        }

        function updateprevpageyear() {
            var ins = this;
            
            JC.log("updateprevpageyear", new Date().getTime() );
        }


        $('.manualPickDate').click( function () {
            JC.DCalendar.pickDate( this );
        } );

</script>

<dl>
        <dd>
            <input type="text"  datatype="ddate" class="calendar" value="2013-12-25" monthNum="2" />
        </dd>
        <dd>
            <input type="text"  datatype="ddate" class="calendar" value="2014-01-25" currentCanSelect="false" />
            今天不可选
        </dd>
        <dd>
            <input type="text" > not date
        </dd>
        <dd>
            <input type="text" datatype="ddate" 
                minvalue="2013|12|10" 
                maxvalue="2014-01-30" >
            minvalue="2013-12-10" maxvalue="2014-01-30"
        </dd>
        <dd>
            <input type="text" datatype="ddate" 
                minvalue="2013|01|10" 
                maxvalue="2014-12-30" >
            minvalue="2013-01-10" maxvalue="2014-12-30"
        </dd>
        <dd>
            <input type="text" datatype="ddate" 
                minvalue="2013|12|10" 
                 >
            minvalue="2013-12-10"
        </dd>
        <dd>
            <input type="text" datatype="ddate"  
                maxvalue="2014-01-30" >
            maxvalue="2014-01-30"
        </dd>
        <dd>
            <input type="text"  datatype="ddate" class="calendar" 
                value=""
                weekendCanSelect="false"
                calendarshow="calendarShow"
                calendarhide="calendarhide"
                updatedate="updatedate"
                updatemonth="updatemonth"
                updateyear="updateyear"
                updateprevmonth="updateprevmonth"
                updatenextmonth="updatenextmonth"
                updateprevyear="updateprevyear"
                updatenextyear="updatenextyear"
                beforeupdatemonth="beforeupdatemonth"
                beforeupdateyear="beforeupdateyear"
                updateprevpageyear="updateprevpageyear"
                updatenextpageyear="updatenextpageyear"
                 /> 
                manual 各种回调 
        </dd>
        <dd>
            <input type="text" name="date6" class="manualPickDate" value="20110201" />
            manual JC.DCalendar.pickDate
        </dd>
        <dd>
            <input type="text" name="date7" class="manualPickDate" />
            manual JC.DCalendar.pickDate
        </dd>
        <dd>
            <button datatype="ddate" >button 日期</button>
        </dd>
        <dd>
            <button datatype="ddate" showtype="block" >button 日期</button>
            showtype="block"
        </dd>
        <dd>
            <input type="text"  datatype="ddate" class="calendar" monthnum="3" value="2014-01-25" /> 三个月
        </dd>
        <dd>
            <input type="text"  datatype="ddate" class="calendar" monthnum="4" value="2013-12-25" /> 四个月
        </dd>
        <dd>
            <input type="text"  datatype="ddate" class="calendar" monthnum="5" value="2013-12-25" /> 五个月
        </dd>
        <dd>
            <input type="text"  datatype="ddate" class="calendar" monthnum="6" value="2013-12-25" /> 六个月
        </dd>
        <dd>
            <input type="text"  datatype="ddate" class="calendar" monthnum="7" value="2013-12-25" /> 七个月
        </dd>
        <dd>
            <input type="text"  datatype="ddate" class="calendar" monthnum="8" value="2013-12-25" /> 八个月
        </dd>
        <dd>
            <input type="text"  datatype="ddate" class="calendar" monthnum="9" value="2013-12-25" /> 九个月
        </dd>
        <dd>
            <input type="text"  datatype="ddate" class="calendar" monthnum="10" value="2013-12-25" /> 十个月
        </dd>
        <dd>
            <input type="text"  datatype="ddate" class="calendar" monthnum="11" value="2013-12-25" /> 十一个月
        </dd>
        <dd>
            <input type="text"  datatype="ddate" class="calendar" monthnum="12" value="2013-12-25"  /> 十二个月
        </dd>
        
    </dl>

