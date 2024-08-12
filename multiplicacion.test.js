const { multiplicacion } = require('./server');

describe('Función multiplicación', () => {
  test('debería multiplicar 2 números correctamente', () => {
    expect(multiplicacion(3, 4)).toBe(12);
  });

  test('debería devolver 0 si uno de los números es 0', () => {
    expect(multiplicacion(0, 5)).toBe(0);
  });

  test('debería devolver un número negativo si uno de los números es negativo', () => {
    expect(multiplicacion(-3, 4)).toBe(-12);
  });

  test('debería multiplicar números decimales correctamente', () => {
    expect(multiplicacion(2.5, 4)).toBe(10);
  });
});
