let petString = "James has a pet cat.";
let petRegex = /change|dog|cat|bird|fish/g;

let result = petRegex.test(petString);

console.log(result);