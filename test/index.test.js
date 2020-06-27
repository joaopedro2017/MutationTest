const { maioridade } = require('../src/index.js')

describe('Teste Unitário de maioridade', () => {    
  test('Idade superior a 18 anos', () => {
    let usuario = {
      nome: "Teste",
      idade: "20"
    }
    let resultado = maioridade(usuario)
    expect(resultado).toEqual(true)
  })
  test('Idade igual a 18 anos', () => {
    let usuario = {
      nome: "Teste",
      idade: "18"
    }
    let resultado = maioridade(usuario)
    expect(resultado).toEqual(true)
  })
  test('Idade inferior a 18 anos', () => {
    let usuario = {
      nome: "Teste",
      idade: "9"
    }
    let resultado = maioridade(usuario)
    expect(resultado).toEqual(false)
  })
})