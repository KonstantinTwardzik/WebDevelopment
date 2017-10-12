function asyncA(callback) {
	// do something long lasting, e.g. read a file, do a HTTP request or just wait for 100 milliseconds
	setTimeout(() => {
		let result = Math.random();
		if (result < 0.2) {	// something wrong happens
			callback("Result is too low.", null);
		}
		else {				// everything is fine, we're done
			callback(null, result);
		}
	}, 100);
}

asyncA((error, result) => {
	if (error) {
		console.error(error);
	}
	else {
		console.log(result);
	}
});
