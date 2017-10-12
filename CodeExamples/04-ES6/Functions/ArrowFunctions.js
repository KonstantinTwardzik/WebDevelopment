let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(numbers.filter(function (x) {
	return x % 2 === 0;
}));

console.log(numbers.filter(x => x % 2 === 0));

let returnTrue = () => true;		// No parameter, single statement
console.log(returnTrue());			// true

let pow2 = x => Math.pow(x, 2);		// One parameter, single statement
console.log(pow2(4));				// 16

let sum = (x, y) => x + y;			// Multiple parameter, single statement
console.log(sum(2, 3));				// 5

let length = (a, b) => {			// Multiple parameter, multiple statements
	let a2 = a * a;
	let b2 = b * b;
	return Math.sqrt(a2 + b2);
};
console.log(length(3, 4));			// 5
