const { divisao } = require('../src/divisao.js')

describe('Teste Unitário de divisão', () => {    
  test('Valor a inválido', () => {
    let valores = {
      a: undefined,
      b: 2
    }
    let resultado = divisao(valores)
    expect(resultado).toEqual('Valor a é inválido!')
  });
  test('Valor b inválido', () => {
    let valores = {
      a: 2,
      b: undefined
    }
    let resultado = divisao(valores)
    expect(resultado).toEqual('Valor b é inválido!')
  });
  test('Divisão por 0', () => {
    let valores = {
      a: 2,
      b: 0
    }
    let resultado = divisao(valores)
    expect(resultado).toEqual('Não é possível realizar divisão por 0')
  });
  test('Valores válidos', () => {
    let valores = {
      a: 2,
      b: 2
    }
    let resultado = divisao(valores)
    expect(resultado).toEqual(1)
  });
})