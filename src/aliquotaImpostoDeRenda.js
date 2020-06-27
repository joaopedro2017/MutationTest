function aliquotaImpostoDeRenda(rendimento) {
  if(isNaN(rendimento)) {
    return "Rendimento inválido!";
  }
  if(rendimento >= 22847.77 && rendimento <= 33919.80) {
    return 7.5;
  }
  if(rendimento >= 33919.81 && rendimento <= 45012.60) {
    return 15;
  }
  if(rendimento >= 45012.61 && rendimento <= 55976.16) {
    return 22.5;
  }
  if(rendimento >= 55976.17) {
    return 27.5;
  }
  return 0;
}

module.exports = {
  aliquotaImpostoDeRenda
};