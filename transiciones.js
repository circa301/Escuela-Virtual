/*src="https://cdnjs.cloudflare.com/ajax/libs/blazy/1.8.2/blazy.min.js"
src="https://cdnjs.cloudflare.com/ajax/libs/hammer.js/2.0.8/hammer.min.js"*/
window.onload = function() { //tras cargar la página ... 


var $boton = document.getElementById("leerMas");
var $leer = document.getElementById("leer");
$boton.addEventListener("click", showdiv);
var $body = document.body;
var $cancel = document.getElementById("cancel");
$cancel.addEventListener("click", hidediv);


function showdiv(){
$leer.classList.add("active");
$body.classList.add("opened");
}

function hidediv(){
$leer.classList.remove("active");
$body.classList.remove("opened");
}

// Lazy Loading
/*var bLazy = new Blazy({
selector: 'img'
});

var gestos = new Hammer($body);
gestos.on("swiperight", showmenu)
gestos.on("swipeleft", hidemenu)*/

//transiciones de los div

numImagen=1; //Referencia a la imagen.

//Localización de elementos en el DOM:
imgEnt=document.images["fotoEntrante"]; //imagen entrante
imgSal=document.images["fotoSaliente"];  //imagen saliente
divEnt=document.getElementById("entrante"); //pantalla móvil entrante
divSal=document.getElementById("saliente"); //pantalla movil saliente
}

function cambio() { //Temporizador de cambio de imagen
        //reiniciar variables
        divSal.style.left="0px"; //posición pantalla saliente
        divSal.style.top="0px";
        divEnt.style.left="0px"; //posición pantalla entrante
        divEnt.style.top="0px";
        //tipos de transición
        switch (modo) {
        case "0": //tipo De derecha a izquierda
        if (numImagen <=3 ) {
        	numImagen++; //paso a la imagen siguiente
        	posEnt=400; //posición inicial pantalla entrante.
        	posSal=0; //posicion inicial pantalla saliente.
        	proximo()
       	}
       	else {
       		numImagen = numImagen
       	}
       	break;
        case "1": //tipo De izquierda a derecha
        if (numImagen >= 2) {
        	numImagen--; //paso a la imagen siguiente
          posEnt=-400; //posición inicial pantalla entrante.
        	posSal=0; //posicion inicial pantalla saliente.
        	
      		anterior()
      	}
      	else{
      		imgEnt.src="foto1,jpg"
      	}
        break;
				}
         //Transición y paso a imagen siguiente.
        izquierda=setInterval(proximo,5); //iniciar temporizador transición
        derecha=setInterval(anterior,5);
}
        
function proximo() { //visualiza la imagen    
        fotoSale=numImagen-1; //num para foto entrante
        imgEnt.src="foto"+numImagen+".jpg"; //mostrar imagen entrante
        imgSal.src="foto"+fotoSale+".jpg"; //mostrar imagen saliente
				posEnt-=10; //px de desplazamiento para entrante
        posSal-=10; //px de desplazamiento para saliente
        divEnt.style.left=posEnt+"px"; //desplazamiento pantalla entrante 
        divSal.style.left=posSal+"px";	//desplazamiento pantalla saliente 
        if (posEnt<=0){ //la pantalla entrante ocupa todo el visor:
          clearInterval(izquierda) //parar el desplazamiento.   
        }
}

function anterior() {
        fotoSale=numImagen+1; //num para foto entrante
        imgEnt.src="foto"+numImagen+".jpg"; //mostrar imagen entrante
        imgSal.src="foto"+fotoSale+".jpg"; //mostrar imagen saliente 
 				posEnt+=10; //px de desplazamiento
        posSal+=10; 
        divEnt.style.left=posEnt+"px"; //desplazamiento pantallas
        divSal.style.left=posSal+"px";	
        if (posEnt>=0){ 
             clearInterval(derecha) //parar el desplazamiento.   
        }
} 