let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/gi;
let replaceText = "";

let result = hello.replace(wsRegex, replaceText);

console.log(result);
