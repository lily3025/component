;(function(define, _win) { 'use strict'; 
    define( [ 'module/JC.Calendar/0.3/Calendar.date', 'module/JC.Calendar/0.3/Calendar.week'
                , 'module/JC.Calendar/0.3/Calendar.month', 'module/JC.Calendar/0.3/Calendar.season'
                , 'module/JC.Calendar/0.3/Calendar.year', 'module/JC.Calendar/0.3/Calendar.monthday'
            ], function(){

    return JC.Calendar;
});}( typeof define === 'function' && define.amd ? define : 
        function ( _name, _require, _cb ) { 
            typeof _name == 'function' && ( _cb = _name );
            typeof _require == 'function' && ( _cb = _require ); 
            _cb && _cb(); 
        }
        , window
    )
);
