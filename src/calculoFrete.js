function calculoFrete(carrinho) {
  if (isNaN(carrinho.quantidade) || carrinho.quantidade <= 0) {
    return "Quantidade é inválida!";
  }
  if (isNaN(carrinho.valorUnitario) || carrinho.valorUnitario <= 0) {
    return "Valor é inválido!";
  }
  if ((carrinho.valorUnitario * carrinho.quantidade) < 80) {
    return 25;
  }
  if (carrinho.quantidade >= 3) {
    return 25;
  }
  return 0;
}

module.exports = {
  calculoFrete
};

