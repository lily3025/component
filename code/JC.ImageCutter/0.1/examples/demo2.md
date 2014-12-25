# 常用案例 2

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
                        cicCoordinateUpdateCb="cicCoordinateUpdateCb"
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
    </dd>

</dl>
