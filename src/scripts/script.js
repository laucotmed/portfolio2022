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

    $(".menu_item").click(function(){
        if ($('body').hasClass("overflow-menu")){
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
    
    
    // Hide Header on on scroll down
    var lastScrollTop = 0;
   /*  var delta = 5; */
    var headerHeight = $('header').outerHeight();
    
    $(window).scroll(function(){
        
        var st = $(this).scrollTop();
        
        // Make sure they scroll more than delta
        /* if(Math.abs(lastScrollTop - st) <= delta)
            return; */
        
        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > headerHeight){
            // Scroll Down
            $('.menu').removeClass('nav-down').addClass('nav-up');
            $('.menu').addClass('solid');
        } else{
            // Scroll Up
            if(st + $(window).height() < $(document).height()) {
                $('.menu').removeClass('nav-up');
            }
        }

        if (st < lastScrollTop && st < headerHeight){
            $('.menu').removeClass('solid');
        }
        
        lastScrollTop = st;
    });

})