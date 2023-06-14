function removeFirstTwo(list) {
  const [a, b, ...shorterList] = list;
  console.log(a, b);
  return shorterList;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sourceWithoutFirstTwo = removeFirstTwo(source);

console.log(sourceWithoutFirstTwo);
