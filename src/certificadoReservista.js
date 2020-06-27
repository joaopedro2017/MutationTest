function certificadoReservista(usuario) {
  if(!Number.isInteger(usuario.idade)) {
    return "Idade inválida!";
  }
  if(usuario.sexo !== 'M' && usuario.sexo !== 'F') {
    return "Sexo inválido!";
  }
  if(usuario.idade >= 18 && usuario.sexo === 'M') {
    return true;
  }
  return false;
}

module.exports = {
  certificadoReservista
};