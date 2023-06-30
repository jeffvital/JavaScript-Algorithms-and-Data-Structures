let haStr = "Hazzzzah";
let haRegex = /haz{4,}ah/gi;
let result = haRegex.test(haStr);

console.log(result);
