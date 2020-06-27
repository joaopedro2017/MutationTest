function triangulo(arestas) {
  if (isNaN(arestas.a) || arestas.a <= 0) {
    return "Valor de a é inválido!";
  }
  if (isNaN(arestas.b) || arestas.b <= 0) {
    return "Valor de b é inválido!";
  }
  if (isNaN(arestas.c) || arestas.c <= 0) {
    return "Valor de c é inválido!";
  }
  if(arestas.a === arestas.b && arestas.b === arestas.c) {
    return "Triângulo equilátero";
  }
  if(arestas.a === arestas.b || arestas.b === arestas.c || arestas.a === arestas.c) {
    return "Triângulo isósceles";
  }
  return "Triângulo escaleno";
}

module.exports = {
  triangulo
};

