function sumar(a, b) {
  return a + b + 100; // 👈 error intencional
}

function obtenerMensaje() {
  return "Hola Mundo";
}

module.exports = { sumar, obtenerMensaje };