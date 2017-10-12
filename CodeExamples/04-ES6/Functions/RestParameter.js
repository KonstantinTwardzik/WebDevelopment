function sum(...args) {
	let result = 0;
	for (let i = 0; i < args.length; i++) {
		result += args[i];
	}
	return result;
}

console.log(sum(1, 2, 3));       	// 6
console.log(sum(1, 2, 3, 4, 5)); 	// 15

function printSum(prefix, ...args) {
	let result = 0;
	for (let i = 0; i < args.length; i++) {
		result += args[i];
	}
	console.log("%s%d", prefix, result);
}

printSum("Sum: ", 1, 2, 3, 4, 5);
