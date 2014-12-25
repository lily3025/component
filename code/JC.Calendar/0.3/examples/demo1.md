# 基本示例

请选择日期（选一天）：<input size="32" type="text" datatype="date" />

请选择日期（选一周）：<input size="32" type="text" multidate="week" />

请选择日期（选一月）：<input size="32" type="text" multidate="month" />

请选择日期（选一季）：<input size="32" type="text" multidate="season" />

请选择日期（选一年）：<input size="32" type="text" multidate="year" />

请选择日期（每月的所有日期）：<input size="32" type="text" multidate="monthday" />

<link href='{{path}}/res/default/style.css' rel='stylesheet' />
<script>
	require(['{{module}}'], function( Calendar ){ 
        //Calendar.pickDate( 'input.whichItem' );
    });
</script>
