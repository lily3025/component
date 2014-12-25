# 格式化日期

<link href='{{path}}/res/default/style.css' rel='stylesheet' />
<link href='{{basePath}}/JC.Valid/0.2/res/default/style.css' rel='stylesheet' />

<script>

	require(['{{module}}', '{{basePath}}/JC.Valid/0.2/Valid.js'], function( Calendar, Valid ){ 

        JC.Calendar.layoutInitedCallback = 
            function( _layout ){
            };

        JC.Calendar.layoutHideCallback = 
            function( _lastIpt ){
            };
    });

    function calendarshow(){
        var _p = $(this);
        JC.log( 'calendarshow', _p.val() );
    }

    function calendarhide(){
        var _p = $(this);
        JC.log( 'calendarhide', _p.val() );
    }
    
    function calendarlayoutchange(){
        var _p = $(this);
        JC.log( 'calendarlayoutchange', _p.val() );
    }

    function calendarupdate( _start, _end ){
        var _p = $(this);
        JC.log( 'calendarupdate', _p.val(), _start, _end );
    }

    function calendarupdate( _start, _end ){
        var _p = $(this);
        JC.log( 'calendarupdate', _p.val(), _start, _end );
    }
    //
    /// 针对月份日期格式化 YY-MM
    //
    function parseYearMonthDate( _dateStr ){
        _dateStr = $.trim( _dateStr || '' );
        var _r = { start: null, end: null };
        if( !_dateStr ) return _r;

        _dateStr = _dateStr.replace( /[^\d]+/g, '' );
        var _year = _dateStr.slice( 0, 4 ), _month = parseInt( _dateStr.slice( 4, 6 ), 10 ) - 1;

        _r.start = new Date( _year, _month, 1 );
        return _r;
    }
    //
    /// 针对季度日期格式化 YY-MM ~ YY-MM
    //
    function parseSeasonDate( _dateStr ){
        _dateStr = $.trim( _dateStr || '' );
        var _r = { start: null, end: null };
        if( !_dateStr ) return _r;

        _dateStr = _dateStr.replace( /[^\d]+/g, '' );

        _r.start = JC.f.parseISODate( _dateStr.slice( 0, 6 ) + '01' );
        _r.end = JC.f.parseISODate( _dateStr.slice( 6 ) + '01' );

        return _r;
    }
    //
    /// 针对年份日期格式化 YY
    //
    function parseYearDate( _dateStr ){
        _dateStr = $.trim( _dateStr || '' );
        var _r = { start: null, end: null };
        if( !_dateStr ) return _r;

        _dateStr = _dateStr.replace( /[^\d]+/g, '' );
        var _year = _dateStr.slice( 0, 4 );

        _r.start = new Date( _year, 0, 1 );
        return _r;
    }
</script>

