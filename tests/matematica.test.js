const { somar, subtrair, multiplicar, dividir } = require('../assets/js/matematica');

describe('operacoes matematicas', () => {
  test('soma dois numeros', () => {
    expect(somar(2, 3)).toBe(5);
  });

  test('subtrai dois numeros', () => {
    expect(subtrair(5, 3)).toBe(2);
  });

  test('multiplica dois numeros', () => {
    expect(multiplicar(4, 3)).toBe(12);
  });

  test('divide dois numeros', () => {
    expect(dividir(10, 2)).toBe(5);
  });

  test('nao permite divisao por zero', () => {
    expect(() => dividir(10, 0)).toThrow('Nao e possivel dividir por zero.');
  });
});