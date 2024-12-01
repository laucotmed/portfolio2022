$(document).ready(function () {


    // CURSOR
    const cursor = document.querySelector('#cursor');
    const cursorCircle = cursor.querySelector('.cursor__circle');
    const cursorText = cursor.querySelector('.cursor__text');  // New element for text

    const mouse = { x: -100, y: -100 };
    const pos = { x: 0, y: 0 };
    const speed = 0.1;

    const updateCoordinates = e => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    };

    window.addEventListener('mousemove', updateCoordinates);

    const updateCursor = () => {
        const diffX = Math.round(mouse.x - pos.x);
        const diffY = Math.round(mouse.y - pos.y);

        pos.x += diffX * speed;
        pos.y += diffY * speed;

        const translate = 'translate3d(' + pos.x + 'px ,' + pos.y + 'px, 0)';
        cursor.style.transform = translate;  // Move cursor to follow mouse
    };

    function loop() {
        updateCursor();
        requestAnimationFrame(loop);
    }

    requestAnimationFrame(loop);

    // Modify cursor appearance when hovering over an element with 'cursor-class'
    const cursorModifiers = document.querySelectorAll('[cursor-class]');

    cursorModifiers.forEach(cursorModifier => {
        cursorModifier.addEventListener('mouseenter', function () {
            const className = this.getAttribute('cursor-class');
            cursor.classList.add('show-text'); // Add the 'show-text' class to enlarge the cursor
            cursor.classList.remove('show-project'); // Remove any previous 'show-project' class

            // Set the text dynamically based on the cursor-class
            if (className === 'open-website') {
               
                if(language==="ES"){
                    cursorText.textContent = "Ver Web"; // Set the text for "Open Project"
                } else{
                    cursorText.textContent = "Open Website"; // Set the text for "Open Project"
                }
            } else if (className === 'open-project') {
                if(language==="ES"){
                    cursorText.textContent = "Ver Proyecto"; // Set the text for "Open Project"
                } else{
                    cursorText.textContent = "Open Project"; // Set the text for "Open Project"
                }
                
                cursor.classList.add('show-project'); // Add 'show-project' class
                cursor.classList.remove('show-text'); // Remove 'show-text' class
            }
        });

        cursorModifier.addEventListener('mouseleave', function () {
            cursor.classList.remove('show-text'); // Remove 'show-text' to return to original circle
            cursor.classList.remove('show-project'); // Remove 'show-project' to hide the text
            cursorText.textContent = ""; // Clear the text content when mouse leaves
        });
    });


    // Shrinking cursor on button hover
    const portfolioButtons = document.querySelectorAll('.portfolio-button-container');

    portfolioButtons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            cursorCircle.classList.add('cursor_small');
        });

        button.addEventListener('mouseleave', () => {
            cursorCircle.classList.remove('cursor_small');
        });
    });

    // Shrinking cursor on button hover
    const formButton = document.getElementById('submitButton');


    formButton.addEventListener('mouseenter', () => {
        cursorCircle.classList.add('cursor_small');
    });

    formButton.addEventListener('mouseleave', () => {
        cursorCircle.classList.remove('cursor_small');
    });



    /*******/

    /* POSITION AWARE BUTTONS */
    $(".portfolio-button-inner").mouseenter(function (e) {
        var parentOffset = $(this).offset();

        var relX = e.pageX - parentOffset.left;
        var relY = e.pageY - parentOffset.top;
        $(this).prev(".portfolio-button-circle").css({ "left": relX, "top": relY });
        $(this).prev(".portfolio-button-circle").removeClass("desplode-circle");
        $(this).prev(".portfolio-button-circle").addClass("explode-circle");

    });

    $(".portfolio-button-inner").mouseleave(function (e) {

        var parentOffset = $(this).offset();

        var relX = e.pageX - parentOffset.left;
        var relY = e.pageY - parentOffset.top;
        $(this).prev(".portfolio-button-circle").css({ "left": relX, "top": relY });
        $(this).prev(".portfolio-button-circle").removeClass("explode-circle");
        $(this).prev(".portfolio-button-circle").addClass("desplode-circle");

    });

    /*******/

    $('#form_ES').hide();

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

    var language= "";

    //Spanish
    $(".es").click(function () {

        language="ES";

        //FadeOut Animation
        $('body').animate({
            'opacity': '0.0'
        }, 600, function () {

            if ($('#lang-menu-mobile ul').css("opacity") == "1") {
                $('#lang-menu-mobile ul').css("opacity", "0");
            }

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

            $("#profile_description p").html("¡Hola! Me llamo <span>Laura Cote Medina</span>. Soy una desalloradora web española, con experiencia profesional en la creación y gestión de sitios web atractivos utilizando tecnologías como <span>HTML, CSS, y JavaScript</span>. Me apasiona el <span>Diseño Web</span> y tengo ganas de seguir creciendo profesionalmente, especialmente en el desarrollo <span>FrontEnd</span>. Se me da bien trabajar con <span>equipos multidisciplinares</span>, siendo también <span>independiente y eficaz</span> a la hora de resolver problemas. Estoy comprometida con la <span>mejora continua</span> y la adopción de nuevas tecnologías.");
            $("#profile_description a span").text("Descargar CV");
            $("#profile_description a").attr("href", "./src/media/CV_Laura_Cote_ES_2024.pdf")

            $("#about h2:nth-of-type(2)").text("Herramientas y Tecnologías");

            //Timeline

            $(".timeline-title").text("Experiencia y formación");

            $("#about > .timeline-wrapper > .line-container > .dot-wrapper:nth-of-type(1) > .texto-historia > span").html("Desarrolladora Web <br>en Inficon Global");
            $("#about > .timeline-wrapper > .line-container > .dot-wrapper:nth-of-type(2) > .texto-historia > span").html("Máster Profesional en Desarrollo y Conceptualización Web en CEI: Escuela de Diseño y Marketing");
            $("#about > .timeline-wrapper > .line-container > .dot-wrapper:nth-of-type(3) > .texto-historia > span").html("Artista 2D & 3D <br>en Croxel Studios");
            $("#about > .timeline-wrapper > .line-container > .dot-wrapper:nth-of-type(4) > .texto-historia > span").html("Curso avanzado de Modelado 3D y Animación para videojuegos en Aula Arcade");
            $("#about > .timeline-wrapper > .line-container > .dot-wrapper:nth-of-type(5) > .texto-historia > span").html("Grado en Comunicación Audiovisual en la Universidad de Sevilla");



            //Portfolio

            //Auditorio
            $(".project:nth-of-type(1) p").html('Colaboré en el diseño y desarrollo de un sitio web para un importante auditorio sevillano donde se realizan conciertos, eventos y actividades culturales, mientras trabajaba en Inficon Global. Construido con <span>WordPress</span> y <span>Elementor</span>, el proyecto hizo hincapié en facilitar la experiencia del usuario a través de un diseño moderno que destaca las instalaciones del auditorio y los próximos eventos.');
            $(".project:nth-of-type(1) .portfolio-button-text").text('VER WEB');

            //Concha Vega
            $(".project:nth-of-type(2) p").html('Asistí en el desarrollo de una tienda online para Concha Vega, una marca especializada en moda flamenca y accesorios, mientras trabajaba para Inficon Global. Construida con <span>WordPress</span>, <span>Elementor</span> y <span>WooCommerce</span>. Me centré en mejorar la experiencia de usuario permitiendo la fácil visualización de las fotos de cada variación del producto (color y talla) y simplificando el proceso de añadir artículos al carrito.');
            $(".project:nth-of-type(2) .portfolio-button-text").text('VER WEB');

            //Manglana
            $(".project:nth-of-type(3) p").html('Contribuí al diseño y desarrollo de un sitio web para una finca disponible para eventos, bodas y más, mientras trabajaba en Inficon Global. Construido con <span>WordPress</span> y <span>Elementor</span>, el proyecto se centró en mostrar el encanto y la versatilidad del lugar a través de una elegante interfaz de usuario.');
            $(".project:nth-of-type(3) .portfolio-button-text").text('VER WEB');

            //Orthodontic
            $(".project:nth-of-type(4) p").html('Diseñé y desarrollé la web de Orthodontic, una clínica dental, mientras trabajaba para Inficon Global, centrándome en crear un diseño divertido y atractivo para ofrecer una experiencia cercana y acogedora a los pacientes, utilizando <span>WordPress</span> y <span>Elementor</span>.');
            $(".project:nth-of-type(4) .portfolio-button-text").text('VER WEB');

            //Noria
            $(".project:nth-of-type(5) p").html('Diseñado y desarrollado mientras trabajaba en Inficon Global. Construido con <span>WordPress</span> y <span>Elementor</span>, el sitio web fue creado para un servicio de planificación de bodas, con en un diseño elegante, minimalista y visualmente atractivo.');
            $(".project:nth-of-type(5) .portfolio-button-text").text('VER WEB');


            //Ori
            $(".project:nth-of-type(6) p").html('Página web inspirada en el videojuego "Ori & The Blind Forest". En la sección <span>Skills</span> usé <span>PHP</span>, <span>JQuery</span> y <span>AJAX</span> para extraer de una base de datos las distintas habilidades del protagonista y mostrarlas de forma dinámica mediante un carrusel.');
            $(".project:nth-of-type(6) .portfolio-button-text").text('VER WEB');

            //Katnip
            $(".project:nth-of-type(7) p").html('Este proyecto se realizó empleando <span>WordPress</span> y algunos plugins como <span>Elementor Pro</span>. La temática elegida fue <span>"cat cafe"</span>, así que la página web fue diseñada para atraer tanto a posibles clientes de la cafetería como a adoptantes.');
            $(".project:nth-of-type(7) .portfolio-button-text").text('VER WEB');

            //Korean Food
            $(".project:nth-of-type(8) p").html('Esta página web fue creada desde cero usando <span>HTML5</span>, <span>CSS3</span> y <span>JavaScript</span>. Utilizamos un <span>scroll horizontal</span> para recorrer un poco de la historia de la <span>gastronomía surcoreana</span> y unas pocas recetas.');
            $(".project:nth-of-type(8) .portfolio-button-text").text('VER WEB');

            //Tourning
            $(".project:nth-of-type(9) p").html('Diseño de una <span>app para viajes</span> en la que el itinerario del usuario cambiara según las condiciones climáticas. Se empleó la metodología ágil de <span>"Design Thinking"</span> para todo el proceso de investigación y diseño de <span>UX/UI</span> y se realizó un prototipo en <span>Figma</span>.');
            $(".project:nth-of-type(9) .portfolio-button-text").text('VER PROYECTO');

            //Contact
            $("#contact h2").text("//CONTACTO");
            $("#contact_text p").html('¿Tienes alguna <span>pregunta</span> o quieres <span>ponerte en contacto conmigo</span>? ¡No dudes en <span>usar este formulario</span> o contactarme a través de cualquiera de mis <span>redes</span> y responderé lo más rápido posible!');



            $(".contactForm form label:nth-of-type(1)").text('Nombre');
            $(".contactForm form label:nth-of-type(2)").text('Correo electrónico');
            $(".contactForm form label:nth-of-type(3)").text('Mensaje');
            $("#message").attr("placeholder", "¿En qué puedo ayudarte?")
            $("#submitButton").text('Enviar');

            $('#form_ES').show();
            $('#form_EN').hide();

            /*  $('#form_EN').css("display", "none");
             $('#form_ES').css("display", "flex"); */

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

        language="EN";

        //FadeOut Animation
        $('body').animate({
            'opacity': '0.0'
        }, 600, function () {

            if ($('#lang-menu-mobile ul').css("opacity") == "1") {
                $('#lang-menu-mobile ul').css("opacity", "0");
            }

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

            $("#profile_description p").html("Hi! My name is <span>Laura Cote Medina</span>. I'm a <span>web developer</span> from Spain with <span>proffesional experience</span> in creating and managing attractive websites using technologies like <span>HTML, CSS, and JavaScript</span>. I'm passionate about <span>Web Design</span> and eager to continue growing professionally, especially in <span>FrontEnd</span> development. I'm skilled at collaborating with <span>multidisciplinary teams</span> while also being <span>highly independent</span> and effective when solving problems on my own. I'm committed to <span>continuous improvement</span> and adopting new technologies.");
            $("#profile_description a").text("Download CV");
            $("#profile_description a").attr("href", "./src/media/CV_Laura_Cote_ENG.pdf")

            $("#about h2:nth-of-type(2)").text("Tools & Technologies");

            //Timeline

            $(".timeline-title").text("Experience and Education");

            $("#about > .timeline-wrapper > .line-container > .dot-wrapper:nth-of-type(1) > .texto-historia > span").html("Web Developer <br>at Inficon Global");
            $("#about > .timeline-wrapper > .line-container > .dot-wrapper:nth-of-type(2) > .texto-historia > span").html("Professional Master's Degree <br>in Web Development and Conceptualization at CEI: School of Design & Marketing Marketing");
            $("#about > .timeline-wrapper > .line-container > .dot-wrapper:nth-of-type(3) > .texto-historia > span").html("2D & 3D Artist <br>at Croxel Studios");
            $("#about > .timeline-wrapper > .line-container > .dot-wrapper:nth-of-type(4) > .texto-historia > span").html("Advanced 3D Modeling and Animation for videogames course at Aula Arcade");
            $("#about > .timeline-wrapper > .line-container > .dot-wrapper:nth-of-type(5) > .texto-historia > span").html("Degree in Audiovisual Communication at the University of Seville");

            //Portfolio

            //Auditorio
            $(".project:nth-of-type(1) p").html("Contributed to the design and development of a website for a premier venue in Seville for concerts, events, and cultural activities, while working at Inficon Global. Built with <span>WordPress</span> and <span>Elementor</span>, the project emphasized enhancing user experience through a modern design that highlights the auditorium's facilities and upcoming events.");
            $(".project:nth-of-type(1) .portfolio-button-text").text('OPEN WEBSITE');

            //Concha Vega
            $(".project:nth-of-type(2) p").html('Assisted in the development of an online shop for Concha Vega, a brand specializing in flamenca fashion and accessories, while working for Inficon Global. Built with <span>WordPress</span>, <span>Elementor</span> and <span>WooCommerce</span>. Focused on improving the user experience by enabling seamless viewing of product photos for each variation (color and size) and simplifying the process of adding items to the cart.');
            $(".project:nth-of-type(2) .portfolio-button-text").text('OPEN WEBSITE');

            //Manglana
            $(".project:nth-of-type(3) p").html("Contributed to the design and development of a website for a venue available for events, weddings, and more, while working at Inficon Global. Built with <span>WordPress</span> and <span>Elementor</span>, the project focused on showcasing the venue's charm and versatility through an elegant user interface.");
            $(".project:nth-of-type(3) .portfolio-button-text").text('OPEN WEBSITE');

            //Orthodontic
            $(".project:nth-of-type(4) p").html("Designed and developed Orthodontic's website, a dentist clinic, while working for Inficon Global, focusing on creating a fun and engaging design to offer an approachable and welcoming experience for patients. Used <span>WordPress</span> and <span>Elementor</span>");
            $(".project:nth-of-type(4) .portfolio-button-text").text('OPEN WEBSITE');

            //Noria
            $(".project:nth-of-type(5) p").html('Designed and developed while working at Inficon Global. Built using <span>WordPress</span> and <span>Elementor</span>, the website was crafted for a wedding planning service, focusing on an elegant, minimalist, and visually appealing design.');
            $(".project:nth-of-type(5) .portfolio-button-text").text('OPEN WEBSITE');


            //Ori
            $(".project:nth-of-type(6) p").html('Website inspired by the videogame Ori & The Blind Forest. In the <span>Skills</span> section , we used <span>PHP</span>, <span>JQuery</span> and also <span>AJAX</span> to extract the data of the proganist’s skills from a database and show them dynamically using a carousel.');
            $(".project:nth-of-type(6) .portfolio-button-text").text('OPEN WEBSITE');

            //Katnip
            $(".project:nth-of-type(7) p").html('This project was made using <span>WordPress</span> and some plugins like <span>Elementor Pro</span>. The chosen theme was <span>"cat cafe"</span>, so the website was designed to attract both customers and potential adopters.');
            $(".project:nth-of-type(7) .portfolio-button-text").text('OPEN WEBSITE');

            //Korean Food
            $(".project:nth-of-type(8) p").html('This website was built from scratch using <span>HTML5</span>, <span>CSS3</span> and <span>JavaScript</span>. A <span>horizontal scroll</span> is used to go through a bit of the history of <span>South Korean food</span> and a few recipes.');
            $(".project:nth-of-type(8) .portfolio-button-text").text('OPEN WEBSITE');

            //Tourning
            $(".project:nth-of-type(9) p").html('Designed a <span>travel app</span> where your itinerary changed according to the weather. <span>Design Thinking</span> was the methodology used for the entire <span>UX/UI</span> process, and then a prototype was made with <span>Figma</span>.');
            $(".project:nth-of-type(9) .portfolio-button-text").text('OPEN PROJECT');

            //Contact
            $("#contact h2").text("//CONTACT");
            $("#contact_text p").html('Do you have any <span>question</span> or want to <span>get in touch with me</span>? Feel free to use this <span>form</span> or reach me on any of my <span>networks</span> and I will get back to you as soon as I can!');



            $(".contactForm form label:nth-of-type(1)").text('Name');
            $(".contactForm form label:nth-of-type(2)").text('Email');
            $(".contactForm form label:nth-of-type(3)").text('Message');
            $("#message").attr("placeholder", "How can I help you?")
            $("#submitButton").text('Send');

            $('#form_EN').show();
            $('#form_ES').hide();

            /*  $('#form_ES').css("display", "none");
            $('#form_EN').css("display", "flex"); */

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

    $('#lang-menu-mobile').click(function () {
        $('#lang-menu-mobile ul').css("opacity", "1");
    });

    /******/


})
