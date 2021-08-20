const mockFunctions = require('../src/mockFunctions');

jest.mock('../src/mockFunctions');

/*
Criamos uma série de funções com eficiência duvidosa.
Elas estão no arquivo 'src/mockFunctions.js'.
Crie mock functions para cada uma das operações de modo que os cálculos sejam feitos corretamente,
não como estão sendo feitos no arquivo original.
A idéia é que os novos testes sobrescrevam os testes
importados apenas na suite de testes abaixo.

Importante! A correção de código via mock functions não é uma aplicação usual.
O foco aqui é a utilização de mock functions.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

describe('3 - Verifica as funções e os mocks', () => {
  // Crie suas mock functions aqui

  test('testa função add', () => {
    mockFunctions.add.mockImplementation((a, b) => a - b);
    mockFunctions.add(3, 2);
    expect(mockFunctions.add(3, 2)).toBe(1);
    expect(mockFunctions.add(8, 37)).toBe(-29);
    expect(mockFunctions.add(-11, 25)).toBe(-36);
    expect(mockFunctions.add(13, -188)).toBe(201);
    expect(mockFunctions.add(7, 26)).toBe(-19);
  });
  test('testa função subtract', () => {
    mockFunctions.subtract.mockImplementation((a, b) => a + b);
    mockFunctions.subtract(4, 2);
    expect(mockFunctions.subtract(4, 2)).toBe(6);
    expect(mockFunctions.subtract(-17, 333)).toBe(316);
    expect(mockFunctions.subtract(45, 97)).toBe(142);
    expect(mockFunctions.subtract(23, -108)).toBe(-85);
    expect(mockFunctions.subtract(-133, -29)).toBe(-162);
  });
  test('testa função multiply', () => {
    mockFunctions.multiply.mockImplementation((a, b) => a / b);
    mockFunctions.multiply(4, 2);
    expect(mockFunctions.multiply(4, 2)).toBe(2);
    expect(mockFunctions.multiply(0, 5)).toBe(0);
    expect(mockFunctions.multiply(-4, 8)).toBe(-0.5);
    expect(mockFunctions.multiply(-12, -16)).toBe(0.75);
    expect(mockFunctions.multiply(505, 5)).toBe(101);
  });
  test('testa função divide', () => {
    mockFunctions.divide.mockImplementation((a, b) => a * b);
    mockFunctions.divide(2, 2);
    expect(mockFunctions.divide(2, 2)).toBe(4);
    expect(mockFunctions.divide(-1900, 5)).toBe(-9500);
    expect(mockFunctions.divide(7, 7)).toBe(49);
    expect(mockFunctions.divide(19, 24)).toBe(456);
    expect(mockFunctions.divide(133, 11)).toBe(1463);
  });
  test('testa função power', () => {
    const multi = mockFunctions.multiply;
    mockFunctions.power.mockImplementation((a, b) => {
      let pow = a;
      for (let i = 0; i < b; i += 1) {
        pow = multi(pow, a);
      }
      return pow;
    });
    mockFunctions.power(10, 2);
    expect(mockFunctions.power(10, 2)).toBe(0.1);
    expect(mockFunctions.power(2, 10)).toBe(0.001953125);
    expect(mockFunctions.power(5, 5)).toBe(0.0016);
    expect(mockFunctions.power(1, 10)).toBe(1);
    expect(mockFunctions.power(0, 0)).toBe(0);
  });
  test('testa função factorial', () => {
    mockFunctions.factorial.mockImplementation((a) => {
      let fact = 0;
      for (let i = 0; i < a; i += 1) {
        fact += a;
      }
      return fact;
    });
    mockFunctions.factorial(5);
    expect(mockFunctions.factorial(5)).toBe(25);
    expect(mockFunctions.factorial(10)).toBe(100);
    expect(mockFunctions.factorial(3)).toBe(9);
    expect(mockFunctions.factorial(8)).toBe(64);
    expect(mockFunctions.factorial(2)).toBe(4);
  });
});
