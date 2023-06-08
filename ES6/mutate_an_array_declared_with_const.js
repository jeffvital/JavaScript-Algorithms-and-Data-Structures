function editInPlace(arr) {
  if (arr) {
    arr[0] = 2;
    arr[1] = 5;
    arr[2] = 7;
  }
  return arr;
}
const s = [5, 7, 2];
console.log(editInPlace(s));
