/*
 * Archivo principal de funcionalidad de JS
 */

//Función que se invoca así misma agregando paréntesis

(function main(){
	//Array.from para reconocer la clase como arreglo
 	var boxes = Array.from(document.getElementsByClassName("box-services"));

 	//Id perteneciente al div donde ubicaremos el modal
 	var modal = document.getElementById("box-services-modal");
 	var bodyModal, close, img;
	boxes.forEach(function(box){
 		box.addEventListener("click", function(){

 			//Borrar lo que esta dentro del modal
 			modal.innerHTML = "";

 			//En bodyModal crearemos el div que contendra el modal
 			bodyModal = document.createElement("div");

 			//Le creamos la clase  modal-body donde agregaremos la foto y sus estilos
 			bodyModal.classList.add("modal-body");
 			bodyModal.innerHTML = box.innerHTML;

 			//Hacemos hide al modal para antes de dar click
 			modal.appendChild(bodyModal);
			modal.classList.remove("hide");

			// imagen de x para cerrar la foto e ir a otro div
 			close = document.createElement("div");

 			//En la clase close se tratan los estilos para la x
 			close.classList.add("close");

 			//Se agrega la imagen a img con src
 			img = document.createElement("img");
 			img.setAttribute("src", "http://tojaeurope.com/gallery/Close-icon.png");
 			
 			//Se une img de x a close y esto al modal boxes
 			close.appendChild(img);
 			modal.appendChild(close);
 			
 			//Cuando se haga click en close se escondera el modal nuevamente
 			close.addEventListener("click", function(){
 				modal.classList.add("hide");
 			});
 		});
 	});

 })();


//funcionalidad para la galeria modal de Work

 (function galeriaWork(){
 	var imagen = Array.from(document.getElementsByClassName("imagen-galeria"));
 	var imagenModal = document.getElementById("box-work-modal");
 	var workModal, close, img;

 	imagen.forEach(function(caja){
 		caja.addEventListener("click", function(){
 			imagenModal.innerHTML = "";
 			workModal = document.createElement("div");
 			workModal.classList.add("modal-work");
 			workModal.innerHTML = caja.innerHTML;
 			
 			imagenModal.appendChild(workModal);
 			imagenModal.classList.remove("hide");
 			
 			close = document.createElement("div");
 			close.classList.add("close");
 			
 			img = document.createElement("img");
 			img.setAttribute("src", "http://tojaeurope.com/gallery/Close-icon.png");
 			
 			close.appendChild(img);
 			imagenModal.appendChild(close);
 			
 			close.addEventListener("click", function(){
 				imagenModal.classList.add("hide");
 			});
 		});
 	});

 })();