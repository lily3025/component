# 拖放交换位置(dropSwap)

<div style="height:50px"></div>

<dl class="defDl">
    <dt>dropFor="(table div.js_compDrag" dropSwap="true"</dt>
    <dd>
        <div class="dropBox">
            <table>
                <tr>
                    <td>
                        <div class="js_compDrag" 
                            dropFor="(table div.js_compDrag" 
                            dropSwap="true" 
                            dropDoneCb="dropDoneCbAllow"
                            >
                            dropDoneCb="dropDoneCbAllow"
                        </div>
                    </td>
                    <td>
                        <div class="js_compDrag" 
                            dropFor="(table div.js_compDrag" 
                            dropSwap="true" 
                            dropDoneCb="dropDoneCbBan"
                            > 
                            dropDoneCb="dropDoneCbBan"
                        </div>
                    </td>
                    <td>
                        <div class="js_compDrag" 
                            dropFor="(table div.js_compDrag" 
                            dropSwap="true" 
                            dragInitedCb="dragInitedCb"
                            >
                             dragInitedCb="dragInitedCb"
                        </div>
                    </td>
                    <td>
                        <div class="js_compDrag" 
                            dropFor="(table div.js_compDrag" 
                            dropSwap="true"
                            >drop 4</div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="js_compDrag" 
                            dropFor="(table div.js_compDrag" 
                            disableDrag="true" 
                            dropSwap="true"
                        > disableDrag="true"</div>
                    </td>
                    <td>
                        <div class="js_compDrag" 
                            dropFor="(table div.js_compDrag" 
                            dropSwap="true" 
                            disableDrop="true"
                        > disableDrop="true"</div>
                    </td>
                    <td>
                        <div class="js_compDrag" 
                            dropFor="(table div.js_compDrag" 
                            dropSwap="true"
                            style="color:red;"
                            dropDoneAfterCb="dropDoneAfterCb"
                        >dropDoneAfterCb="dropDoneAfterCb"</div>
                    </td>
                    <td>
                        <div class="js_compDrag" 
                            dropFor="(table div.js_compDrag" 
                            dropSwap="true"
                            disableDrag="true" 
                            disableDrop="true"
                        >
                            disableDrag="true" 
                            , disableDrop="true"
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="js_compDrag" 
                            dropFor="(table div.js_compDrag" 
                            dropSwap="true"
                            dragBeforeCb="dragBeforeCb"
                            >
                            dragBeforeCb="dragBeforeCb"
                        </div>
                    </td>
                    <td>
                        <div class="js_compDrag" 
                            dropFor="(table div.js_compDrag" 
                            dropSwap="true"
                            dragAfterCb="dragAfterCb"
                            >
                            dragAfterCb="dragAfterCb"
                        </div>
                    </td>
                    <td>
                        <div class="js_compDrag" 
                            dropFor="(table div.js_compDrag" 
                            dropSwap="true"
                            style="background:red;"
                        >drop 11</div>
                    </td>
                    <td>
                        <div class="js_compDrag" 
                            dropFor="(table div.js_compDrag" 
                            dropSwap="true"
                            dragMovingCb="dragMovingCb"
                            >dragMovingCb="dragMovingCb"</div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="js_compDrag" dropFor="(table div.js_compDrag" dropSwap="true">drop 13</div>
                    </td>
                    <td>
                        <div class="js_compDrag" dropFor="(table div.js_compDrag" dropSwap="true">drop 14</div>
                    </td>
                    <td>
                        <div class="js_compDrag" dropFor="(table div.js_compDrag" dropSwap="true">drop 15</div>
                    </td>
                    <td>
                        <div class="js_compDrag" dropFor="(table div.js_compDrag" dropSwap="true">drop 16</div>
                    </td>
                </tr>

            </table>
        </div>
    </dd>
</dl>

<link href='{{path}}/res/default/style.css' rel='stylesheet' />
<style>

    .defDl {
    }

    .defDl > dd{
        border-bottom:1px solid #e2e3ea; 
    }

    .redColor { color: red; }
    .redBgColor { background: red; }

    .dragStyle1 {
        border: 1px solid #000;
        height: 30px;
        width: 300px;
        background: #ccc;
    }

    .dragStyle2 {
        border: 1px solid #000;
        cursor: default;
        position: absolute;
        background: #fff;
    }

    .dropBox div.js_compDrag {
        padding: 5px;
        background: #fff;
        border: 1px dashed #000;
        margin-top: 5px;
        width: 140px;
        height: 80px;
        word-wrap: break-word; 
    }</style>

<script>
    window.JC = window.JC || { debug: true };

    requirejs( [ '{{module}}' ], function( {{name}} ){
    });

    function dragInitedCb( _selector, _dragTarget ){
        var _ins = this;
        JC.log( 'dragInitedCb', new Date().getTime() );
    }

    function dragBeforeCb( _dragTarget, _selector ){
        var _ins = this;
        JC.log( 'dragBeforeCb', new Date().getTime() );
        //return false;
    }

    function dragAfterCb( _dragTarget, _selector ){
        var _ins = this;
        JC.log( 'dragAfterCb', new Date().getTime() );
    }

    function dragMovingCb( _selector, _dragTarget, _movingSelector, _x, _y, _evt ){
        var _ins = this;
        JC.log( 'dragMovingCb', new Date().getTime() );
    }

    function dropDoneCbAllow( _dragTarget, _dropTarget ){
        var _initSelector = this;
        JC.log( 'dropDoneCbAllow', new Date().getTime() );
        //return false;
    }

    function dropDoneCbBan( _dragTarget, _dropTarget ){
        var _initSelector = this;
        JC.log( 'dropDoneCbBan', new Date().getTime() );
        return false;
    }

    function dropDoneAfterCb( _dragTarget, _dropTarget ){
        var _initSelector = this;
        JC.log( 'dropDoneAfterCb', new Date().getTime() );
    }
</script>
