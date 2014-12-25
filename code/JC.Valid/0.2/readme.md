## 使用说明

### 简介

JC.Valid 是一个表单验证组件, 提供大部分常规的验证规则.

### 组件依赖
    JC.common

### 外链形式

```html
<link href='{{path}}/res/default/style.css' rel='stylesheet' />
<script src="/module/JC.common/0.2/common.js"></script>
<script src="{{src}}"></script>
<script>
    JC.debug = true; 

    $(document).delegate( 'form', 'submit', function( _evt ){
        if( !JC.Valid.check( this ) ){
            _evt.preventDefault();
            return false;
        }
    });
</script>
```

### 模块加载形式
```html
<link href='{{path}}/res/default/style.css' rel='stylesheet' />
<script>
    requirejs( [ '{{module}}' ], function( {{name}} ){
        $(document).delegate( 'form', 'submit', function( _evt ){
            _evt.preventDefault();

            if( !Valid.check( this ) ){
                _evt.preventDefault();
                return false;
            }
        });
    });
</script>
```

### Form 的可用 html attribute

    errorabort = bool, default = true
        查检Form Control时, 如果发生错误是否继续检查下一个 
        true: 继续检查, false, 停止检查下一个

    validmsg = bool | string
        内容填写正确时显示的 提示信息, class=validmsg 
        如果 = 0, false, 将不显示提示信息 
        如果 = 1, true, 将不显示提示文本

    validemdisplaytype = string, default = inline
        设置 表单所有控件的 em CSS display 显示类型

    ignoreAutoCheckEvent = bool, default = false
        是否禁用 自动 check 事件( focus, blur, change )


