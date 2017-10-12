console.log("\n# function statement");

function add(arg1, arg2) {
	return arg1 + arg2;
}

console.log(add(1, 2));				    // 3
console.log(add("Hello", "World"));	    // HelloWorld

console.log("\n# explicit type checking");

function add2(arg1, arg2) {
	if (typeof (arg1) !== "number" || typeof (arg2) !== "number") {
		throw new TypeError('Arguments of "add" must be of type "number"');
	}
	return arg1 + arg2;
}

//console.log(add2("Hello", "World"));  // TypeError

console.log("\n# function expression");

var add3 = function (arg1, arg2) {
	return arg1 + arg2;
};

console.log(add3(1, 2));		// 3

console.log("\n# assigning functions to variables");

var plus = add;
console.log(add(1, 2));         // 3
console.log(plus(1, 2));        // 3

console.log("\n# functions as return values");

function createPow(exponent) {
	return function (x) {
		var result = x;
		for (var i = 1; i < exponent; i++) {
			result *= x;
		}
		return result;
	};
}

console.log(createPow(10)(2));   // 1024
console.log(createPow(3).name);  // ""

console.log("\n# functions as function arguments");

function isEven(element, index, array) {
	return element % 2 === 0;
}

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(numbers.filter(isEven));
