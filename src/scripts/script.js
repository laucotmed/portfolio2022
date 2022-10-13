$(document).ready(function () {

   /*  $('#form_ES').hide(); */

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
            /*  $(".menu_item:nth-of-type(3) a").text("//Portfolio"); */
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

            /* $('#form_ES').show();
            $('#form_EN').hide(); */
            
            $('#form_EN').css("display", "none");
            $('#form_ES').css("display", "flex");

            //FadeIn Animation
            $('body').animate({
                'opacity': '1.0'
            }, 600);
        });

        if ($(".menu_items").hasClass("show")) {

            $('body').toggleClass("overflow-menu");
            $(".menu_items").toggleClass("show");
            $("#burger_menu>span:nth-child(1)").toggleClass("first")
            $("#burger_menu>span:nth-child(2)").toggleClass("second")
            $("#burger_menu>span:nth-child(3)").toggleClass("third")

        }
    });

    //English
    $(".en").click(function () {

        //FadeOut Animation
        $('body').animate({
            'opacity': '0.0'
        }, 600, function () {
            //Main Menu
            $(".menu_item:nth-of-type(1) a").text("//HOME");
            $(".menu_item:nth-of-type(2) a").text("//ABOUT");
            /* $(".menu_item:nth-of-type(3) a").text("//PORTFOLIO"); */
            $(".menu_item:nth-of-type(4) a").text("//CONTACT");

            //Flag Change
            $(".selected-lang img").attr("src", "./src/media/uk.png")

            //Header
            $("#home h2").text("FRONT END WEB DEVELOPER");

            //About
            $("#about h2:nth-of-type(1)").text("//ABOUT");

            $("#profile_description p").html("Hi! My name is <span>Laura Cote Medina</span>. I'm a web developer from Spain who is passionate about <span>Web Design</span> and eager to obtain more professional experience, preferably on <span>FrontEnd</span>. I'm always willing to learn other technologies and tools and I'm good at working in a team following agile methodologies, while being very independent when solving problems alone.");
            $("#profile_description a").text("Download CV");

            $("#about h2:nth-of-type(2)").text("Tools & Technologies");

            //Portfolio

            //Ori
            $(".project:nth-of-type(1) p").html('Website inspired by the videogame Ori & The Blind Forest. In the <span>Skills</span> section , we used <span>PHP</span>, <span>JQuery</span> and also <span>AJAX</span> to extract the data of the proganist’s skills from a database and show them dynamically using a carousel.');
            $(".project:nth-of-type(1) a:nth-of-type(2)").text('LINK TO WEBSITE');

            //Katnip
            $(".project:nth-of-type(2) p").html('This project was made using <span>WordPress</span> and some plugins like <span>Elementor Pro</span>. The chosen theme was <span>"cat cafe"</span>, so the website was designed to attract both customers and potential adopters.');
            $(".project:nth-of-type(2) a:nth-of-type(2)").text('LINK TO WEBSITE');

            //Korean Food
            $(".project:nth-of-type(3) p").html('This website was built from scratch using <span>HTML5</span>, <span>CSS3</span> and <span>JavaScript</span>. A <span>horizontal scroll</span> is used to go through a bit of the history of <span>South Korean food</span> and a few recipes.');
            $(".project:nth-of-type(3) a:nth-of-type(2)").text('LINK TO WEBSITE');

            //Tourning
            $(".project:nth-of-type(4) p").html('Designed a <span>travel app</span> where your itinerary changed according to the weather. <span>Design Thinking</span> was the methodology used for the entire <span>UX/UI</span> process, and then a prototype was made with <span>Figma</span>.');
            $(".project:nth-of-type(4) a:nth-of-type(2)").text('LINK TO PROJECT');

            //Contact
            $("#contact h2").text("//CONTACTO");
            $("#contact_text p").html('Do you have any <span>question</span> or want to <span>get in touch with me</span>? Feel free to use this <span>form</span> or reach me on any of my <span>networks</span> and I will get back to you as soon as I can!');

           

            $(".contactForm form label:nth-of-type(1)").text('Name');
            $(".contactForm form label:nth-of-type(2)").text('Email');
            $(".contactForm form label:nth-of-type(3)").text('Message');
            $("#message").attr("placeholder", "How can I help you?")
            $("#submitButton").text('Send');

             /* $('#form_EN').show();
            $('#form_ES').hide(); */

            $('#form_ES').css("display", "none");
            $('#form_EN').css("display", "flex");

            //FadeIn Animation
            $('body').animate({
                'opacity': '1.0'
            }, 600);
        });

        if ($(".menu_items").hasClass("show")) {
            if ($('body').hasClass("overflow-menu")) {
                $('body').toggleClass("overflow-menu");
                $(".menu_items").toggleClass("show");
                $("#burger_menu>span:nth-child(1)").toggleClass("first")
                $("#burger_menu>span:nth-child(2)").toggleClass("second")
                $("#burger_menu>span:nth-child(3)").toggleClass("third")
            }
        }
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
            $("#burger_menu>span:nth-child(1)").toggleClass("first")
            $("#burger_menu>span:nth-child(2)").toggleClass("second")
            $("#burger_menu>span:nth-child(3)").toggleClass("third")
        }
    })

    /* $("#submitButton").click(function () {
        if($("#submitButton").text() == 'Enviar'){
            $('form').attr('action', '/pages/gracias.html');
        }
    }); */

})