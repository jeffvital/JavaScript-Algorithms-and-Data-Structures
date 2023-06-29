let sample = "ab c";
let countNonWhiteSpace = /\S/g;
let result = sample.match(countNonWhiteSpace).length;

console.log(result);
