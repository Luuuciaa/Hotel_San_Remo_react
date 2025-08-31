
//Evento para el botón reservar
export function handleReservar(event) {
  event.preventDefault(); // evita que el formulario se envie por defecto
  alert('Su habitación fue reservada con éxito, muchas gracias!');
}


//Evento para el boton Enviar del formulario de contacto
 export function handleEnviar(event) {
    event.preventDefault(); // evita que se recargue la página
    alert("Su consulta ha sido enviada a la brevedad va a hacer respondida, ¡muchas gracias!");
  }

//Evento para saber que teclas va presionando el usuario 
 export function handleOnkeyDown (event){
     console.log ("Tecla presionada : " , event.key);
  }