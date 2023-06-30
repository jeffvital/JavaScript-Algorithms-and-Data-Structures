let ohStr = "Ohhh no";
let ohRegex = /oh{3,6}\sno/gi;
let result = ohStr.match(ohRegex);

console.log(result);
