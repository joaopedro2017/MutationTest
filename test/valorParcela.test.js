const { valorParcela } = require('../src/valorParcela.js')

describe('Teste Unitário de valor de parcela', () => {    
  test('Quantidade inválida', () => {
    let carrinho = {
      quantidade: undefined,
      valorUnitario: 60,
      formaPagamento: "Boleto"
    }
    let resultado = valorParcela(carrinho);
    expect(resultado).toEqual('Quantidade é inválida!');
  });
  test('Valor é inválido', () => {
    let carrinho = {
      quantidade: 1,
      valorUnitario: undefined,
      formaPagamento: "Boleto"
    }
    let resultado = valorParcela(carrinho);
    expect(resultado).toEqual('Valor é inválido!');
  });
  test('Forma de pagamento inválida', () => {
    let carrinho = {
      quantidade: 2,
      valorUnitario: 40,
      formaPagamento: undefined
    }
    let resultado = valorParcela(carrinho);
    expect(resultado).toEqual('Forma de pagamento inválida!');
  });
  test('Pagamento no cartão', () => {
    let carrinho = {
      quantidade: 20,
      valorUnitario: 30,
      formaPagamento: 'Cartão de crédito'
    }
    let resultado = valorParcela(carrinho);
    expect(resultado).toEqual(75);
  });
  test('Pagamento no boleto', () => {
    let carrinho = {
      quantidade: 2,
      valorUnitario: 40,
      formaPagamento: 'Boleto'
    }
    let resultado = valorParcela(carrinho);
    expect(resultado).toEqual(72);
  });



/*

  test('Valor abaixo de 80', () => {
    let carrinho = {
      quantidade: 1,
      valorUnitario: 79,
      formaPagamento: "Boleto"
    }
    let resultado = calculoFrete(carrinho);
    expect(resultado).toEqual(25);
  });
  test('Quantidade maior ou igual a 3', () => {
    let carrinho = {
      quantidade: 3,
      valorUnitario: 90
    }
    let resultado = calculoFrete(carrinho);
    expect(resultado).toEqual(25);
  });
  test('Quantidade menor que 3 e valor total maior ou igual a 80', () => {
    let carrinho = {
      quantidade: 2,
      valorUnitario: 40
    }
    let resultado = calculoFrete(carrinho);
    expect(resultado).toEqual(0);
  });*/
})