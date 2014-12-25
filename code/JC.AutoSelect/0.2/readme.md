## 使用说明

### 简介

- JC.AutoSelect 是一个联动下拉框组件, 支持无限级联动
- 只要引用本脚本, 页面加载完毕时就会自动初始化可识别的级联下拉框功能( ```<select defaultselect=""></select>``` ) 
- 动态添加的 DOM 需要显式调用 JC.AutoSelect( domSelector ) 进行初始化 

### 组件依赖
    JC.common

### 外链形式
```html
<script src="/module/JC.common/0.2/common.js"></script>
<script src="{{src}}"></script>
```

### 模块加载形式
```html
<script>
    requirejs( [ '{{module}}' ], function( {{name}} ){
        //...
    });
</script>
```
###select 标签可用的 HTML 属性
    defaultselect, 这个属性不需要赋值
        该属性声明这是级联下拉框的第一个下拉框, 这是必填项,初始化时以这个为入口

    selectvalue = string
        下拉框的默认选中值

    selecturl = AJAX 数据请求的URL
        下拉框的数据请求接口, 符号 {0} 代表下拉框值的占位符

    selectignoreinitrequest = bool, default = false
        首次初始化时, 是否需要请求新数据 
        有时 联动框太多, 载入页面时, 后端直接把初始数据输出, 避免请求过多

    selecttarget = selector
        下一级下拉框的选择器语法

    selectdatacb = 静态数据请求回调
        如果数据不需要 AJAX 请求, 可使用这个属性, 自行定义数据处理方式

    selectrandomurl = bool, default = false
        AJAX 请求时, 添加随机参数, 防止数据缓存

    selecttriggerinitchange = bool, default = true
        首次初始化时, 是否触发 change 事件

    selecthideempty = bool, default = false
        是否隐藏没有数据的 selecct

    selectdatafilter = 请求数据后的处理回调
        如果接口的数据不符合 select 的要求, 可通过这个属性定义数据过滤函数

    selectbeforeinited = 初始化之前的回调

    selectinited = 初始化后的回调
        function selectinited( _items ){
           var _ins = this;
        }

    selectallchanged = 所有select请求完数据之后的回调, window 变量域
        function selectallchanged( _items ){
           var _ins = this;
        }

###option 标签可用的 HTML 属性
    defaultoption, 这个属性不需要赋值
        声明默认 option 选项, 更新option时, 有该属性的项不会被清除

###数据格式
    [ [id, name], [id, name] ... ] 
    如果获取到的数据格式不是默认格式, 可以通过 AutoSelect.dataFilter 属性自定义函数, 进行数据过滤

## 使用实例
```html
<select name='select2_1' 
    defaultselect=""  
    selecturl="/module/JC.AutoSelect/0.2/examples/data/shengshi.php?id=0" 
    selecttarget="/select:eq(1)"
    >
    <option value="-1" defaultoption="">请选择</option>
</select>
<select name='select2_2' 
    selecturl="/module/JC.AutoSelect/0.2/examples/data/shengshi.php?id={0}" 
    selecttarget="/select:last"
    >
    <option value="-1" defaultoption="">请选择</option>
</select>
<select name='select2_3' 
    selecturl="/module/JC.AutoSelect/0.2/examples/data/shengshi.php?id={0}"
    >
    <option value="-1" defaultoption="">请选择</option>
</select>
```

## 文档参考

1. [JC.AutoSelect 官方文档](http://360.75team.com/~qiushaowei/jc2/docs_api/classes/JC.AutoSelect.html)

