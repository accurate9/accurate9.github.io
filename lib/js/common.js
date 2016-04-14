$(function () {
    //var index = $("#top").html();
    $("#top").load("views/common/top.html", function () {});
    $("#footer").load("/views/common/footer.html", function () {});

    $('#owl-demo').owlCarousel({
        items: 1,
        navigation: true,
        autoPlay: true,
        stopOnHover: true
    });

    ib1();
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