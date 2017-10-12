console.log("\n# typeof operator");

var n = 1024;
console.log(typeof n);	// number

var r = 3.141;
console.log(typeof r);	// number

console.log("\n# number values");

var hex = 0xff;
console.log(hex);		// 255

var x = Number.MAX_VALUE * 2;
console.log(x);			// Infinity

var y = 1 / 0;
console.log(y);			// Infinity

var z = Math.sqrt(-1);
console.log(z);			// NaN
console.log(isNaN(z));	// true

console.log("\n# parseInt()");

console.log(parseInt(" 0xF", 16));
console.log(parseInt("F", 16));
console.log(parseInt("17", 8));
console.log(parseInt("015", 10));
console.log(parseInt(15.99, 10));
console.log(parseInt("15,123", 10));

console.log("\n# parseFloat()");

console.log(parseFloat("3.14"));
console.log(parseFloat("314e-2"));
console.log(parseFloat("0.0314E+2"));
console.log(parseFloat("3.14more non-digit characters"));
