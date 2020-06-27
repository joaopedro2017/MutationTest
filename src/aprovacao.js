function aprovacao(aluno) {
  if(isNaN(aluno.frequencia)) {
    return "Frequencia inválido!";
  }
  if(isNaN(aluno.nota)) {
    return "Nota inválida!";
  }
  if(aluno.frequencia < 75) {
    return false;
  }
  if(aluno.nota < 60) {
    return false;
  }
  return true;
}

module.exports = {
  aprovacao
};