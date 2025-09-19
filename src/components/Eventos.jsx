import Swal from "sweetalert2";

//Evento para el botón reservar
export function handleReservar(event) {
  event.preventDefault(); // evita que el formulario se envie por defecto
   // Muestra el mensaje de habitacion reservadas
            Swal.fire({
                title: "Su habitación fue reservada con éxito, muchas gracias!",
                icon: "success",
                showConfirmButton : false,
                timer: 2000,
            })
}


//Evento para el boton Enviar del formulario de contacto
 export function handleEnviar(event) {
    event.preventDefault(); // evita que se recargue la página
  // Muestra el mensaje de éxito 
            Swal.fire({
                title: "Su consulta ha sido enviada a la brevedad va a hacer respondida, ¡muchas gracias!",
                icon: "success",
                showConfirmButton : false,
                timer: 2000,
            })
  }

//Evento para saber que teclas va presionando el usuario 
 export function handleOnkeyDown (event){
     console.log ("Tecla presionada : " , event.key);
  }