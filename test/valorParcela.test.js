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
})