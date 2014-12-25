# 基本示例

<script>
require(['{{module}}'], function( AutoSelect ) {
    //JC.AutoSelect.hideEmpty = true;

    JC.AutoSelect.dataFilter = function(_data, _select) {
        var _r = _data;
        if (_data && !_data.length && _data.data) {
            _r = _data.data;
        }
        return _r;
    };

    JC.AutoSelect.inited = function() {
        JC.log('user inited');
    };

    JC.AutoSelect.allChanged = function() {
        JC.log('user allChanged');
    };

    /**
     * 动态设置 选中值, 使用 update 方法
     */
    $(document).delegate('button.js_dynamicSettingUpdateMethod', 'click', function(_evt) {
        var _p = $(this),
            _data = _p.attr('testdata'),
            _ls, _selLs;
        if (!_data) return;
        _selLs = _p.parent().find('select');
        if (!_selLs.length) return;

        var _ins = JC.AutoSelect.getInstance(_selLs[0]);
        _ins && _ins.update(_data);
    });
});
</script>

<dl>
    <dd>
        <select name='select10_1' 
            defaultselect 
            selecturl="{{path}}/examples/data/shengshi.php?id=0" 
            selecttarget="/select:last"
            >
            <option value="-1" defaultoption>请选择</option>
        </select>
        <select name='select10_2' 
            selecturl="{{path}}/examples/data/shengshi.php?id={0}"
            >
            <option value="-1" defaultoption>请选择</option>
        </select>
        <button type="button" class="js_dynamicSettingUpdateMethod" testdata="14, 2341" >
             [14, 2341], #ins.update 方法
        </button>
    </dd>

    <dd>
        <select name='select20_1' 
            defaultselect 
            selectvalue="14" 
            selecturl="{{path}}/examples/data/shengshi.php?id=0" 
            selecttarget="/select:last"
            >
            <option value="-1" defaultoption>请选择</option>
        </select>
        <select name='select20_2' 
            selecturl="{{path}}/examples/data/shengshi.php?id={0}"
            >
            <option value="-1" defaultoption>请选择</option>
        </select>
    </dd>

    <dd>
        <select name='select2_1' 
            defaultselect 
            selecturl="{{path}}/examples/data/shengshi.php?id=0" 
            selecttarget="/select:eq(1)"
            selecthideempty="true"
            >
            <option value="-1" defaultoption>请选择</option>
        </select>
        <select name='select2_2' 
            selecturl="{{path}}/examples/data/shengshi.php?id={0}" 
            selecttarget="/select:last"
            >
            <option value="-1" defaultoption>请选择</option>
        </select>
        <select name='select2_3' 
            selecturl="{{path}}/examples/data/shengshi.php?id={0}"
            >
            <option value="-1" defaultoption>请选择</option>
        </select>
        <button type="button" class="js_dynamicSettingUpdateMethod" testdata="14, 2341, 2343" >
             [14, 2341, 2343], #ins.update 方法
        </button>
    </dd>
</dl>
