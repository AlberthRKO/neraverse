/* $(document).ready(function () {
  $("#example").DataTable();
  let modalsito = $("#staticBackdrop");
  modalsito.addClass(modalsito.attr("data-animate-in"));
}); */
$(window).on("load", function () {
  if ($("#preloader").length) {
    $("#preloader")
      .delay(100)
      .fadeOut("slow", function () {
        $(this).remove();
      });
  }
});
$(function () {
  "use strict";

  /* $(window).on("load", function () {
    if ($(".preload").length) {
      $(".preload")
        .delay(100)
        .fadeOut("slow", function () {
          $(this).remove();
        });
    }
  }); */

  // localStorage.setItem("modalAbierto", false);

  // $(window).on("load", function () {
  //   setTimeout(function () {
  //     $("#staticBackdrop").modal("show");
  //   }, 2000);
  //   // $("#staticBackdrop").modal("show");
  // });

  $(window).on("load", function () {
    if (!localStorage.getItem("modalfinal")) {
      $("#staticBackdrop").modal("show");
      localStorage.setItem("modalfinal", true);
    }
    localStorage.setItem("modalfinal", false);
  });

  // seccion de animacion

  gsap.to("#content-box-video", {
    scrollTrigger: {
      scrub: 1,
    },
    y: -200,
    scale: 1.2,
  });
  // configuracion de Gsap

  // loguito
  gsap.to("#logo1", {
    scrollTrigger: {
      scrub: 1,
    },
    x: -500,
  });
  gsap.to("#logo2", {
    scrollTrigger: {
      scrub: 2,
    },
    x: 500,
  });
  gsap.to("#logo3", {
    scrollTrigger: {
      scrub: 3,
    },
    y: 500,
  });
  gsap.to("#logo4", {
    scrollTrigger: {
      scrub: 4,
    },
    y: -500,
  });
  gsap.to("#nameLogo", {
    scrollTrigger: {
      scrub: 1,
    },

    y: 100,
    scale: 0.8,
  });
  gsap.to("#primeraaa", {
    scrollTrigger: {
      scrub: 1,
    },
    x: -1000,
    scale: 0.5,
  });
  gsap.to("#segundaaa", {
    scrollTrigger: {
      scrub: 1,
    },
    x: 1000,
    scale: 0.5,
  });
  gsap.to("#pLogo", {
    scrollTrigger: {
      scrub: 1,
    },
    y: -500,
    scale: 1.5,
  });
  gsap.to("#content-box", {
    scrollTrigger: {
      scrub: 1,
    },
    y: -300,
    scale: 1.5,
  });
  gsap.to("#content-box3", {
    scrollTrigger: {
      scrub: 1,
    },
    y: -300,
    scale: 1.5,
  });
  gsap.to("#content-box-2", {
    scrollTrigger: {
      scrub: 1,
    },
    y: -300,
    scale: 1.3,
  });

  gsap.to("#acompa??ante", {
    scrollTrigger: {
      scrub: 1,
    },
    y: -300,
  });
  gsap.to("#secciones", {
    scrollTrigger: {
      scrub: 1,
    },
    y: -300,
  });
  gsap.to("#slideTipos", {
    scrollTrigger: {
      scrub: 1,
    },
    y: -300,
  });
  gsap.to("#slideKarts", {
    scrollTrigger: {
      scrub: 1,
    },
    y: -300,
  });

  /* $(window).on("load", function () {
    localStorage.setItem("modal6", true);
    let def = !localStorage.getItem("modal6");
    console.log(def);
    if (def == false) {
      $("#staticBackdrop").modal("show");
      // localStorage.setItem("modal6", false);
    }
  }); */

  // console.log(localStorage.getItem("modal5"));

  /* Seccion de particle _Js */
  particlesJS.load("particle-js", "particles.json", function () {
    // console.log("callback - particles.js config loaded");
  });
  particlesJS.load("portadaaa", "particles.json", function () {
    // console.log("callback - particles.js config loaded");
  });

  const stepButtons = document.querySelectorAll(".step-button");
  const progress = document.querySelector("#progress");

  Array.from(stepButtons).forEach((button, index) => {
    button.addEventListener("click", () => {
      progress.setAttribute("value", (index * 100) / (stepButtons.length - 1)); //there are 3 buttons. 2 spaces.

      stepButtons.forEach((item, secindex) => {
        if (index > secindex) {
          item.classList.add("done");
        }
        if (index < secindex) {
          item.classList.remove("done");
        }
      });
    });
  });

  /* ------------------------------------
  1. Configuraci??n de Mmenu.js 
  -------------------------------------*/

  var $menu = $("#menu-principal").mmenu({
    //COFIGURANDO EL CORE
    //Integraci??n con Bootstrap
    wrappers: ["bootstrap"],
    // Efecto deslizante para Sub-enlaces
    slidingSubmenus: true,
    //Quitamos la barra Superior
    navbar: {
      title: false,
    },
    //CONFIGURANDO EXTENSIONES
    extensions: ["border-full", "pagedim-black", "shadow-page", "theme-white"],
    //CONFIGURANDO ADDs
    counters: true,
    navbars: [
      {
        position: "top",
        content: [
          '<a href="index.html"> <span class="h6 titulo2 pt-2 mx-auto" >NERAVERSE LEGENDARY</span> </a>',
        ],
      },
    ],
  });

  /* ------------------------------------
      2. Configuraci??n del boton buscar
  -------------------------------------*/
  $(".btn-buscar").click(function () {
    $(".btn-buscar").toggleClass("boton-buscar-activo");
  });

  // Seccion de video
  new VenoBox({
    overlayClose: false,
    selector: ".venobox-video",
    bgcolor: "#000",
    spinColor: "#e99800",
    titleattr: "Metabiz",
    titleColor: "#fff",
    overlayColor: "rgba(9,0,42,.85)",
  });

  /* ------------------------------------
     3. Configuraci??n del Juggler.js
 -------------------------------------*/
  Juggler.init();

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });

  $(".back-to-top").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
    return false;
  });

  /* ------------------------------------
 4. Configuraci??n #swiperBeneficios
-------------------------------------*/

  var swiperBeneficios = new Swiper("#swiperBeneficios", {
    speed: 400,
    grabCursor: true,
    loop: true,

    // Componente Navigation
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // Componente pagination
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },

    //Componente keyboard
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    autoplay: {
      delay: 2000,
    },
    //Componente Thumbs
    thumbs: {
      swiper: {
        el: "#swiperBeneficiosNav",
        slidesPerView: 3,
        watchOverflow: true,
      },
    },
  });

  /* ------------------------------------
 5. Configuraci??n #swiperFunciones
-------------------------------------*/

  var swiperBeneficios = new Swiper("#swiperTipos", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 20,
      stretch: 0,
      depth: 200,
      modifier: 1,
      slideShadows: true,
    },
    loop: true,
    autoplay: {
      delay: 2000,
    },
  });
  var swiperBeneficios = new Swiper("#swiperKarts", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 30,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    loop: true,
    autoplay: {
      delay: 2000,
    },
  });

  var swiperBeneficios = new Swiper("#animacion", {
    speed: 1500,
    // grabCursor: false,
    loop: false,

    // Componente Navigation
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // Componente pagination
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
    },

    autoplay: true,
  });

  /* ------------------------------------
 6. Configuraci??n de hc-sticky.js
-------------------------------------*/
  var Sticky = new hcSticky("#navegacion", {
    mobileFirst: true,
    responsive: {
      0: {
        disable: true,
      },
      300: {
        disable: false,
        stickTo: "body",
        stickyClass: "encabezadoFijo",
      },
    },
  });

  //Formulario con animacion
  $(".form-control").each(function () {
    formmat($(this));
  });
  $(".form-control").on("blur", function () {
    formmat($(this));
  });
  $(".form-control").on("focus", function () {
    $(this).parent(".form-group").addClass("fill");
  });

  function formmat(e) {
    var $temp = 0;
    try {
      $temp = e.attr("placeholder").length;
    } catch (err) {
      $temp = 0;
    }
    if (e.val().length > 0 || $temp > 0) {
      e.parent(".form-group").addClass("fill");
    } else {
      e.parent(".form-group").removeClass("fill");
    }
  }
});

