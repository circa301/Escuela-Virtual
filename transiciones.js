/*src="https://cdnjs.cloudflare.com/ajax/libs/blazy/1.8.2/blazy.min.js"
src="https://cdnjs.cloudflare.com/ajax/libs/hammer.js/2.0.8/hammer.min.js"*/
  var indicador = 1;
  
$( document ).ready(function(){

  console.log($(window).width());
  var ancho = $(window).width() + "px";
  console.log(ancho)
    
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
    var limite = $(".contenedor div").length;  
    $(".contenedor div").animate({"left": "-=1366px" }, 500);
    $(".left span").show()
    hidediv();
    console.log(indicador);

    if (indicador >= limite) {
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
    $(".transiciones img").removeClass("animacion");
    $(".contenedor div").animate({"left":"+=1366px"}, 500);
    hidediv();

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


  console.log ($("#soc"))

  $("#soc").hover(
    function() {
      $(".tipos").show();
      $(".social h1").show();
      $(".social p").show();
    },

    function() {
      $(".tipos").hide();
      $(".social h1").hide();
      $(".social p").hide();
    });

  $("#emc").hover(
    function() {
      $(".tipos").show();
      $(".emocional h1").show();
      $(".emocional p").show();
    },
    function() {
      $(".tipos").hide();
      $(".emocional h1").hide();
      $(".emocional p").hide();
    });

  $("#exp").hover(
    function() {
      $(".tipos").show();
      $(".experencial h1").show();
      $(".experencial p").show();
    },
    function() {
      $(".tipos").hide();
      $(".experencial h1").hide();
      $(".experencial p").hide();
    });

});
// Lazy Loading
/*var bLazy = new Blazy({
selector: 'img'
});

var gestos = new Hammer($body);
gestos.on("swiperight", showmenu)
gestos.on("swipeleft", hidemenu)*/
