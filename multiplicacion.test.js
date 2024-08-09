const calculadora = require('./server');

test('La multiplicación entre 3 y 4 debería dar 12', () => {
    expect(calculadora.multiplicacion(3,4)).toBe(12);
});