// index.test.js
const hola = require('./hola-mundo');

test('debería devolver Hola Mundo', () => {
    expect(hola()).toBe("Hola Mundo");
});
