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

    /*  LANGUAGE CHANGE */



    //Spanish
    $(".es").click(function () {
        $('body').animate({
            'opacity': '0.0'
        }, 600, function () {
            //Main Menu
            $(".menu_item:nth-of-type(1) a").text("//Inicio");
            $(".menu_item:nth-of-type(2) a").text("//Sobre Mí");
            $(".menu_item:nth-of-type(3) a").text("//Portfolio");
            $(".menu_item:nth-of-type(4) a").text("//Contacto");



            $(".selected-lang img").attr("src", "https://cdn.countryflags.com/thumbs/spain/flag-800.png")
            /* $(".language-selected").removeClass("change-es");
            $(".language-selected").addClass("change-en"); */
            //About
            $("#about h2:nth-child(1)").text("//SOBRE MÍ");
            //About
            $("#profile_description p").html("¡Hola! Me llamo <span>Laura Cote Medina</span>. Soy una desalloradora web de España, apasionada del <span>Web Design</span> y con ganas de adquirir más experiencia profesional, preferentemente en el ámbito del <span>FrontEnd</span>. Siempre estoy dispuesta a aprender tecnologías y metodologías nuevas. Se me da bien trabajar en equipo, siendo también independiente a la hora de resolver problemas. ");

            $('body').animate({
                'opacity': '1.0'
            }, 600);
        });
    });

    //English
   /*  WIP */

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