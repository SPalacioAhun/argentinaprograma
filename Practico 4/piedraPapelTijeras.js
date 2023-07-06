const readline = require('readline-sync');


function obtenerJugadaComputadora() {
  const opciones = ["piedra", "papel", "tijeras"];
  const indice = Math.floor(Math.random() * opciones.length);
  return opciones[indice];
}
  

function obtenerJugadaUsuario() {
  const jugada = readline.question("Ingresa tu jugada (piedra, papel o tijeras): ");
  return jugada.toLowerCase();
}


function determinarGanador(jugadaComputadora, jugadaUsuario) {
  if (jugadaComputadora === jugadaUsuario) {
    return "Empate";
  } else if (
    (jugadaComputadora === "piedra" && jugadaUsuario === "tijeras") ||
    (jugadaComputadora === "tijeras" && jugadaUsuario === "papel") ||
    (jugadaComputadora === "papel" && jugadaUsuario === "piedra")
  ) {
    return "Gana la computadora";
  } else {
    return "Gana el usuario";
  }
}


function jugarPiedraPapelTijeras(cantidadJugadas) {
  let puntajeUsuario = 0;
  let puntajeComputadora = 0;

  for (let i = 1; i <= cantidadJugadas; i++) {
    console.log(`Jugada ${i}`);

    const jugadaComputadora = obtenerJugadaComputadora();
    const jugadaUsuario = obtenerJugadaUsuario();
    const resultado = determinarGanador(jugadaComputadora, jugadaUsuario);

    console.log("La computadora eligió: " + jugadaComputadora);
    console.log("El usuario eligió: " + jugadaUsuario);
    console.log("El resultado es: " + resultado);

    if (resultado === "Gana la computadora") {
      puntajeComputadora++;
    } else if (resultado === "Gana el usuario") {
      puntajeUsuario++;
    }
  }

  console.log("---- Puntajes finales ----");
  console.log("Puntaje del usuario: " + puntajeUsuario);
  console.log("Puntaje de la computadora: " + puntajeComputadora);

  if (puntajeUsuario > puntajeComputadora) {
    console.log("¡Gana el usuario!");
  } else if (puntajeUsuario < puntajeComputadora) {
    console.log("¡Gana la computadora!");
  } else {
    console.log("¡Empate!");
  }
}

const cantidadJugadas = parseInt(readline.question("Ingresa la cantidad de jugadas: "));
jugarPiedraPapelTijeras(cantidadJugadas);

