function checkSign(a, b) {
  return a < 0 ? "negative" : a == 0 ? "zero" : "positive";
}

console.log(checkSign(-2));