### Form Control的可用 html attribute

    reqmsg = 错误提示
        值不能为空, class=error errormsg

    errmsg = 错误提示
        格式错误, 但不验证为空的值, class=error errormsg

    focusmsg = 控件获得焦点的提示信息
        这个只作提示用, class=focusmsg

    validmsg = bool | string
        内容填写正确时显示的 提示信息, class=validmsg 
            如果 = 0, false, 将不显示提示信息 
            如果 = 1, true, 将不显示提示文本

    emel = selector
        显示错误信息的selector

    validel = selector
        显示正确信息的selector

    focusel = selector
        显示提示信息的selector

    validemdisplaytype = string, default = inline
        设置 em 的 CSS display 显示类型

    ignoreprocess = bool, default = false
        验证表单控件时, 是否忽略

    minlength = int(最小长度)
        验证内容的最小长度, 但不验证为空的值

    maxlength = int(最大长度)
        验证内容的最大长度, 但不验证为空的值

    minvalue = [number|ISO date](最小值)
        验证内容的最小值, 但不验证为空的值

    maxvalue = [number|ISO date](最大值)
        验证内容的最大值, 但不验证为空的值

    validitemcallback = function name
        对一个 control 作检查后的回调, 无论正确与否都会触发, window 变量域
            function validItemCallback( _item, _isValid){
               JC.log( _item.attr('name'), _isValid );
            }

    validHidden = bool, default = false
        是否验证隐藏的控件

    rangeCanEqual = bool, default = true
        nrange 和 daterange 的开始值和结束值是否可以相等

    datatype: 常用数据类型

        n: 检查是否为正确的数字

        n-i.f: 检查数字格式是否附件要求, i[整数位数], f[浮点数位数], n-7.2 = 0.00 ~ 9999999.99

        nrange: 检查两个control的数值范围
            html attr fromNEl: 指定开始的 control
            html attr toNEl: 指定结束的 control
            如果不指定 fromNEl, toNEl, 默认是从父节点下面找到 nrange, 按顺序定为 fromNEl, toNEl

        d: 检查是否为正确的日期, YYYYMMDD, YYYY/MM/DD, YYYY-MM-DD, YYYY.MM.DD

        daterange: 检查两个control的日期范围
            html attr fromDateEl: 指定开始的 control
            html attr toDateEl: 指定结束的 control
            如果不指定 fromDateEl, toDateEl, 默认是从父节点下面找到 daterange, 按顺序定为 fromDateEl, toDateEl

        time: 是否为正确的时间, hh:mm:ss

        minute: 是否为正确的时间, hh:mm

        bankcard: 是否为正确的银行卡 
            格式为: 9 ~ 25 位数字

        cnname: 中文姓名 
            格式: 汉字和大小写字母 
            规则: 长度 2-32个字节, 非 ASCII 算2个字节

        enname: 英文姓名 
            格式: 大小写字母 + 空格 
            规则: 长度 2-32个字节, 非 ASCII 算2个字节

        allname: cnname | enname 
            中文姓名和英文姓名的复合验证

        username: 注册用户名 
            格式: a-zA-Z0-9_- 
            规则: 首字母必须为 [a-zA-Z0-9], 长度 2 - 30

        idnumber: 身份证号码, 15~18 位

        mobilecode: 手机号码, 11位, (13|14|15|16|17|18|19)[\d]{9}

        mobile: mobilecode 的别名

        mobilezonecode: 带 国家代码的手机号码, [+国家代码] [零]11位数字

        phonecode: 电话号码, 7~8 位数字, [1-9][0-9]{6,7}

        phone: 带区号的电话号码, [区号][空格|空白|-]7~8位电话号码

        phoneall: 带国家代码, 区号, 分机号的电话号码, [+国家代码][区号][空格|空白|-]7~8位电话号码#1~6位

        phonezone: 电话区号, 3~4位数字. phonezone-n,m 可指定位数长度

        phoneext: 电话分机号, 1~6位数字

        countrycode: 地区代码, [+]1~6位数字

        mobilephone: mobilecode | phone

        mobilephoneall: mobilezonecode | phoneall

        reg: 自定义正则校验, /正则规则/[igm]

        vcode: 验证码, 0-9a-zA-Z, 长度 默认为4 
            可通过 vcode-[\d], 指定验证码长度

        text: 显示声明检查的内容为文本类型 
            默认就是 text, 没有特殊原因其实不用显示声明

        bytetext: 声明按字节检查文本长度 
            ASCII 算一个字符, 非 ASCII 算两个字符

        url: URL 格式, ftp, http, https

        domain: 匹配域名, 宽松模式, 允许匹配 http(s), 且结尾允许匹配反斜扛(/)

        stricdomain: 匹配域名, 严格模式, 不允许匹配 http(s), 且结尾不允许匹配反斜扛(/)

        email: 电子邮件

        zipcode: 邮政编码, 0~6位数字

        taxcode: 纳税人识别号, 长度: 15, 18, 20

        checkbox: 默认需要至少选中N 个 checkbox
            默认必须选中一个 checkbox 
            如果需要选中N个, 用这种格式 checkbox-n, checkbox-3 = 必须选中三个 
            datatarget: 声明所有 checkbox 的选择器

        file: 判断文件扩展名
            属性名(文件扩展名列表): fileext
            格式: .ext[, .ext]
                   <input type="file" 
                   reqmsg="文件" 
                   errmsg="允许上传的文件类型: .gif, .jpg, .jpeg, .png"
                   datatype="file" 
                   fileext=".gif, .jpg, .jpeg, .png" 
                   />
                   <label>.gif, .jpg, .jpeg, .png</label>
                   <em class="error"></em>
                   <em class="validmsg"></em>

        qq: 检查QQ号码, 5 ~ 11位数字
        qqall: 检查QQ号码, [ qq | email ]

    subdatatype: 特殊数据类型, 以逗号分隔多个属性

        alternative: N 个 Control 必须至少有一个非空的值
            datatarget: 显式指定同一组 control, 默认在父级下查找[subdatatype=alternative]
            alternativedatatarget: 与 datatarget相同, 区别是优先级高于 datatarget
            alternativemsg: N 选一的错误提示

            alternativeReqTarget: 为 alternative node 指定一个不能为空的 node 
                请使用 subdatatype = reqtarget, 这个附加属性将弃除

            alternativeReqmsg: alternativeReqTarget 目标 node 的html属性, 错误时显示的提示信息

        reqtarget: 如果 selector 的值非空, 那么 datatarget 的值也不能为空
            datatarget: 显式指定 目标 target
            reqTargetDatatarget: 与 datatarget相同, 区别是优先级高于 datatarget
            reqtargetmsg: target node 用于显示错误提示的 html 属性

        reconfirm: N 个 Control 的值必须保持一致
            datatarget: 显式指定同一组 control, 默认在父级下查找[subdatatype=reconfirm]
            reconfirmdatatarget: 与 datatarget相同, 区别是优先级高于 datatarget
            reconfirmmsg: 值不一致时的错误提示

        unique: N 个 Control 的值必须保持唯一性, 不能有重复
            datatarget: 显式指定同一组 control, 默认在父级下查找[subdatatype=unique]
            uniquedatatarget: 与 datatarget相同, 区别是优先级高于 datatarget
            uniquemsg: 值有重复的提示信息
            uniqueIgnoreCase: 是否忽略大小写
            uniqueIgnoreEmpty: 是否忽略空的值, 如果组中有空值也会被忽略
            processDisabled: 是否处理 disabled 但 visible 的node
            unique-n 可以指定 N 个为一组的匹配, unique-2 = 2个一组, unique-3: 三个一组

        datavalid: 判断 control 的值是否合法( 通过HTTP请求验证 )
            datavalidMsg: 值不合法时的提示信息
            datavalidUrl: 验证内容正确与否的 url api

            {"errorno":0,"errmsg":""}
            errorno: 0( 正确 ), 非0( 错误 )

            datavalidurl="./data/handler.php?key={0}"
                {0} 代表 value

            datavalidCheckCallback: 验证内容正确与否的回调(优先级比 datavalidUrl 高)

            window.datavalidCheckCallback =
            function (){
               var _r = { 'errorno': 1, errmsg:'验证码错误' }, _sp = $( this ), _v = _sp.val().trim().toLowerCase();
               if( _v && _v === window.CHECK_CODE ){
                   _r.errorno = 0;
               }
               return _r;
            };
                         
            datavalidNoCache: 是否禁止缓存, default = false
            datavalidAjaxType: ajax 请求类型, default = get
            datavalidRequestData: ajax 请求数据, json data

            datavalidCallback: 请求 datavalidUrl 后调用的回调
                function datavalidCallback( _json ){
                   var _selector = $(this);
                });

            datavalidKeyupCallback: 每次 keyup 的回调
                function datavalidKeyupCallback( _evt ){
                   var _selector = $(this);
                });

            datavalidUrlFilter: 请求数据前对 url 进行操作的回调
                function datavalidUrlFilter( _url ){
                   var _selector = $(this);
                   _url = JC.f.addUrlParams( _url, { 'xtest': 'customData' } );
                   return _url;
                });

        hidden: 验证隐藏域的值
            有些特殊情况需要验证隐藏域的值, 请使用 subdatatype="hidden"

        ucheck: 用户自定义验证
            ucheckmsg: 验证出错的提示信息

            ucheckCallback: 用于验证的函数 window变量域
                function ucheck_n( _item ){
                   var _r = false, _v = JC.f.parseFinance( _item.val() );
                   if( _v === 0 || ( _v >= 30 && _v >= 50 ) ){
                       _r = true;
                   }
                   return _r;
                }

## 使用实例
    完善中...

## 文档参考

1. [JC.Valid 官方文档](http://360.75team.com/~qiushaowei/jc2/docs_api/classes/JC.Valid.html)

