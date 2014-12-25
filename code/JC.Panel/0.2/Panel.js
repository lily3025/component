;(function(define, _win) { 'use strict'; 
    define( [ 'module/JC.Panel/0.2/Panel.default', 'module/JC.Panel/0.2/Panel.popup'
            , 'module/JC.Panel/0.2/Dialog', 'module/JC.Panel/0.2/Dialog.popup' ], function(){
    return JC.Panel;
});}( typeof define === 'function' && define.amd ? define : 
        function ( _name, _require, _cb ) { 
            typeof _name == 'function' && ( _cb = _name );
            typeof _require == 'function' && ( _cb = _require ); 
            _cb && _cb(); 
        }
        , window
    )
);
