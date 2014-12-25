# 常用案例 1

<link href='{{path}}/res/default/style.css' rel='stylesheet' />
<style>
.ipt,.txt,.txt-1{ border:1px solid #e2e3ea; border-top:1px solid #abadb3; border-radius:2px; height:22px; *line-height:22px;}
.ipt{ width:220px;}
.ipt-w58{ width:58px;}
.ipt-w48{ width:48px; text-align:center;}
.ipt-w80{ width:80px;}
.ipt-w180{ width:180px;}
.ipt-w230{ width: 230px;}
.ipt-w320{ width:320px;}
.ipt-w380{ width:380px;}
.ipt-w480{ width:480px;}
.ipt-w545{ width:545px;}
.txt,.txt-1{ resize:none; height:50px; width:99.8%;}
.txt-w280{ width:280px;}
.txt-w480{ width:480px;}
.txt-w545{ width:545px;}
.txt-w400{ width:410px;}
.txt-w380{ width:380px;}
.txt-w650{ width:650px;}

.defDl {
    margin: 10px auto;
}

.defDl > dt {
    margin: 15px auto 5px auto;
    font-weight: bold;
}

.defDl > dd{
    border-bottom:1px solid #e2e3ea; 
} 

.previewSelectorBox .cic_previewItem {
    margin-bottom: 20px;
}

.imageLs{ clear: both; margin-top: 20px;}
.imageLs label{ display: block; float: left; width: 300px; }
</style>

<script>
    window.JC = window.JC || { debug: true };

    requirejs( [ '{{module}}' ], function(){
        $( document ).delegate( 'input.js_newImage', 'change', function( _evt ){
            var _rdo = $( this )
                , _selector = $( 'div.js_compImageCutter ' )
                , _ins = JC.BaseMVC.getInstance( _selector, JC.ImageCutter )
                ;
            _rdo.val().trim() && _ins && _ins.update( _rdo.val().trim() );
        });

        $( document ).delegate( 'button.js_clean', 'click', function( _evt ){
            var _rdo = $( this )
                , _selector = $( 'div.js_compImageCutter ' )
                , _ins = JC.BaseMVC.getInstance( _selector, JC.ImageCutter )
                ;
            _ins && _ins.clean();
            $( 'input.js_newImage' ).prop( 'checked', false );
        });

        $( document ).delegate( 'a.js_createPic', 'click', function( _evt ){
            var _a = $( this )
                , js_coordinate = $( 'input.js_coordinate' )
                , js_imageUrl = $( 'input.js_imageUrl' )
                ;
            if( !( js_coordinate.val().trim() && js_imageUrl.val().trim() ) ){
                _evt.preventDefault();
                return;
            }
        });
    });

    function cicInitedCb(){
        var _ins = this, _selector = _ins.selector();
        JC.log( 'cicInitedCb', new Date().getTime() );
    }

    function cicImageInitedCb( _sizeObj, _img ){
        var _ins = this, _selector = _ins.selector();
        JC.log( 'cicImageInitedCb', new Date().getTime() );
    }

    function cicCoordinateUpdateCb( _corAr, _imgUrl ){
        var _p = this, _selector = _p.selector()
            , _td = JC.f.getJqParent( _selector, 'td' )
            , _a = _td.find( '.js_createPic' )
            , _href = _a.attr( 'href' )
            ;
        JC.log( 'cicCoordinateUpdateCb', _corAr, _imgUrl, new Date().getTime() );

        _href =
            JC.f.addUrlParams( _href, {
                'coordinate': _corAr
                , 'filename': _imgUrl.replace( /.*\//, '' )
            });

        _a.attr( 'href', _href );
    }

    function cicDragDoneCb( _sizeObj ){
        var _ins = this, _selector = _ins.selector();
        JC.log( 'cicDragDoneCb', new Date().getTime() );
    }

    function cicErrorCb( _errType, _args ){
        var _ins = this, _selector = _ins.selector();
        JC.log( 'cicErrorCb', _errType, new Date().getTime() );
    }

    function cicLoadErrorCb( _imgUrl ){
        var _ins = this, _selector = _ins.selector();
        JC.log( 'cicLoadErrorCb',_imgUrl, new Date().getTime() );
    }

    function cicSizeErrorCb( _width, _height, _imgUrl, _isMax ){
        var _ins = this, _selector = _ins.selector();
        JC.log( 'cicSizeErrorCb', _width, _height, _imgUrl, _isMax, new Date().getTime() );
    }

    function cicPreviewSizeErrorCb( _width, _height, _imgUrl, _newSize ){
        var _ins = this, _selector = _ins.selector();
        JC.log( 'cicPreviewSizeErrorCb', _width, _height, _imgUrl, _newSize, new Date().getTime() );
    }
</script>

<div style="margin:10px auto">坐标对应: 0, 0, 0, 0, 0, 0 = x, y, rect width, rect height, img width, img height</div>

<dl class="defDl">
    <dt></dt>
    <dd>
        <table>
            <tr>
                <td>
                    <div class="js_compImageCutter"
                        imageUrl="{{path}}/examples/data/uploads/h1_600x415.jpg"
                        coordinateSelector="(td input.js_coordinate"
                        previewSelector="(tr div.js_previewItem"
                        imageUrlSelector="(td input.js_imageUrl"
                        minRectSidelength="60"
                        minImageSidelength="60"
                        maxImageSidelength="1000"
                        cicInitedCb="cicInitedCb"
                        cicImageInitedCb="cicImageInitedCb"
                        cicCoordinateUpdateCb="cicCoordinateUpdateCb"
                        cicDragDoneCb="cicDragDoneCb"
                        cicErrorCb="cicErrorCb"
                        cicLoadErrorCb="cicLoadErrorCb"
                        cicSizeErrorCb="cicSizeErrorCb"
                        cicPreviewSizeErrorCb="cicPreviewSizeErrorCb"
                        >
                    </div>
                    <input type="text" class="ipt js_coordinate" value="" />
                    <a href="{{path}}/examples/data/gd.php" class="js_createPic" target="_blank">生成图片</a>
                    <br /><input type="text" class="ipt js_imageUrl" value="" />
                </td>
                <td>
                    <div class="cic_previewItem js_previewItem" style="width: 50px; height: 50px;"></div>
                    <div class="cic_previewItem js_previewItem" style="width: 75px; height: 75px;"></div>
                    <div class="cic_previewItem js_previewItem" style="width: 150px; height: 150px;"></div>
                </td>
            </tr>
        </table>
        <div>
            <div class="imageLs">
                <label>
                    <input type='radio' class='js_newImage' value='{{path}}/examples/data/uploads/h1_600x415.jpg' name='imagels' />
                    data/uploads/h1_600x415.jpg
                </label>
                <label>
                    <input type='radio' class='js_newImage' value='{{path}}/examples/data/uploads/h2_600x415.jpg' name='imagels' />
                    data/uploads/h2_600x415.jpg
                </label>
                <label>
                    <input type='radio' class='js_newImage' value='{{path}}/examples/data/uploads/h_1680x1050.jpg' name='imagels' />
                    data/uploads/h_1680x1050.jpg
                </label>
                <label>
                    <input type='radio' class='js_newImage' value='{{path}}/examples/data/uploads/r1_1048x1048.jpg' name='imagels' />
                    data/uploads/r1_1048x1048.jpg
                </label>
                <label>
                    <input type='radio' class='js_newImage' value='{{path}}/examples/data/uploads/r2_800x800.jpg' name='imagels' />
                    data/uploads/r2_800x800.jpg
                </label>
                <label>
                    <input type='radio' class='js_newImage' value='{{path}}/examples/data/uploads/r_768x768.jpg' name='imagels' />
                    data/uploads/r_768x768.jpg
                </label>
                <label>
                    <input type='radio' class='js_newImage' value='{{path}}/examples/data/uploads/s1_40x40.jpg' name='imagels' />
                    data/uploads/s1_40x40.jpg
                </label>
                <label>
                    <input type='radio' class='js_newImage' value='{{path}}/examples/data/uploads/s2_50x400.jpg' name='imagels' />
                    data/uploads/s2_50x400.jpg
                </label>
                <label>
                    <input type='radio' class='js_newImage' value='{{path}}/examples/data/uploads/s3_50x50.jpg' name='imagels' />
                    data/uploads/s3_50x50.jpg
                </label>
                <label>
                    <input type='radio' class='js_newImage' value='{{path}}/examples/data/uploads/s4_100x100.jpg' name='imagels' />
                    data/uploads/s4_100x100.jpg
                </label>
                <label>
                    <input type='radio' class='js_newImage' value='{{path}}/examples/data/uploads/s5_60x60.jpg' name='imagels' />
                    data/uploads/s5_60x60.jpg
                </label>
                <label>
                    <input type='radio' class='js_newImage' value='{{path}}/examples/data/uploads/s6_120x120.jpg' name='imagels' />
                    data/uploads/s6_120x120.jpg
                </label>
                <label>
                    <input type='radio' class='js_newImage' value='{{path}}/examples/data/uploads/v1_411x615.jpg' name='imagels' />
                    data/uploads/v1_411x615.jpg
                </label>
                <label>
                    <input type='radio' class='js_newImage' value='{{path}}/examples/data/uploads/v2_474x615.jpg' name='imagels' />
                    data/uploads/v2_474x615.jpg
                </label>
                <label>
                    <input type='radio' class='js_newImage' value='{{path}}/examples/data/uploads/v_400x615.jpg' name='imagels' />
                    data/uploads/v_400x615.jpg
                </label>
                <label>
                    <input type='radio' class='js_newImage' value='{{path}}/examples/data/uploads/load_error.jpg' name='imagels' />
                    data/uploads/load_error.jpg
                </label>
                <button type="button" class="js_clean">clean</button>
            </div>
            <br clear="both" />
        </div>
    </dd>

</dl>
