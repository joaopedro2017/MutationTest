const { aprovacao } = require('../src/aprovacao.js')

describe('Teste Unitário de aprovação', () => {    
  test('Rendimento inválido', () => {
    let aluno = {
      frequencia: undefined,
      nota: 60
    }
    let resultado = aprovacao(aluno);
    expect(resultado).toEqual('Frequencia inválido!');
  });
  test('Nota inválida', () => {
    let aluno = {
      frequencia: 60,
      nota: undefined
    }
    let resultado = aprovacao(aluno);
    expect(resultado).toEqual('Nota inválida!');
  });
  test('Reprovação por frequência', () => {
    let aluno = {
      frequencia: 74,
      nota: 100
    }
    let resultado = aprovacao(aluno);
    expect(resultado).toEqual(false);
  });
  test('Reprovação por nota', () => {
    let aluno = {
      frequencia: 75,
      nota: 59
    }
    let resultado = aprovacao(aluno);
    expect(resultado).toEqual(false);
  });
  test('Aprovação', () => {
    let aluno = {
      frequencia: 75,
      nota: 60
    }
    let resultado = aprovacao(aluno);
    expect(resultado).toEqual(true);
  });
})