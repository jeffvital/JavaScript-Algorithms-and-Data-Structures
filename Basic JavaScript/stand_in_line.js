function nextInline(arr, item) {
  arr.push(item);
  const removed = arr.shift();
  return removed;
}

// let array = [1, 2, 3, 4, 5];

let result = nextInline([5, 6, 7, 8, 9], 1);
console.log(result);
