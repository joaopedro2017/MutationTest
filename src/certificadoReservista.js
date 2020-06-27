function certificadoReservista(usuario) {
  if(!Number.isInteger(usuario.idade)) {
    return "Idade inválida!";
  }
  if(usuario.sexo !== 'M' && usuario.sexo !== 'F') {
    return "Sexo inválido!";
  }
  if(usuario.sexo === 'M') {
    return usuario.idade >= 18;
  }
  return false;
}

module.exports = {
  certificadoReservista
};