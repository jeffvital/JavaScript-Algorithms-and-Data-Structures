let quoteSample = "The five boxing wizards jumb quickly.";
let nonAlphabetRegex = /\W/gi;
let result = quoteSample.match(nonAlphabetRegex).length;

console.log(result);
