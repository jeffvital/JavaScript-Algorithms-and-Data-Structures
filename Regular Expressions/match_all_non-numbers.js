let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/gi;
let result = movieName.match(noNumRegex).length;

console.log(result);
