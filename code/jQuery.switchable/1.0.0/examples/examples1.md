# 基本用法

<style>
.switchable {
    margin: 20px auto;
    position: relative;
    width: 550px;
    height: 309px;
}
ul, li {
    list-style-type: none;
    margin: 0;
    padding: 0;
}
/*
 * 必须的样式
 */
.switchable > div { /* 容器 */
    width: 550px;
    height: 309px;
    position: relative;
    overflow: hidden;
}
.switchable .panels { /* 面板父类 */
    margin: 0;
}
.switchable .panels li {
    float: left; /* 如果是上下切换或者 fade 效果，则不需要 */
    width: 550px;
}
/* 必须的样式结束 */

.prev, .next {
    text-decoration: none;
    position: absolute;
    top: 125px;
    left: 0;
    font-size: 36px;
    color: #FFF;
    width: 30px;
    height: 80px;
    line-height: 80px;
    background-color: rgba(0,0,0,.2);
}
.next {
    left: auto;
    right: 0;
}
.prev:hover, .next:hover {
    text-decoration: none;
    background-color: rgba(0,0,0,.5);
}
.prev.disabled, .next.disabled {
    color: #AAA;
}

.trigger {
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;
}
.trigger a {
    display: inline-block;
    height: 10px;
    width: 10px;
    background: #CCC;
    margin: 0 5px;
    text-decoration: none;
    overflow: hidden;
    line-height: 200px;
    border-radius: 100%;
}
.trigger a.active {
    background: #69F;
}
.switch-num {
    position: absolute;
    bottom: 0;
    right: 0;
    font-size: 12px;
    margin-right: 1.2em;
    color: #FFF;
}

</style>

<div class="j-switchable switchable" data-switch='{"effect": "scroll", "loop": true}'><!-- Root 节点 加上 "j-switchable" Class 后就会自动初始化-->
    <div><!-- overflow: hidden 节点-->
        <ul class="panels"><!-- 加上 "items" Class, 则子节点为面板列表 -->
            <li><!-- -->
                <img src="{{path}}/examples/images/img1.jpg">
            </li>
            <li><!-- -->
                <img src="{{path}}/examples/images/img2.jpg">
            </li>
            <li>
                <textarea class="switchlazyload"><img src="{{path}}/examples/images/img3.jpg"></textarea>
            </li>
            <li>
                <textarea class="switchlazyload"><img src="{{path}}/examples/images/img4.jpg"></textarea>
            </li>
        </ul>
    </div>
    <!-- 上下翻页节点 带上相应 Class（不是必须的） -->
    <a href="###" class="prev">&lt;</a><!-- 当不可用时候 JS 会加上 "disabled" 的 Class-->
    <a href="###" class="next">&gt;</a>
    <!-- trigger Class（不是必须的） -->
    <p class="trigger">
        <a href="#1" class="active">1</a><!-- 当前面板 JS 会加上 "active" 的 Class-->
        <a href="#2" class="">2</a>
        <a href="#3" class="">3</a>
        <a href="#4" class="">4</a>
    </p>
    <!-- 指示数字节点（不是必须的） -->
    <p class="switch-num">1/4</p>
</div>

<script>
    require(['{{module}}']);
</script>