var swiperBeneficios = new Swiper("#swiper-container", {
  loop: true,
  slidesPerView: 6,
  spaceBetween: 30,

  autoplay: {
    delay: 2000,
  },
});

AOS.init({
  duration: 1000,
  easing: "slide",
});

$(".form-control").on("focus", function () {
  $(this).parent(".form-group").addClass("fill");
});

function formmat(e) {
  var $temp = 0;
  try {
    $temp = e.attr("placeholder").length;
  } catch (err) {
    $temp = 0;
  }
  if (e.val().length > 0 || $temp > 0) {
    e.parent(".form-group").addClass("fill");
  } else {
    e.parent(".form-group").removeClass("fill");
  }
}

$(".guardarDatos").click(function () {
  $(".datosComponente").addClass("d-flex");
});
$(".borrarDatos").click(function () {
  $(".datosComponente").removeClass("d-flex");
  $(".datosComponente").addClass("d-none");
});

// let numeros = 4

// $(window).resize(function () {
//   var widthBrowser = $(window).height();
//   var heightBrowser = $(window).width();
//   console.log("Tama??o de la pantalla del navegador: width=" + widthBrowser + " height=" + heightBrowser);
//   if (heightBrowser > 576) numeros = 6
//   if (heightBrowser > 992) numeros = 8
//   if (heightBrowser > 1200) numeros = 10
//   var swiperBeneficios = new Swiper('#swiper-container', {
//     loop: true,
//     slidesPerView: numeros,
//     spaceBetween: 30,

//     autoplay: {
//       delay: 2000
//     },

//   })
// });

// console.log(numeros)
