$(document).ready(function () {
    var total_q = $(".news ul li").index() + 1;//总数据
    var current_page = 10;//每页显示的数据
    var current_num = 1;//当前页数
    var total_page = Math.ceil(total_q / current_page);//总页数
    var next = $(".next");//下一页
    var prev = $(".prev");//上一页

    fn_CreatePages(total_page);
    $(".news ul li:gt(" + (current_page - 1) + ")").hide();//初始化，前面4条数据显示，其他的数据隐藏。
    $(".pages a:contains('1')").addClass("now");

    //换页
    $(".pages a").click(function () {
        var currentClick = $(this).html();
        if (currentClick == "首页") {
            current_num = 1;
            fn_ChangePage(current_page, current_num);
        } else if (currentClick == "上一页") {
            if (current_num == 1) { return}
            current_num = current_num - 1;
            fn_ChangePage(current_page, current_num);
        } else if (currentClick == "下一页") {
            if (current_num == total_page) { return }
            current_num = current_num + 1;
            fn_ChangePage(current_page, current_num);
        } else if (currentClick == "尾页") {
            current_num = total_page;
            fn_ChangePage(current_page, current_num);
        } else {
            current_num = parseInt($(this).html());
            fn_ChangePage(current_page, current_num);
        }
    });
})

function fn_CreatePages(maxPage) {
    var PagesList = "<a href='javascript:void(0)' >首页</a><a href='javascript:void(0)'>上一页</a>";
    for (var i = 1; i <= maxPage; i++) {
        PagesList += "<a href='javascript:void(0)'>" + i + "</a>";
    }
    PagesList += "<a href='javascript:void(0)'>下一页</a><a href='javascript:void(0)'>尾页</a>";
    $(".pages").html(PagesList);
}

function fn_ChangePage(current_page, current_num) {
    $(".pages a:contains(" + current_num + ")").addClass("now");
    $(".pages a:contains(" + current_num + ")").siblings().removeClass("now");
    $.each($('.news ul li'), function (index, item) {
        var start = current_page * (current_num - 1);//起始范围
        var end = current_page * current_num;//结束范围
        if (index >= start && index < end) {//如果索引值是在start和end之间的元素就显示，否则就隐
            $(this).show();
        } else {
            $(this).hide();
        }
    });
}