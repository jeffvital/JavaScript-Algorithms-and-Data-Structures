let movieName = "2001: A Space Odyssey";
let numRegex = /\d/gi;
let result = movieName.match(numRegex).length;

console.log(result);
