// Exemplo de loop com variável não reinicializada corretamente
var i = 0;
while (i < 5) {
  var j = 0;
  console.log("i:", i, "j:", j);
  j++;
  i++;
}

// Saída:
// i: 0 j: 0
// i: 1 j: 0
// i: 2 j: 0
// i: 3 j: 0
// i: 4 j: 0

// Nesse exemplo, a variável j é redefinida para 0 em cada ciclo, em vez de incrementar seu valor. Como resultado, o valor de j sempre é 0.

// Exemplo de loop com reinicialização correta de variável
var k = 0;
while (k < 5) {
  var l = 0;
  console.log("k:", k, "l:", l);
  l++;
  k++;
}

// Saída:
// k: 0 l: 0
// k: 1 l: 0
// k: 2 l: 0
// k: 3 l: 0
// k: 4 l: 0

// Nesse exemplo, a variável l é reinicializada corretamente em cada ciclo e seu valor é incrementado. Dessa forma, o valor de l é 1 em cada iteração do loop.