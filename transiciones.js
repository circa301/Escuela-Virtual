/*src="https://cdnjs.cloudflare.com/ajax/libs/blazy/1.8.2/blazy.min.js"
src="https://cdnjs.cloudflare.com/ajax/libs/hammer.js/2.0.8/hammer.min.js"*/
  var indicador = 1;
  
$( document ).ready(function(){

  // console.log($(window).width());
  // var ancho = $(window).width() + "px";
  // console.log(ancho)
    
  //Cambio de pantallas (Slide)
  $(".left span").hide()
  
  $(".rigth span").click(function(){
    indicador++
    next()
  });

  $(".left span").click(function(){
    indicador--
    prev()
  });

  function next() {
      
    var tres = 3
    var limite = $(".slider .contenedor").length; 
    console.log(limite) 
    $(".contenedor div").animate({"left": "-=1366px" }, 500);
    $(".left span").show()
    hidediv();
    cerrar();
    console.log(indicador);

    if (indicador == limite) {
      $(".rigth span").hide();
    }

     else {
      $(".rigth span").show();
      $(".left span").show();
    };

    if (indicador != tres) {
     $(".transiciones img").removeClass("animacion"); 
    }

    else {
      $(".transiciones img").addClass("animacion");
    }

  }

  function prev() {

    var tres = 3
    $(".contenedor div").animate({"left":"+=1366px"}, 500);
    hidediv();
    cerrar();

    if (indicador <= 1 ) {
      $(".left span").hide() 
    }
    
    else {
      $(".rigth span").show()
      $(".left span").show();
    };


    if (indicador != tres) {
     $(".transiciones img").removeClass("animacion"); 
    }

    else {
      $(".transiciones img").addClass("animacion");
    }

  }

  // botones introduccion

  $(".boton1").click(showdiv);
  $(".cancel img").click(hidediv);

  function showdiv(){
  $(".leer").show();
  }

  function hidediv(){
  $(".leer").hide();
  }

  //Tipos de Aprendizaje

  $(".transiciones img").click(
    function() {
      $(".tipos").animate({"top":"2%"}, 500);
      $(".contenido1 h1").animate({opacity: 0}, 800);
      $(".transiciones img").addClass("mostrar");
    });

  $(".cerrar img").click(cerrar);

  function cerrar() {
    $(".tipos").animate({"top":"100%"}, 500);
    $(".contenido1 h1").animate({opacity: 1}, 800);
    $(".transiciones img").removeClass("mostrar");
    $(".soc").removeClass("borde");
    $(".emc").removeClass("borde");
    $(".exp").removeClass("borde");
  }

 $(".soc").click(
    function() {
      $(".emc").removeClass("borde");
      $(".exp").removeClass("borde");
      $(".soc").addClass("borde");
      $(".emocional h2").hide();
      $(".emocional p").hide();
      $(".experencial h2").hide();
      $(".experencial p").hide();
      $(".social h2").show();
      $(".social p").show();
    });

  $(".emc").click(
    function() {
      $(".soc").removeClass("borde");
      $(".exp").removeClass("borde");
      $(".emc").addClass("borde");
      $(".social h2").hide();
      $(".social p").hide();
      $(".experencial h2").hide();
      $(".experencial p").hide();
      $(".emocional h2").show();
      $(".emocional p").show();
    });
  
  $(".exp").click(
    function() {
      $(".soc").removeClass("borde");
      $(".emc").removeClass("borde");
      $(".exp").addClass("borde");
      $(".social h2").hide();
      $(".social p").hide();
      $(".emocional h2").hide();
      $(".emocional p").hide();
      $(".experencial h2").show();
      $(".experencial p").show();
    });

  //programas

  $(".uno").click(
    function() {
      $(".dos").removeClass("borde1");
      $(".tres").removeClass("borde1");
      $(".cuatro").removeClass("borde1");
      $(".uno").addClass("borde1");
      $(".info").hide();
      $(".info").hide();
      $(".primero").show();
      $(".primero").show();
    });

  $(".dos").click(
    function() {
      $(".uno").removeClass("borde1");
      $(".tres").removeClass("borde1");
      $(".cuatro").removeClass("borde1");
      $(".dos").addClass("borde1");
      $(".info").hide();
      $(".info").hide();
      $(".segundo").show();
      $(".segundo").show();
    });

  $(".tres").click(
    function() {
      $(".uno").removeClass("borde1");
      $(".dos").removeClass("borde1");
      $(".cuatro").removeClass("borde1");
      $(".tres").addClass("borde1");
      $(".info").hide();
      $(".info").hide();
      $(".tercero").show();
      $(".tercero").show();
    });

  $(".cuatro").click(
    function() {
      $(".uno").removeClass("borde1");
      $(".dos").removeClass("borde1");
      $(".tres").removeClass("borde1");
      $(".cuatro").addClass("borde1");
      $(".info").hide();
      $(".info").hide();
      $(".cuarto").show();
      $(".cuarto").show();
    });

});
// Lazy Loading
/*var bLazy = new Blazy({
selector: 'img'
});

var gestos = new Hammer($body);
gestos.on("swiperight", showmenu)
gestos.on("swipeleft", hidemenu)*/
