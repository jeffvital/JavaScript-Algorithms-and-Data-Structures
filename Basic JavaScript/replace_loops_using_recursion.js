// function fatorial(n) {
//   if (n === 0) {
//     return 1;
//   } else {
//     return n * fatorial(n - 1);
//   }
// }

// // Exemplo de uso:
// console.log(fatorial(5));

function sum(arr, n) {
  // Caso base
  if (n === 0) {
    return 0;
  } else {
    // Chamada recursiva e soma do elemento atual
    return sum(arr, n - 1) + arr[n - 1];
  }
}

console.log(sum([2, 3, 4], 2));
