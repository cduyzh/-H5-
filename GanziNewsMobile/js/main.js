// 在页面载入时初始化内容区，只展示推荐菜单的内容，其余菜单选项的内容隐藏
$(document).ready(function() {
        $(".index-show0").siblings().hide();
    })
    // 控制切换语言
$(".languages-icon").click(function() {
    console.log(1);
    $(".languages").slideToggle(300).fade(300);
});