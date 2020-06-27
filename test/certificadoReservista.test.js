const { certificadoReservista } = require('../src/certificadoReservista.js')

describe('Teste Unitário de obrigatoriedade de certificado de reservista', () => {    
  test('Idade inválida', () => {
    let usuario = {
      nome: "Teste",
      idade: undefined,
      sexo: 'M'
    }
    let resultado = certificadoReservista(usuario)
    expect(resultado).toEqual('Idade inválida!')
  })
  test('Sexo inválido', () => {
    let usuario = {
      nome: "Teste",
      idade: 19,
      sexo: undefined
    }
    let resultado = certificadoReservista(usuario)
    expect(resultado).toEqual('Sexo inválido!')
  })
  test('Obrigatório 1', () => {
    let usuario = {
      nome: "Teste",
      idade: 18,
      sexo: 'M'
    }
    let resultado = certificadoReservista(usuario)
    expect(resultado).toEqual(true)
  })
  test('Obrigatório 2', () => {
    let usuario = {
      nome: "Teste",
      idade: 19,
      sexo: 'M'
    }
    let resultado = certificadoReservista(usuario)
    expect(resultado).toEqual(true)
  })
  test('Não obrigatório 1', () => {
    let usuario = {
      nome: "Teste",
      idade: 18,
      sexo: 'F'
    }
    let resultado = certificadoReservista(usuario)
    expect(resultado).toEqual(false)
  })
  test('Não obrigatório 2', () => {
    let usuario = {
      nome: "Teste",
      idade: 17,
      sexo: 'F'
    }
    let resultado = certificadoReservista(usuario)
    expect(resultado).toEqual(false)
  })
})