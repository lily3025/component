# 识别日期占拉符

<link href='{{path}}/res/default/style.css' rel='stylesheet' />
<link href='{{basePath}}/JC.Valid/0.2/res/default/style.css' rel='stylesheet' />
<script>

	require(['{{module}}', '{{basePath}}/JC.Valid/0.2/Valid.js'], function( Calendar, Valid ){ 
    });
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
</script>

<h2>JC.Calendar 示例, 日期占位符 识别功能</h2>
<ol>
    <li>now 当前日期</li>
    <li>d, 天</li>
    <li>w, 周</li>
    <li>m, 月</li>
    <li>y, 年</li>
</ol>

<form action='' method='get'>

    <dl>
        <dt>multidate = month</dt>

        <dd>
        <input type="text" name="date1" 
            value="now" 
            multidate="month" 
            dateFormat="YY-MM" 
            fullDateFormat="{0}"
            dateParse="parseYearMonthDate" 
            />
        </dd>
        <dd>
        <input type="text" name="date1" 
            value="now" 
            minvalue="now,-3m"
            maxvalue="now,+3m"
            multidate="month" 
            dateFormat="YY-MM" 
            fullDateFormat="{0}"
            dateParse="parseYearMonthDate" 
            />
        </dd>

    </dl>


    <dl>
        <dt>datatype = date</dt>
        <dd>
            <input type="text" name="date1" datatype="date" value="2013-06-02" />
        </dd>

        <dd>
            <input type="text" name="date1" datatype="date" value="now" />
            now
        </dd>

        <dd>
            <input type="text" name="date1" datatype="date" value="now,5d" />
            now,5d
        </dd>

        <dd>
            <input type="text" name="date1" datatype="date" value="now,0m" />
            now,0m
        </dd>

        <dd>
            <input type="text" name="date1" datatype="date" value="now,2y" />
            now,2y
        </dd>

        <dd>
            <input type="text" name="date1" datatype="date" value="now,5m" />
            now,5m
        </dd>

        <dd>
            <input type="text" name="date1" datatype="date" value="now,-1y" />
            now,-1y
        </dd>

        <dd>
            <input type="text" name="date1" datatype="date" value="now,-1w" />
            now,-1w
        </dd>

        <dd>
            <input type="text" name="date1" datatype="date" value="now,-3d" />
            now,-3d
        </dd>

        <dd>
            <input type="text" name="date1" datatype="date" value="now,3w" />
            now,3w
        </dd>

        <dd>
            <input type="text" name="date1" datatype="date" value="now,-4m" />
            now,-4m
        </dd>

        <dd>
            <input type="text" name="date1" datatype="daterange" value="now" minvalue="now" maxvalue="now,1w,-1d" />
            <input type="text" name="date1" datatype="daterange" value="now,1w" minvalue="now" maxvalue="now,1w,-1d" />
            <em class="error"></em>
            <p>
            value="now,1w" minvalue="now" maxvalue="now,1w,-1d"
            </p>
        </dd>
    </dl>


</form>
