# 基本示例

<link href='{{path}}/res/default/style.css' rel='stylesheet' />
<link href='{{basePath}}/JC.Panel/0.2/res/default/style.css' rel='stylesheet' />
<link href='{{basePath}}/JC.Valid/0.2/res/default/style.css' rel='stylesheet' />
<style>
    body{
        margin: 20px 40px;
    }

    .error{ color: red; }
    input.error, select.error, textarea.error{ 
        background-color: #F0DC82;!important;
        box-shadow: 0 none;
    }
    input[type=text], input[type=password]{ width: 200px; }

    dt{
        font-weight: bold;
    }

    dd{ margin: 4px 2px 4px 40px; }

    input, select, textarea {
        border: 1px solid #b9b9b9
    }

    input, select {
        height: 23px;
        line-height: 23px;
    }

    input[type=checkbox], input[type=radio], input.UXC{
        height: auto;
        line-height: auto;
    }

    select[multiple]{
        height: 80px;
    }

    .green{ color: green; }
    .red{ color: red; }

    .js_bizsFormLogic textarea {
        width: 400px!important;
        height: 400px!important;
    }

</style>

<script>
    requirejs( [ '{{module}}'
        , '{{basePath}}/JC.Valid/0.2/Valid' 
        , '{{basePath}}/JC.Panel/0.2/Panel' 
        , '{{basePath}}/JC.plugins/Bizs.FormLogic/0.2/FormLogic' 
        , '{{basePath}}/JC.plugins/Bizs.CommonModify/0.1/CommonModify' 
    ], function( {{name}} ){
    });
</script>

<dl class="defdl">
    <dt>Placeholder 功能演示, html prop xplaceholder</dt>
    <dd>
        <form action="?" method="GET" class="js_bizsFormLogic">
            <dl>
                <dd>
                    input: 
                    <input type="text" name="testx[]" class="ipt" 
                    xplaceholder="default Placeholder" 
                    />
                    <a href="javascript:" 
                        class="green js_autoCommonModify" 
                        cmtemplate="#testTplXPlaceholder"
                        cmitem="(dd"
                        cmaction="add"
                    >+ 添加</a>
                    <em class="error"></em>
                </dd>
                <dd>
                    <textarea xplaceholder="default placeholder" cols="6"></textarea>
                </dd>
                <dd>
                    <button type="submit">submit</button>
                    <button type="reset">reset</button>
                </dd>
            </dl>
        </form>
    </dd>
</dl>

<script type="text/template" id="testTplXPlaceholder">
    <dd>
        input: 
        <input type="text" name="testx[]" class="ipt" xplaceholder="default Placeholder" />
        <a href="javascript:" 
            class="red js_autoCommonModify" 
            cmitem="(dd"
            cmaction="del"
        >+ 删除</a>
        <em class="error"></em>
    </dd>
</script>

<dl class="defdl">
    <dt>Placeholder 功能演示, html prop placeholder</dt>
    <dd>
        <form action="?" method="GET" class="js_bizsFormLogic">
            <dl>
                <dd>
                    input: 
                    <input type="text" name="test[]" class="ipt" 
                    placeholder="default Placeholder" 
                    />
                    <a href="javascript:" 
                        class="green js_autoCommonModify" 
                        cmtemplate="#testTplPlaceholder"
                        cmitem="(dd"
                        cmaction="add"
                    >+ 添加</a>
                    <em class="error"></em>
                </dd>
                <dd>
                    <button type="submit">submit</button>
                    <button type="reset">reset</button>
                </dd>
            </dl>
        </form>
    </dd>
</dl>

<dl class="defdl">
    <dt>Placeholder 功能演示, html prop placeholder</dt>
    <dd>
        <form action="?" method="GET" class="js_bizsFormLogic">
            <dl>
                <dd>
                    input: 
                    <input type="text" name="test[]" class="ipt" 
                    placeholder="default Placeholder" 
                    style="display:none;"
                    />
                    <a href="javascript:" 
                        class="green js_autoCommonModify" 
                        cmtemplate="#testTplPlaceholder"
                        cmitem="(dd"
                        cmaction="add"
                    >+ 添加</a>
                    <em class="error"></em>
                </dd>
                <dd>
                    <button type="submit">submit</button>
                    <button type="reset">reset</button>
                </dd>
            </dl>
        </form>
    </dd>
</dl>


<script type="text/template" id="testTplPlaceholder">
    <dd>
        input: 
        <input type="text" name="test[]" class="ipt" placeholder="default Placeholder" />
        <a href="javascript:" 
            class="red js_autoCommonModify" 
            cmitem="(dd"
            cmaction="del"
        >+ 删除</a>
        <em class="error"></em>
    </dd>
</script>

