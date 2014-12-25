# 基本示例

<form action='' method='get' class="js-valid" validmsg="true" >
    <div style="position:fixed; top: 80px; right:10px;">
        <button type="submit">Save</button>
        <button type="button" class="js-clear-error">清空错误信息</button>
    </div>
    <dl class="fm-items">
        <dt>JC.Valid 示例</dt>
        <dd>
            <dl>
                <dt>datatype = reqmsg, 必填信息</dt>
                <dd>
                    <div>
                        <label>max 120: </label>
                        <input type="text" name="company_name" 
                        maxlength="120" 
                        reqmsg="公司名称" 
                        errmsg="最大长度120字" 
                        /> 
                    </div>
                    <div>
                        <select name="company_type" 
                            reqmsg="公司行业" 
                            focusmsg="请选择行业" 
                            >
                            <option value="">请选择</option>
                            <option value="1">互联网</option>
                            <option value="2">教育</option>
                        </select>
                    </div>
                    <div>
                        <select name="company_type1" multiple rows="3" reqmsg="公司行业" >
                            <option value="">请选择</option>
                            <option value="1">互联网</option>
                            <option value="2">教育</option>
                        </select>
                    </div>
                    <div>
                        <input type='file' name='company_file' value='' reqmsg="文件" />
                    </div>
                    <div>
                        <textarea name="company_desc" 
                            datatype="text" 
                            reqmsg="简介" 
                            errmsg="最大长度500" 
                            maxlength="500" 
                        ></textarea>
                    </div>
                </dd>
            </dl>
        </dd>

        <dd>
            <dl>
                <dt>datatype = reqmsg(必填信息), validmsg(成功提示), focusmsg(focus 提示) </dt>
                <dd>
                    <label>max 120:</label>
                    <input type="text" name="company_name" 
                    maxlength="120" 
                    reqmsg="公司名称" 
                    errmsg="最大长度120字"
                    focusmsg="长度1-120"
                    validmsg="false"
                    />
                    <em class="validmsg"></em>
                    <em class="focusmsg"></em>
                    <em class="errormsg"></em>
                </dd>
                <dd>
                    <label>max 120:</label>
                    <input type="text" name="company_name" disabled 
                    maxlength="120" 
                    reqmsg="公司名称" 
                    errmsg="最大长度120字"
                    focusmsg="长度1-120"
                    validmsg="false"
                    />
                    <em class="validmsg"></em>
                    <em class="focusmsg"></em>
                    <em class="errormsg"></em>
                </dd>
            </dl>
        </dd>

        <dd>
            <dl>
                <dt>datatype = bytetext, 单字节算一个, 双字节及以上算两个 </dt>
                <dd>
                    <label>8-40字符</label>
                    <input type="text" name="company_name" 
                    minlength="8" maxlength="40" 
                    reqmsg="公司名称" 
                    errmsg="长度8-40个字符, 英文=1字符, 汉字=2字符" 
                    datatype="bytetext"
                    focusmsg="请填写公司名称" 
                    validmsg="true"
                    /> 
                </dd>
            </dl>
        </dd>

        <dd>
            <dl>
                <dt>datatype = domain, 域名, 允许带 http[s]</dt>
                <dd>
                    <label></label>
                    <input type="text" name="company_domain" 
                        datatype="domain" 
                        reqmsg="域名" 
                        errmsg="请填写正确的域名"
                        focusmsg="请填写您的域名"
                        maxlength="240"
                        />
                </dd>
            </dl>
        </dd>

        <dd>
            <dl>
                <dt>datatype = stricdomain, 域名严格检查, 不允许带 http[s], 且结束不能带反斜扛"/"</dt>
                <dd>
                    <label></label>
                    <input type="text" name="company_domain" 
                    datatype="stricdomain" 
                    reqmsg="域名" 
                    errmsg="请填写正确的域名"
                    maxlength="240"
                    />
                </dd>
            </dl>
        </dd>

        <dd>
            <dl>
                <dt>datatype = url, 网址</dt>
                <dd>
                    <label></label>
                    <input type="text" name="company_url" 
                    datatype="url" 
                    errmsg="请填写正确的网址"
                    focusmsg="请填写URL"
                    maxlength="240"
                    />
                    <em class="focusmsg" style="font-weight:bold"></em>
                </dd>

                <dd>
                    <label></label>
                    <input type="text" name="company_url" value="a.com" 
                    datatype="url" 
                    errmsg="请填写正确的网址"
                    focusmsg="请填写URL"
                    maxlength="240"
                    />
                    <em class="focusmsg" style="font-weight:bold"></em>
                </dd>

                <dd>
                    <label></label>
                    <input type="text" name="company_url" value="a.com/" 
                    datatype="url" 
                    errmsg="请填写正确的网址"
                    focusmsg="请填写URL"
                    maxlength="240"
                    />
                    <em class="focusmsg" style="font-weight:bold"></em>
                </dd>

                <dd>
                    <label></label>
                    <input type="text" name="company_url" value="http://a.com" 
                    datatype="url" 
                    errmsg="请填写正确的网址"
                    focusmsg="请填写URL"
                    maxlength="240"
                    />
                    <em class="focusmsg" style="font-weight:bold"></em>
                </dd>

                <dd>
                    <label></label>
                    <input type="text" name="company_url" value="http://www.a.com" 
                    datatype="url" 
                    errmsg="请填写正确的网址"
                    focusmsg="请填写URL"
                    maxlength="240"
                    />
                    <em class="focusmsg" style="font-weight:bold"></em>
                </dd>

                <dd>
                    <label></label>
                    <input type="text" name="company_url" value="a.comccccccccc" 
                    datatype="url" 
                    errmsg="请填写正确的网址"
                    focusmsg="请填写URL"
                    maxlength="240"
                    />
                    <em class="focusmsg" style="font-weight:bold"></em>
                </dd>

                <dd>
                    <label></label>
                    <input type="text" name="company_url" 
                    datatype="url" 
                    errmsg="请填写正确的网址"
                    focusmsg="请填写URL"
                    maxlength="240"
                    />
                    <em class="focusmsg" style="font-weight:bold"></em>
                </dd>

                <dd>
                    <label></label>
                    <input type="text" name="company_url" 
                    datatype="url" 
                    errmsg="请填写正确的网址"
                    focusmsg="请填写URL"
                    maxlength="240"
                    />
                    <em class="focusmsg" style="font-weight:bold"></em>
                </dd>

            </dl>
        </dd>

        <dd>
            <dl>
                <dt>datatype = email, 电子邮箱</dt>
                <dd>
                    <label></label>
                    <input type="text" name="company_email" 
                    reqmsg="邮箱" 
                    errmsg="请填写正确的邮箱"
                    focusmsg="请填写邮箱"
                    datatype="email" 
                    maxlength="60"
                    />
                </dd>
            </dl>
        </dd>

        <dd>
            <dl>
                <dt>datatype = zipcode, 邮编</dt>
                <dd>
                    <label></label>
                    <input type="text" name="company_zipcode" 
                    datatype="zipcode" 
                    errmsg="请填写正确的邮编"
                    focusmsg="请填写邮编"
                    />
                </dd>
            </dl>
        </dd>

        <dd>
            <dl>
                <dt>datatype = taxcode, 纳税人识别号, 长度: 15, 18, 20</dt>
                <dd>
                    <label></label>
                    <input type="text" name="" 
                    datatype="taxcode" 
                    reqmsg="纳税人识别号"
                    errmsg="请填写正确的纳税人识别号"
                    focusmsg="请填写纳税人识别号"
                    />
                </dd>
            </dl>
        </dd>

        <dd>
            <dl>
                <dt>datatype = reg, 自定义正则表达式</dt>
                <dd>
                    <div>
                        <label>/^[\s\S]{2,120}$/i:</label>
                        <input type="text" name="company_addr" 
                        datatype="reg" 
                        reg-pattern="/^[\s\S]{2,120}$/i" 
                        errmsg="请填写正确的地址"
                        focusmsg="请填写地址"
                        />
                    </div>
                    <div>
                        <label>reg-/^[\s\S]{2,120}$/i:</label>
                        <input type="text" name="company_addr" 
                        datatype="reg-/^[\s\S]{2,120}$/i" 
                        errmsg="请填写正确的地址"
                        focusmsg="请填写地址"
                        >
                    </div>
                </dd>
            </dl>
        </dd>

        <dd>
            <dl>
                <dt>datatype = n, 整数</dt>
                <dd>
                    <div>
                        <label>0 - pow(10, 10 ):</label>
                        <input type="text" name="company_n" 
                        errmsg="请填写正确的正整数" 
                        datatype="n" 
                        reqmsg="正整数"  
                        />
                    </div>
                    <div>
                        <label>-1000000 ~ 1000000:</label>
                        <input type="text" name="company_n" 
                        errmsg="请填写正确的数字, -1000000 ~ 1000000" 
                        datatype="n" 
                        minvalue="-1000000" 
                        maxvalue="1000000" 
                        />
                    </div>
                    <div>
                        <label>1 ~ 100:</label>
                        <input type="text" name="company_n1" 
                        errmsg="请填写正确的数字, 范围1-100" 
                        datatype="n" 
                        minvalue="1" 
                        maxvalue="100" 
                        />
                    </div>
                    <div>
                        <label>n-7.2</label>
                        <input type="text" name="company_n2" 
                        errmsg="0.01 ~ 9999999.99" 
                        datatype="n-7.2" 
                        />
                    </div>
                    <div>
                        <label>0.00 ~ 999999999999.99:</label>
                        <input type="text" name="company_n" 
                        value="999999999999.99"
                        errmsg="请填写正确的正整数" 
                        datatype="n-12.2" 
                        reqmsg="数字"  
                        placeholder="0.00 ~ 999999999999.99"
                        />
                    </div>
                    <div>
                        <label>0.00 ~ 999999999999.99:</label>
                        <input type="text" name="company_n" 
                        value="00"
                        errmsg="请填写正确的正整数" 
                        datatype="n-12.2" 
                        reqmsg="数字"  
                        placeholder="0.00 ~ 999999999999.99"
                        />
                    </div>
                    <div>
                        <label>0.00 ~ 999999999999.99:</label>
                        <input type="text" name="company_n" 
                        value="000"
                        errmsg="请填写正确的正整数" 
                        datatype="n-12.2" 
                        reqmsg="数字"  
                        placeholder="0.00 ~ 999999999999.99"
                        />
                    </div>
                </dd>
            </dl>
        </dd>


        <dd>
            <dl>
                <dt>datatype = nrange, 数值范围</dt>
                <dd>
                    <div>
                        <label>nrange-7.2</label>
                        <input type="text" name="company_n" 
                        errmsg="请填写正确的数字, -1000000.00 ~ 1000000.00" 
                        datatype="nrange-7.2" 
                        minvalue="-1000000.00" 
                        maxvalue="1000000" 
                        />
                        <input type="text" name="company_n" 
                        errmsg="请填写正确的数字, -1000000.00 ~ 1000000.00" 
                        datatype="nrange-7.2" 
                        minvalue="-1000000.00" 
                        maxvalue="1000000" 
                        />
                        <em class="error"></em>
                        <em class="validmsg"></em>
                    </div>
                    <div>
                        <label></label>
                        大<input type="text" name="company_n10" 
                            fromNEl="/input:last"
                            errmsg="请填写正确的数值范围" 
                            datatype="nrange" 
                            />
                        - 小<input type="text" name="company_n11" 
                            toNEl="/input:first"
                            errmsg="请填写正确的数值范围" 
                            datatype="nrange" 
                            />
                        <b style="color:red">注意: 这个是大小颠倒位置的nrange</b>
                        <em class="error"></em>
                        <em class="validmsg"></em>
                    </div>
                    <div>
                        <label></label>
                        <input type="text" name="company_n12" 
                        errmsg="请填写正确的数值范围" 
                        datatype="nrange" 
                        />
                        <input type="text" name="company_n13" 
                        errmsg="请填写正确的数值范围" 
                        datatype="nrange" 
                        />
                        <em class="error"></em>
                        <em class="validmsg"></em>
                    </div>
                    <div>
                        <select 
                            datatype="nrange" 
                            reqmsg="起始数值和结束数值"
                            >
                            <option value="">请选择</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3" selected>3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                        <select 
                            datatype="nrange" 
                            reqmsg="起始数值和结束数值" 
                            errmsg="起始数值不能大于结束数值"
                            >
                            <option value="">请选择</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                        <em class="error"></em>
                        <em class="validmsg"></em>
                    </div>
                </dd>
            </dl>
        </dd>

        <dd>
            <dl>
                <dt>datatype = d, ISO 日期, YYYY/MM/DD, YYYY-MM-DD, YYYY.MM.DD, YYYYMMDD</dt>
                <dd>
                    <label></label>
                    <input type="text" name="company_d" value="2013-05-15" 
                        errmsg="2013-05-01 - 2020-05-20" 
                        datatype="date" 
                        minvalue="2013-05-01" 
                        maxvalue="2020-05-20" 
                        />
                    <em class="validmsg"></em>
                </dd>
            </dl>
        </dd>

        <dd>
            <dl>
                <dt>datatype = daterange, 日期范围, YYYY/MM/DD, YYYY-MM-DD, YYYY.MM.DD, YYYYMMDD</dt>
                <dd>
                    <div>
                        <label></label>
                        <input type="text" name="company_daterange" 
                            errmsg="请填写正确的日期范围,并且起始日期不能大于结束日期" 
                            datatype="daterange" 
                            validmsg="false"
                            />
                        - <input type="text" name="company_daterange" 
                            errmsg="请填写正确的日期范围,并且起始日期不能大于结束日期" 
                            datatype="daterange" 
                            validmsg="false" 
                            />
                        <em class="error"></em>
                        <em class="validmsg"></em>
                    </div>
                    <div>
                        <label></label>
                        <input type="text" name="company_daterange1_1" value="2013-06-16" 
                            errmsg="请填写正确的日期范围,并且起始日期不能大于结束日期" 
                            datatype="daterange" 
                            toDateEl="/input:last" 
                            validmsg="false" 
                            />
                        - <input type="text" name="company_daterange1_2" value="2013-06-08" 
                            errmsg="请填写正确的日期范围,并且起始日期不能大于结束日期" 
                            datatype="daterange" 
                            fromDateEl="/input:first" 
                            validmsg="false" 
                            />
                        <em class="error"></em>
                        <em class="validmsg"></em>
                    </div>
                    <div>
                        <label></label>
                        <input type="text" name="company_daterange2_1" value="2013-06-16" 
                            errmsg="请填写正确的日期范围,并且起始日期不能大于结束日期1" 
                            datatype="daterange" 
                            />
                        - <input type="text" name="company_daterange2_2" value="2013-06-08" 
                            errmsg="请填写正确的日期范围,并且起始日期不能大于结束日期2" 
                            datatype="daterange" 
                            />
                        <span>自动初始化</span>
                        <em class="error"></em>
                        <em class="validmsg"></em>
                    </div>
                </dd>
            </dl>
        </dd>

        <dd>
            <dl>
                <dt>datatype = countrycode, 地区代码(国家代码), 1 ~ 6位数字</dt>
                <dd>
                    <div>
                        <label></label>
                        <input type='text' name='company_countrycode1' style="width:60px;" value='' size="7" 
                        datatype="countrycode" 
                        errmsg="请填写正确的地区代码" 
                        validmsg="false" 
                        />
                    </div>
                </dd>
            </dl>
        </dd>

        <dd>
            <dl>
                <dt>datatype = phonezone, 电话区号, 3 ~ 4位数字</dt>
                <dd>
                    <div>
                        <label></label>
                        <input type='text' name='company_countrycode2' style="width:40px;" value='' size="4" 
                        datatype="phonezone" 
                        errmsg="请填写正确的电话区号" 
                        validmsg="false" 
                        />
                    </div>
                    <div>
                        <label>phonezone-2,4</label>
                        <input type='text' name='company_countrycode2' style="width:40px;" value='' size="4" 
                        datatype="phonezone-2,4" 
                        errmsg="请填写正确的电话区号" 
                        validmsg="false" 
                        />
                    </div>
                </dd>
            </dl>
        </dd>

        <dd>
            <dl>
                <dt>datatype = phoneext, 电话分机号, 1 ~ 6位数字</dt>
                <dd>
                    <div>
                        <label></label>
                        <input type='text' name='countrycode4' style="width:40px;" value='' size="4" 
                        datatype="phoneext" 
                        errmsg="请填写正确的分机号" 
                        validmsg="false" 
                        />
                    </div>
                </dd>
            </dl>
        </dd>

        <dd>
            <dl>
                <dt>datatype = phonecode, 电话号码, 7 ~ 8位数字</dt>
                <dd>
                    <div>
                        <label></label>
                        <input type='text' name='company_countrycode2' value='' size="9" 
                        datatype="phonecode" 
                        errmsg="请填写正确的电话区号" 
                        validmsg="false" 
                        />
                    </div>
                    <div>
                        <input type='text' name='company_countrycode1' style="width:60px;" value='' size="7" 
                        datatype="countrycode" 
                        errmsg="请填写正确的地区代码" 
                        validmsg="false" 
                        placeholder="地区代码"
                        />
                        - 
                        <input type='text' name='company_countrycode2' style="width:40px;" value='' size="4" 
                        datatype="phonezone-2,4" 
                        errmsg="请填写正确的电话区号" 
                        validmsg="false" 
                        placeholder="区号"
                        />
                        - 
                        <input type='text' name='countrycode3' style="width:80px;" value='' size="8" 
                        datatype="phonecode"
                        errmsg="请检查电话号码格式" 
                        placeholder="电话号码"
                        />
                        - 
                        <input type='text' name='countrycode4' style="width:40px;" value='' size="4" 
                        datatype="phoneext" 
                        errmsg="请填写正确的分机号" 
                        validmsg="false" 
                        placeholder="分机号"
                        />
                        <em class="error"></em>
                        <em class="validmsg"></em>
                    </div>
                </dd>
            </dl>
        </dd>

        <dd>
            <dl>
                <dt>datatype = mobilecode | mobile, 手机号码, 11位数字</dt>
                <dd>
                    <div>
                        <label></label>
                        <input type="text" name="" 
                        datatype="mobile" 
                        errmsg="请填写正确的手机号码"
                        placeholder="手机号码"
                        />
                    </div>
                    <div>
                        <label></label>
                        <input type="text" name="" 
                        datatype="mobilecode" 
                        errmsg="请填写正确的手机号码"
                        placeholder="手机号码"
                        />
                    </div>

                </dd>
            </dl>
        </dd>

        <dd>
            <dl>
                <dt>datatype = phone, [区号]电话号码</dt>
                <dd>
                    <div>
                        <label></label>
                        <input type="text" name="company_mobilezone" 
                        datatype="phone" 
                        errmsg="请填写正确的电话号码"
                        />
                    </div>
                </dd>
            </dl>
        </dd>

        <dd>
            <dl>
                <dt>datatype = phoneall, [地区代码][区号]电话号码[#分机号]</dt>
                <dd>
                    <div> 
                        <label></label>
                        <input type="text" name="company_mobilezone" 
                        datatype="phoneall" 
                        errmsg="请填写正确的电话号码"
                        />
                    </div>
                </dd>
            </dl>
        </dd>

        <dd>
            <dl>
                <dt>datatype = mobilezonecode, [地区代码]手机号</dt>
                <dd>
                    <label></label>
                    <div>
                        <input type="text" name="company_mobilezone" 
                        datatype="mobilezonecode" 
                        errmsg="请填写正确的手机号码"
                        />
                    </div>
                </dd>
            </dl>
        </dd>

        <dd>
            <dl>
                <dt>datatype = mobilephone( phone | mobilecode, 手机号码或电话号码 )</dt>
                <dd>
                    <label></label>
                    <div>
                        <input type="text" name="company_mobilephone" 
                        datatype="mobilephone"
                        errmsg="请填写正确的手机/电话号码"
                        />
                    </div>
                </dd>
            </dl>
        </dd>

        <dd>
            <dl>
                <dt>datatype = mobilephoneall( phoneall | mobilezonecode, 手机号码或电话号码 )</dt>
                <dd>
                    <label></label>
                    <div>
                        <input type="text" name="company_mobilephoneall" 
                        datatype="mobilephoneall"
                        errmsg="请填写正确的手机/电话号码"
                        />
                    </div>
                </dd>
            </dl>
        </dd>

        <dd>
            <dl>
                <dt>datatype = vcode, 验证码, 默认 4位</dt>
                <dd>
                    <div>
                        <label></label>
                        <input type="text" name="company_vcode" style="width: 40px;"
                        datatype="vcode" 
                        reqmsg="验证码" 
                        errmsg="请填写正确的验证码"
                        />
                    </div>
                    <div>
                        <label>vcode-5</label>
                        <input type="text" name="company_vcode" style="width: 40px;"
                        datatype="vcode-5" 
                        errmsg="请填写正确的验证码"
                        />
                    </div>
                </dd>
            </dl>
        </dd>

        <dd>
            <dl>
                <dt>datatype = cnname, 中文姓名</dt>
                <dd>
                    <div>
                        <label></label>
                        <input type="text" name="company_cnname" 
                        datatype="cnname" 
                        reqmsg="姓名" 
                        errmsg="请填写正确的姓名"
                        />
                    </div>
                </dd>
            </dl>
        </dd>

        <dd>
            <dl>
                <dt>datatype = username, 用户名, [\w-]{2,30}</dt>
                <dd>
                    <input type="text" name="company_username" 
                    datatype="username" 
                    reqmsg="用户名" 
                    errmsg="请填写正确的用户名"
                    />
                </dd>
            </dl>
        </dd>

        <dd>
            <dl>
                <dt>datatype = idnumber, 身份证号码</dt>
                <dd>
                    <div>
                        <label></label>
                        <input type="text" name="company_idnumber" 
                        datatype="idnumber" 
                        errmsg="请填写正确的身份证号码"
                        />
                    </div>
                </dd>
            </dl>
        </dd>

        <dd>
            <dl>
                <dt>datatype = bankcard, 银行卡号</dt>
                <dd>
                    <div>
                        <label></label>
                        <input type="text" name="company_bankcard" value="123456789012345" 
                        datatype="bankcard" 
                        errmsg="请填写正确的银行卡号"
                        />
                    </div>
                </dd>
                <dd>
                    <div>
                        <label></label>
                        <input type="text" name="company_bankcard" value="123456789012345"  
                        datatype="bankcard" 
                        errmsg="请填写正确的银行卡号"
                        />
                    </div>
                </dd>
                <dd>
                    <div>
                        <label></label>
                        <input type="text" name="company_bankcard" value="1234567890123456"  
                        datatype="bankcard" 
                        errmsg="请填写正确的银行卡号"
                        />
                    </div>
                </dd>
                <dd>
                    <div>
                        <label></label>
                        <input type="text" name="company_bankcard" value="12345678901234567"  
                        datatype="bankcard" 
                        errmsg="请填写正确的银行卡号"
                        />
                    </div>
                </dd>
                <dd>
                    <div>
                        <label></label>
                        <input type="text" name="company_bankcard" value="123456789012345678"  
                        datatype="bankcard" 
                        errmsg="请填写正确的银行卡号"
                        />
                    </div>
                </dd>
                <dd>
                    <div>
                        <label></label>
                        <input type="text" name="company_bankcard" value="1234567890123456789"  
                        datatype="bankcard" 
                        errmsg="请填写正确的银行卡号"
                        />
                    </div>
                </dd>
                <dd>
                    <div>
                        <label></label>
                        <input type="text" name="company_bankcard" value="1234 5678 9012 3456789"  
                        datatype="bankcard" 
                        errmsg="请填写正确的银行卡号"
                        />
                    </div>
                </dd>
                <dd>
                    <div>
                        <label></label>
                        <input type="text" name="company_bankcard" value="1234 5678 9012 3456"  
                        datatype="bankcard" 
                        errmsg="请填写正确的银行卡号"
                        />
                    </div>
                </dd>
                <dd>
                    <div>
                        <label></label>
                        <input type="text" name="company_bankcard" value="1234     5678 9012    3456"  
                        datatype="bankcard" 
                        errmsg="请填写正确的银行卡号"
                        />
                    </div>
                </dd>
            </dl>
        </dd>
    </dl>

    <div style="position:fixed; bottom: 40px; right:10px;">
        <button type="submit">Save</button>
        <button type="button" class="js-clear-error">清空错误信息</button>
    </div>
</form>

<link href='{{path}}/res/default/style.css' rel='stylesheet' />
<script>
requirejs(['{{module}}'], function( Valid ){ 
    $(document).delegate('button.js-clear-error', 'click', function( $evt ){
        window.console && console.clear && console.clear();
        JC.Valid.clearError( 'form.js-valid' );
    });

    $('form.js-valid').on('submit', function( $evt ){
        $evt.preventDefault();

        if( !JC.Valid.check( 'form.js-valid' ) ){
            return false;
        }
    });
});
</script>
