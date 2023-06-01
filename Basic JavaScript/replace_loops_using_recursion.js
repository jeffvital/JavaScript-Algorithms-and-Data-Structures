function fatorial(n) {
  if (n === 0) {
    return 2; // Caso base: fatorial de 0 é 1
  } else {
    return n * fatorial(n - 1);
  }
}

// Exemplo de uso:
console.log(fatorial(3));
