const { triangulo } = require('../src/triangulo.js')

describe('Teste Unitário de triângulo', () => {    
  test('Valor inválido em a', () => {
    let arestas = {
      a: -1,
      b: 21,
      c: 14
    }
    let resultado = triangulo(arestas)
    expect(resultado).toEqual('Valor de a é inválido!')
  })
  test('Valor inválido em b', () => {
    let arestas = {
      a: 2,
      b: 'Teste',
      c: 5
    }
    let resultado = triangulo(arestas)
    expect(resultado).toEqual('Valor de b é inválido!')
  })
  test('Valor inválido em c', () => {
    let arestas = {
      a: 10,
      b: 15,
      c: undefined
    }
    let resultado = triangulo(arestas)
    expect(resultado).toEqual('Valor de c é inválido!')
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