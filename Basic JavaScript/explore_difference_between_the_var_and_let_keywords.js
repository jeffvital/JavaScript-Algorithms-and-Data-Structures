let catName = "Oliver";
let catSound = "Meow";

// diferença entre var e let
// é que var pode sobrescrever e let não

// Por exemplo:
let myName = "Jeff";
let myName = "Jefferson";
console.log(myName);
// SyntaxError: Identifier 'myName' has already been declared

var myName = "Jeff";
var myName = "Jefferson";
console.log(myName);
// "jeff" será substituido por "Jefferson"
