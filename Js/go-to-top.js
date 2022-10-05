var goTop = 200;
$(window).scroll(function () {
    if ($(this).scrollTop() >= goTop) {
        $(".go-to-top").fadeIn();
    } else {
        $(".go-to-top").fadeOut();
    }
});
$(".go-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
});