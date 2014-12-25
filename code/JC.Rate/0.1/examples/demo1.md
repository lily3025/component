# 基本示例

<link href='{{path}}/res/default/style.css' rel='stylesheet' />
<script>
    requirejs( [ '{{module}}' ], function( {{name}} ){

        JC.debug = true;

        $( document ).delegate( 'span.js_rateInitedEvent', 'rateInited', function( _evt, _rateIns ){
            var _selector = $( this );
            JC.log( 'rateInited event' );
            $( '#score-input2' ).val( _selector.children( 'input[ name = "score" ]' ).attr( 'value' ) + '分' );
        });

        $( document ).delegate( 'span.js_rateClickedEvent', 'rateClicked', function( _evt, _target, _rateIns ) {
            var star = _target;
            JC.log( 'rate clicked' );
            if( star.hasClass( 'rate-score' ) ){
                $( '#score-input' ).val( star.attr( 'title' ) );
            }
        } );
    });
</script>

<div class="star-wrap">
    <h2>Default:</h2>
    <span class="js_compRate" hiddenName="customName" ></span>
    <h2>Score:</h2>
    <span class="js_compRate" totalnum="7" score="3" maxscore="7" style="display:inline"></span> text after 
    <h2>Half Star:</h2>
    <span class="js_compRate css_test" totalnum="10" score="13" maxscore="21" minScore="0" half="true"></span>
    <h2>Cancel:</h2>
    <span class="js_compRate" score="3" cancel="true"></span>
    <h2>ReadOnly:</h2>
    <span class="js_compRate" score="3" readonly="true"></span>
    <h2>Title:</h2>
    <span class="js_compRate" score="3" hints="1分,2分,3分,4分,5分"></span>
    <h2>Click Callback:</h2>
    <span class="js_compRate js_rateClickedEvent" score="3" rateClicked="rateClicked">
        <input id="score-input" ReadOnly type="text" />
    </span>
    <h2>Inited Callback:</h2>
    <span class="js_compRate js_rateInitedEvent" score="3" readonly="true" hints="1分,2分,3分,4分,5分">
        <input id="score-input2" ReadOnly type="text" />
    </span>

</div>

