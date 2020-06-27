function divisao(valores) {
  if(isNaN(valores.a)) {
    return "Valor a é inválido!";
  }
  if(isNaN(valores.b)) {
    return "Valor b é inválido!";
  }
  if(valores.b === 0) {
    return "Não é possível realizar divisão por 0";
  }
  return valores.a / valores.b;
}

module.exports = {
  divisao
};