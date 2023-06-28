let quoteSample = "The five boxing wizards jumb quickly.";
let alphabetRegexV2 = /\w/gi;
let result = quoteSample.match(alphabetRegexV2).length;

console.log(result);
