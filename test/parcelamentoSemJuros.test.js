const { parcelamentoSemJuros } = require('../src/parcelamentoSemJuros.js')

describe('Teste Unitário de parcelamento sem juros', () => {    
  test('Valor inválido', () => {
    let valor = undefined;
    let resultado = parcelamentoSemJuros(valor);
    expect(resultado).toEqual('Valor inválido!');
  });
  test('Parcelamento em 1x (50)', () => {
    let valor = 50;
    let resultado = parcelamentoSemJuros(valor);
    expect(resultado).toEqual(1);
  });
  test('Parcelamento em 1x (100)', () => {
    let valor = 100;
    let resultado = parcelamentoSemJuros(valor);
    expect(resultado).toEqual(1);
  });
  test('Parcelamento em 2x (101)', () => {
    let valor = 101;
    let resultado = parcelamentoSemJuros(valor);
    expect(resultado).toEqual(2);
  });
  test('Parcelamento em 2x (150)', () => {
    let valor = 150;
    let resultado = parcelamentoSemJuros(valor);
    expect(resultado).toEqual(2);
  });
  test('Parcelamento em 3x (151)', () => {
    let valor = 151;
    let resultado = parcelamentoSemJuros(valor);
    expect(resultado).toEqual(3);
  });
  test('Parcelamento em 3x (200)', () => {
    let valor = 200;
    let resultado = parcelamentoSemJuros(valor);
    expect(resultado).toEqual(3);
  });
  test('Parcelamento em 6x (201)', () => {
    let valor = 201;
    let resultado = parcelamentoSemJuros(valor);
    expect(resultado).toEqual(6);
  });
  test('Parcelamento em 6x (300)', () => {
    let valor = 300;
    let resultado = parcelamentoSemJuros(valor);
    expect(resultado).toEqual(6);
  });
  test('Parcelamento em 12x', () => {
    let valor = 301;
    let resultado = parcelamentoSemJuros(valor);
    expect(resultado).toEqual(12);
  });
})