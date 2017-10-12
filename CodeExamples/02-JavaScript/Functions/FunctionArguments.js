console.log("\n# arguments property");

function sum() {
	var result = 0;
	for (var i = 0; i < arguments.length; i++) {
		result += arguments[i];
	}
	return result;
}

console.log(sum(1, 2, 3));          // 6
console.log(sum(1, 2, 3, 4, 5));    // 15

console.log("\n# optional arguments with formal parameter");

function add4(a, b, log) {
	var result = a + b;
	if (log) {
		console.log(result);
	}
	return result;
}

add4(5, 2, true);
add4(5, 2, false);
add4(5, 2);

console.log("\n# optional arguments without formal parameter");

function add5(a, b) {
	var result = a + b;
	if (arguments[2]) {
		console.log(result);
	}
	return result;
}

add5(5, 2);
add5(5, 2, true);
add5(5, 2, false);

console.log("\n# optional arguments with config object");

function add6(a, b, config) {
	var result = a + b;
	if (config && config.log) {
		console.log(result);
	}
	return result;
}

add6(5, 2, { log: true });
add6(5, 2, { log: false });
add6(5, 2);
