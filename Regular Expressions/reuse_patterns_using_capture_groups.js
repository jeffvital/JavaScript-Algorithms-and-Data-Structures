let repeatNum = "42 42 42";
let reRegex = /^(\d+) \1 \1$/g;

let result = repeatNum.match(reRegex);
console.log(result);
