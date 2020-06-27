const { validaSenha } = require('../src/validaSenha.js')

describe('Teste Unitário de validação de senha', () => {    
  test('Senha inválida', () => {
    let senha = {
      senha: "Teste",
      confirmacaoSenha: "Teste"
    }
    let resultado = validaSenha(senha)
    expect(resultado).toEqual('Senha inválida!')
  });
  test('Senha válida e confirmação inválida', () => {
    let senha = {
      senha: "New@123456789",
      confirmacaoSenha: "Teste"
    }
    let resultado = validaSenha(senha)
    expect(resultado).toEqual('Confirmação de senha inválida!')
  });
  test('Senha válida e confirmação válida', () => {
    let senha = {
      senha: "New@123456789",
      confirmacaoSenha: "New@123456789"
    }
    let resultado = validaSenha(senha)
    expect(resultado).toEqual('Senha válida!')
  });
})