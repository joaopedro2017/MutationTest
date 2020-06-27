const { calculoFrete } = require('../src/calculoFrete.js')

describe('Teste Unitário de cálculo de frete', () => {    
  test('Quantidade inválida', () => {
    let carrinho = {
      quantidade: undefined,
      valor: 60
    }
    let resultado = calculoFrete(carrinho);
    expect(resultado).toEqual('Quantidade é inválida!');
  });
  test('Valor é inválido', () => {
    let carrinho = {
      quantidade: 1,
      valor: undefined
    }
    let resultado = calculoFrete(carrinho);
    expect(resultado).toEqual('Valor é inválido!');
  });
  test('Valor abaixo de 80', () => {
    let carrinho = {
      quantidade: 1,
      valor: 79
    }
    let resultado = calculoFrete(carrinho);
    expect(resultado).toEqual(25);
  });
  test('Quantidade maior ou igual a 3', () => {
    let carrinho = {
      quantidade: 3,
      valor: 90
    }
    let resultado = calculoFrete(carrinho);
    expect(resultado).toEqual(25);
  });
  test('Quantidade maior ou igual a 3 e valor maior ou igual a 80', () => {
    let carrinho = {
      quantidade: 2,
      valor: 80
    }
    let resultado = calculoFrete(carrinho);
    expect(resultado).toEqual(0);
  });
})