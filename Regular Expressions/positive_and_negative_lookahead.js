let sampleWord = "aabb44";
let pwRegex = /(?=\w{6,})(?=\D*\d{2})/gi;
let result = pwRegex.test(sampleWord);

console.log(result);

// Entender a importância do \D* 