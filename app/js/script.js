$(document).ready(function () {
    if ($(window).width() < 1024) {
        $("header .nav__links").hide();
    }
    resizeWindow();
});

let resizeWindowTimeout;
$(window).resize(function () {
    clearTimeout(resizeWindowTimeout);
    resizeWindowTimeout = setTimeout(resizeWindow, 100);
});

function resizeWindow() {
    if ($(window).width() > 1024) {
        $("header .nav__links").show();
        $(".gallery__img").each(function (i, element) {
            $(".gallery__img").eq(i).attr("src", $(".gallery__img").eq(i).attr("src").replace("mobile", "desktop"));
        });
    } else {
        $("header .nav__links").hide();
        $(".gallery__img").each(function (i, element) {
            $(".gallery__img").eq(i).attr("src", $(".gallery__img").eq(i).attr("src").replace("desktop", "mobile"));
        });
    }
}

$("#nav__toggle").click(function (e) {
    if ($("#nav__toggle").hasClass("open")) {
        $("#nav__toggle").removeClass("open");
        $("header .nav__links").slideUp();
    } else {
        $("#nav__toggle").addClass("open");
        $("header .nav__links").slideDown();
    }
});