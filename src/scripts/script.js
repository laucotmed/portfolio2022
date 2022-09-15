$(document).ready(function () {

    /* MENÚ HAMBURGUESA */
    /* Hacemos un evento en el que al hacer click en nuestro icono de hamburguesa, las distintas clases se añadan a las líneas que lo forman y se produce una pequeña animación para convertirlas en una X y viceversa al usar toggleClass.  */

    $("#burger_menu").click(function () {

        /* Animación de las barras añadiendo las clases en CSS en las que se modifican la rotación y opacidad */
        $("#burger_menu>span:nth-child(1)").toggleClass("primera")
        $("#burger_menu>span:nth-child(2)").toggleClass("segunda")
        $("#burger_menu>span:nth-child(3)").toggleClass("tercera")

        /* Despliego del menú en móvil añadiendo la clase CSS show. En caso de hacer clic en la "X", se desactivaría, cerrando el menú. Usamos stop() para evitar que se forme una cola de acciones si se hace clics muy rápidamente y seguidos. También añadimos la clase "overflow-menu" al body, evitando que podamos hacer scroll mientras el menú se encuentre abierto. */
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

    $(window).bind('scroll', function () {

        if ($(window).scrollTop() > 150)
            $('.menu').addClass('nav-down');
        else
            $('.menu').removeClass('nav-down');
    });


    // ESCONDER MENÚ AL HACER SCROLL HACIA ABAJO
    var lastScrollTop = 0;
    var headerHeight = $('header').outerHeight();
    var menuHeight = $(".menu").outerHeight();

    $(window).scroll(function () {

        var st = $(this).scrollTop();

        if ($("#burger_menu").css("display") === "none") {

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

        }


    });

    /* ENVIAR DATOS FORMULARIO */

 /*    $("#submitButton").click(function () {
        $(".error").hide();
        var hasError = false;
        var emailReg = /^([w-.]+@([w-]+.)+[w-]{2,4})?$/;

        var emailFromVal = $("#email").val();
        if(emailFromVal == '') {
         $("#email").after('<span class="error">You forgot to enter the email address to send from.</span>');
         hasError = true;
        } else if(!emailReg.test(emailFromVal)) {
         $("#email").after('<span class="error">Enter a valid email address to send from.</span>');
         hasError = true;
        }

        return false;
    }); */

   

})