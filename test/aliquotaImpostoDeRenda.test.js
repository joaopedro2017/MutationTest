const { aliquotaImpostoDeRenda } = require('../src/aliquotaImpostoDeRenda.js')

describe('Teste Unitário de alíquota de imposto de renda', () => {    
  test('Rendimento inválido', () => {
    let rendimento = undefined;
    let resultado = aliquotaImpostoDeRenda(rendimento);
    expect(resultado).toEqual('Rendimento inválido!');
  });
  test('Alíquota 0% (0,00)', () => {
    let rendimento = 0;
    let resultado = aliquotaImpostoDeRenda(rendimento);
    expect(resultado).toEqual(0);
  });
  test('Alíquota 0% (22847,76)', () => {
    let rendimento = 22847.76;
    let resultado = aliquotaImpostoDeRenda(rendimento);
    expect(resultado).toEqual(0);
  });
  test('Alíquota 7,5% (22.847,77)', () => {
    let rendimento = 22847.77;
    let resultado = aliquotaImpostoDeRenda(rendimento);
    expect(resultado).toEqual(7.5);
  });
  test('Alíquota 7,5% (33.919,80)', () => {
    let rendimento = 33919.80;
    let resultado = aliquotaImpostoDeRenda(rendimento);
    expect(resultado).toEqual(7.5);
  });
  test('Alíquota 15% (33.919,81)', () => {
    let rendimento = 33919.81;
    let resultado = aliquotaImpostoDeRenda(rendimento);
    expect(resultado).toEqual(15);
  });
  test('Alíquota 15% (45.012,60)', () => {
    let rendimento = 45012.60;
    let resultado = aliquotaImpostoDeRenda(rendimento);
    expect(resultado).toEqual(15);
  });
  test('Alíquota 22,5% (45.012,61)', () => {
    let rendimento = 45012.61;
    let resultado = aliquotaImpostoDeRenda(rendimento);
    expect(resultado).toEqual(22.5);
  });
  test('Alíquota 22,5% (55.976,16)', () => {
    let rendimento = 55976.16;
    let resultado = aliquotaImpostoDeRenda(rendimento);
    expect(resultado).toEqual(22.5);
  });
  test('Alíquota 27,5% (55.976,17)', () => {
    let rendimento = 55976.17;
    let resultado = aliquotaImpostoDeRenda(rendimento);
    expect(resultado).toEqual(27.5);
  });

})