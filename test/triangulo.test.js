const { triangulo } = require('../src/triangulo.js')

describe('Teste Unitário de triângulo', () => {    
  test('Valores inválidos', () => {
    let arestas = {
      a: 'Teste',
      b: 20,
      c: undefined
    }
    let resultado = triangulo(arestas)
    expect(resultado).toEqual('Valores inválidos!')
  })
  test('Triângulo equilátero', () => {
    let arestas = {
      a: 10,
      b: 10,
      c: 10
    }
    let resultado = triangulo(arestas)
    expect(resultado).toEqual('Triângulo equilátero')
  })
  test('Triângulo isósceles', () => {
    let arestas = {
      a: 10,
      b: 10,
      c: 5
    }
    let resultado = triangulo(arestas)
    expect(resultado).toEqual('Triângulo isósceles')
  })
  test('Triângulo escaleno', () => {
    let arestas = {
      a: 15,
      b: 10,
      c: 5
    }
    let resultado = triangulo(arestas)
    expect(resultado).toEqual('Triângulo escaleno')
  })
})