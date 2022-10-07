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

        //FadeOut Animation
        $('body').animate({
            'opacity': '0.0'
        }, 600, function () {
            //Main Menu
            $(".menu_item:nth-of-type(1) a").text("//Inicio");
            $(".menu_item:nth-of-type(2) a").text("//Sobre Mí");
            $(".menu_item:nth-of-type(3) a").text("//Portfolio");
            $(".menu_item:nth-of-type(4) a").text("//Contacto");

            //Flag Change
            $(".selected-lang img").attr("src", "./src/media/esp.png")

            //Header
            $("#home h2").text("DESARROLADORA WEB FRONT END");

            //About
            $("#about h2:nth-of-type(1)").text("//SOBRE MÍ");

            $("#profile_description p").html("¡Hola! Me llamo <span>Laura Cote Medina</span>. Soy una desalloradora web de España, apasionada del <span>Diseño Web</span> y con ganas de adquirir más experiencia profesional, preferentemente en el ámbito del <span>FrontEnd</span>. Siempre estoy dispuesta a aprender tecnologías y metodologías nuevas. Se me da bien trabajar en equipo, siendo también independiente a la hora de resolver problemas. ");
            $("#profile_description a").text("Descargar CV");

            $("#about h2:nth-of-type(2)").text("Herramientas y Tecnologías");

            //Portfolio

            //Ori
            $(".project:nth-of-type(1) p").html('Página web inspirada en el videojuego "Ori & The Blind Forest". En la sección <span>Skills</span> usé <span>PHP</span>, <span>JQuery</span> y <span>AJAX</span> para extraer de una base de datos las distintas habilidades del protagonista y mostrarlas de forma dinámica mediante un carrusel.');
            $(".project:nth-of-type(1) a:nth-of-type(2)").text('ENLACE A LA WEB');

            //Katnip
            $(".project:nth-of-type(2) p").html('Este proyecto se realizó empleando <span>WordPress</span> y algunos plugins como <span>Elementor Pro</span>. La temática elegida fue <span>"cat cafe"</span>, así que la página web fue diseñada para atraer tanto a posibles clientes de la cafetería como a adoptantes.');
            $(".project:nth-of-type(2) a:nth-of-type(2)").text('ENLACE A LA WEB');

            //Korean Food
            $(".project:nth-of-type(3) p").html('Esta página web fue creada desde cero usando <span>HTML5</span>, <span>CSS3</span> y <span>JavaScript</span>. Utilizamos un <span>scroll horizontal</span> para recorrer un poco de la historia de la <span>gastronomía surcoreana</span> y unas pocas recetas.');
            $(".project:nth-of-type(3) a:nth-of-type(2)").text('ENLACE A LA WEB');

            //Tourning
            $(".project:nth-of-type(4) p").html('Diseño de una <span>app para viajes</span> en la que el itinerario del usuario cambiara según las condiciones climáticas. Se empleó la metodología ágil de <span>"Design Thinking"</span> para todo el proceso de investigación y diseño de <span>UX/UI</span> y se realizó un prototipo en <span>Figma</span>.');
            $(".project:nth-of-type(4) a:nth-of-type(2)").text('ENLACE AL PROYECTO');

            //Contact
            $("#contact h2").text("//CONTACTO");
            $("#contact_text p").html('¿Tienes alguna <span>pregunta</span> o quieres <span>ponerte en contacto conmigo</span>? ¡No dudes en <span>usar este formulario</span> o contactarme a través de cualquiera de mis <span>redes</span> y responderé lo más rápido posible!');

            $(".contactForm form label:nth-of-type(1)").text('Nombre');
            $(".contactForm form label:nth-of-type(2)").text('Correo electrónico');
            $(".contactForm form label:nth-of-type(3)").text('Mensaje');
            $("#message").attr("placeholder", "¿En qué puedo ayudarte?")
            $("#submitButton").text('Enviar');

            //FadeIn Animation
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