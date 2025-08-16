const div = document.getElementById("contenedor");
const boton = document.getElementById("miBoton");

// Evento en el div
div.addEventListener("click", function() {
    alert("¡Hola! Soy el div.");
});

// Evento en el botón para que evite que dispare el evento del div
boton.addEventListener("click", function(event) {
  event.stopPropagation(); // detiene la propagación
  alert("¡Hola!.");
});
