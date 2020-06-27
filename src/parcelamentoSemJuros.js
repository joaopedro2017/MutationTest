function parcelamentoSemJuros(valor) {
  if(!Number.isInteger(valor)) {
    return "Valor inválido!";
  }
  if(valor <= 100) {
    return 1;
  }
  if(valor <= 150) {
    return 2;
  }
  if(valor <= 200) {
    return 3;
  }
  if(valor <= 300) {
    return 6;
  }
  return 12;
}

module.exports = {
  parcelamentoSemJuros
};