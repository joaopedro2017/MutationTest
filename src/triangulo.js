function triangulo(arestas) {
  if (!Number.isInteger(arestas.a) || !Number.isInteger(arestas.b) || !Number.isInteger(arestas.c)) {
    return "Valores inválidos!";
  }
  if (arestas.a <= 0 || arestas.b <= 0 || arestas.c <= 0) {
    return "Valores inválidos!";
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

