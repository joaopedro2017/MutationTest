function validaSenha(senha) {

  let validador = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s)(?=.*[!@#$%^&*]).{6,20}$/;

  if(validador.test(senha.senha)) {
    if(senha.senha === senha.confirmacaoSenha) {
      return "Senha válida!";
    } else {
      return "Confirmação de senha inválida!";
    }
  } else {
    return "Senha inválida!";
  }
  
}

module.exports = {
  validaSenha
};