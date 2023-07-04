let myString = "Eleanor D. Roosevelt";
let myRegex = /(Eleanor|Franklin)(\sD\.)*(\s)?\sRoosevelt/gi;

let result = myRegex.test(myString);

console.log(result);
