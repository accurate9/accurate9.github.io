$(function () {
    //var index = $("#top").html();
    $("#top").load("views/common/top.html", function () { });
    $("#footer").load("/views/common/footer.html", function () { });

    if ($('#owl-demo').length > 0) {
        $('#owl-demo').owlCarousel({
            items: 1,
            navigation: true,
            navigationText: ["上一个", "下一个"],
            autoPlay: true,
            stopOnHover: true
        }).hover(function () {
            $('.owl-buttons').show();
        }, function () {
            $('.owl-buttons').hide();
        });
    }

    ib1();
    wxqq();

    if ($('.ct_r .wxqq li a>img').length > 0) {
        $('.ct_r .wxqq li a').hover(function () {
            $(this).find('span').stop(true, true).fadeIn();
        }, function () {
            $(this).find('span').stop(true, true).fadeOut();
        });
    }

    //产品中心
    $('.prolist li').hover(function () {
        $(this).find('.demo1').stop(true).animate({ opacity: 1 }, 600);
        $(this).find('.demo2').stop(true).animate({ opacity: 1 }, 600);
        $(this).find('.demo3').stop(true).animate({ left: 0, top: 0 }, 500);
        $(this).find('.demo4').stop(true).animate({ right: 0, top: 0 }, 500);
        $(this).find('.demo5').stop(true).animate({ left: 0, bottom: 0 }, 500);
        $(this).find('.demo6').stop(true).animate({ right: 0, bottom: 0 }, 500);
    }, function () {
        $(this).find('.demo1').stop(true).animate({ opacity: 0 }, 300);
        $(this).find('.demo2').stop(true).animate({ opacity: 0 }, 300);
        $(this).find('.demo3').stop(true).animate({ left: -133, top: -87 }, 300);
        $(this).find('.demo4').stop(true).animate({ right: -133, top: -87 }, 300);
        $(this).find('.demo5').stop(true).animate({ left: -133, bottom: -87 }, 300);
        $(this).find('.demo6').stop(true).animate({ right: -133, bottom: -87 }, 300);
    });
})

function ib1() {
    var win_height = $(window).height(),
        i = $('.list li').size(),
        j = 0;
    if (826 < win_height) {
        setTimeout(function () {
            if (j < i) {
                var list = setInterval(function () {
                    $('.list li').eq(j).animate({ left: "0" }, 700);
                    j++;
                }, 400);
            } else {
                clearInterval(list);
            }
        }, 300);
    };
};

function wxqq() {
    $(".wxqq li").each(function (index) {
        $(this).stop().delay(($(".wxqq li").size() - 1 + index) * 300).animate({ marginRight: 0,opacity:1 }, 200);
    });
    $(".ljzx").stop().delay(1400).animate({ top: 0,opacity:1 }, 500);
}