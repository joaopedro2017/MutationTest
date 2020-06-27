const { calculoFrete } = require('../src/calculoFrete.js')
const { parcelamentoSemJuros } = require('../src/parcelamentoSemJuros.js')

function valorParcela(carrinho) {

  let frete = calculoFrete(carrinho);

  let valor = carrinho.quantidade * carrinho.valorUnitario;

  if(isNaN(frete)) {
    return frete;
  }

  if(carrinho.formaPagamento !== "Boleto" && carrinho.formaPagamento !== "Cartão de crédito") {
    return "Forma de pagamento inválida!";
  }

  if(carrinho.formaPagamento === "Cartão de crédito") {
    let parcelas = parcelamentoSemJuros(valor);
    return (valor / parcelas) + frete;
  }

  return (valor * 0.9) + frete;

}

module.exports = {
  valorParcela
};