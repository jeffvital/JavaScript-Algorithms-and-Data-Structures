// 'string'.match(/regex/);
// /regex/.test('string');

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/i;

let result = extractStr.match(codingRegex);

console.log(result);