<dl>
    <dt>special format</dt>
    <dd>
        <input type="text" name="date1" class="testitem" 
        multidate="date" 
        currentcanselect="true" 
        dateFormat="YYMMDD"
        /> date ( dateformat="YYMMDD" )
    </dd>
    <dd>
        <input type="text" name="date1" class="testitem" value="20130910" 
        multidate="date" 
        currentcanselect="true" 
        dateFormat="YYMMDD"
        /> date ( dateformat="YYMMDD" )
    </dd>
    <dd>
        <input type="text" name="date1" class="testitem" 
        multidate="date" 
        currentcanselect="true" 
        dateFormat="YY/MM/DD"
        /> date ( dateformat="YY/MM/DD" )
    </dd>
    <dd>
        <input type="text" name="date1" class="testitem" value="2014/09/10"
        multidate="date" 
        currentcanselect="true" 
        dateFormat="YY/MM/DD"
        /> date ( dateformat="YY/MM/DD" )
    </dd>
    <dd>
        <input type="text" name="date1" value="" class="testitem"  
        multidate="week" currentcanselect="true" 
        /> week
    </dd>
    <dd>
        <input type="text" name="date1" value="" class="testitem"  
        multidate="week" currentcanselect="true" 
        fullDateFormat="{0} ~ {1}"
        /> week ( fullDateFormat="{0} ~ {1}" )
    </dd>
    <dd>
        <input type="text" name="date1" value="" class="testitem"  
        multidate="week" currentcanselect="true" 
        dateFormat="YY/MM/DD"
        fullDateFormat="{0} ~ {1}"
        /> week ( dateFormat="YY/MM/DD", fullDateFormat="{0} ~ {1}" )
    </dd>

    <dd>
        <input type="text" name="date3" value="" class="testitem" 
        multidate="month" 
        currentcanselect="true" 
        /> month
    </dd>

    <dd>
        <input type="text" name="date3" value="" class="testitem" 
        multidate="month" 
        currentcanselect="true" 
        dateFormat="YY/MM/DD"
        fullDateFormat="{0} ~ {1}"
        /> month ( dateFormat="YY/MM/DD", fullDateFormat="{0} ~ {1}" )
    </dd>

    <dd>
        <input type="text" name="date3" value="now" class="testitem" 
        multidate="month" 
        currentcanselect="true" 

        fullDateFormat="{0}"
        dateFormat="YY-MM"
        dateParse="parseYearMonthDate"
        /> month ( dateFormat="YY-MM", fullDateFormat="{0}", dateParse="parseYearMonthDate" )
    </dd>

    <dd>
        <input type="text" name="date3" class="testitem" value="1998-10"
        multidate="month" 
        currentcanselect="true" 

        fullDateFormat="{0}"
        dateFormat="YY-MM"
        dateParse="parseYearMonthDate"
        /> month ( dateFormat="YY-MM", fullDateFormat="{0}", dateParse="parseYearMonthDate" )
    </dd>

    <dd>
        <input type="text" name="date2" multidate="season" value="" currentcanselect="true" class="testitem" />
        <input type="button" class="UXCCalendar_btn" /> season
    </dd>

    <dd>
        <input type="text" name="date1" value="" class="testitem"  
        multidate="season" currentcanselect="true" 
        fullDateFormat="{0} ~ {1}"
        /> season ( fullDateFormat="{0} ~ {1}" )
    </dd>

    <dd>
        <input type="text" name="date1" value="" class="testitem"  
        multidate="season" currentcanselect="true" 
        dateFormat="YY/MM/DD"
        fullDateFormat="{0} ~ {1}"
        /> season ( dateFormat="YY/MM/DD", fullDateFormat="{0} ~ {1}" )
    </dd>

    <dd>
        <input type="text" name="date1" value="" class="testitem"  
        multidate="season" currentcanselect="true" 
        dateFormat="YY-MM"
        fullDateFormat="{0} ~ {1}"
        dateParse="parseSeasonDate"
        /> season ( dateFormat="YY-MM", fullDateFormat="{0} ~ {1}", dateParse="parseSeasonDate" )
    </dd>

    <dd>
        <input type="text" name="date1" value="2015-01 ~ 2015-03" class="testitem"  
        multidate="season" currentcanselect="true" 
        dateFormat="YY-MM"
        fullDateFormat="{0} ~ {1}"
        dateParse="parseSeasonDate"
        /> season ( dateFormat="YY-MM", fullDateFormat="{0} ~ {1}", dateParse="parseSeasonDate" )
    </dd>

    <dd>
        date range:
        <input type="text" name="date2" value="2013-06-03" multidate="daterange" maxvalue="2013-06-30" />
        <input type="text" name="date2" value="2013-06-03" multidate="daterange" maxvalue="2013-06-30" />
    </dd>

    <dd>
        <input type="text" name="date1" value="2014" 
            multidate="year"
            dateFormat="YY"
            fullDateFormat="{0}"
            dateParse="parseYearDate"
        />
        dateFormat="YY"
        , fullDateFormat="{0}"
        , dateParse="parseYearDate"
    </dd>
    <dd>
        <input type="text" name="date2" value="2015-06-03" datatype="year" />
        <input type="button" class="UXCCalendar_btn" />
    </dd>
    <dd>
        <input type="text" name="date2" value="2016-06-03"
        datatype="year" 
        minvalue="2016-06-03" 
        /> minvalue="2016-06-03"
    </dd>
    <dd>
        <input type="text" name="date2" value="2017-06-03"
        datatype="year" 
        minvalue="2017-06-03" 
        currentcanselect="true"
        /> minvalue="2017-06-03", currentcanselect="true"
    </dd>
    <dd>
        <input type="text" name="date2" value="2018-06-03" 
        datatype="year" 
        maxvalue="2018-06-30" 
        /> maxvalue="2018-06-30"
    </dd>
</dl>

