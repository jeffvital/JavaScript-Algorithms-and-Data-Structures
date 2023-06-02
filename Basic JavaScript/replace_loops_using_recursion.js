function sum(arr, n) {
  // Caso base
  if (n === 0) {
    return 0;
  } else {
    // Chamada recursiva e soma do elemento atual
    return sum(arr, n - 1) + arr[n - 1];
  }
}

console.log(sum([2, 3, 4, 5], 3));

// Vamos analisar o fluxo da função sum com os valores fornecidos [2, 3, 4, 5] e n = 3:

// A função sum é chamada com arr = [2, 3, 4, 5] e n = 3.
// A condição if (n === 0) é falsa, então a chamada recursiva sum(arr, n - 1) é feita.
// A chamada recursiva é sum([2, 3, 4, 5], 2).
// Novamente, a condição if (n === 0) é falsa, então outra chamada recursiva é feita.
// A nova chamada recursiva é sum([2, 3, 4, 5], 1).
// Ainda não chegamos ao caso base, então outra chamada recursiva é feita.
// A nova chamada recursiva é sum([2, 3, 4, 5], 0).
// Agora, n === 0 é verdadeiro, então o valor 0 é retornado para a chamada anterior (sum([2, 3, 4, 5], 1)).
// Na chamada anterior, o resultado é 0 + arr[0], que é 0 + 2, resultando em 2.
// Esse valor 2 é retornado para a chamada anterior (sum([2, 3, 4, 5], 2)).
// Na chamada anterior, o resultado é 2 + arr[1], que é 2 + 3, resultando em 5.
// Esse valor 5 é retornado para a chamada original (sum([2, 3, 4, 5], 3)).
// Na chamada original, o resultado é 5 + arr[2], que é 5 + 4, resultando em 9.
// Esse valor 9 é o resultado final que é impresso no console.