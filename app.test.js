const { sumar, obtenerMensaje } = require('./app');

test('suma 2 + 3 debe ser 5', () => {
  expect(sumar(2, 3)).toBe(5);
});

test('mensaje debe ser Hola Mundo', () => {
  expect(obtenerMensaje()).toBe('Hola Mundo');
});