# 拖动(drag)

<dl class="defDl">
    <dt></dt>
    <dd>
        <div class="JCDrag dragStyle1 js_compDrag" dragBeginCb="dragBeginCb">
            dragBeginCb="dragBeginCb"
        </div>
    </dd>

   <dd>
        <div class="JCDrag dragStyle1 js_compDrag" dragDoneCb="dragDoneCb" style="top:40px">
            dragDoneCb="dragDoneCb"
        </div>
   </dd>

   <dd>
        <div class="JCDrag dragStyle1 js_compDrag" disableDrag="true" style="top:80px">
             disableDrag="true"
        </div>
   </dd>

   <dd>
        <div class="JCDrag dragStyle1 js_compDrag" ignoreDrog="true" style="top:120px">
             ignoreDrog="true"
        </div>
   </dd>

   <dd>
        <div class="JCDrag dragStyle1 js_compDrag" dragMovingCb="dragMovingCb" style="top:160px">
            dragMovingCb="dragMovingCb"
        </div>
   </dd>

    <dd>
        <div class="dragStyle2" style="left: 500px;">
            <div style="cursor:move" 
                class="dragStyle1 js_compDrag" 
                dragTarget="(div"
                >drag parent, dragTarget="(div"</div>
            content...
            <br />content...
            <br />content...
            <br />content...
        </div>
    </dd>

    <dd>
        <div style="width:800px; height:500px; border:1px dashed #000; margin-top: 205px;">
            <div class="JCDrag dragStyle1 js_compDrag" dragIn="(div" style="top:340px;">
                drag in div, dragIn="(div"
            </div>

            <div class="dragStyle2" style="left: 380px; top: 325px;">
                <div style="cursor:move; width:380px!important;" 
                    class="dragStyle1 js_compDrag" 
                    dragIn="//"
                    dragTarget="(div"
                    >drag parent, dragIn="//", dragTarget="(div"</div>
                content...
                <br />content...
                <br />content...
                <br />content...
            </div>

        </div>
    </dd>

    <dd>
        <div style="width:800px; height:500px; border:1px dashed #000; margin-top: 100px;">
            <div class="JCDrag dragStyle1 js_compDrag" dragIn="(div" style="top:900px;">
                drag in div, dragIn="(div"
            </div>

            <div class="dragStyle2" style="left: 370px; top: 905px;">
                <div style="cursor:move; width:380px!important;" 
                    class="dragStyle1 js_compDrag" 
                    dragIn="//"
                    dragTarget="(div"
                    >drag parent, dragIn="//", dragTarget="(div"</div>
                content...
                <br />content...
                <br />content...
                <br />content...
            </div>

        </div>
    </dd>

    <dd>
        <div class="JCDrag dragStyle1 js_compDrag" style="top:750px; left: 460px;" >
            normal drag 
        </div>
    </dd>

</dl>

<link href='{{path}}/res/default/style.css' rel='stylesheet' />
<style>

    .defDl {
        position: relative;
    }

    .defDl > dd{
        border-bottom:1px solid #e2e3ea; 
    }

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
</style>

<script>
    window.JC = window.JC || { debug: true };

    requirejs( [ '{{module}}' ], function( {{name}} ){
    }); 

    function dragBeginCb( _selector, _dragTarget, _movingSelector ){
        var _ins = this;
        JC.log( 'dragBeginCb', new Date().getTime() );
    }

    function dragDoneCb( _selector, _dragTarget ){
        var _ins = this;
        JC.log( 'dragDoneCb', new Date().getTime() );
    }

    function dragMovingCb( _selector, _dragTarget, _movingSelector, _x, _y, _evt ){
        var _ins = this;
        JC.log( 'dragMovingCb', new Date().getTime() );
    }

</script>
