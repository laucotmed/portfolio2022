$(document).ready(function () {

    /* INITIALIZE MAKE APPEAR CONTENT ON SCROLL */

    $.fn.scrollReveal();

    /* HIDE MENU WHEN YOU SCROLL DOWN */

    var lastScrollTop = 0;
    var headerHeight = $('header').outerHeight();
    var menuHeight = $(".menu").outerHeight();

    $(window).scroll(function () {

        var st = $(this).scrollTop();

        // Scroll Down
        if (st > lastScrollTop && st > menuHeight) {
            $(".menu").slideUp(400);

            // Scroll Up
        } else if (st + $(window).height() < $(document).height()) {
            $(".menu").slideDown(400);
        }


        if (st < headerHeight) {
            $('.menu').removeClass('solid');
        } else {
            $('.menu').addClass('solid');
        }

        lastScrollTop = st;

    });

    /* BURGER MENU */

    $("#burger_menu").click(function () {


        $("#burger_menu>span:nth-child(1)").toggleClass("first")
        $("#burger_menu>span:nth-child(2)").toggleClass("second")
        $("#burger_menu>span:nth-child(3)").toggleClass("third")

        $(".menu_items").stop()
        $(".menu_items").toggleClass("show")
        $('body').toggleClass("overflow-menu");
    })

    $(".menu_item").click(function () {
        if ($('body').hasClass("overflow-menu")) {
            $('body').toggleClass("overflow-menu");
            $(".menu_items").toggleClass("show");
            $("#burger_menu>span:nth-child(1)").toggleClass("primera");
            $("#burger_menu>span:nth-child(2)").toggleClass("segunda");
            $("#burger_menu>span:nth-child(3)").toggleClass("tercera");
        }
    })

})