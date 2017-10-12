let ReverseSortedArray = require("./ReverseSortedArray");

let sortedNames = new ReverseSortedArray(["Ross Melanie", "Hill Patsy", "Hicks Peggy", "Higgins Dixie"]).toArray();

// let first = sortedNames[0];
// let second = sortedNames[1];
// let third = sortedNames[2];

let [first, second, third] = sortedNames;
console.log(first, second, third);

let [, , , fourth, fifth] = sortedNames;
console.log(fourth, fifth);

let [, , , , , sixth = "Jane Doe"] = sortedNames;
console.log(sixth);
