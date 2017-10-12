function testScope() {
	if (true) {
		var m = 1337;
	}
	for (var i = 0; i < 1024; i++) {
		// do something
	}
	console.log(m);				// 1337
	console.log(i);				// 1024

	console.log(k);				// undefined
	var k = 5503;				// Hoisting
	console.log(k);				// 5503

	//console.log(j);			// ReferenceError

	var n = 2048;
	var innerFunction = function () {
		console.log(n);
		var innerVar = true;
	};
	innerFunction();			// 2048
	//console.log(innerVar);	// ReferenceError
}

testScope();
